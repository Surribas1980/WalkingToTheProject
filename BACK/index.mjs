import express from "express";
import cors from "cors";

const PATH_PREFIX = "/api/v0.0"
const app = express();
const corss = cors();
try{
  const jsonParser = express.json();

  app.use(corss);


  app.listen(process.env.PORT || 4000,()=>{
    console.log("Express running...")
  })
}catch(err){
  console.error(err);
}
