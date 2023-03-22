document.querySelector("form").addEventListener("submit",todo)


function todo(event){
    event.preventDefault();
    let tak= document.querySelector("#task").value;
    let po=document.querySelector("#priority").value;
    console.log(tak,po);



let row=document.createElement("tr");

let td1=document.createElement("td");
td1.innerText=tak;
let td2=document.createElement("td");
td2.innerText=po;
if(po=="High"){
    td2.style.backgroundColor="red";

}else{
    td2.style.backgroundColor="green";
}
let td3=document.createElement("td");
td3.innerText="Delete";
td3.addEventListener("click",kk)
td3.style.backgroundColor="red";



row.append(td1,td2,td3);
document.querySelector("tbody").append(row);
count++;
console.log(count)
document.querySelector("#total").innerText=(count);
 
}

function kk(event){
    event.target.parentNode.remove();
    count--
    document.querySelector("#total").innerText=(count);
        
    
}

