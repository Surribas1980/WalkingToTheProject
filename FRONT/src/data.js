let direccionesImagenes = [
  'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_960_720.jpg',
];

let dirVistoError = [
  'https://cdn.pixabay.com/photo/2021/02/18/09/20/icon-6026642_960_720.png',
  'https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png',
  'https://cdn.pixabay.com/photo/2021/02/18/09/20/icon-6026642_960_720.png',
];

let misServicios = [
  {
    titulo:"titulo 1",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:true,
    id:0,
    tasks:{
      task1 : "Primera tarea",
      task : "Segunda tarea"
    },
    files:{},
    conversation: true,
    solution:{
      file1: "doc1.docx",
    }
  },
  {
    titulo:"titulo 2",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:true,
    id:1,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx"
    },
    conversation: true,
    solution:{
      file1: "doc1.docx",
      file2: "doc1.xlsx",
      file3: "doc1.pptx"
    }
  },
  {
    titulo:"titulo 3",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:false,
    id:2,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    },
    conversation: false,
    solution:{}
  },
  {
    titulo:"titulo 4",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:true,
    id:3,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{},
    conversation: true,
    solution:{
      file1: "doc1.docx",
      file2: "doc1.xlsx"
    }
  },
  {
    titulo:"titulo 5",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:false,
    id:4,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx"
    },
    conversation: false,
  },
  {
    titulo:"titulo 6",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:false,
    id:5,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    },
    conversation: false,
  },
  {
    titulo:"titulo 7",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:false,
    id:6,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx",
      pptx: "documento0.pptx"
    },
    conversation: true,
  },
  {
    titulo:"titulo 8",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:false,
    id:7,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{},
    conversation: false,
  },
  {
    titulo:"titulo 9",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:true,
    id:8,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    },
    conversation: true,
    solution:{
      file1: "doc1.docx",
      file2: "doc1.xlsx",
      file3: "doc1.pptx"
    }
  },
  {
    titulo:"titulo 10",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"logeado",
    solved:true,
    id:9,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{},
    conversation:false,
    solution:{
      file1: "doc1.xlsx",
      file2: "doc1.pptx"
    }
  }
];

let servicios = [
  {
    titulo:"titulo 1",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"juan",
    solved:true,
    id:0,
    tasks:{
      task1 : "Primera tarea",
      task : "Segunda tarea"
    },
    files:{},
    conversation: true,
    solution:{
      file1: "doc1.docx",
    }
  },
  {
    titulo:"titulo 2",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"pepe",
    solved:true,
    id:1,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx"
    },
    conversation: true,
    solution:{
      file1: "doc1.docx",
      file2: "doc1.xlsx",
      file3: "doc1.pptx"
    }
  },
  {
    titulo:"titulo 3",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"mariano",
    solved:false,
    id:2,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    },
    conversation: false,
    solution:{}
  },
  {
    titulo:"titulo 4",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"alex",
    solved:true,
    id:3,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{},
    conversation: true,
    solution:{
      file1: "doc1.docx",
      file2: "doc1.xlsx"
    }
  },
  {
    titulo:"titulo 5",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"maria",
    solved:false,
    id:4,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx"
    },
    conversation: false,
  },
  {
    titulo:"titulo 6",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"jacinta",
    solved:false,
    id:5,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    },
    conversation: false,
  },
  {
    titulo:"titulo 7",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"laura",
    solved:false,
    id:6,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx",
      pptx: "documento0.pptx"
    },
    conversation: true,
  },
  {
    titulo:"titulo 8",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"marisa",
    solved:false,
    id:7,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{},
    conversation: false,
  },
  {
    titulo:"titulo 9",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"juanita",
    solved:true,
    id:8,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    },
    conversation: true,
    solution:{
      file1: "doc1.docx",
      file2: "doc1.xlsx",
      file3: "doc1.pptx"
    }
  },
  {
    titulo:"titulo 10",
    descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
    usuario:"alejandra",
    solved:true,
    id:9,
    tasks:{
      task1: "Primera tarea",
      task2: "Segunda tarea",
      task3: "Tercera tarea",
      task4: "Cuarta tarea",
      task5: "Quinta tarea"
    },
    files:{},
    conversation:false,
    solution:{
      file1: "doc1.xlsx",
      file2: "doc1.pptx"
    }
  }
];

