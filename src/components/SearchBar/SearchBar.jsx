const SearchBar = () => {
  const jobTiming = ["Full Time", "Part Time"];
  const jobLocation = ["Remote", "In Office"];

  return (
    <div className=" w-[80%]  flex items-center justify-evenly p-3 shadow-xl rounded-md absolute bg-white top-52 ">
      <select className="w-[490px] text-2xl  rounded-md bg-gray-100 py-4 px-7">
        {jobTiming &&
          jobTiming.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      <select className="w-[490px] text-2xl rounded-md bg-gray-100 py-4  px-7">
        {jobLocation &&
          jobLocation.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      <button className="bg-[#DB5669]  w-[490px]  text-xl rounded-lg text-white px-5 py-4 font-bold">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
