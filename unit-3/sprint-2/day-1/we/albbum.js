let id;
function Start(){
    
let images=JSON.parse(localStorage.getItem("images"));

let container=document.getElementById("container")
container.innerHTML=null;
let i=0;
let img=document.createElement("img")


 img.src=images[0];
 container.append(img);
 i++;

 id=setInterval(function(){
    if(i===3){
        i=0;
    }
 img.src=images[i]
 container.append(img)
 i++;
},100);


}
function Stop(){
    clearInterval(id)

}