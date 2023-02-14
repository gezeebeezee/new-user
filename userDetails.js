const mongoose=require("mongoose")

const UserDetailsSchema= new mongoose.Schema(
    {
        name:String,
        uname:String,
        email:String,
    }, {
        collection:"UserInfo",
    });

mongoose.model("UserInfo", UserDetailsSchema);
