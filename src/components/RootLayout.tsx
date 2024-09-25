import { NavLink, Outlet } from "react-router-dom";
import { useReducer, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

function reducer(state, action) {
  switch (action.type) {
    case "showEvents": {
      return {
        ...state,
        events: true,
      };
    }
    case "closeEvents": {
      return {
        ...state,
        events: false,
      };
    }
    case "showGiving": {
      return {
        ...state,
        giving: true,
      };
    }
    case "closeGiving": {
      return {
        ...state,
        giving: false,
      };
    }
    case "showGallery": {
      return {
        ...state,
        gallery: true,
      };
    }
    case "closeGallery": {
      return {
        ...state,
        gallery: false,
      };
    }
    case "showStories": {
      return {
        ...state,
        stories: true,
      };
    }
    case "closeStories": {
      return {
        ...state,
        stories: false,
      };
    }
    case "closeAll": {
      return {
        ...state,
        about: false,
        events: false,
        gallery: false,
        giving: false,
        stories: false,
      };
    }
    default:
      return state;
  }
}

let initialState = {
  about: false,
  events: false,
  gallery: false,
  giving: false,
  stories: false,
};

function RootLayout() {
  const [showMenu, setShowMenu] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
    if (showMenu) {
      dispatch({ type: "closeAll" });
    }
  };
  return (
    <div className="box-border  flex-col scroll-smooth">
      <div className="flex  justify-between items-center w-screen">
        <div className=" border border-red-600 flex justify-evenly items-center w-full md:w-1/6 mt-5 mb-0">
          <div className="flex justify-around items-center w-full md:w-2/6">
            <img
              src={"../public/demoImg.jpg"}
              className="w-[200px] h-[70px] "
            />
            <div
              className="border border-dotted border-slate-500 flex  items-center justify-evenly md:hidden rounded-xl p-1"
              onClick={handleShowMenu}
            >
              {showMenu ? (
                <AiOutlineClose className="text-red-700  w-[40px] h-[27px] rounded-lg" />
              ) : (
                <RxHamburgerMenu className="w-[40px] h-[27px] rounded-lg" />
              )}
            </div>
          </div>
          {/* dropdown Menu */}
          <div className="w-1/3 h-auto absolute top-20 right-1 md:hidden z-10">
            {showMenu && (
              <ul className=" w-full h-[450px] bg-slate-100 flex flex-col justify-evenly items-center border border-red-400 p-2 ">
                <li className=" tracking-widest text-center font-bold border-b border-slate-400 w-full ">
                  ABOUT
                </li>
                <li className="border-b flex flex-col justify-center items-center border-slate-400 w-full p-2 transition transform delay-300 ease-in-out">
                  <div className="flex cursor-pointer">
                    <p className="hover:text-red-800 mr-6 tracking-widest font-bold">
                      EVENTS
                    </p>
                    <span>
                      {state.events ? (
                        <IoIosArrowDropup
                          size={25}
                          onClick={() => dispatch({ type: "closeEvents" })}
                          className="text-red-700"
                        />
                      ) : (
                        <IoIosArrowDropdown
                          size={25}
                          onClick={() => dispatch({ type: "showEvents" })}
                        />
                      )}
                    </span>
                  </div>
                  <ul
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      state.events ? "max-h-60 " : "max-h-0 "
                    } flex flex-col justify-evenly items-center w-full mt-2 p-1`}
                  >
                    <li>Alumni</li>
                    <li>Kailash Home</li>
                    <li>Reunion Date</li>
                  </ul>
                </li>
                <li>
                  <div className="flex cursor-pointer">
                    <p className="hover:text-red-800 mr-6 tracking-widest font-bold">
                      GIVING
                    </p>
                    <span>
                      {state.giving ? (
                        <IoIosArrowDropup
                          size={25}
                          onClick={() => dispatch({ type: "closeGiving" })}
                          className="text-red-700"
                        />
                      ) : (
                        <IoIosArrowDropdown
                          size={25}
                          onClick={() => dispatch({ type: "showGiving" })}
                        />
                      )}
                    </span>
                  </div>
                  <div>
                    <ul
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        state.giving ? "max-h-60" : "max-h-0"
                      } flex flex-col justify-between items-center w-full mt-2 p-1`}
                    >
                      <li className="mb-3">Donation</li>
                      <li className="mb-3">Volunteer</li>
                      <li className="mb-3">Make a Gift</li>
                      <li className="mb-3">Come on Board</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="flex cursor-pointer ">
                    <p className="hover:text-red-800 mr-6 tracking-widest font-bold">
                      GALLERY
                    </p>
                    <span>
                      {state.gallery ? (
                        <IoIosArrowDropup
                          size={25}
                          onClick={() => dispatch({ type: "closeGallery" })}
                          className="text-red-700"
                        />
                      ) : (
                        <IoIosArrowDropdown
                          size={25}
                          onClick={() => dispatch({ type: "showGallery" })}
                        />
                      )}
                    </span>
                  </div>
                  <div>
                    {state.gallery && (
                      <ul className="h-[150px] flex flex-col justify-evenly items-center w-full border border-red-500 mt-2 p-2">
                        <li>Old Photos </li>
                        <li>New Photos </li>
                        <li>Videos</li>
                        <li>Alumni Contact List</li>
                      </ul>
                    )}
                  </div>
                </li>
                <li>
                  <div className="flex cursor-pointer ">
                    <p className="hover:text-red-800 mr-6 tracking-widest font-bold">
                      Stories
                    </p>
                    <span>
                      {state.stories ? (
                        <IoIosArrowDropup
                          size={25}
                          onClick={() => dispatch({ type: "closeStories" })}
                          className="text-red-700"
                        />
                      ) : (
                        <IoIosArrowDropdown
                          size={25}
                          onClick={() => dispatch({ type: "showStories" })}
                        />
                      )}
                    </span>
                  </div>
                  <div>
                    {state.stories && (
                      <ul className="h-[140px] flex flex-col justify-evenly items-center w-full border border-red-500 mt-2 p-2">
                        <li>Alumni Stories </li>
                        <li>Student Stories </li>
                        <li>Staff Stories</li>
                        <li>Volunter Stories</li>
                      </ul>
                    )}
                  </div>
                </li>
              </ul>
            )}
          </div>
          {/* normal Menu */}
        </div>
        <nav className="border border-blue-600 w-0 md:w-4/6">
          <ul className="flex justify-evenly  items-center w-full ">
            <NavLink to="/About" className=" tracking-widest">
              ABOUT
            </NavLink>
            <li className="tracking-wider group relative">
              <p className="cursor-pointer ">EVENTS</p>
              <ul className=" absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] h-[150px]  flex-col justify-between items-center ">
                <NavLink
                  to="/Events/AlumniCalendar"
                  className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200"
                >
                  Alumni Calendar
                </NavLink>
                <NavLink
                  to="/Events/KailashHomeCalendar"
                  className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200"
                >
                  Kailash Home Calendar
                </NavLink>
                <NavLink
                  to="/Events/Reunion"
                  className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200"
                >
                  Reunions
                </NavLink>
              </ul>
            </li>
            <li className="tracking-wider  group relative">
              <p className="cursor-pointer">GIVING</p>
              <ul className="absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] overflow-y-auto">
                <NavLink
                  to="/Giving/Donation"
                  className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200"
                >
                  Donation
                </NavLink>
                <NavLink
                  to="//GivingVolunteer"
                  className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200"
                >
                  Volunteer
                </NavLink>
                <NavLink
                  to="/Giving/MakeAGift"
                  className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200"
                >
                  Make a Gift
                </NavLink>
                <NavLink
                  to="/Giving/ComeOnBoard"
                  className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200"
                >
                  Come on board
                </NavLink>
              </ul>
            </li>
            <li className="tracking-wider  group relative">
              <p className="cursor-pointer hover:bg-orange-200 p-1">GALLERY</p>
              <ul className="absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] overflow-y-auto">
                <NavLink
                  to="/Gallery/OldPhotos"
                  className="w-full p-1 text-center  hover:bg-slate-200 hover:text-orange-500 "
                >
                  Old Photos
                </NavLink>
                <NavLink
                  to="/Gallery/NewPhotos"
                  className="w-full p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                >
                  New Photos
                </NavLink>
                <NavLink
                  to="/Gallery/Videos"
                  className="w-full p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                >
                  Videos
                </NavLink>
                <NavLink
                  to="/Gallery/AlumniContactList"
                  className="w-full p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                >
                  Alumni Contact List
                </NavLink>
              </ul>
            </li>
            <li className="tracking-wider  group relative">
              <p className="cursor-pointer hover:bg-orange-200 p-1">STORIES</p>
              <ul className="absolute top-full left-[-40px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block">
                <NavLink
                  to=""
                  className="w-[150px] p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                >
                  Alumni Stories
                </NavLink>
                <NavLink
                  to=""
                  className="w-full p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                >
                  Current Student Stories
                </NavLink>
                <NavLink
                  to=""
                  className="w-full p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                >
                  Volunteer Stories
                </NavLink>
                <NavLink
                  to=""
                  className="w-full p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                >
                  Staff Stories
                </NavLink>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border border-green-300 w-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
