let data=[
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2212/1042212-h-0e83e926cfc1"},
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6530/1326530-h-f2a7e4e4e3d6"},
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6700/1026700-h-baab56827741"},
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8315/1328315-h-017b4fc66d35"},
    {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9475/1339475-h-990c355522f1"},
]
function slideshow(){
 let slid=document.querySelector(".slid");
 slid.innerHTML=null;
 let image=document.createElement("img")
 image.src=data[0].image;
 slid.append(image);
 let i=0;
 i++;
 setInterval(function(){
   if(i==data.length){
   i=0;
    
   }
   image.src=data[i].image;
   slid.append(image);
   i++;
 },3000)

 
}
slideshow();
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
  let hdata=new Promise(function(resolve,reject){
    setTimeout(function(){
      let data=mov;
      if(data!=null){
       resolve(data);
      }else{
        reject("err");
      }
      

    },3000)

  });
  hdata.then(function(res){
    console.log(res);
    append();

  })
  .catch(function(err){
    console.log(err);
  })
  

  document.getElementById("lh").addEventListener("click" ,function(){
    mov.sort(function(a,b){
      if(a.rating>b.rating){
        return 1;
      }if(a.rating<b.rating){
        return -1;
      }else{
        return 0;
      }
    })
    append();
  })
  
  document.getElementById("hl").addEventListener("click" ,function(){
    mov.sort(function(a,b){
      if(a.rating>b.rating){
        return -1;
      }if(a.rating<b.rating){
        return 1;
      }else{
        return 0;
      }
    })
    append();
  })
 async function serchmovie(){
   try {
    let tr=document.getElementById("ms").value;
  
    let rus=await fetch(`https://www.omdbapi.com/?apikey=903a510e&s=${tr}&type=movie`);
    let data = await rus.json();
    let acdata = data.Search;
    console.log(acdata);
    opop(acdata);
   } catch (error) {
    console.log(error);
   }


  }
  function opop(acdata){
    let container= document.querySelector("#disply");
    container.innerHTML=null;
    acdata.forEach(function(el){
     let dive=document.createElement("div");
     let image=document.createElement("img");
     image.src=el.Poster
     let name=document.createElement("h1");
     name.innerText=el.Title;
     let rating=document.createElement("h3");
     rating.innerText=el.Year;
     dive.append(image,name,rating);
     container.append(dive)
 
    })
 
   }
   
   async function notop(){
    try {
     let tr=document.getElementById("ms").value;
   
     let rus=await fetch(`https://www.omdbapi.com/?apikey=903a510e&s=${tr}&type=movie`);
     let data = await rus.json();
     let acdata = data.Search;
     console.log(acdata);
     opopop(acdata);
    } catch (error) {
     console.log(error);
    }
 
 
   }
   function opopop(acdata){
     let container= document.querySelector(".search");
     if(acdata===undefined){
      container.innerHTML=null;
      return false;
     }
     container.innerHTML=null;
     acdata.forEach(function(el){
      let dive=document.createElement("div");
      let image=document.createElement("img");
      image.src=el.Poster
      let div2=document.createElement("div");

      let name=document.createElement("p");
      name.innerText=el.Title;
      let rating=document.createElement("p");
      rating.innerText=el.Year;
      div2.append(name,rating)
      dive.append(image,div2);
      container.append(dive)
  
     })
  
    }
    let id;
    function debounce(notop,delay){
      if(id){
        clearTimeout(id)
      }
      id=setTimeout(function (){
       notop();

      },delay)
    }
  
    
    function User(n,e,p,u,m,d){
      this.name=n,
      this.email=e,
      this.password=p,
      this.username=u,
      this.mobile=m,
      this.description=d

    }
    function getinput(id){
      const value = document.getElementById(id).value;
      return value;
  }
  

    async function re(){
      const name = getinput('name');
      const email = getinput('email');
      const password = getinput('password');
      const username =getinput('username');
      const mobile = getinput('mobile');
      const description =getinput('description');
  
      let udata=new User(name,email,password,username,mobile,description);
      console.log(udata);
  
  
      const rurl = 'https://masai-api-mocker.herokuapp.com/auth/register'
      let res= await fetch(rurl,{
          method: 'POST',
          body: JSON.stringify(udata),
          headers:{
              'Content-Type':'application/json',
          },
      });
      let data = await res.json();
  }
  async function Login(){
    let ldata={
        username:getinput('lusername'),
        password:getinput('lpassword'),
    };
    const lurl = `https://masai-api-mocker.herokuapp.com/auth/login`;

    let res= await fetch(lurl,{
        method: 'POST',
        body: JSON.stringify(ldata),
        headers: {
            'Content-Type':'application/json',
        },
    });
    let data = await res.json();
    console.log(data);
    let token =data.token;
    getpro(ldata.username,token)
}

async function getpro(username,token){
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    let res = await fetch(api,{
        headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    let data =await res.json();
    console.log(data);
    window.location.href="loginsuccess.html"
}

  
   

  
    
