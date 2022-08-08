const express = require('express')
var indexrouter = require('./routes/index');

const app = express()

app.use(express.json())
app.use('/', indexrouter)

app.listen(3000);

module.exports = app



/* {
    "email": "test@gmail.com",
    "name": "onkar setia"
    
} */


    /* {
        "customer_Id": "cus_MBiOzzXWhoqc4k",
        "card_Name": "onkar setia",
        "card_ExpYear": 2022,
        "card_ExpMonth": 12,
        "card_Number": "4242424242424242",
        "card_CVC": "314"
    } */

/* 
    {
        "card": "card_1LTKqpSI2xhSBFdDdUfTT76Y"
    } */


/* {
    "customer_Id": "cus_MBiOzzXWhoqc4k",
    "card_ID": "card_1LTKyESI2xhSBFdDFthgbtzv"
} */