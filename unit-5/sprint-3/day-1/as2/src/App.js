import useFetch from "./customHook/useFetch";
import "./styles.css";

export default function App() {
  const { loading, error, data } = useFetch(
    `https://api.github.com/search/users?q=${"masia"}`
  );
  console.log(error);
  return (
    <div className="App">
      <h1>REACT-CUSTOMHOOKS - USEFETCH()</h1>
      {loading
        ? "loading..."
        : data.map((each) => (
            <div key={each.id}>
              <h1>{each.login}</h1>
              <img src={each.avatar_url} alt={each.avatar_url + each.login} />
            </div>
          ))}
    </div>
  );
}
