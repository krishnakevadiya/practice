
const getid = (id) =>{
    return document.getElementById(`${id}`);
}

const op = () =>{
    let name = getid("name").value;
    let email = getid("email").value;
    let address = getid("address").value;
    let amount = getid("amount").value;
    let user={
        name,
        email,
        address,
        amount,
    }
    console.log(user);
    localStorage.setItem("user",JSON.stringify(user));
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementById("amount").value="";
}