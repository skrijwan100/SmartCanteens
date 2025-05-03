const express = require('express')
const router = express.Router();
const Food = require("../models/Food");
const fecthadmin = require('../middleware/fecthadmin');
const upload = require("../middleware/upload")
const cloudinary = require("../config/cloudinary");
const fs = require("fs");
const fecthuer = require('../middleware/fecthuser');
const axios = require('axios');
const crypto = require('crypto');
const querystring = require('querystring');

router.post("/addfood", upload.single("profilepic"), async (req, res) => {
    try {


        const { foodname, fooddisc, foodstock, foodprize } = JSON.parse(req.body.fooddetils);
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
            folder: "user_profiles", // Optional folder in Cloudinary
        });
        fs.unlinkSync(req.file.path);
        const imgurl = cloudinaryResponse.secure_url;

        const newproducts = new Food({
            foodname,
            foodpic: imgurl,
            fooddisc,
            foodstock,
            foodprize,
        })
        let saveproducts = await newproducts.save()
        return res.status(200).json({ saveproducts })
    } catch (error) {
        console.log(error)
        res.status(500).json({ "message": "intarnal server error." })
    }
})

router.post("/updatefood/:id", fecthadmin, async (req, res) => {
    try {
        const { foodname, fooddisc, foodstock, foodprize } = JSON.parse(req.body.fooddetils);
        const updateproduct = {}
        if (foodname) {
            updateproduct.foodname = foodname;

        }
        if (fooddisc) {
            updateproduct.fooddisc = fooddisc
        }
        if (foodstock) {
            updateproduct.foodstock = foodstock
        }
        if (foodprize) {
            updateproduct.foodprize = foodprize
        }
        let newproducts = await Food.findByIdAndUpdate(req.params.id, { $set: updateproduct }, { new: true })
        return res.status(200).json({ newproducts })



    } catch (error) {
        console.log(error)
        res.status(500).json({ "message": "intarnal server error." })

    }
})
router.delete("/deleteproduct/:id", fecthadmin, async (req, res) => {
    try {

        let food = await Food.findById(req.params.id)
        console.log(food)

    } catch (error) {
        return res.status(404).json({ "massage": "NOT FOUND" })
    }
    await Food.findByIdAndDelete(req.params.id)
    return res.status(200).json({ "massage": "suessfully delete.", "status": true })
})
router.post("/cartfood/:id", async (req, res) => {

    try {

        let food = await Food.findById(req.params.id)
        res.status(200).json({ food });



    } catch (error) {
        return res.status(500).json({ "message": "intarnal server error." })
    }
})



router.get("/getallproducts", async (req, res) => {
    try {
        let allfood = await Food.find()
        res.status(200).json({ allfood })
    } catch (error) {
        console.log(error)
        res.status(500).json({ "message": "intarnal server error." })

    }

})
router.post("/pyment", async (req, res) => {

    const { price, quantity } = req.body;
    const app_id = "YD3951";
    const secret_key = "B1rQLBAjxA17wKvihspl5MkTsHXKHSc9";
    const url = "https://www.lg-pay.com/api/order/create";

    const uid = "123456";
    const tyid = "TID001";
    const sign = "default-sign";

    let ramt = price?.toString() || "0";
    if (!ramt.includes('.')) {
        ramt = ramt + '.00';
    } else {
        const parts = ramt.split('.');
        ramt = parts[0] + '.' + parts[1].padEnd(2, '0');
    }
    const amountInPaise = parseFloat(ramt) * 100;


    const date = new Date();
    const yyyyMMdd = date.toISOString().slice(0, 10).replace(/-/g, '');
    const time = Math.floor(date.getTime() / 1000);
    const serial = `${yyyyMMdd}${time}${Math.floor(Math.random() * (999900 - 100000) + 100000)}`;

    const clientIp = "127.0.0.1";

    const data = {
        app_id,
        trade_type: "INRUPI",
        order_sn: serial,
        money: amountInPaise,
        notify_url: "https://okwinslots11.com/pay/lgwebhook.php",
        ip: clientIp,
        remark: "remark001"
    };

    function md5Sign(data, key) {
        const sortedKeys = Object.keys(data).sort();
        let baseString = '';
        sortedKeys.forEach(k => {
            baseString += `${k}=${data[k]}&`;
        });
        baseString = baseString.slice(0, -1);
        baseString = decodeURIComponent(baseString) + `&key=${key}`;
        return crypto.createHash('md5').update(baseString).digest('hex').toUpperCase();
    }

    data.sign = md5Sign(data, secret_key);

    axios.post(url, querystring.stringify(data), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => {
            const responseData = res.data;
            if (responseData.status === 1 && responseData.data?.pay_url) {
                console.log(responseData.data.pay_url);
                return res.status(200).json({ pay_url: responseData.data.pay_url });
            } else {
                console.error("❌ Payment API create order failed.");
                console.log(responseData);
            }

        })
        .catch(err => {
            console.error("❌ Error: No response from payment API.");
            console.error(err.message);
        });

})
module.exports = router;