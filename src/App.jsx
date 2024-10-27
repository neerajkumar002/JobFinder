import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Header />
      <div className=" w-full   flex justify-center  ">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
