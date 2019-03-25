import { Injectable } from '@angular/core';
import { SolidSession } from '../models/solid-session.model';
import { ChatMessage } from '../models/chat-message.model';
import { Notification } from '../models/notification.model';
import { ChatService } from '../services/chat.service';
import * as fileClient from 'solid-file-client';
declare let solid: any;
declare let $rdf: any;

// TODO: Remove any UI interaction from this service
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NamedNode, uri } from 'src/assets/types/rdflib';
import { stringify } from '@angular/core/src/util';
import { e } from '@angular/core/src/render3';

const VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
const LDP = $rdf.Namespace('http://www.w3.org/ns/ldp#');
const FLOW = $rdf.Namespace('http://www.w3.org/2005/01/wf/flow#');
const SIOC = $rdf.Namespace('http://rdfs.org/sioc/ns#');
const MEE = $rdf.Namespace('http://www.w3.org/ns/pim/meeting#');
const TERMS = $rdf.Namespace('http://purl.org/dc/terms/');
const RDFSYN = $rdf.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const ICAL = $rdf.Namespace('http://www.w3.org/2002/12/cal/ical#');
const UI = $rdf.Namespace('http://www.w3.org/ns/ui#');
const DCEL = $rdf.Namespace('http://purl.org/dc/elements/1.1/');
const NONE = $rdf.Namespace('http://example.org/ns/none#');
const ACL = $rdf.Namespace('http://www.w3.org/ns/auth/acl#');
const PL = $rdf.Namespace('http://www.w3.org/ns/iana/media-types/text/plain#');

// Maintain log of checked notification
const alreadychecked = [];
/**
 * A service layer for RDF data manipulation using rdflib.js
 * @see https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
 */
@Injectable({
  providedIn: 'root',
})
export class RdfService {

  session: SolidSession;
  store = $rdf.graph();

  /**
   * A helper object that connects to the web, loads data, and saves it back. More powerful than using a simple
   * store object.
   * When you have a fetcher, then you also can ask the query engine to go fetch new linked data automatically
   * as your query makes its way across the web.
   * @see http://linkeddata.github.io/rdflib.js/doc/Fetcher.html
   */
  fetcher = $rdf.Fetcher;

  /**
   * The UpdateManager allows you to send small changes to the server to “patch” the data as your user changes data in
   * real time. It also allows you to subscribe to changes other people make to the same file, keeping track of
   * upstream and downstream changes, and signaling any conflict between them.
   * @see http://linkeddata.github.io/rdflib.js/doc/UpdateManager.html
   */
  updateManager = $rdf.UpdateManager;

  constructor(private toastr: ToastrService) {
    const fetcherOptions = {};
    this.fetcher = new $rdf.Fetcher(this.store, fetcherOptions);
    this.updateManager = new $rdf.UpdateManager(this.store);
    this.getSession();
  }

  /**
   * Fetches the session from Solid, and store results in localStorage
   */
  getSession = async () => {
    this.session = await solid.auth.currentSession(localStorage);
  }

  /**
   * Gets a node that matches the specified pattern using the VCARD onthology
   *
   * any() can take a subject and a predicate to find Any one person identified by the webId
   * that matches against the node/predicated
   *
   * @param {string} node VCARD predicate to apply to the $rdf.any()
   * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
   * @return {string} The value of the fetched node or an emtpty string
   * @see https://github.com/solid/solid-tutorial-rdflib.js
   */
  getValueFromVcard = (node: string, webId?: string): string | any => {
    return this.getValueFromNamespace(node, VCARD, webId);
  }

  /**
   * Gets a node that matches the specified pattern using the FOAF onthology
   * @param {string} node FOAF predicate to apply to the $rdf.any()
   * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
   * @return {string} The value of the fetched node or an emtpty string
   */
  getValueFromFoaf = (node: string, webId?: string) => {
    return this.getValueFromNamespace(node, FOAF, webId);
  }

  /**
   * Gets a node that matches the specified pattern using the LDP onthology
   * @param {string} node LDP predicate to apply to the $rdf.any()
   * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
   * @return {string} The value of the fetched node or an emtpty string
   */
  getValueFromLdp = (node: string, webId?: string) => {
    return this.getValueFromNamespace(node, LDP, webId);
  }

