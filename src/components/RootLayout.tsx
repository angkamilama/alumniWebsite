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
        gallery: false,
        giving: false,
        stories: false,
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
        events: false,
        gallery: false,
        giving: true,
        stories: false,
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
        events: false,
        gallery: true,
        giving: false,
        stories: false,
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
        events: false,
        gallery: false,
        giving: false,
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
        <div className="flex justify-evenly items-center w-full md:w-1/6 mt-5 mb-0">
          <div className="flex justify-around items-center w-full md:w-2/6">
            <img
              src={"../public/demoImg.jpg"}
              className="w-[200px] h-[70px] "
            />
            <div
              className="border-2 border-slate-500 flex  items-center justify-evenly md:hidden rounded-xl p-1"
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
          <div className="w-full absolute top-20 right-1 md:hidden z-10">
            {showMenu && (
              <ul className=" w-full h-[680px] bg-slate-200 flex flex-col justify-evenly items-center p-2 ">
                <NavLink
                  className=" tracking-widest text-center font-bold  mb-5"
                  onClick={() => setShowMenu(false)}
                  to="/About"
                >
                  ABOUT
                </NavLink>
                <li>
                  <div className="flex justify-between items-centercursor-pointer w-[220px]">
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
                    <NavLink
                      to="/Events/AlumniCalendar"
                      onClick={() => setShowMenu(false)}
                      className="w-full p-1 text-center hover:bg-orange-100"
                    >
                      Alumni Calendar
                    </NavLink>
                    <NavLink
                      to="/Events/KailashHomeCalendar"
                      onClick={() => setShowMenu(false)}
                      className="w-full p-1 text-center hover:bg-orange-100"
                    >
                      Kailash Home Calendar
                    </NavLink>
                    <NavLink
                      to="/Events/Reunion"
                      onClick={() => setShowMenu(false)}
                      className="w-full p-1 text-center hover:bg-orange-100"
                    >
                      Reunions
                    </NavLink>
                  </ul>
                </li>
                <li>
                  <div className="flex justify-between items-center cursor-pointer w-[220px] ">
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
                    <ul
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        state.gallery ? "max-h-60" : "max-h-0"
                      } flex flex-col justify-between items-center w-full mt-2 p-1`}
                    >
                      <NavLink
                        to="/Gallery/OldPhotos"
                        className="w-full p-1 text-center  hover:bg-orange-100 "
                        onClick={() => setShowMenu(false)}
                      >
                        Old Photos
                      </NavLink>
                      <NavLink
                        to="/Gallery/NewPhotos"
                        className="w-full p-1 text-center hover:bg-orange-100"
                        onClick={() => setShowMenu(false)}
                      >
                        New Photos
                      </NavLink>
                      <NavLink
                        to="/Gallery/Videos"
                        className="w-full p-1 text-center hover:bg-orange-100"
                        onClick={() => setShowMenu(false)}
                      >
                        Videos
                      </NavLink>
                      <NavLink
                        to="/Gallery/AlumniContactList"
                        className="w-full p-1 text-center hover:bg-orange-100"
                        onClick={() => setShowMenu(false)}
                      >
                        Alumni Contact List
                      </NavLink>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="flex cursor-pointer items-center justify-between w-[220px]">
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
                        state.giving ? "max-h-60 " : "max-h-0 "
                      } flex flex-col justify-evenly items-center w-full p-1 mt-2`}
                    >
                      <NavLink
                        to="/Giving/Donation"
                        onClick={() => setShowMenu(false)}
                        className="w-full p-1 text-center border-slate-400  hover:bg-orange-100"
                      >
                        Donation
                      </NavLink>
                      <NavLink
                        to="/Giving/Volunteer"
                        onClick={() => setShowMenu(false)}
                        className="w-full p-1 text-center border-slate-400  hover:bg-orange-100"
                      >
                        Volunteer
                      </NavLink>
                      <NavLink
                        to="/Giving/MakeAGift"
                        onClick={() => setShowMenu(false)}
                        className="w-full p-1 text-center border-slate-400  hover:bg-orange-100"
                      >
                        Make a Gift
                      </NavLink>
                      <NavLink
                        to="/Giving/ComeOnBoard"
                        onClick={() => setShowMenu(false)}
                        className="w-full p-1 text-center border-slate-400  hover:bg-orange-100"
                      >
                        Come on board
                      </NavLink>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center cursor-pointer w-[220px]">
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
                    <ul
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        state.stories ? "max-h-60 " : "max-h-0 "
                      } flex flex-col justify-evenly items-center w-full p-1 mt-2`}
                    >
                      <NavLink
                        to="/Stories/Alumni"
                        onClick={() => setShowMenu(false)}
                        className="w-[150px] p-1 text-center hover:bg-orange-100"
                      >
                        Alumni
                      </NavLink>
                      <NavLink
                        to="/Stories/CurrentStudents"
                        onClick={() => setShowMenu(false)}
                        className="w-full p-1 text-center hover:bg-orange-100"
                      >
                        Current Student
                      </NavLink>
                      <NavLink
                        to="/Stories/Volunteers"
                        onClick={() => setShowMenu(false)}
                        className="w-full p-1 text-center hover:bg-orange-100"
                      >
                        Volunteers
                      </NavLink>
                      <NavLink
                        to="/Stories/Staff"
                        onClick={() => setShowMenu(false)}
                        className="w-full p-1 text-center hover:bg-orange-100"
                      >
                        Staff
                      </NavLink>
                    </ul>
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
              <div className=" absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] h-[150px]  flex-col justify-between items-center ">
                <ul className="flex flex-col justify-between items-center ">
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
              </div>
            </li>
            <li className="tracking-wider  group relative">
              <p className="cursor-pointer">GIVING</p>
              <div className="absolute top-full left-[-20px] z-20 bg-orange-100/50 hidden group-hover:block w-[105px] ">
                <ul className="flex flex-col justify-between items-center ">
                  <NavLink
                    to="/Giving/Donation"
                    className="w-full p-1 text-center border-slate-400 border-b-2 hover:bg-orange-200"
                  >
                    Donation
                  </NavLink>
                  <NavLink
                    to="/Giving/Volunteer"
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
              </div>
            </li>
            <li className="tracking-wider  group relative">
              <p className="cursor-pointer hover:bg-orange-200 p-1">GALLERY</p>
              <div className="absolute top-full left-[-20px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block w-[125px] overflow-y-auto">
                <ul className="flex flex-col justify-between items-center ">
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
                    Alumni List
                  </NavLink>
                </ul>
              </div>
            </li>
            <li className="tracking-wider  group relative">
              <p className="cursor-pointer hover:bg-orange-200 p-1">STORIES</p>
              <div className="absolute top-full left-[-40px] z-20 border border-slate-300 bg-orange-100/50 hidden group-hover:block">
                <ul className="flex flex-col justify-between items-center ">
                  <NavLink
                    to="/Stories/Alumni"
                    className="w-[150px] p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                  >
                    Alumni
                  </NavLink>
                  <NavLink
                    to="/Stories/CurrentStudents"
                    className="w-full p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                  >
                    Current Student
                  </NavLink>
                  <NavLink
                    to="/Stories/Volunteers"
                    className="w-full p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                  >
                    Volunteer
                  </NavLink>
                  <NavLink
                    to="/Stories/Staff"
                    className="w-full p-1 text-center hover:bg-slate-200 hover:text-orange-500"
                  >
                    Staff
                  </NavLink>
                </ul>
              </div>
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
