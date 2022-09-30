const router=require('express').Router()
const bodyParser=require('body-parser');
const { render } = require('ejs');
const contactModel=require('../models/contact');
router.use(bodyParser.urlencoded({
    extended:true
}))


router.post('/process-contact-form',async (req,res)=>{
    // console.log(req.body)
    const {name,email,number,query}=req.body
    // console.log(name,email,number,query)

    await contactInfo(name,email,number,query)
    res.render('contactInfo')
})



const contactInfo=(name,email,number,query)=>{
    const info=new contactModel({
        name:name,
        email:email,
        number:number,
        query:query
    })
    info.save()
        .then(()=>console.log('contact info has been stored in db ;)'))
        .catch(err=>console.log(err))
}
module.exports=router;