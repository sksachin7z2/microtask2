const mongoose=require("mongoose");

const mongoURI="mongodb+srv://sksachin7z2:ramdulari123@cluster0.f01hh.mongodb.net/microtask2?authSource=admin&replicaSet=atlas-ppw553-shard-0&readPreference=primary&ssl=true"

const mongoconnect=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports={mongoconnect};