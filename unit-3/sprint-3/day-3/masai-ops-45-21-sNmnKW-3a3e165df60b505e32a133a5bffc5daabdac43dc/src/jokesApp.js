let getJokeByCategory = async (event) => {
  let va = document.getElementById("get-category").value;
  try{
    let res = await fetch(`https://api.chucknorris.io/jokes/random?category=${va}`);
    let data = await res.json();
    setJokes(data.value);
    return data;
  }catch(err){
    return "something went wrong"
  }
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
};
window.onload = function () {
  // add click event to button
  // add change event to select tag
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}