import LoadingIndicator from './LoadingIndicator'
import React from 'react'
import RestaurantCard from './RestaurantCard'
import Pagination from './Pagination'

const fetchData = (page) => {

  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)

    .then((res) => res.json())


}

function Restaurants() {

  const [loading, setLoading] = React.useState(false)

  const [arr, setArr] = React.useState([])

  const[page, setPage]=React.useState(1)
 



  React.useEffect(() => {
    getData(page)


  }, [page])

  const getData = async (page) => {
    try {

      setLoading(true)
      const data = await fetchData(page)
      setArr(data.data)
      setLoading(false)
    }
    catch {
      setLoading(false)
    }
  }

if(loading){
  return <LoadingIndicator/>
}

  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>

      <div data-testid="restaurants-container">

        {

          arr && arr.map((el) => <RestaurantCard

           key={el.id} 

          name={el.name}
            type={el.type}
            image={el.image}
            rating={el.rating}
            number_of_votes={el.number_of_votes}
            price_starts_from={el.price_starts_from}
          />)

        }

      </div>

      <div>


       <Pagination current={page} total={10} onChange={(value) => setPage(value)} />
       
      </div>
    </div>
  );
}

export default Restaurants;