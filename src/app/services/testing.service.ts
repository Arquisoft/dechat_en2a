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
  

  constructor(private rdfService: RdfService) {
    this.inboxUrls = {};
  }

  async listFriends(webId: string = this.opponentWebId){
    var friends = (await this.rdfService.getFriends())
        
    friends.forEach(friend => console.log(friend.value)); 
  }
  



  async sendMessage(oWId: string = this.opponentWebId, msg: string) {
    await this.rdfService.getContents(oWId).then(result => this.sendToInbox(oWId, msg));
  }

  async sendToInbox(opponentWebId: string, message: string = ""){
    var inboxUrl = this.getInboxUrl(opponentWebId);
    var content = await this.generateContent(message);
    dataSync.sendToOpponentsInbox(inboxUrl, content);
  }

  async generateContent(msg: string) {
    const session = await solid.auth.currentSession();
    return `<${session.webId}> ${msg} <${namespaces.schema}Message>.`;
  }

  getInboxUrl(webId) {
    if (!this.inboxUrls[webId]) {
      this.inboxUrls[webId] = this.rdfService.getValueFromLdp('inbox', webId);
    }
    return this.inboxUrls[webId];
  }
}
