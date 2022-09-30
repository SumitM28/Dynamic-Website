const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({

    slider: [
        {
            sliderLable: String,
            sliderPlaceholder: String,
            sliderImage: String,
            class:String
        }
    ]

})

module.exports = new mongoose.model('sliders', sliderSchema);