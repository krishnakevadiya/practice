function storeImage(){
    let url=document.getElementById("url").value;
   
    let imges=JSON.parse(localStorage.getItem("images"))||[]
    imges.push(url);
    // img is  puah in arr
    localStorage.setItem("images",JSON.stringify(imges))
    // set in local storeage
}
