const mongoose=require('mongoose');

const contactSchema=mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    query:String
})

module.exports=new mongoose.model('contact-Info',contactSchema);