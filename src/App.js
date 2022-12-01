import Navbar from "./components/Navbar/Navbar";
import DUMMY_DATA from "./dummyData";
import Rent from "./pages/Rent/Rent";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Rent data={DUMMY_DATA} />

      {/* <Property data={DUMMY_DATA} /> */}
    </div>
  );
}

export default App;
