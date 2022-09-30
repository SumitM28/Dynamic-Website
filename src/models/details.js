const mongoose = require('mongoose');

const Details = mongoose.Schema({
    brandName: String,
    brandIcon: String,
    links: [
        {
            lable: String,
            url: String

        }]

})

module.exports=new mongoose.model('details',Details);