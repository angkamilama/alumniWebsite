import KailashBuilding from "../public/Kailash-main-building.jpeg";
import { RiCalendarEventFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import knitting from "../public/News/knitting.jpg";
import pottermaking from "../public/News/potterymaking.jpeg";
import wallpainting from "../public/News/wallpainting.jpeg";

function Home() {
  return (
    <>
      <div
        className=" md:bg-contain bg-no-repeat bg-center bg-cover h-[600px] w-full contrast-75 "
        style={{
          backgroundImage: `url(${KailashBuilding})`,
        }}
      ></div>
      <div className="h-50">
        <p className="text-xl mb-6 w-2/3 tracking-wider  mx-auto p-4">
          "Success isn't just about where you end up — it's about the
          experiences and people who shape your journey. Get involved. Give
          back. Make life long connections"
        </p>
      </div>
      {/* Box Section */}
      <div className="border-2 border-slate-500 md:h-auto w-screen flex flex-col justify-around items-center md:flex-row">
        <div className="w-2/3 md:w-1/4 h-[350px] flex flex-col justify-evenly items-center border-2 border-slate-700 shadow-lg shadow-gray-600 my-8  transform transition-all ease-in-out hover:scale-105 ">
          <span>
            <RiCalendarEventFill size={60} />
          </span>
          <p className="text-xl text-orange-700 font-bold">Attend an event</p>
          <p className="text-center mx-3">
            Learn, engage and celebrate with fellow Students
          </p>
          <button className="text-gray-100 font-bold bg-zinc-600 hover:bg-zinc-900 p-2.5">
            FIND EVENTS
          </button>
        </div>
        <div className="w-2/3 md:w-1/4  h-[350px] flex flex-col justify-evenly items-center border-2 border-slate-700 shadow-lg shadow-gray-600  my-8 transform transition-all ease-in-out hover:scale-105 ">
          <span>
            <RiCalendarEventFill size={60} />
          </span>
          <p className="text-xl text-orange-700 font-bold">
            Share your talents
          </p>
          <p className="text-center mx-3">
            Be ever true. Volunteer your time and expertise
          </p>
          <button className="text-gray-100 font-bold bg-zinc-600 hover:bg-zinc-900 p-2.5">
            FIND OPPORTUNITIES
          </button>
        </div>
        <div className="w-2/3 md:w-1/4  h-[350px] flex flex-col justify-evenly items-center border-2 border-slate-700 shadow-lg shadow-gray-600  my-8 transform transition-all ease-in-out hover:scale-105 ">
          <span>
            <RiCalendarEventFill size={60} />
          </span>
          <p className="text-xl text-orange-700 font-bold">
            Share your Journey
          </p>
          <p className="text-center mx-3">
            Share, grow and help eachother explore the world
          </p>
          <button className="text-gray-100 font-bold bg-zinc-600 hover:bg-zinc-900 p-2.5">
            FIND JOURNEYS
          </button>
        </div>
      </div>
      {/* News Section */}
      <div className="border-2 border-slate-500 md:h-auto w-screen flex flex-wrap flex-col justify-around items-center md:flex-row p-6">
        <div className="flex flex-col justify-evenly items-center h-[150px] mb-8 md:w-full">
          <div className=" border border-20 h-2 bg-orange-700 w-1/6"></div>
          <p className="text-orange-700 font-bold">READ, WATCH AND LISTEN</p>
          <p className="w-2/3">
            Stories that showcase lives of "usefulness and reputation," Kailash
            alumni impact on Kailash home and more...
          </p>
        </div>
        <div className="border border-dotted border-slate-700 flex flex-col justify-evenly items-center h-auto mb-8 p-2 shadow-lg shadow-gray-400">
          <img src={knitting} className="h-[250px] w-[300px] mb-5" />
          <p className="text-orange-700 font-bold mb-5">AUMNI & FRIENDS</p>
          <NavLink to="/News/News1" className="hover:underline mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam.
          </NavLink>
        </div>
        <div className="border border-dotted border-slate-700 flex flex-col justify-evenly items-center h-auto mb-8 p-2 shadow-lg shadow-gray-400">
          <img src={pottermaking} className="h-[250px] w-[300px] mb-5" />
          <p className="text-orange-700 font-bold mb-5">AUMNI & FRIENDS</p>
          <NavLink to="/News/News2" className="hover:underline mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam.
          </NavLink>
        </div>
        <div className="border border-dotted border-slate-700 flex flex-col justify-evenly items-center h-auto mb-8 p-2 shadow-lg shadow-gray-400">
          <img src={wallpainting} className="h-[250px] w-[300px] mb-5" />
          <p className="text-orange-700 font-bold mb-5">AUMNI & FRIENDS</p>
          <NavLink to="/News/News3" className="hover:underline mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam.
          </NavLink>
        </div>
        <div className="border border-dotted border-slate-700 flex flex-col justify-evenly items-center h-auto mb-8 p-2 shadow-lg shadow-gray-400">
          <img src={knitting} className="h-[250px] w-[300px] mb-5" />
          <p className="text-orange-700 font-bold mb-5">AUMNI & FRIENDS</p>
          <NavLink to="/News/News4" className="hover:underline mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam.
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
