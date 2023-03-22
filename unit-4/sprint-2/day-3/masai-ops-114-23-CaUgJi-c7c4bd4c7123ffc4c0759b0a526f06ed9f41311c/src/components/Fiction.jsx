export default function Fiction() {
  const dta =async()=>{
    try{
      let res=await fetch("./fiction.json")
      let data=await res.json();
      return

    }catch(err){
      console.log(err)

    }

  }
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>{}</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
      </div>
    </div>
  );
}
