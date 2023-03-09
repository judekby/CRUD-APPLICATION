const crypto = require('crypto')
class User{
    constructor(id, name, mail, favoris){
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.favoris = favoris;

    }
}

module.exports = {User}