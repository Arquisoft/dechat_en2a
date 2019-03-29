export class ChatMessage {

    constructor(userName: string, message: string, webId: string, other: string = 'none') {
        this.userName = userName;
        this.message = message;
        this.webId = webId;
        this.other = other;
    }

    uri?: string;
    userName?: string;
    webId?: string;
    message?: string;
    timeSent?: Date = new Date();
    other?: string;
}
