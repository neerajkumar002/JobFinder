const Header = () => {
  return (
    <header className="w-full h-64 flex justify-center items-center  bg-[#27346B]">
      <div className="w-[80%] flex items-center justify-between  h-36">
        <h1 className="text-4xl text-white">Open Job Listing</h1>
        <button className="bg-[#DB5669]  rounded-lg text-white px-5 py-3 font-bold">
          Post a job
        </button>
      </div>
    </header>
  );
};

export default Header;
