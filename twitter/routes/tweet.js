const express = require('express');
var router = express.Router();

const db = require('../config/dbconfig');
const orderby  = require('lodash/orderby');

router.post("/add",(request, response)=>{
    const options = {
        table: tweets,
        records: [request. body]
    };
    db.insert(options,(err,res)=>{
        if(err){
            response.status(500).send({error: err});
        }
        else{
            console.log(res);
            response.send({result: "Tweet Added Successfuully"});
        }
    })
})

router.get("/getall",(request, response)=>{
    const options = {
        table: tweets,
        searchchatattribute : "userhandle",
        searchvalue: "*",
        attributes:["*"]
    };
    db.searchbyvalue(options,(err,res)=>{
        if(err){
            response.status(500).send({error: err});
        }
        else{
            console.log(res);
            const tweetdata = res.data;
            
            response.send({result: "Tweet Added Successfuully"});
        }
    })
})