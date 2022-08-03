const express = require('express');
const router = express.Router()

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const {
    check,
    validationResult
} = require(express - validator);
const gravatar = require('gravatar');

const auth = require('../middleware/auth');


const user = require('../models/user');
router.get('/', auth, async(req,res)=>{
    try{
        const user = await user.findById(req.user, id).select('password')
        res.json(user)
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("server error");
    }
})

router.post('./register',
    [check('name',"Name is Required").not.isempty(),
        check('email', 'include a valid email').isemail(),
        check('password','password mandator')]
        , const {name,email,password} = req.body;
        )