const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({

name:{
    type:String,
    required:[true,"Please enter a name"],
},

email:{
    type:String,
    required:[true,"Please enter an email id"],
    unique:[true,"email already exists"],
},
password:{
    type:String,
    required:[true,"Please enter a password"],
    minlength:[6,"password must be of 6 charaters"],
    select:false,
},
avatar: {
    public_id: String,
    url: String,
  },
posts:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
],
followers:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
],
following:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
],
})
module.exports = mongoose.model("User", userSchema);