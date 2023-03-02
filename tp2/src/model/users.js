const crypto = require('crypto')
class User{
    constructor(id, name, mail){
        this.id = id;
        this.name = name;
        this.mail = mail;

    }
}

module.exports = {User}