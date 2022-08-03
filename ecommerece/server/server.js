const express = require('express')
const cors = reequire('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

require('dotenv').config({path: './config/index.env'});

//mongo connection

const connectDB = require('./config/db');
connectDB();

app.use(morgan('dev'));
app.use(cors());

//routes

app.use('/api/user', require('./routes/auth.route'));
app.use('./api/category', require('./routes/category.route'));
app.use('./api/product', require('./routes/product.route'));

app.get('/',(req, res)=>{
   res.send("homepage"); 
})
app.use('/',(req,res)=>{
    res.status(404).json({
        msg:"page not found"
    });
});

const PORT = process.env.PORT;
