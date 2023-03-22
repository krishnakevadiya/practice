import React from 'react';
import Loader from './Components/Loader';
import Pagination from './Components/Pagination';
import PrivateRoute from './Components/PrivateRoute';
import ProductItem from './Components/ProductItem';
import ProductList from './Components/ProductList';
import AllRoutes from './Routes/AllRoutes';
import Dashboard from './Routes/Dashboard';
const App = () => {
  return (
    <div>
      
      <AllRoutes/>
    </div>
  );
}

export default App;
