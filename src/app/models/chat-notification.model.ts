import { Notification } from './notification.model';

export class ChatNotification extends Notification {

    constructor(type: string, chatName: string, chatUri: string, participants: Array<string>) {
        super(type);
        this.chatUri = chatUri;
        this.participants = participants;
        this.chatName = chatName;
    }

    chatUri?: string;
    participants?: Array<string>;
    chatName?; string;
}
