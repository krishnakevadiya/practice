import "./styles.css";

export default function App() {
  
    const userDetails={
        Image:
        "https://images.unsplash.com/photo-1665326523639-1b770f5ddae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
        roundad:true,
        name:"cha",
        hidename:true}

       let a=userDetails.roundade===true?"50%" :"1rem";
       console.log(a)
      return(
        <>
        <img
        styles={{borderRadious:a}}
        src={userDetails.Image}
        alt={userDetails.name}
        />
        <h1>{userDetails.hidename===true?userDetails.name:"kam"}</h1>
        </>


)
  

}
