const mongoose=require("mongoose")

const adminSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    
},{
    versionKey:false
})

const adminModel=mongoose.model("admin",adminSchema)

module.exports={
    adminModel
}