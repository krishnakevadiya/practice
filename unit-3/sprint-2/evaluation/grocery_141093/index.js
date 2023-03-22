// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items

  
async function Api(){
    try{
        res=await fetch(`https://grocery-mock-api.herokuapp.com/items`)
        let data=await res.json();
        let actual_data =data.data;
        console.log(actual_data)
        appendmovies(actual_data)
    }  
 
     catch(err){
        console.log(err)
     }
 
    }
    Api();
 function appendmovies(data){
     let data_div=document.getElementById("items");
     data_div.innerHTML=null;
     let length=document.getElementById("item_count");
 
     data.forEach(function(el){
         let div=document.createElement("div");
 
         let image=document.createElement("img");
         image.src=el.image;
         
 
         let price=document.createElement("p");
         price.innerHTML=el.price;
 
         let name=document.createElement("p");
         name.innerHTML=el.name;
         
         let btne=document.createElement("button");
          btne.innerText="add to cart";
          btne.addEventListener("click",function(){
          let obj=new creat(el.image,el.name,el.price);
          Set.push(obj);
          localStorage.setItem("items",JSON.stringify(Set))
    })

 
         div.append(image,name,price,btne);
         document.getElementById("items").append(div)
     })
 }