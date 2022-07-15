const mongoose = require('mongoose');
const annonceShema= mongoose.Schema({
    title:String,
    adresse:String,
    ville:String,
    description:String,
    categorie:String,
    prix:String,
    userId:String,
    image:String,
})
const annonce=mongoose.model('annonce',annonceShema)
module.exports=annonce