// function slideShow(){

// }
// slideShow()


async function serchMovies(){
   try{   

    let qurry=document.getElementById("qurry").value;
   

 let res= await fetch(`http://www.omdbapi.com/?apikey=aefccabb&s=${qurry}`)
    let data=await res.json();
    let actual_data=data.Search;
    appendmovies(actual_data);
    console.log('data:',data);
}
catch(err) {
    console.log('err:',err);

    }
       
}
function appendmovies(data){
    let data_div=document.getElementById("movie");
    data_div.innerHTML=null;

    data.forEach(function(el){
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.Poster;
        img.id="poster"

        let rating=document.createElement("p");
        rating.innerHTML=el.Year;

        let name=document.createElement("p");
        name.innerHTML=el.Title;

        div.append(img,name,rating);
        data_div.append(div);
    })
}