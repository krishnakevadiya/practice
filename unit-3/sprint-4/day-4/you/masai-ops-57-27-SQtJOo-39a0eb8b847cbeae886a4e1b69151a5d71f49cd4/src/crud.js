let task = document.getElementById("input").value;
document.getElementById("add-task").addEventListener("click",function(){
  createTask(task)
});

let id=1;
function createTask(task){
  let obj={
    id:id++,
    isCompleted:false,
    title:task,
  }
  let data=JSON.parse(localStorage.getItem("todo"))||[];
  data.push(obj);
  localStorage.setItem("todo",JSON.stringify(data));
}
const append=(data)=>{
  let con = document.getElementById("todo-list");
  con.innerHTML=null;
  data.forEach((el)=>{
    let div = document.createElement("div");
    let id = document.createElement("p");
    id.innerText=`ID=${el.id}`;
    let title = document.createElement("p");
    title.innerText= `Title=${el.title}`;
    let status = document.createElement("p");
    status.innerText= `Status=${el.isCompleted}`;
    div.append(id,title,status);
    con.append(div);
  })
}
let data=JSON.parse(localStorage.getItem("todo"))||[];
append(data)
function deleteTask(id){

}

function updateTask(id){
  
}


window.onload = function () {
  
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    createTask,
    deleteTask,
    updateTask
  };
}