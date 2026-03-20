import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative h-screen bg-blue-800 ">
      <Navbar />
      <div className="flex h-screen relative items-center bg-white  justify-center  overflow-hidden text-pretty">
        <div className="p-8 relative md:p-0 md:max-w-5xl flex  flex-col mx-auto gap-2 md:gap-4  selection:bg-gray-500 selection:text-neutral-950">
          <h1 className="text-neutral-900 text-3xl md:text-5xl  font-medium font-display text-center">
            Discover The Magic of The Himalayas
          </h1>
          <p className="text-neutral-600 text-center  font-display italic leading-[130%] text-sm md:text-base ">
            Trek breathtaking mountain trails, explore ancient cultures, and
            experience <br className="hidden md:inline" /> unforgettable
            adventures with{" "}
            <span className="italic font-display underline underline-offset-5  text-orange-700">
              Nepal Ali Baba Treks & Tours.
            </span>
          </p>
          <div className="flex gap-2 justify-center mt-8 md:mt-4">
            <button className="px-4 gap-1.5 py-2 rounded-full min-w-35 hover:bg-neutral-800 hover:shadow-md hover:shadow-orange-600 transition duration-300 cursor-pointer border border-neutral-600 bg-neutral-900 text-neutral-100 flex items-center justify-center font-geist text-sm text-shadow-2xs shadow-sm shadow-orange-500 ">
              Book Your Trek {TrekSvg}
            </button>
            <button className="px-4 gap-1.5  flex justify-center items-center py-2 rounded-full min-w-35 bg-white text-neutral-900 border text-shadow-2xs border-neutral-300 shadow-xs font-geist cursor-pointer hover:bg-neutral-200 transition duration-300 shadow-black  text-sm">
              Contact Us {ContactSvg}
            </button>
          </div>
        </div>
        <div className="h-screen absolute inset-y-0 2xl:left-25 left-5 w-[0.5px] bg-neutral-500" />
        <div className="h-screen absolute inset-y-0 2xl:right-25 right-5 w-[0.5px] bg-neutral-500" />
        <div className="w-full h-px absolute inset-x-0 bottom-0 bg-neutral-500" />
      </div>




      <div className="relative h-screen  bg-neutral-100 flex flex-col md:flex-row md:justify-around items-center gap-4 md:gap-4 px-10 text-pretty">
        <p className="font-display absolute left-10 top-1 text-4xl  text-gray-400">
          Where we're travelling in <br /> <span className="font-display text-neutral-950">Kathmandu</span>
        </p>
        <div className=" mt-38 md:mt-15 flex-1 md:flex-none gap-2 h-1/2 w-3/4 md:w-md md:h-4/5 flex flex-col ">
          <img src="./boudha.avif" alt="" className="object-cover h-[90%]" />
          <div className="flex flex-col justify-around">
            <p className="font-display leading-2">
              Boudha Stupa{" "}
              <span className="text-xs text-gray-600 font-geist">
                <br />
                Kathmandu, Nepal
              </span>
            </p>
          </div>
        </div>
        <div className="flex-1 mt-3 md:flex-none max-w-lg text-xs md:text-sm font-display">
          The Boudhanath Stupa is one of the largest and most sacred Buddhist stupas in the world. Its massive white dome and all-seeing eyes create a serene atmosphere that draws travelers and pilgrims alike. Surrounded by monasteries, prayer wheels, and vibrant markets, it offers a deeply spiritual and culturally rich experience in the heart of Kathmandu.
        </div>
      </div>
    </div>
  );
};

const ContactSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="icon size-4 icon-tabler icons-tabler-filled icon-tabler-mail fill-neutral-700"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
  </svg>
);

const TrekSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="icon size-4 icon-tabler icons-tabler-outline icon-tabler-mountain stroke-orange-400/80"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612" />
    <path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2" />
  </svg>
);

export default Home;
