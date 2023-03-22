let cont=[
{name:"CHHICHHORE",
 rating:9,
 img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"
},
{name:"BAAGI 3",
 rating:7,
 img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v"
},
{name:"CHHICHHORE",
 rating:9,
 img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"
},
{name:"MISSION MANGAL",
 rating:10,
 img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v"
},
{name:"MSDHONI",
 rating:9,
 img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v"
},
{name:"BadhaiHO!",
 rating:8,
 img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7309/177309-v"
},
{name:"Bhag Milkha Bhag",
 rating:7,
 img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1354/1000001354/1000001354-v"
},
{name:"2 State",
 rating:8,
 img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4502/1000034502/1000034502-v"
},
{name:"jolly LLB 2",
 rating:9,
 img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/5403/1770015403/1770015403-v"

},
];
let arr=JSON.parse(localStorage.getItem("movies"))||[];
function display(data){
    document.querySelector("#sbox").innerHTML=null;
    data.forEach(function(element,index){
        let box=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",element.img);
       

        let named=document.createElement("h2")
         named.innerText=element.name;
        let rat=document.createElement("p")
         rat.innerText=element.rating;
        
         box.append(image,named,rat);
         document.querySelector("#sbox").append(box)
    })

} 
display(cont)
document.querySelector("#sorting").addEventListener("change",sortnames);
function sortnames(){
  let selected=document.querySelector("#sorting").value;
 
        if(selected=="high to low"){
                cont.sort(function(a,b){
                    return Number(a.rating-b.rating);
                })
                display(cont)
                console.log(cont)
           
        }
        if(selected=="low to high"){
            cont.sort(function(b,a){
                return Number(b.rating-a.rating);
            })
            display(cont)
            console.log(cont)
        }
     }