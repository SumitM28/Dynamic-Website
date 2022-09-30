// all the main routes
const routes=require('express').Router();

// import the model
const Details=require('../models/details');
const Slider=require('../models/slider')
const Services=require('../models/services');
const About=require('../models/about')
routes.get('/',async(req,res)=>{
    const navbar=await Details.findOne({"_id":"633179fd18ed61500caebce2"});
    const slider=await Slider.findOne({"_id":"6331a59835614ccc12cf6801"});
    const services=await Services.findOne({"_id":"633206167c183486f6da7c37"});
    const about=await About.findOne({"_id":"63334b1629ea69f389d3a60e"});
    res.render('index',{
        navbar:navbar,
        slider:slider,
        services:services.services,
        about:about
    });
    // console.log(about)
})


module.exports=routes;