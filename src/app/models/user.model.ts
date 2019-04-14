export class User {

    constructor(username, fullName, webId, photoUrl) {
        this.username = username;
        this.fullName = fullName;
        this.webId = webId;
        this.photoUrl = photoUrl;
    }

    username?: string;
    fullName?: string;
    webId?: string;
    photoUrl?: string;
    isCurrent?: boolean;
}
