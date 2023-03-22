import navbar from './component/navbar.js';
console.log(navbar);

let navbar_div=document.getElementById("navbar");

navbar_div.innerHTML=navbar();
let mov=[
    {name:"CHHICHHORE",
     rating:9,
     img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"
    },
    {name:"BAAGI 3",
     rating:7,
     img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v"
    },
    {name:"Super 30",
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
    function append(){
     let container= document.getElementById("container");
     container.innerHTML=null;
     mov.forEach(function(el){
      let dive=document.createElement("div");
      let image=document.createElement("img");
      image.src=el.img
      let name=document.createElement("h1");
      name.innerText=el.name;
      let rating=document.createElement("h3");
      rating.innerText=el.rating;
      dive.append(image,name,rating);
      container.append(dive)
  
     })
  
    }
    append();