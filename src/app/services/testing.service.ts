import { Injectable } from '@angular/core';
import DataSync from './../../../libs/datasync';
import namespaces from './../../../libs/namespaces';
import { RdfService } from './rdf.service';
declare let solid: any;
let dataSync = new DataSync(solid.auth.fetch);

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  inboxUrls: any;
  opponentWebId: string = "https://josecuriosoalternativo.inrupt.net/profile/card#me";  
  myWebId: string = "https://josecurioso.inrupt.net/profile/card#me";
  

  constructor(private rdfService: RdfService) {
    this.inboxUrls = {};
  }


  //Listing friends

  async listFriends(webId: string = this.opponentWebId){
    var friends = (await this.rdfService.getFriends())    
    friends.forEach(friend => console.log(friend.value)); 
  }
  
  //Checking inbox

  async checkInbox() {
    /*
    await this.rdfService.getSession();
    let uris = await this.rdfService.getInboxContents();
    console.log(uris)
    uris.map(e => e.value).forEach(element => {
    });
    */
    await this.rdfService.getSession();
    this.rdfService.testGetMessages();
    

  }

  //Sending messages

  async sendMessage(oWId: string = this.opponentWebId, msg: string) {
    this.sendToInbox(oWId, msg);
  }

  async sendToInbox(opponentWebId: string, message: string = ""){
    var content = await this.generateContent(message);
    dataSync.sendToOpponentsInbox(this.getInboxUrl(opponentWebId), content);
  }

  async generateContent(msg: string) {
    const session = await solid.auth.currentSession();
    return `<${session.webId}> ${msg} <${namespaces.schema}Message>.`;
  }

  async getInboxUrl(webId) {
    if (!this.inboxUrls[webId]) {
      this.inboxUrls[webId] = (await this.rdfService.getInboxUrl(webId)).value;
    }
    return this.inboxUrls[webId];
  }
}
