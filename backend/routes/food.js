const express = require('express')
const router = express.Router();
const Food= require("../models/Food");
const fecthadmin = require('../middleware/fecthadmin');
const upload = require("../middleware/upload")
const cloudinary = require("../config/cloudinary");
const fs = require("fs")


router.post("/addfood",upload.single("profilepic"),async(req,res)=>{
    try {
        

    const {foodname,fooddisc,foodstock,foodprize}=JSON.parse(req.body.fooddetils);
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
        foodpic:imgurl,
        fooddisc,
        foodstock,
        foodprize,
    })
    let saveproducts = await newproducts.save()
    return res.status(200).json({ saveproducts })
} catch (error) {
    console.log(error)
    res.status(500).json({"message":"intarnal server error."})
}
})
    
router.post("/updatefood/:id",fecthadmin,async(req,res)=>{
    try {
        const {foodname,fooddisc,foodstock,foodprize}=JSON.parse(req.body.fooddetils);
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
        res.status(500).json({"message":"intarnal server error."})

    }
})
router.delete("/deleteproduct/:id", fecthadmin, async (req, res) => {
    try {

        let food = await Food.findById(req.params.id)
        console.log(products)

    } catch (error) {
        return res.status(404).json({ "massage": "NOT FOUND" })
    }
    await Food.findByIdAndDelete(req.params.id)
    return res.status(200).json({ "massage": "suessfully delete.","status":true })
})

router.get("/getallproducts", async (req, res) => {
    try {
        let allfood = await Food.find()
        res.status(200).json({ allfood })
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"intarnal server error."})

    }

})
module.exports = router;