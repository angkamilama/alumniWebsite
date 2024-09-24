import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="box-border">
      <nav className="md:w-4/6">
        <ul className=" hidden md:flex justify-evenly  items-center ">
          <li className=" tracking-widest">ABOUT</li>
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
      <Outlet />
    </div>
  );
}

export default RootLayout;
