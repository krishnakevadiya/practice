// display the listing cards
function displayCards(data) {
  let mainContainer = document.querySelector("#container");
  // map through the data and append each acrd to the main container
   data.forEach(ele=>{
    let div=document.createElement("div")

    let company=document.createElement("h3")
    company.innerText=ele.company


    let position=document.createElement("h2")
    position.innerText=ele.position

    let post=document.createElement("p")
    post.innerText=ele.post

    let location=document.createElement("p")
    location.innerText=ele.location;

    let role=document.createElement("p")
    role.innerText=ele.role;

    let level=document.createElement("p")
    level.innerText=ele.level;

    let lang=document.createElement("p")
    lang.innerText=ele.lang;

    div.append(company,position,post,location,role,level,lang)
    mainContainer.append(div)

   })
   return mainContainer;
   
}

// filter by role
function filterByRole(data) {
   const mf=document.getElementById("change-role");
   const q=document.getElementById("change-role").value;

   mf.addEventListener("change",function(){
    data.filter(function(ele){
      return ele.role==q
    })
   })
   displayCards(data)
  }

// search by language
function searchByLanguage() {}
window.onload = function () {
  // on load display data
  // add click and chnage events for search button and input
};

if (typeof exports !== "undefined") {
  module.exports = {
    displayCards,
    filterByRole,
    searchByLanguage,
  };
}
