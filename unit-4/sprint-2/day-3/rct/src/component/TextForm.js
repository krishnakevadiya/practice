import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, SetText ] = useState("");
    // SetText("Enter The Text");
    const ctu = ()=>{
        let newtxt = text.toUpperCase();
        SetText(newtxt);
    }
    const ctl = ()=>{
        let newtxt = text.toLowerCase();
        SetText(newtxt);
    }
    const dab = (event)=>{
        SetText(event.target.value);
        // console.log(text);
    }
    const Reset = (event)=>{
        let newtxt = "";
        SetText(newtxt);
    }
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea type="text" value={text} onChange={dab} rows={10} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button className="btn btn-primary mx-2" onClick={ctu}>Convert To Uppercase</button>
  <button className="btn btn-secondary mx-2" onClick={ctl}>Convert To Lowecase</button>
  <button className="btn btn-secondary mx-2" onClick={Reset}>Reset</button>
  </div>
  <div className="container my-4">
    <h1>Your Text Summary</h1>
    <p>words: {text.split(" ").length} Characters: {text.length}</p>
    <p>Minutes To Read: {0.008*text.split(" ").length} </p>
    <h1>Preview</h1>
    <p>{text}</p>
  </div>
  </>
  )
}
