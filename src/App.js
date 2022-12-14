import Navbar from "./components/Navbar/Navbar";
// import DUMMY_DATA from "./dummyData";
import Rent from "./pages/Rent/Rent";
// import DEFAULT_DATA from "./realEstateData";
import DEFAULT_DATA from "./realEstateData150";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Rent data={DEFAULT_DATA} />
    </div>
  );
}

export default App;
