import Navbar from "./components/Navbar/Navbar";
// import DUMMY_DATA from "./dummyData";
import Rent from "./pages/Rent/Rent";
import DEFAULT_DATA from "./realEstateData";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Rent data={DEFAULT_DATA} />

      {/* <Property data={DUMMY_DATA} /> */}
    </div>
  );
}

export default App;
