export class Chat {

    constructor(chatTitle: string, chatFileUri: string, others: Array<string>) {
        this.chatFileUri = chatFileUri;
        this.others = others;
        this.chatTitle = chatTitle;
    }

    chatFileUri?: string;
    others?: Array<string>;
    isCurrent?: boolean;
    chatTitle?: string;
}