let conversacionesServicioId = [
  {
  titulo:"titulo 1",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"juan",
  id:0,
  conversation: true,
  visto: false
},
{
  titulo:"titulo 2",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"pepe",
  solved:true,
  id:0,
  conversation: true,
  visto: false
},
{
  titulo:"titulo 3",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"mariano",
  solved:false,
  id:2,
  conversation: true,
  visto: false
},
{
  titulo:"titulo 4",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"alex",
  solved:true,
  id:2,
  conversation: true,
  visto: false
},
{
  titulo:"titulo 5",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"maria",
  solved:false,
  id:4,
  conversation: true,
  visto: false
},
{
  titulo:"titulo 6",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"jacinta",
  solved:false,
  id:5,
  conversation: true,
  visto: false
},
{
  titulo:"titulo 7",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"laura",
  solved:false,
  id:5,
  conversation: true,
  visto: false
},
{
  titulo:"titulo 8",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"marisa",
  solved:false,
  id:7,
  conversation: true,
  visto: false
},
{
  titulo:"titulo 9",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"juanita",
  solved:true,
  id:7,
  conversation: true,
  visto: false
},
{
  titulo:"titulo 10",
  descripcion:"xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx",
  usuario:"alejandra",
  solved:true,
  id:7,
  conversation: true,
  visto: false
}]

let personalConversationsId = [
  {
    idbbdd:1,
    id:2,
    usuario:"logeado",
    usuarioDeConversacion: "mariano",
    respuesta: "xxxxx dddddd rrrrr yyyyy hhhhh uuuuuu"
  },
  {
    idbbdd:2,
    id:2,
    usuario:"logeado",
    usuarioDeConversacion: "mariano",
    respuesta: "xxxxx dddddd rrrrr yyyyy hhhhh uuuuuu"
  },
  {
    idbbdd:3,
    id:2,
    usuario:"logeado",
    usuarioDeConversacion: "mariano",
    respuesta: "xxxxx dddddd rrrrr yyyyy hhhhh uuuuuu"
  },
  {
    idbbdd:4,
    id:4,
    usuario:"logeado",
    usuarioDeConversacion: "maria",
    respuesta: "xxxxx dddddd rrrrr yyyyy hhhhh uuuuuu"
  },
  {
    idbbdd:5,
    id:4,
    usuario:"logeado",
    usuarioDeConversacion: "maria",
    respuesta: "xxxxx dddddd rrrrr yyyyy hhhhh uuuuuu"
  },
  {
    idbbdd:6,
    id:5,
    usuario:"logeado",
    usuarioDeConversacion: "jacinta",
    respuesta: "xxxxx dddddd rrrrr yyyyy hhhhh uuuuuu"
  },
  {
    idbbdd:7,
    id:5,
    usuario:"logeado",
    usuarioDeConversacion: "jacinta",
    respuesta: "xxxxx dddddd rrrrr yyyyy hhhhh uuuuuu"
  },
]
let posiblesSolucionadores = [
  {
    usuario: "juan",
    numservicio: 2,
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    }
  },
  {
    usuario: "francisco",
    numservicio: 2,
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    }
  },
  {
    usuario: "alex",
    numservicio: 2,
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    }
  },
  {
    usuario: "juanillo",
    numservicio: 3,
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    }
  },
  {
    usuario: "noel",
    numservicio: 3,
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    }
  },
  {
    usuario: "diego",
    numservicio: 4,
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    }
  },
  {
    usuario: "xexus",
    numservicio: 5,
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    }
  },
  {
    usuario: "diego",
    numservicio: 5,
    files:{
      docx: "documento0.docx",
      xlsx: "documento1.xlsx",
      pptx: "documento0.pptx"
    }
  },

]

export function getPersonalConversationsId(){
  return personalConversationsId;
}

export function getConversacionesServicioId(){
  return conversacionesServicioId;
}

export function getDirVistoError() {
  return dirVistoError;
}

export function getDireccionesImagenes() {
  return direccionesImagenes;
}

export function getAllServices(){
  return servicios;
}

export function myServices(){
  return misServicios;
}

export function myPossiblePersonSolved(){
  return posiblesSolucionadores;
}
