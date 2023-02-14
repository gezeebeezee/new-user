const express= require("express");
const app = express();
app.use(express.json());
const mongoose=require("mongoose");


const mongoUrl = "mongodb+srv://cs361:cs361@authentication.mlizbdd.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(() => {console.log("Connected to database");})
.catch(e=>console.log(e));




app.listen(5000, () => {
    console.log("Server started on port 5000.")
});


app.post("/post", async(req, res) =>{
    console.log(req.body);
    const {data}=req.body;

    try {
        if (data == "Kevin") {
            res.send({ status: "ok"});
        } else {
            res.send({ status: "User not found..."});
        }
    } catch (error) {
        res.send({ status: "Something went wrong. Please try again."});
    }
});

require("./userDetails");

const User=mongoose.model("UserInfo");

app.post("/register", async(req,res) => {
    const {name, uname, email}=req.body;
    try {
        await User.create({
            name,
            uname,
            email,
        });
        res.send({status:"Ok"})
    } catch (error) {
        res.send({status:"error"})        
    }
})
