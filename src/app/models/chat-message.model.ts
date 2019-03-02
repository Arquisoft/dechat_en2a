export class ChatMessage {

    constructor(userName, message) {
        this.userName = userName;
        this.message = message;
    }

    $key?: string;
    userName?: string;
    message?: string;
    timeSent?: Date = new Date();
}
