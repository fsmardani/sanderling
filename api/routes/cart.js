const router = require("express").Router();

router.get("/getUser/",(req,res)=>{
    res.send("success!")
})

module.exports = router