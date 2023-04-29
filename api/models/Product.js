const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number, 
        required: true
    },
    properties:[{
        color:{
            type: String,
            required: true,
        },
        stock:{
            type: Number,
            required: true,
        },
        img:{
            public_id: String,
            url: String,
        }
    }],
    datecreated:{
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product