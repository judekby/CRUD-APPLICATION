const crypto = require('crypto')

class Movie{
    constructor(id,title,language, year){
        this.id = id,
        this.title=title,
        this.language = language
        this.year = year
    }
}

module.exports = {Movie};