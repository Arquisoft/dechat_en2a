export class User {

    constructor(username, fullName, webId) {
        this.username = username;
        this.fullName = fullName;
        this.webId = webId;
    }

    username?: string;
    fullName?: string;
    webId?: string;
}
