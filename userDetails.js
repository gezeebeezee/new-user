const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    password: String,
    userName: String,
    email: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsSchema);
