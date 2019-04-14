import { Chat } from './chat.model';
import { User } from './user.model';

export class ChatMessage {

    constructor(userName: string, message: string, webId: string, maker: User, chat: Chat = null) {
        this.userName = userName;
        this.message = message;
        this.webId = webId;
        this.chat = chat;
        this.maker = maker;
    }

    uri?: string;
    userName?: string;
    webId?: string;
    message?: string;
    timeSent?: Date = new Date();
    chat?: Chat;
    maker?: User;
}
