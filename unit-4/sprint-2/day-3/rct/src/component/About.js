
import React,{useState} from 'react'

export default function About() {
  const [Mystyle , SetMystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });
  const [btntext , Setbtntext] = useState("Dark Mode Enable");
  const [btnstyle , Setbtnstyle] = useState("btn btn-dark my-4");

  const themetoggle = ()=>{
    if(Mystyle.color === "black"){
      SetMystyle(
        {
          color: 'White',
          backgroundColor: 'Black',
        }
      )
      Setbtntext("Light Mode Enable");
      Setbtnstyle("btn btn-light my-4");
      
    }else{
      SetMystyle({
        color: 'black',
        backgroundColor: 'white',
      });
      Setbtnstyle("btn btn-dark my-4");
      Setbtntext("Dark Mode Enable"); 

    }
    
  }

  return (
    <div className="container" style={Mystyle}>
      <h1 className='mx=2'>About Us</h1>
    <div className="accordion" id="accordionExample" style={Mystyle}>
  <div className="accordion-item" style={Mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button style={Mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={Mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button style={Mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={Mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button style={Mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button onClick={themetoggle} className={btnstyle}>{btntext}</button>
</div>
  )
}
