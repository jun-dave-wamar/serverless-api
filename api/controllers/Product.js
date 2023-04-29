const express = require("express")

const Product = require("../models/product")

//GET /products
async function getProduct(req, res){
    try{
        const product = await Product.find();
        res.status(200).json(product);

    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}

//POST /products
async function postProduct(req, res){
    try{
        const {title, category, price, properties} = req.body;

        const product = new Product({
            title,
            category,
            price,
            properties,
        });

        await product.save();
        res.status(201).json(product);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}


module.exports = { getProduct, postProduct }