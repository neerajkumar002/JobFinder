const JobCard = () => {
  return (
    <div className="w-[80%] h-[100px] flex   bg-white shadow-2xl px-4 border  rounded-lg hover:scale-105">
      <div className="w-full   grid grid-cols-3 justify-between   items-center     ">
        <div className="flex  flex-col gap-4 items-start ">
          <p className="font-semibold text-xl">Frontend Developer</p>
          <span className="bg-[#DB5669] rounded-md px-4 py-1 text-white">
            Google
          </span>
        </div>
        <div className="flex gap-3 flex-wrap">
          <span className="bg-black text-white p-2 rounded-lg">JavaScript</span>
          <span className="bg-black text-white p-2 rounded-lg">React</span>
          <span className="bg-black text-white p-2 rounded-lg">HTML</span>
        </div>
        <div className=" flex flex-col items-end gap-4">
          <p className="flex gap-3 text-gray-600">
            <span>2681 min ago</span>|<span>Full Time</span>|<span>Remote</span>
          </p>
          <button className="rounded-full border border-black px-7 py-2 font-semibold">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