  transformDataForm = (form: NgForm, me: any, doc: any) => {
    const insertions = [];
    const deletions = [];
    const fields = Object.keys(form.value);
    const oldProfileData = JSON.parse(localStorage.getItem('oldProfileData')) || {};

    // We need to split out into three code paths here:
    // 1. There is an old value and a new value. This is the update path
    // 2. There is no old value and a new value. This is the insert path
    // 3. There is an old value and no new value. Ths is the delete path
    // These are separate codepaths because the system needs to know what to do in each case
    fields.map(field => {

      const predicate = VCARD(this.getFieldName(field));
      const subject = this.getUriForField(field, me);
      const why = doc;

      const fieldValue = this.getFieldValue(form, field);
      const oldFieldValue = this.getOldFieldValue(field, oldProfileData);

      // if there's no existing home phone number or email address, we need to add one, then add the link for hasTelephone or hasEmail
      if (!oldFieldValue && fieldValue && (field === 'phone' || field === 'email')) {
        this.addNewLinkedField(field, insertions, predicate, fieldValue, why, me);
      } else {

        // Add a value to be updated
        if (oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
          deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
          insertions.push($rdf.st(subject, predicate, fieldValue, why));

          // Add a value to be deleted
        } else if (oldProfileData[field] && !form.value[field] && !form.controls[field].pristine) {
          deletions.push($rdf.st(subject, predicate, oldFieldValue, why));

          // Add a value to be inserted
        } else if (!oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
          insertions.push($rdf.st(subject, predicate, fieldValue, why));
        }
      }
    });

    return {
      insertions: insertions,
      deletions: deletions
    };
  }

  private addNewLinkedField(field, insertions, predicate, fieldValue, why, me: any) {
    // Generate a new ID. This id can be anything but needs to be unique.
    const newId = field + ':' + Date.now();

    // Get a new subject, using the new ID
    const newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);

    // Set new predicate, based on email or phone fields
    const newPredicate = field === 'phone' ? $rdf.sym(VCARD('hasTelephone')) : $rdf.sym(VCARD('hasEmail'));

    // Add new phone or email to the pod
    insertions.push($rdf.st(newSubject, predicate, fieldValue, why));

    // Set the type (defaults to Home/Personal for now) and insert it into the pod as well
    // Todo: Make this dynamic
    const type = field === 'phone' ? $rdf.literal('Home') : $rdf.literal('Personal');
    insertions.push($rdf.st(newSubject, VCARD('type'), type, why));

