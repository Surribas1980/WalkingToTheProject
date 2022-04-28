let direccionesImagenes = [
  'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_960_720.jpg',
];

export function getDireccionesImagenes() {
  return direccionesImagenes;
}

let dirVistoError = [
  'https://cdn.pixabay.com/photo/2021/02/18/09/20/icon-6026642_960_720.png',
  'https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png',
  'https://cdn.pixabay.com/photo/2021/02/18/09/20/icon-6026642_960_720.png',
];

export function getDirVistoError() {
  return dirVistoError;
}

let servicios = [
  {
    titulo:"titulo 1",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"juan",
    solutioned:true,
    id:0,
    tasks:{
      task1 : "Primera tarea",
      task : "Segunda tarea"
    }
  },
  {
    titulo:"titulo 2",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"pepe",
    solutioned:true,
    id:1,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea" 
    }
      
    
  },
  {
    titulo:"titulo 3",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"mariano",
    solutioned:false,
    id:2,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea" 
    }
  },
  {
    titulo:"titulo 4",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"alex",
    solutioned:true,
    id:3,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea" 
    }
  },
  {
    titulo:"titulo 5",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"maria",
    solutioned:false,
    id:4,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea" 
    }
  },
  {
    titulo:"titulo 6",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"jacinta",
    solutioned:false,
    id:5,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea" 
    }
  },
  {
    titulo:"titulo 7",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"laura",
    solutioned:false,
    id:6,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea" 
    }
  },
  {
    titulo:"titulo 8",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"marisa",
    solutioned:false,
    id:7,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea" 
    }
  },
  {
    titulo:"titulo 9",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"juanita",
    solutioned:true,
    id:8,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea" 
    }
  },
  {
    titulo:"titulo 10",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"alejandra",
    solutioned:true,
    id:9,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea" 
    }
  }
];

export function getAllServices(){
  return servicios;
}
