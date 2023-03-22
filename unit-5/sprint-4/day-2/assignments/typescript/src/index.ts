// console.log("hello world")
let a:number=10;
let f_n:string="masai";
let s_n:string="school";
let t:string=`${f_n} ${s_n} ${a}`
let check:boolean=true;
console.log(t)
  

let n:string="krishna";
let age:number=123456;
let mm:boolean=false;

let arr:number[]=[1,2,3,4,5]
let str:string[]=["i","love","me"]

function sun(a:number,b:number):number{
    return a/b;
}
const masaiStudent: object = {
    name: "krishna",
    address: "slkjldsxx",
    open: true,
    f_name: "mm",
     age: 2,
}

type product = {
    id: number;
    p_name: string;
    price: number;
}

type cartitems = {
    id: number;
    store: string;
    products: product[]
}


let cartItems: cartitems[] = [
    {
        id:1,
        products: [{id:1, p_name: "karuna", price: 1000}],
        store: "Amazon"
    },
    {
        id:1,
        products: [{id:1, p_name: "kuku", price: 1000}, {id:2, p_name: "Shirt", price: 2000}],
        store: "Amazon"
    }
]


//functions

function sum(a: number, b: number): number{
    return a + b;
}

const printData = ({f_name, company, age}) =>{
    console.log(`${f_name} ${company} ${age}`);
    
}