import { Injectable } from '@angular/core';
import DataSync from './../../../libs/datasync';
import * as Q from 'q';
//import Core from './../../../libs/core';
import namespaces from './../../../libs/namespaces';
import { fromUrl, fromString } from './../../../libs/rdfjssourcefactory';
//import uniqid from 'uniqid';
import { newEngine } from '@comunica/actor-init-sparql-rdfjs';
const rdfjsSourceFromUrl = fromUrl;



//const DataSync = require('../lib/datasync');
//const Q = require('q');
//const Core = require('../lib/core');
//const namespaces = require('./namespaces');
//const uniqid = require('uniqid');
//const rdfjsSourceFromUrl = require('./rdfjssourcefactory').fromUrl;
//const newEngine = require('@comunica/actor-init-sparql-rdfjs').newEngine;
declare let solid: any;
let dataSync = new DataSync(solid.auth.fetch);
//let core = new Core(solid.auth.fetch);

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  inboxUrls: any;
  fetch: any;
  opponentWebId: string = "https://josecuriosoalternativo.inrupt.net/profile/card#me";
  

  constructor() {
    this.inboxUrls = {};
    this.fetch = solid.auth.fetch;
  }

  async sendMessage(oWId: string = this.opponentWebId, msg: string) {
    this.sendToInbox(oWId, msg);
  }

  async sendToInbox(opponentWebId: string, message: string = ""){
    var t = await this.getInboxUrl(opponentWebId);
    await dataSync.sendToOpponentsInbox(t, (await this.generateContentTxt(message)).notification);
  }

  async generateContentTxt(msg: string) {
    const session = await solid.auth.currentSession();
    const notification = `< ${session.webId}> ${msg} <${namespaces.schema}Message>.`;

    return {
      notification
    };
  }

  async getInboxUrl(webId) {
    if (!this.inboxUrls[webId]) {
      let a:any = await this.getObjectFromPredicateForResource(webId, namespaces.ldp + 'inbox');
      this.inboxUrls[webId] = a.value;
    }

    return this.inboxUrls[webId];
  }

  async getObjectFromPredicateForResource(url, predicate) {
    const deferred = Q.defer();
    const rdfjsSource = await rdfjsSourceFromUrl(url, this.fetch);

    if (rdfjsSource) {
      const engine = newEngine();
      console.log("sdfsdfsfd")
      engine.query(`SELECT ?o {
    <${url}> <${predicate}> ?o.
  }`,
        {sources: [{type: 'rdfjsSource', value: rdfjsSource}]})
        .then((result: any) => {
          result.bindingsStream.on('data', function (data) {
            data = data.toObject();

            deferred.resolve(data['?o']);
          });

          result.bindingsStream.on('end', function () {
            deferred.resolve(null);
          });
        });
    } else {
      deferred.resolve(null);
    }

    return deferred.promise;
  }
}
