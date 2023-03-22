const append = (data,con) =>{
    con.innerHTML=null;
    data.forEach((el)=>{
        let div = document.createElement("div");
        let id = document.createElement("h3");
        id.innerText=el.id;
        let image = document.createElement("img");
        image.src=el.img_url;
        let caption = document.createElement("p");
        caption.innerText=`Caption: ${el.caption}`;
        div.append(id,image,caption);
        con.append(div);
    })
}

export default append;