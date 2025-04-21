const express = require('express')
const router = express.Router();
const User = require('../models/User');
const sendemail = require("../middleware/sendmail")
const upload = require("../middleware/upload")
const cloudinary = require("../config/cloudinary");
const fs = require("fs")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const fecthuer = require("../middleware/fecthuser")
let otp = null;
router.post("/sendemail", async (req, res) => {
    try {
        const { email } = req.body;
        const finduser = await User.findOne({ email })
        if (finduser) {
            return res.status(400).json({ "status": false, "message": "User already have a account." })
        }
        otp = Math.floor((Math.random() * 1000000) + 1);
        console.log(otp)
        const send = await sendemail(email, otp)
        console.log("✅ Email Response:", send);

        return res.status(200).json({ "message": "send was mail", "status": true })

    } catch (error) {
        console.log(error)
        return res.status(505).json({ "error": "Internal server error" })
    }
})
router.post("/veryfiyotp", async (req, res) => {
    try {
        const { userotp } = req.body;
        numotp = parseInt(userotp);
        if (numotp == otp) {
            return res.status(200).json({ "status": true })
        }
        return res.status(400).json({ "status": false })
    } catch (error) {
        console.log(error)
        return res.status(505).json({ "error": "Internal server error" })
    }
})
router.post("/register", upload.single("profilepic"), async (req, res) => {
    try {
        const { name, email, address, password } = JSON.parse(req.body.userDetails)
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
            folder: "user_profiles", // Optional folder in Cloudinary
        });
        fs.unlinkSync(req.file.path);
        const imgurl = cloudinaryResponse.secure_url;
        const slat = await bcrypt.genSalt(12);
        const haspass = await bcrypt.hash(password, slat);
        const newuser = await User({
            name: name,
            email: email,
            address: address,
            profilepic: imgurl,
            password: haspass
        })
        await newuser.save();
        return res.status(200).json({ "message": "You register done", "status": true })


    } catch (error) {
        console.log(error)
        return res.status(505).json({ "error": "Internal server error" })

    }

});

router.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;
        const finduser = await User.findOne({ email })
        if (!finduser) {
            return res.status(404).json({ "status": false, "message": "Email or passowrd is wrong" })
        }
        const chake_pass = await bcrypt.compare(password, finduser.password)
        if (!chake_pass) {
            return res.status(400).json({ "status": false, "message": "Email or passowrd is wrong" })
        }
        const authtoken = jwt.sign({
            user: finduser._id
        }, process.env.JWT_SERECT)
        return res.status(200).json({ "status": true, "message": "login Successful", "token": authtoken })
    } catch (error) {
        console.log(error)
        return res.status(505).json({ "error": "Internal server error" })
    }

})
router.get("/getuser", fecthuer, async (req, res) => {
    try {
        const userid = req.user;
        const userdata = await User.findById(userid).select("-password");
        return res.status(200).json({ "message": userdata })
    } catch (error) {
        console.log(error)
        return res.status(505).json({ "error": "Internal server error" })
    }
})
module.exports = router;