import express from "express";
import fs from "fs";
import cors from "cors";
import fileUpload from "express-fileupload";
/**/

const PATH_PREFIX = "/api/v0.0"
const app = express();
const corss = cors();
try{
  const jsonParser = express.json();

  app.use(corss);
  app.use(fileUpload({createParentPath: true}));
  app.post('/user/writeService/',(request,res)=>{
    console.log('servicios...',request.body,request.files);

    res.sendStatus(200)
  });
  app.post('/user/service/solution/:id',(request,res)=>{
    const { id } = request.params;
    console.log('solucion...',request.body,request.files,id);

    res.sendStatus(200)
  })
  app.post('/users/insert/comentario/colective/service/:id',jsonParser,(request,res)=>{
    const { id } = request.params;
    console.log('comentario colectivo...',request.body,id);

    res.sendStatus(200)
  })
  app.post('/users/insert/comentario/personal/service/:id',jsonParser,(request,res)=>{
    const {id} = request.params;
    console.log('comentario personal...',request.body,id);

    res.sendStatus(200)
  })



  app.listen(process.env.PORT || 4000,()=>{
    console.log("Express running...")
  })
}catch(err){
  console.error(err);
}
