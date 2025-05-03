const express = require('express')
const router = express.Router();
const Food = require("../models/Food");
const Order = require("../models/Order")
const fecthadmin = require('../middleware/fecthadmin');
const fecthuser = require("../middleware/fecthuser")
const upload = require("../middleware/upload")
const cloudinary = require("../config/cloudinary");
const fs = require("fs")
const Razorpay = require('razorpay');
const razorpay=new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

router.post("/create-order", async (req, res) => {
    try {
      const { amount, currency = 'INR', receipt = 'receipt#1' } = req.body;
      console.log(amount);
  
      const options = {
        amount: amount * 100, // Razorpay expects amount in paise
        currency,
        receipt,
      };
  
      const order = await razorpay.orders.create(options);
      res.json({
        status: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
      });
  
    } catch (error) {
      console.error('Order creation failed:', error);
      res.status(500).json({ status: false, error: 'Failed to create order' });
    }
  });

router.post("/addorder", fecthuser, async (req, res) => {
    try {
        const { orderfood, quantity } = req.body;
        let productfind = await Food.findOne({ pname: products })
        if (!productfind) {
            return res.status(404).json({ "message": "Product NOT FOUND", "status": false });
        }
        let totalAmount = 0;
        totalAmount += quantity * Number.parseInt(productfind.ppize)
        console.log(totalAmount)
        const neworder = await Order({
            orderfood,
            totalAmount,
            quantity,
            user: req.user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ "message": "intarnal server error." })
    }
})

router.post("/fecthorder", fecthuser, async (req, res) => {
    try {
        let oneorder = await Order.findOne({ user: req.user })
        if (oneorder == null) {
            return res.status(404).json({ "massage": "No order found", "status": false })
        }
        let allorder = await Order.find({ user: req.user })

        return res.status(200).json({ allorder })
    } catch (error) {
        console.log(error)
        res.status(500).json({ "message": "intarnal server error." })
    }

})

router.post("/allorder".fecthadmin, async (req, res) => {

    try {
        let allorder = await Order.find()
        res.status(200).json({ "order": allorder, "status": true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ "message": "intarnal server error." })
    }

})
router.delete("/deleteproduct/:id", fecthadmin, async (req, res) => {
    try {

        let orderfood = await Order.findById(req.params.id)
        console.log(orderfood)

    } catch (error) {
        return res.status(404).json({ "massage": "NOT FOUND" })
    }
    await Order.findByIdAndDelete(req.params.id)
    return res.status(200).json({ "massage": "suessfully delete.","status":true })
})
module.exports = router;