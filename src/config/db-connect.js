import mongoose from "mongoose"

export default async function dbConnect (){
   
    try{
      const connect  = await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDb Connected')
    }catch(error){
       console.log(error)
    }
}