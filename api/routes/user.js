const router = require("express").Router();
const crypto = require("crypto-js");
const User = require("../models/User")
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken.js")

router.put("/:id/",verifyTokenAndAuthorization, async (req,res)=>{
    if (req.body.password){
        req.body.password =  crypto.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    }

    try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,
    {
        $set : req.body
    },{new: true}
)
res.status(201).json(updatedUser)}
catch(err){res.status(500).json("Did not update! "+err)}
})

module.exports = router