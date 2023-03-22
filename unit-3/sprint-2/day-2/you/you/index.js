let mov=[
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
function appendMovies(mov){
  let data_div= document.getElementById("basic");
  data_div.innerHTML=null;
  data_div.id="mov";

  mov.forEach(function(el){
      let div= document.createElement("div");
      div.id= "container"
      let p_name= document.createElement("p");
      p_name.innerHTML=`Name: ${el.name}`;
      let p_rating= document.createElement("p");
      p_rating.innerHTML= `Rating: ${el.rating}`;
      let img= document.createElement("img");
      img.id= `poster`;
      img.src= el.img;
      div.append(img,p_name,p_rating);
      data_div.append(div);
  })
}




setTimeout(()=>{
  appendMovies(mov)
},3000)
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



