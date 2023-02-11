const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../models/User")


router.post("/register/",async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: crypto.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    })
    try{
        const savedUser =await newUser.save();
        res.status(201).json(savedUser)
    }catch(err){res.status(500).json(err)}
});



router.post("/login/",async (req,res)=>{
    
    try{

        const user =await User.findOne({"username":req.body.username})
        !user && res.status(404).json("user does not exist! please register first.");
        const hashedPassword = crypto.AES.decrypt(user.password, process.env.PASS_SEC).toString(crypto.enc.Utf8);
        hashedPassword !== req.body.password && res.status(401).json("Invalid Credentials!");
        const {password,...others} = user._doc

        const accessToken = jwt.sign(
            {
            id: user._id,
            isActive: user.isActive,
            isAdmin: user.isAdmin
            },
            process.env.JWT_SEC,
            {expiresIn: "3d"}
        )
        res.status(200).json({...others,accessToken});

    }catch(err){res.status(401).json(err)}
})



module.exports = router