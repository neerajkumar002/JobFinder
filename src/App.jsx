import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Header />
      <div className=" w-full   flex flex-col items-center justify-center pt-20 gap-3  ">
        <SearchBar />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </>
  );
}

export default App;
