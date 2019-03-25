export class ChatMessage {

    constructor(userName, message, webId) {
        this.userName = userName;
        this.message = message;
        this.webId = webId;
    }

    uri?: string;
    userName?: string;
    webId?: string;
    message?: string;
    timeSent?: Date = new Date();
}
