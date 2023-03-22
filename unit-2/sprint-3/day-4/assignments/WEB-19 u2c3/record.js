// fill in javascript code here
// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFun);
let count=0;
function myFun(event){
    event.preventDefault();
    count++;
    let name=document.querySelector("#name").value;
    let id=document.querySelector("#employeeID").value;
    let sp=document.querySelector("#department").value;
    let ex=document.querySelector("#exp").value;
    let add=document.querySelector("#email").value;
    let mob=document.querySelector("#mbl").value;
    let row=document.createElement("tr");
    let col1=document.createElement("td");
    col1.innerText=name;
    let col2=document.createElement("td");
    col2.innerText=id
    let col3=document.createElement("td");
    col3.innerText=sp;
    let col4=document.createElement("td");
    col4.innerText=ex;
    let col5=document.createElement("td");
    col5.innerText=add;
    let col6=document.createElement("td");
    col6.innerText=mob;
    let col7=document.createElement("td");
    
    let bag="";
    if(ex>5){
        bag+="Seinor";
    }else if(ex>=2&&ex<=5){
        bag=bag+"Junior";
    }else if(ex<=1){
        bag=bag+"Fresher";
    }
    col7.innerText=bag;

    let col8=document.createElement("td");
    col8.innerText="delete";
    col8.style.backgroundColor="red";
    col8.addEventListener("click",remove);
    row.append(col1,col2,col3,col4,col5,col6,col7,col8)
    document.querySelector("tbody").append(row);
    document.querySelector("#kk").innerText=(count);

    
    

    







}
function remove(event){
    event.target.parentNode.remove();
    count--;
    document.querySelector("#kk").innerText=(count);


}


