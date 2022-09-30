const mongoose=require('mongoose');

const servicesScheme=mongoose.Schema({
    services:[{
        icon:String,
        title:String,
        subtitle:String,
        checkLink:String,
        supportLink:String

    }]
})

module.exports= new mongoose.model('services',servicesScheme);