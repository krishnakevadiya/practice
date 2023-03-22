import { useEffect,useState } from "react";


const useDarkMode = () => {
    const [isDarkMode, setmode] = useState(false);
    const toggleDarkMode = () =>{
        if(isDarkMode !==true){
            localStorage.setItem("mode",true);
            setmode(true);
        }else{
            localStorage.setItem("mode",false);
            setmode(false);
        }
    }
    useEffect(() => {
      const mode = localStorage.getItem("mode");
      if(mode){
        setmode(mode);
      }
    
    }, [])
    return [
        isDarkMode,
        toggleDarkMode
    ];
    
};

export default useDarkMode;
