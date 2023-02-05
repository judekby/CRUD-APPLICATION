const crypto = require('crypto')
class User{
    constructor(name, adress, telephone, item, id){
        this.name = name;
        this.adress = adress;
        this.telephone = telephone;
        this.item = item;
        this.id = id;

    }
}

module.exports = {User}