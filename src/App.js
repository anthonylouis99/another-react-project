import Data from "./Data";
import Cards from "./cards";
import "./App.css";
import Nav from "./Nav.js";

function App() {
  let RawData = Data.map((data) => {
    console.log(data);
    return <Cards key={data.key} data={data} />;
  });

  return (
    <div className="container">
      <Nav />
      <div className="card-box">{RawData}</div>
    </div>
  );
}

export default App;
