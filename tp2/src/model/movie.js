const crypto = require('crypto')

class Movie{
    constructor(title,id,language, year){
        this.title=title,
        this.id = crypto.randomBytes(4).toString('hex'),
        this.language = language
        this.year = year
    }
}

module.exports = {Movie}