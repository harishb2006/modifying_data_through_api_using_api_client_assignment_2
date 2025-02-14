
const mongoose=require('mongoose')

const mongoosedb=()=>{

    mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("connected mongo db")
        })
        .catch((err)=>{
            console.log(err)
        })

    }

module.exports=mongoosedb;    