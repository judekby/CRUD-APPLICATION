class User{
    constructor(nom, prenom, adresse, telephone, item){
        this.nom = nom;
        this.adresse = adresse;
        this.telephone = telephone;
        this.watch_list = [item]
    }
}

class Item{
    constructor(titre,genre, date_sortie){
        this.titre = titre;
        this.genre = genre;
        this.date_sortie = date_sortie;
    }
}
module.exports = {User, Item}