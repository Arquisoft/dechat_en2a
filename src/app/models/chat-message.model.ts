export class ChatMessage {

    constructor(userName, message) {
        this.userName = userName;
        this.message = message;
    }

    $uri?: string;
    userName?: string;
    webId?: string;
    message?: string;
    timeSent?: Date = new Date();
}
