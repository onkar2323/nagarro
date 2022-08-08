var express  = require('express')
var router = express.Router()
const stripe_key = 'sk_test_51LSaecSI2xhSBFdDJpoc5nZJzGO5nUZqsr3aCJeST0fj4Iko5yE0C9YB3U9o2EZKMFrWivwM44v5Fb68FuE7P3UY00XXT183No'
const stripe = require('stripe')(stripe_key);

const app = express();
app.listen(3000);

router.post('/', async function (req,res){

    let paymentMethod = await stripe.paymentMethods.create({
        type:"card",
        card: {
            number: "4242424242424242",
            exp_month: 9,
            eexp_yeear: 2022,
            cvc: "314"
        },
    });
    
    paymentIntent = await stripe_key.paymentIntents.create({
        payment_method: paymentMethod.id,
        amount: 75*100,
        currency: "inr",
        confirm: true,
        payment_method_types: ["card"],
    });
    res.send(paymentIntent);
});



module.export = router;