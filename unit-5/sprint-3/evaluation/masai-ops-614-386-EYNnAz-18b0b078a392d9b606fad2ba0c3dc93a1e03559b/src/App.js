
import './App.css';
import Button from './Components/Button';
import Image from './Components/Image';
import Todos1 from './Components/Todos1';
import Todos2 from './Components/Todos2';

function App() {
const src ="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"


  return (
    <>
    <div className="todo">
     <Todos1 />
     <Todos2 />
    </div>
    <div className='compo'>
      <h1>Image</h1>
     <Image  src={src} width ={"300px"} height={"200px"} alt={"real_100_img"}/>
     <h1>Button</h1>
     <Button variant={"ghost"} size={"md"} colorScheme={"red"}/>
    </div>
    </>
  );
}

export default App;
