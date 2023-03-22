function student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i
    this.batch=`Ft-Web${ b}`;
    
}


function storeData(event){
event.preventDefault();
let form= document.getElementById("student_data");
let name= form.name.value;
let course= form.course.value;
let unit= form.unit.value;
let image= form.image.value;
let batch= form.batch.value;
// console.log(name,course,unit,image,batch)
let s1= new student(name,course,unit,image,batch);
// console.log(s1);
let data= JSON.parse(localStorage.getItem("student"))||[]
data.push(s1);
localStorage.setItem('student',JSON.stringify(data));
calculator();
}

function calculator(){
    let data= JSON.parse(localStorage.getItem("student"))||[];
    let obj={};
    for(let i=0; i<data.length; i++){
        if(obj[data[i].batch]== undefined){
            obj[data[i].batch]=1
        }
        else{
            obj[data[i].batch]++;
        }
    }
    // console.log(obj)
    let count= document.getElementById("count");
    count.innerHTML= null;
    let div= document.createElement("div");
    for (key in obj){
        let p= document.createElement("div");
        p.innerText= `${key}-${obj[key]}`
        div.append(p);
    }
    count.append(div);
}
calculator();