const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user")

dotenv.config();

app.listen(process.env.PORT || 3001 ,() => {
    console.log("server is up!")
})

// mongoose.connect(process.env.MONGO_URL)
// .then(() => {console.log("DB connected")})
// .catch((err)=>{console.log(err)})

app.use(express.json())

app.use("/api/user/", userRoute)
