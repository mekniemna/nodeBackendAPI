const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
var Annonce = require ('./models/annonce');


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect('mongodb://localhost:27017/database')

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-with, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PATCH, PUT');
        next();
    });

//getall
    app.get("/annonce/all",(req,res)=>{
        Annonce.find((err,docs)=>{
            if (err) { console.log('here error', err); }
            else {
                res.status(200).json({
                    annonces: docs,
                })
            }

        })
    })


module.exports = app
