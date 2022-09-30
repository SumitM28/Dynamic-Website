const mongoose=require('mongoose');

const aboutModel=mongoose.Schema({
    aboutImage:String,
    aboutDetails:String
})

module.exports=new mongoose.model('about',aboutModel);