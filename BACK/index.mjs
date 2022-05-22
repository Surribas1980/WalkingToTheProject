import express from "express";
import cors from "cors";

import { deleteTaskController, getOneTaskController, getAllTasksController, postTaskController, putTaskController } from "./controllers/tasksControllers.mjs";

const PATH_PREFIX = "/api/v0.0"
const app = express();
const corss = cors();
try{
  const jsonParser = express.json();

  app.use(corss);

    app.get(PATH_PREFIX+"/tasks/:id", getOneTaskController);
    app.get(PATH_PREFIX+"/tasks/", getAllTasksController);
    app.post(PATH_PREFIX+"/task/", jsonParser, postTaskController);
    app.put(PATH_PREFIX+"/task/", jsonParser, putTaskController);
    app.delete(PATH_PREFIX+"/task/",jsonParser, deleteTaskController);

  app.listen(process.env.PORT || 4000,()=>{
    console.log("Express running...")
  })
}catch(err){
  console.error(err);
}
