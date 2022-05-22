import express from "express";

const PATH_PREFIX = "/api/v0.0"
const app = express();

try{
  const jsonParser = express.json();

  app.listen(process.env.PORT || 4000,()=>{
    console.log("Express running...")
  })
}catch(err){
  console.error(err);
}
