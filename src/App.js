import Navbar from "./components/Navbar/Navbar";
import Property from "./components/Property/Property";
import DUMMY_DATA from "./dummyData";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Property />

      {/* <Property data={DUMMY_DATA} /> */}
    </div>
  );
}

export default App;
