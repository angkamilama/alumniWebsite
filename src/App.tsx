import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className="box-border">
      <div className="flex flex-col justify-evenly items-center md:flex-row md:justify-evenly w-screen mt-5 mb-0">
        <div className="flex justify-around items-center w-full md:w-2/6">
          <img src={"../public/demoImg.jpg"} className="w-[200px] h-[70px] " />
          <div
            className="border border-dotted border-slate-500  md:hidden rounded-xl p-1"
            onClick={handleShowMenu}
          >
            {showMenu ? (
              <AiOutlineClose className="text-red-700  w-[40px] h-[27px] rounded-lg" />
            ) : (
              <RxHamburgerMenu className="w-[40px] h-[27px] rounded-lg" />
            )}
          </div>
        </div>
        <div className="md:w-4/6  ">
          {showMenu && (
            <ul className="  w-svw h-svh bg-slate-100 flex flex-col justify-evenly items-center md:hidden">
              <li className=" tracking-widest hover:bg-amber-200/75 hover:underline">
                ABOUT
              </li>
              <li className="tracking-widest font-bold group relative flex justify-between items-center w-3/12">
                <p className="cursor-pointer hover:text-red-800">EVENTS</p>
                <div>
                  <IoIosArrowDropdown size={30} />
                </div>
              </li>
              <li className="tracking-widest hover:bg-amber-200/75 group relative">
                <p className="cursor-pointer">GIVING</p>
                <ul className="absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] overflow-y-auto">
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Donation
                  </li>
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Volunteer
                  </li>
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Make a Gift
                  </li>
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Come on board
                  </li>
                </ul>
              </li>
              <li className="tracking-widest hover:bg-amber-200/75 group relative">
                <p className="cursor-pointer">GALLERY</p>
                <ul className="absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] overflow-y-auto">
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Old Photos
                  </li>
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    New Photos
                  </li>
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Videos
                  </li>
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Alumni Contact List
                  </li>
                </ul>
              </li>
              <li className="tracking-widest hover:bg-amber-200/75 group relative">
                <p className="cursor-pointer">STORIES</p>
                <ul className="absolute top-full left-[-40px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block">
                  <li className="w-[150px] p-1 text-center border-slate-400 border-b-2  hover:bg-orange-200">
                    Alumni Stories
                  </li>
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Current Student Stories
                  </li>
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Volunteer Stories
                  </li>
                  <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                    Staff Stories
                  </li>
                </ul>
              </li>
            </ul>
          )}

          <ul className=" hidden md:flex justify-evenly items-center ">
            <li className=" tracking-widest hover:bg-amber-200/75 hover:underline">
              ABOUT
            </li>
            <li className="tracking-widest hover:bg-amber-200/75 group relative">
              <p className="cursor-pointer">EVENTS</p>
              <ul className=" absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] h-[500px] flex flex-col justify-between items-center ">
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Alumni Calendar
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Kailash Home Calendar
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Reunions
                </li>
              </ul>
            </li>
            <li className="tracking-widest hover:bg-amber-200/75 group relative">
              <p className="cursor-pointer">GIVING</p>
              <ul className="absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] overflow-y-auto">
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Donation
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Volunteer
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Make a Gift
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Come on board
                </li>
              </ul>
            </li>
            <li className="tracking-widest hover:bg-amber-200/75 group relative">
              <p className="cursor-pointer">GALLERY</p>
              <ul className="absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] overflow-y-auto">
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Old Photos
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  New Photos
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Videos
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Alumni Contact List
                </li>
              </ul>
            </li>
            <li className="tracking-widest hover:bg-amber-200/75 group relative">
              <p className="cursor-pointer">STORIES</p>
              <ul className="absolute top-full left-[-40px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block">
                <li className="w-[150px] p-1 text-center border-slate-400 border-b-2  hover:bg-orange-200">
                  Alumni Stories
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Current Student Stories
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Volunteer Stories
                </li>
                <li className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200">
                  Staff Stories
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px bg-gray-300 my-4"></div>
    </div>
  );
}

export default App;
