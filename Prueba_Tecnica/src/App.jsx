import "./App.css";
import NavBar from "./components/navbar/navbar";
import ProductTable from "./components/tabla/tabla";

function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <div className="App">
          <ProductTable />
        </div>
      </div>
    </>
  );
}

export default App;
