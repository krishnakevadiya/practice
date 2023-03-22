import './App.css';
import Navbar from './component/Navbar.js';
import About from './component/About.js';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container">
      <TextForm heading="Enter the text"/>
      <About/>
    </div>
    </>
  );
}

export default App;
