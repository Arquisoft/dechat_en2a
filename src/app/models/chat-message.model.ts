export class ChatMessage {

    constructor(webId, message) {
        this.webId = webId;
        this.message = message;
    }

    $uri?: string;
    webId?: string;
    message?: string;
    timeSent?: Date = new Date();
}
