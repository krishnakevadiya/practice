
import React,{useState} from 'react'

function App() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{Count}</h1>
      <button disabled={Count>=11} onClick={()=>setCount(Count+1)}>inc</button>
      <button disabled={Count===0} onClick={()=>setCount(Count-1)}>dec</button>
      <button onClick={()=>setCount(0)}>reset</button>
    </div>
  );
}

export default App;