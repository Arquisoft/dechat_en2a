export class Notification {

    constructor(resourceUri: string, type: string, fromWebId: string) {
        this.resourceUri = resourceUri;
        this.type = type;
        this.fromWebId = fromWebId;
    }

    resourceUri?: string;
    type?: string;
    fromWebId?: string;
}
