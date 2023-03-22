import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children})=>{
    const isAuth = useSelector((store)=> store.AppReducer.isAuth);
    const location = useLocation();
    console.log(location)

  if(!isAuth){
    return <Navigate to="/login" state={{data:location.pathname}}/>;
  }
  return children;
}
export default RequireAuth;