const express = require("express");
const mongoose = require("mongoose");
const costumerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    comment:{
        type: String
    }
});



// now we need to create collection

const Order  = new mongoose.model("Order",costumerSchema);

module.exports = Order;
