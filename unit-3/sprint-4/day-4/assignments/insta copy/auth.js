function User(n,e,p,u,m,d){
    this.name =n;
    this.email=e;
    this.password =p;
    this.username=u;
    this.mobile=m;
    this.description=d;

}



async function Register(){
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