    // Add a link in #me to the email/phone number (by id)
    insertions.push($rdf.st(me, newPredicate, newSubject, why));
  }

  private getUriForField(field, me): string {
    let uriString: string;
    let uri: any;

    switch (field) {
      case 'phone':
        uriString = this.getValueFromVcard('hasTelephone');
        if (uriString) {
          uri = $rdf.sym(uriString);
        }
        break;
      case 'email':
        uriString = this.getValueFromVcard('hasEmail');
        if (uriString) {
          uri = $rdf.sym(uriString);
        }
        break;
      default:
        uri = me;
        break;
    }

    return uri;
  }

  /**
   * Extracts the value of a field of a NgForm and converts it to a $rdf.NamedNode
   * @param {NgForm} form
   * @param {string} field The name of the field that is going to be extracted from the form
   * @return {RdfNamedNode}
   */
  private getFieldValue(form: NgForm, field: string): any {
    let fieldValue: any;

    if (!form.value[field]) {
      return;
    }

    switch (field) {
      case 'phone':
        fieldValue = $rdf.sym('tel:+' + form.value[field]);
        break;
      case 'email':
        fieldValue = $rdf.sym('mailto:' + form.value[field]);
        break;
      default:
        fieldValue = form.value[field];
        break;
    }

    return fieldValue;
  }

  private getOldFieldValue(field, oldProfile): any {
    let oldValue: any;

    if (!oldProfile || !oldProfile[field]) {
      return;
    }

    switch (field) {
      case 'phone':
        oldValue = $rdf.sym('tel:+' + oldProfile[field]);
        break;
      case 'email':
        oldValue = $rdf.sym('mailto:' + oldProfile[field]);
        break;
      default:
        oldValue = oldProfile[field];
        break;
    }

    return oldValue;
  }

  private getFieldName(field): string {
    switch (field) {
      case 'company':
        return 'organization-name';
      case 'phone':
      case 'email':
        return 'value';
      default:
        return field;
    }
  }

  updateProfile = async (form: NgForm) => {
    const me = $rdf.sym(this.session.webId);
    const doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
    const data = this.transformDataForm(form, me, doc);

    // Update existing values
    if (data.insertions.length > 0 || data.deletions.length > 0) {
      this.updateManager.update(data.deletions, data.insertions, (response, success, message) => {
        if (success) {
          this.toastr.success('Your Solid profile has been successfully updated', 'Success!');
          form.form.markAsPristine();
          form.form.markAsTouched();
        } else {
          this.toastr.error('Message: ' + message, 'An error has occurred');
        }
      });
    }
  }

  getAddress = () => {
    const linkedUri = this.getValueFromVcard('hasAddress');

    if (linkedUri) {
      return {
        locality: this.getValueFromVcard('locality', linkedUri),
        country_name: this.getValueFromVcard('country-name', linkedUri),
        region: this.getValueFromVcard('region', linkedUri),
        street: this.getValueFromVcard('street-address', linkedUri),
      };
    }

    return {};
  }

  // Function to get email. This returns only the first email, which is temporary
  getEmail = () => {
    const linkedUri = this.getValueFromVcard('hasEmail');

    if (linkedUri) {
      return this.getValueFromVcard('value', linkedUri).split('mailto:')[1];
    }

    return '';
  }

  // Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
  getPhone = () => {
    const linkedUri = this.getValueFromVcard('hasTelephone');

    if (linkedUri) {
      return this.getValueFromVcard('value', linkedUri).split('tel:+')[1];
    }
  }

  getProfile = async () => {

    if (!this.session) {
      await this.getSession();
    }

    try {
      await this.fetcher.load(this.session.webId);

      return {
        fn: this.getValueFromVcard('fn'),
        company: this.getValueFromVcard('organization-name'),
        phone: this.getPhone(),
        role: this.getValueFromVcard('role'),
        image: this.getValueFromVcard('hasPhoto'),
        address: this.getAddress(),
        email: this.getEmail(),
      };
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  }

  /**
   * Gets any resource that matches the node, using the provided Namespace
   * @param {string} node The name of the predicate to be applied using the provided Namespace
   * @param {$rdf.namespace} namespace The RDF Namespace
   * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
   */
  private getValueFromNamespace(node: string, namespace: any, webId?: string): string | any {
    const store = this.store.any($rdf.sym(webId || this.session.webId), namespace(node));
    if (store) {
      return store.value;
    }
    return '';
  }


  //  //  //  //  //  //  //   //   //  //
  //  //  //  //  //  //  //   //   //  //
  // NEW METHODS ADDED BELOW THIS POINT //
  //  //  //  //  //  //  //   //   //  //
  //  //  //  //  //  //  //   //   //  //

  /**
  * Returns an array of NamedNode objects matching the term in a uri
  * @param {any} term term to look for in the document
  * @param {string} uri uri where you want to look (defaults to your webId)
  * @return {Promise<Array<NamedNode>>} A promise cntaining the array of NamedNode objects
  */
  async getArray(term: any, uri: string = this.session.webId): Promise<Array<NamedNode>> {
    try {
      const d = this.store.sym(uri);
      await this.fetcher.load(d.doc());
      return this.store.each(d, term);

    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  }

  /**
  * Returns a NamedNode object matching the term in a uri
  * @param {any} term term to look for in the document
  * @param {string} uri uri where you want to look (defaults to your webId)
  * @return {Promise<NamedNode>} A promise cntaining the NamedNode object
  */
  async getSingle(term: any, uri: string = this.session.webId): Promise<NamedNode> {
    const d = this.store.sym(uri);
    await this.fetcher.load(d.doc());
    return this.store.any(d, term);
  }

  /**
  * Returns an array of NamedNode objects of your friends
  * @param {string} uri webId where you want to look (defaults to your webId)
  * @return {Promise<Array<NamedNode>>} A promise cntaining the array of NamedNode objects
  */
  async getFriends(uri: string = this.session.webId): Promise<Array<NamedNode>> {
    return this.getArray(FOAF('knows'), uri);
  }

  /**
  * Returns a NamedNode object containing the name of a webId
  * @param {string} uri webId where you want to look (defaults to your webId)
  * @return {Promise<Array<NamedNode>>} A promise cntaining the NamedNode object
  */
  async getName(uri: string = this.session.webId): Promise<NamedNode> {
    return this.getSingle(VCARD('fn'), uri);
  }

  /**
  * Returns a NamedNode object containing the url of the inbox of a webId
  * @param {string} webId webId where you want to look (defaults to your webId)
  * @return {Promise<Array<NamedNode>>} A promise cntaining the NamedNode object
  */
  async getInboxUrl(webId: string = this.session.webId): Promise<NamedNode> {
    return this.getSingle(LDP('inbox'), webId);
  }

  /**
  * Returns an array of NamedNode objects with the contents of the inbox
  * @param {string} webId webId where you want to look (defaults to your webId)
  * @return {Promise<Array<NamedNode>>} A promise cntaining the array of NamedNode objects
  */
  async getInboxContents(webId: string = this.session.webId): Promise<Array<NamedNode>> {
    return this.getArray(LDP('contains'), (await this.getInboxUrl(webId)).value);
  }

  /**
   * Gets all the message uris for a chat.ttl file
   * @param {string} year Year
   * @param {string} month Month
   * @param {string} day Day
   * @param {string} chatUri The uri of the root folder for the chat
   * @return {string} The uri of the chat.ttl file
   */
  getChatFileUriForDate(year: string, month: string, day: string, chatUri: string) {
    return chatUri + '/' + year + '/' + month + '/' + day + '/' + 'chat.ttl';
  }

  /**
   * Gets all the message uris for a chat.ttl file
   * @param {string} chatFileUri The uri of the chat.ttl file
   * @param {string} chatUri The uri of the root folder for the chat
   * @return {Promise<Array<NamedNode>>} NamedNode objects containing the uris of each message
   */
  async getMessageUrisForFile(chatFileUri: string, chatUri: string): Promise<Array<NamedNode>> {
    const d = this.store.sym(chatFileUri);
    await this.fetcher.load(d.doc());
    const indexUri = chatUri + '/index.ttl#this';
    const indexd = this.store.sym(indexUri);
    const messagesIdsList = (await this.store.match(indexd, FLOW('message'), null, d.doc())).map(e => e.object);
    return messagesIdsList;
  }

  /**
  * Gets the maker of a given message
  * @param {string} msgUri The uri of the message
  * @param {string} chatFileUri The uri of the chat.ttl file
  * @return {string} webId of the maker
  */
  async getMessageMaker(msgUri: string, chatFileUri: string) {
    const subject = this.store.sym(msgUri);
    const chatFile = this.store.sym(chatFileUri);
    await this.fetcher.load(chatFile.doc(), {force: true, clearPreviousData: true});
    const msgMaker = await this.store.match(subject, FOAF('maker'), null, chatFile.doc());
    return msgMaker[0].object.value;
  }

  /**
  * Gets the date of a given message
  * @param {string} msgUri The uri of the message
  * @param {string} chatFileUri The uri of the chat.ttl file
  * @return {Date} date the message was sent
  */
  async getMessageDate(msgUri: string, chatFileUri: string) {
    const subject = this.store.sym(msgUri);
    const chatFile = this.store.sym(chatFileUri);
    await this.fetcher.load(chatFile.doc());
    const msgDate = await this.store.match(subject, TERMS('created'), null, chatFile.doc());
    return new Date(msgDate[0].object.value);
  }

  /**
  * Gets the content of a given message.
  * @param {string} msgUri The uri of the message
  * @param {string} chatFileUri The uri of the chat.ttl file
  * @return {string} content of the messahge
  */
  async getMessageContent(msgUri: string, chatFileUri: string) {
    const subject = this.store.sym(msgUri);
    const chatFile = this.store.sym(chatFileUri);
    await this.fetcher.load(chatFile.doc());
    const msgContent = await this.store.match(subject, SIOC('content'), null, chatFile.doc());
    return msgContent[0].object.value;
  }

  /**
  * Returns the uri of the chat channel used for a conversation between two webids
  * @param {string} myWebId My webId
  * @param {string} otherWebId The webId of the other person
  * @return {Promise<string>} Promise resolving to the uri of the chanel
  */
  async getChannelUri(myWebId: string, otherWebId: string): Promise<string> {
    const d = this.store.sym(myWebId.replace('#me', ''));
    await this.fetcher.load(d.doc());
    const other = this.store.sym(otherWebId);
    const coinc = await this.store.match(null, MEE('LongChat'), other, d.doc());
    return coinc[0].subject.value;
  }

  /**
  * Adds the new message to the given chat file
  * @param {string} chatFileUri uri of the chat file where we want to append the message
  * @param {ChatMessage} message Chat message we want to append
  * @return {Promise<string>} Promise resolving to the uri of the message
  */
  async appendMessage(chatFileUri: string, message: ChatMessage) {
    const msgUri = this.buildMsgUri(chatFileUri, message.timeSent);
    const indexUri = chatFileUri.split('/').slice(0, 5).join('/') + '/index.ttl#this';
    const msgUriSym = this.store.sym(msgUri);
    const indexUriSym = this.store.sym(indexUri);

    const ins = [];

    const cFile = this.store.sym(chatFileUri);
    this.fetcher.load(cFile.doc());
    ins.push($rdf.st(msgUriSym, TERMS('created'), message.timeSent, cFile.doc()));
    ins.push($rdf.st(msgUriSym, SIOC('content'), message.message, cFile.doc()));
    ins.push($rdf.st(msgUriSym, FOAF('maker'), this.store.sym(message.webId), cFile.doc()));

    ins.push($rdf.st(indexUriSym, FLOW('message'), msgUriSym, cFile.doc()));


    this.updateManager.update([], ins, (uri, ok, msg, response) => {
      if (ok) {
        console.log('Message sent');
      } else {
        console.log(msg, response);
      }
    });

    const chatFolder = chatFileUri.split('/').slice(0, 5).join('/') + '/';

    this.sendNotifNewMessage(message.other, chatFolder, msgUri);
    return msgUri;
  }

  /**
  * Removes the specified message from the given chat file
  * @param {string} chatFileUri uri of the chat file from which we want to delete the message
  * @param {ChatMessage} message Chat message we want to delete
  * @return {Promise}
  */
  async deleteMessage(chatFileUri: string, message: ChatMessage) {
    const msgUri = message.uri;
    const indexUri = chatFileUri.split('/').slice(0, 5).join('/') + '/index.ttl#this';
    const msgUriSym = this.store.sym(msgUri);
    const indexUriSym = this.store.sym(indexUri);

    const cFile = this.store.sym(chatFileUri);
    this.fetcher.load(cFile.doc());
    const dels = this.store.statementsMatching(msgUriSym, null, null, cFile.doc());

    this.store.statementsMatching(indexUriSym, null, msgUriSym, cFile.doc()).forEach(element => {
      dels.push(element);
    });

    this.updateManager.update(dels, [], (uri, ok, msg, response) => {
      if (ok) {
        console.log('Message deleted: ' + message.message + ' (' + message.timeSent + ')');
      } else {
        console.log(msg, response);
      }
    });
  }

  /**
   * Builds the URI of the message from the URI of its chat and the sent date
   * @param {string} chatFileUri uri of the chat to which the message belongs
   * @param {Date} timeSent Date in which the message was sent
   * @return {string} the uri of the message
   */
  buildMsgUri(chatFileUri: string, timeSent: Date) {
    const msgUri = chatFileUri + '#Msg' + timeSent.getTime();
    return msgUri.substring(0, msgUri.length - 3);
  }

  /**
  * Adds a listener to a file for when it changes
  * @param {string} chatFileUri the uri of the resource we want to listen to
  * @param {function} callback function to call onUpdate
  */
  async addListener(chatFileUri: string, callback: any) {
    const cFile = this.store.sym(chatFileUri);
    this.updateManager.addDownstreamChangeListener(cFile.doc(), callback);
  }

  /**
  * Adds a user to your friends list
  * @param {string} addWebId the webId of the friend you want to add
  */
  async addFriend(addWebId: string) {
    await this.getSession();
    const card = this.store.sym(this.session.webId.replace('#me', ''));
    const me = this.store.sym(this.session.webId);
    const newFriend = this.store.sym(addWebId);
    await this.fetcher.load(newFriend.doc());

    const checks = await this.store.match(null, null, FOAF('PersonalProfileDocument'), newFriend.doc());


    if (checks.length > 0 && addWebId !== '') {
      try {
        const ins = $rdf.st(me, FOAF('knows'), newFriend, card.doc());

        this.updateManager.update([], ins, (uri, ok, message, response) => {
          if (ok) {
            console.log('Friend added');
          } else {
            console.log(message, response);
          }
        });
      } catch {
        throw new Error('Not a valid profile URI');
      }
    } else {
      throw new Error('Not a valid profile URI');
    }
  }

  /**
  * Creates a new chat folder and its index, also adds the info on the user's card
  * @param {string} myWebId the webId of the user creating the chat
  * @param {string} otherWebId the other person webId
  * @param {string} chatFolder folder to contain the chat data
  */
  async createNewChat(myWebId: string, otherWebId: string, chatFolder: string) {
    const indexFileUri = chatFolder + '/index.ttl';
    const pId = 'id' + (+new Date);

    const pIdUriSym = this.store.sym(indexFileUri + '#pId' + pId);
    const thisUriSym = this.store.sym(indexFileUri + '#this');
    const sPrefUriSym = this.store.sym(indexFileUri + '#SharedPreferences');
    const meUriSym = this.store.sym(myWebId);
    const otherUiSym = this.store.sym(otherWebId);

    const currDate = new Date();

    const ins = [];

    const indexFile = this.store.sym(indexFileUri);
    const myCardFile = this.store.sym(myWebId.replace('#me', ''));
    const chatFolderFile = this.store.sym(chatFolder);
    this.fetcher.load(myCardFile.doc());


    ins.push($rdf.st(pIdUriSym, ICAL('dtstart'), currDate, indexFile.doc()));
    ins.push($rdf.st(pIdUriSym, FLOW('participant'), meUriSym, indexFile.doc()));
    ins.push($rdf.st(pIdUriSym, FLOW('participant'), otherUiSym, indexFile.doc()));
    ins.push($rdf.st(pIdUriSym, UI('backgroundColor'), '#f0d3e3', indexFile.doc()));

    ins.push($rdf.st(thisUriSym, RDFSYN('type'), MEE('LongChat'), indexFile.doc()));
    ins.push($rdf.st(thisUriSym, DCEL('author'), meUriSym, indexFile.doc()));
    ins.push($rdf.st(thisUriSym, DCEL('created'), currDate, indexFile.doc()));
    ins.push($rdf.st(thisUriSym, DCEL('title'), 'Chat Channel', indexFile.doc()));
    ins.push($rdf.st(thisUriSym, FLOW('participation'), pIdUriSym, indexFile.doc()));
    ins.push($rdf.st(thisUriSym, UI('sharedPreferences'), sPrefUriSym, indexFile.doc()));


    await this.updateManager.put(indexFile.doc(), ins, 'text/turtle', (uri, ok, message, response) => {
      if (ok) {
        console.log(`File [${this.urlLogFilter(uri)}] PUT with message [${message}].`);
      } else {
        console.error(`File [${this.urlLogFilter(uri)}] failed PUT with message [${message}].`);
      }
    });

    const cardNote = $rdf.st(chatFolderFile, MEE('LongChat'), otherUiSym, myCardFile.doc());

    await this.updateManager.update([], cardNote, (uri, ok, message, response) => {
      if (ok) {
        console.log(`Reference set on card [${this.urlLogFilter(uri)}] UPDATED with message [${message}].`);
      } else {
        console.log(`Reference set on card [${this.urlLogFilter(uri)}] failed UPDATE with message [${message}].`);
      }
    });

    this.sendNotifNewConv(otherWebId, chatFolder);  // Commented to avoid spamming the other person while testing
  }

  /**
  * Creates the chat file only if it doesn't exist
  * @param {string} uri the uri of the chat file
  */
  async createChatFileForDay(uri: string) {
    const chatDayFile = this.store.sym(uri);
    const chatFolder = uri.replace('/chat.ttl', '');
    const chatDayFolder = this.store.sym(chatFolder);
    await this.fetcher.load(chatDayFolder.doc());
    const matches = await this.store.match(chatDayFolder, LDP('contains'), null, chatDayFolder.doc());

    if (matches.length === 0) {
      console.log(`    Chat file [${this.urlLogFilter(uri)}] in folder [${this.urlLogFilter(chatFolder)}] NOT FOUND, creating it...`);
      await this.updateManager.put(chatDayFile.doc(), '', 'text/turtle', function (o, s, c) { });
      console.log(`    Chat file [${this.urlLogFilter(uri)}] in folder [${this.urlLogFilter(chatFolder)}] CREATED`);
    } else {
      console.log(`    Chat file [${this.urlLogFilter(uri)}] in folder [${this.urlLogFilter(chatFolder)}] FOUND, skipping creation`);
    }
  }

  /**
  * Creates the folder structure
  * @param {string} uri the uri of the chat file that needs the structure
  */
  async createStructure(uri: string) {
    console.log('Creating folder structure');
    const splitted = uri.split('/');
    for (let i = 4; i > 0; i--) {
      const newUri = splitted.slice(0, splitted.length - i).join('/');
      console.log(`    Creating folder [${this.urlLogFilter(newUri)}]`);
      await fileClient.createFolder(newUri);
    }
    console.log('Folder structure done, proceeding with chat file.');
    await this.createChatFileForDay(uri);
  }

  /**
  * Formats the uris for the console output, removing unnecesary parts
  * @param {string} uri uri that needs formatting
  */
  urlLogFilter(url: string) {
    return url.replace('https://josecuriosoalternativo.inrupt.net', '').replace('https://josecurioso.solid.community', '');
  }

  /**
   * Sends a notification to the webId's inbox informing of the newly created chat
   * @param {string} webId webId of the other person
   * @param {string} chatFolderUri URI of the folder containing the chat
   */
  async sendNotifNewConv(webId: string, chatFolderUri: string) {
    const inboxUrl = (await this.getInboxUrl(webId)).value;
    const notiFile = this.store.sym(inboxUrl + 'dechatnotifications.ttl');

    const chatFolderFile = this.store.sym(chatFolderUri);
    const meWebIdFile = this.store.sym(webId);

    const ins = [];

    ins.push($rdf.st(meWebIdFile, MEE('LongChat'), chatFolderFile, notiFile.doc()));

    this.pushNotification(inboxUrl, ins);

  }

  /**
   * Sends a notification to the webId's inbox about a new message being received
   * @param {string} webId webId of the other person
   * @param {string} chatFolderUri URI of the folder containing the chat
   * @param {string} messageUri URI of the message the wbId is being notified of
   */
  async sendNotifNewMessage(webId: string, chatFolderUri: string, messageUri: string) {
    const inboxUrl = (await this.getInboxUrl(webId)).value;
    const notiFile = this.store.sym(inboxUrl + 'dechatnotifications.ttl');
    const messageUriFile = this.store.sym(messageUri);
    const chatFolderFile = this.store.sym(chatFolderUri);

    const ins = [];

    ins.push($rdf.st(chatFolderFile, NONE('NewMessage'), messageUriFile, notiFile.doc()));

    this.pushNotification(inboxUrl, ins);
  }
  /**
   * Pushes a given notification to the given user with the given content
   * @param {inboxUrl} chatUri Uri of the inbox of the recipient
   * @param {Array<any>} ins The inserts to be made
   */
  async pushNotification(inboxUrl: string, ins: Array<any>) {
    const notiUri = inboxUrl + 'dechatnotifications.ttl';

    const notiFile = this.store.sym(notiUri);
    const inboxFolder = this.store.sym(inboxUrl);


    solid.auth.fetch(inboxUrl, {
      method: 'POST',
      body: ins[0]
    });

    /*
    console.log(`    File [${this.urlLogFilter(notiUri)}] in folder [${this.urlLogFilter(inboxUrl)}] NOT FOUND, creating it...`);
      await this.updateManager.put(notiFile.doc(), ins, 'text/turtle', function (o, s, c) { });
      console.log(`    File [${this.urlLogFilter(notiUri)}] in folder [${this.urlLogFilter(inboxUrl)}] CREATED`);
    */


    /*
    await this.fetcher.load(inboxFolder.doc());
    const matches = await this.store.match(inboxFolder, LDP('contains'), notiFile, inboxFolder.doc());

    if (matches.length === 0) {
      console.log(`    File [${this.urlLogFilter(notiUri)}] in folder [${this.urlLogFilter(inboxUrl)}] NOT FOUND, creating it...`);
      await this.updateManager.put(notiFile.doc(), '', 'text/turtle', function (o, s, c) { });
      console.log(`    File [${this.urlLogFilter(notiUri)}] in folder [${this.urlLogFilter(inboxUrl)}] CREATED`);
    } else {
      console.log(`    File [${this.urlLogFilter(notiUri)}] in folder [${this.urlLogFilter(inboxUrl)}] FOUND, updating it...`);
    }
    await this.fetcher.load(notiFile.doc());
    await this.updateManager.update([], ins, (uri, ok, message, response) => {
      if (ok) {
        console.log(`    File [${this.urlLogFilter(notiUri)}] in folder [${this.urlLogFilter(inboxUrl)}]` +
                        ` UPDATED with message [${message}].`);
      } else {
        console.log(`    File [${this.urlLogFilter(notiUri)}] in folder [${this.urlLogFilter(inboxUrl)}]` +
                        ` FAILED UPDATED with message [${message}].`);
      }
    });
    */
  }

  /**  WARNING: UNTESTED
   * Sets the edit permissions on a given URI for a given WebId
   * @param {string} resourceUri the URI of the resource we want to grant permissions of
   * @param {string} webId the user that is getting access rights
   */
  async setPermissions(resourceUri: string, webId: string) {
    const aclUri = resourceUri + '.acl';
    const aclFile = this.store.sym(aclUri);
    const file = this.store.sym(resourceUri);
    const webIdFile = this.store.sym(webId);

    const ins = [];

    ins.push($rdf.st(webIdFile, RDFSYN('type'), ACL('Authorization'), aclFile.doc()));
    ins.push($rdf.st(webIdFile, ACL('agent'), webIdFile, aclFile.doc()));
    ins.push($rdf.st(webIdFile, ACL('accessTo'), file, aclFile.doc()));
    ins.push($rdf.st(webIdFile, ACL('mode'), ACL('Read'), aclFile.doc()));
    ins.push($rdf.st(webIdFile, ACL('mode'), ACL('Write'), aclFile.doc()));


    await this.updateManager.put(aclFile.doc(), ins, 'text/turtle', function (o, s, c) { });
    await this.fetcher.load(aclFile.doc());
    await this.updateManager.update([], ins, (uri, ok, message, response) => {
      if (ok) {
        console.log(`    File [${this.urlLogFilter(resourceUri)}] has permissions [${this.urlLogFilter(aclUri)}]` +
                        ` CREATED with message [${message}].`);
      } else {
        console.log(`    File [${this.urlLogFilter(resourceUri)}] has permissions [${this.urlLogFilter(aclUri)}]` +
                        ` FAILED CREATION with message [${message}].`);
      }
    });

  }

  /**
   * Checks the inbox for notifications, processes them and returns them to the chat service using the given callback
   * @param {string} webId The webIf of the owner of the inbox of intrest (usually the logged in user)
   * @param {function} callback The callback function in chatservice that we have to call whenever we find and interesting notification
   */
  async checkInbox(webId: string, caller: ChatService) {
    console.log('Checking inbox...');
    console.log(webId);
    const inboxUri = await this.getInboxUrl(webId);
    const inboxUriSym = this.store.sym(inboxUri);

    const processed: Array<Notification> = [];
    await this.fetcher.load(inboxUriSym.doc(), {force: true, clearPreviousData: true});
    const contentUris = (await this.store.match(null, RDFSYN('type'), PL('Resource'), inboxUriSym.doc())).map(e => e.subject);
    console.log(`    Elements found: ${contentUris.length}`);
    await contentUris.forEach(async element => {
      if (alreadychecked.indexOf(element) === -1) {
        console.log(`    Checking: ${element}`);
        this.processNotification(element).then(result => {
          if (result.type !== 'none') {
            processed.push(result);
            this.deleteNotification(element).then(end => {
              caller.callbackForNotificationProcessing(result);
            });
          } else {
            alreadychecked.push(element); // Only save on checked the ones we have not deleted.
          }
        });
      }
    });
    console.log(`    All ${contentUris.length} elements checked`);
  }

  /**
   * This method parses the text and processes the contents returning a Notification object containing the information
   * @param {string} notificationUri URI of the notification we want to process
   * @return {Notification} The Notification extracted from the URI
   */
  async processNotification(notificationUri: string): Promise<Notification> {
    console.log(`    Processing: ${notificationUri}`);
    let notification: Notification;

    await this.store.fetcher.webOperation('GET', notificationUri).then(async res => {
      if (res.status === 404) {
      } else {
        const body = res.responseText;
        const doc = $rdf.sym(notificationUri);
        try {
          await $rdf.parse(body, this.store, doc.uri, 'text/turtle');
          let content = await this.store.match(null, NONE('NewMessage'), null, doc.doc());
          if (content.length > 0) {
            notification = new Notification(content[0].subject.value, 'NewMessage', content[0].object.value);
          } else {
            content = await this.store.match(null, MEE('LongChat'), null, doc.doc());
            if (content.length > 0) {
              notification = new Notification(content[0].subject.value, 'LongChat', content[0].object.value);
            } else {
              notification = new Notification('error', 'none', 'error');
            }
          }
        } catch (error) {
          notification = new Notification('error', 'none', 'error');
          console.log(`    Unable to parse: ${notificationUri}`);
        }
      }
    });
    return notification;
  }

  /**
   * This method deletes a notification once it has been consumed.
   * @param {string} notificationUri URI of the notification we want to delete.
   */
  async deleteNotification(notificationUri: string) {
    console.log(`    Deleting: ${notificationUri}`);
    await this.store.fetcher.webOperation('DELETE', notificationUri)
                      .then(e => {
                        console.log(`    Deleted: ${notificationUri}`);
                      });
  }

  async addChatToCard(myWebId: string, otherWebId: string, chatFolder: string) {
    const myCardFile = this.store.sym(myWebId.replace('#me', '#'));
    const chatFolderFile = this.store.sym(chatFolder);
    const otherWebIdFile = this.store.sym(otherWebId);

    this.fetcher.load(myCardFile.doc(), {force: true, clearPreviousData: true});

    const cardNote = $rdf.st(chatFolderFile, MEE('LongChat'), otherWebIdFile, myCardFile.doc());

    await this.updateManager.update([], cardNote, (uri, ok, message, response) => {
      if (ok) {
        console.log(`Reference set on card [${this.urlLogFilter(uri)}] UPDATED with message [${message}].`);
      } else {
        console.log(`Reference set on card [${this.urlLogFilter(uri)}] failed UPDATE with message [${message}].`);
      }
    });

  }

}
