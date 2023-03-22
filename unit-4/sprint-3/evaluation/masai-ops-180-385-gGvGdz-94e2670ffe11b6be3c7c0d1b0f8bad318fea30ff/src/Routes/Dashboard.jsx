import {useState,useEffect,useContext} from "react"
import Pagination from "../Components/Pagination";
import ProductList from "../Components/ProductList";
import Loader from "../Components/Loader";
import {AuthContext} from "../Context/AuthContext";

const getProducts = (page=1)=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}`)
  .then((res)=> res.json())
}

function Dashboard() {
   const {authState,logoutUser} = useContext(AuthContext)
   const [loading,setLoading] = useState(false)
   const [data,setData] = useState([])
   const [page,setPage] = useState(1)

   useEffect(()=>{
    setLoading(true)
    getProducts(page).then((res)=>{
      setLoading(false)
      setData(res)
      console.log(res)
    })
   },[page])


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination
         current={page}
         totalPage={data?.totalPage}

      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          loading ? <Loader />: <ProductList products={data && data?.data} />
        }
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;