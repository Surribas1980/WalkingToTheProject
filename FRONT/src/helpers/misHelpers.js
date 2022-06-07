import { endpoints } from '../http/endpoints';
import { method } from '../http/method';

function bucleFiles(body,files){
  for(const valor of Object.values(files?.ficheros)){
    console.log('theFormData valor: ',valor)
    body.append('ficheros',valor)
  }
  return body;
}

function bucleTaskAndDescription(body,datas){
  let countTask = 0;

  for (let i = 0; i < datas.list.length ; i++){
    if(datas.list[i].task){
      countTask++;
      body.append(`task${countTask}`,datas.list[i].task);
      body.append(`done${countTask}`,datas.list[i].done);
    }
    if(datas.list[i].description){
      body.append('description',datas.list[i].description)
    }
    if(datas.list[i].title){
      body.append('title',datas.list[i].title)
    }
  }
}

function theFormData(datas,taskAndDescription){
  const body = new FormData();
  bucleFiles(body,datas)
  if(taskAndDescription){
    bucleTaskAndDescription(body,datas);
  }

  return body;
}

let settingsFunction = (datos)=>{
    console.log(datos)
    const valores = {
        endpoint: endpoints.insertComentarioPersonalService,
        method: method.post,
        headerstype: datos
      }
  return valores;
}
export { theFormData, settingsFunction };
