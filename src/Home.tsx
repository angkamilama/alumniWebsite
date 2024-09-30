import KailashBuilding from "../public/Kailash-main-building.jpeg";

import { NavLink } from "react-router-dom";
import knitting from "../public/News/knitting.jpg";
import pottermaking from "../public/News/potterymaking.jpeg";
import wallpainting from "../public/News/wallpainting.jpeg";
import careerPath from "../public/career-path.png";
import networking from "../public/networking.png";
import mentoring from "../public/mentoring.png";
import eventCalendar from "../public/eventCalendar.svg";
import sharingTalent from "../public/SharingTalent.jpg";
import growingHand from "../public/GrowingHand.jpg";
import sharingJourney from "../public/sharingJourney.png";
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
            <img src={eventCalendar} className="w-[80px] h-[80px]" />
          </span>
          <p className="text-xl text-orange-700 font-bold">Attend an event</p>
          <p className="text-center mx-3">
            Learn, engage and celebrate with fellow Students
          </p>
          <NavLink
            to="/Events/AlumniCalendar"
            className=" text-center w-5/6 bg-green-950/75 text-white p-3 hover:bg-gray-600 hover:text-white"
          >
            FIND EVENTS
          </NavLink>
        </div>
        <div className="w-2/3 md:w-1/4  h-[350px] flex flex-col justify-evenly items-center border-2 border-slate-700 shadow-lg shadow-gray-600  my-8 transform transition-all ease-in-out hover:scale-105 ">
          <span>
            <img src={sharingTalent} className="w-[160px] h-[110px]" />
          </span>
          <p className="text-xl text-orange-700 font-bold">
            Share your talents
          </p>
          <p className="text-center mx-3">
            Be ever true. Volunteer your time and expertise
          </p>
          <NavLink
            to="/Giving/Volunteer"
            className=" text-center w-5/6 bg-green-950/75 text-white p-3 hover:bg-gray-600 hover:text-white"
          >
            FIND OPPORTUNITIES
          </NavLink>
        </div>
        <div className="w-2/3 md:w-1/4  h-[350px] flex flex-col justify-evenly items-center border-2 border-slate-700 shadow-lg shadow-gray-600  my-8 transform transition-all ease-in-out hover:scale-105 ">
          <span>
            <img src={sharingJourney} className="w-[100px] h-[100px]" />
          </span>
          <p className="text-xl text-orange-700 font-bold">
            Share your Journey
          </p>
          <p className="text-center mx-3">
            Share, grow and help eachother explore the world
          </p>
          <NavLink
            to="/Stories/Alumni"
            className=" text-center w-5/6 bg-green-950/75 text-white p-3 hover:bg-gray-600 hover:text-white"
          >
            FIND JOURNEYS
          </NavLink>
        </div>
      </div>
      {/* News Section */}
      <div className="border-2 border-slate-500 md:h-auto w-screen flex flex-wrap flex-col justify-around items-center  md:flex-row p-6">
        <div className="flex flex-col justify-evenly items-center h-[150px] mb-8 md:w-full">
          <div className=" border border-20 h-2 bg-orange-700 w-1/6"></div>
          <p className="text-orange-700 font-bold">READ, WATCH AND LISTEN</p>
          <p className="w-2/3">
            Stories that showcase lives of "usefulness and reputation," Kailash
            alumni impact on Kailash home and more...
          </p>
        </div>
        <div className="border border-dotted border-slate-700 flex flex-col justify-evenly items-center h-auto mb-8 p-2 shadow-lg shadow-gray-400 hover:scale-105 transform transition-all ease-in-out rounded-2xl">
          <img src={knitting} className="h-[250px] w-[300px] mb-5" />
          <p className="text-orange-700 font-bold mb-5">AUMNI & FRIENDS</p>
          <NavLink to="/News/News1" className="hover:underline mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam.
          </NavLink>
        </div>
        <div className="border border-dotted border-slate-700 flex flex-col justify-evenly items-center h-auto mb-8 p-2 shadow-lg shadow-gray-400 hover:scale-105 transform transition-all ease-in-out rounded-2xl">
          <img src={pottermaking} className="h-[250px] w-[300px] mb-5 " />
          <p className="text-orange-700 font-bold mb-5">AUMNI & FRIENDS</p>
          <NavLink to="/News/News2" className="hover:underline mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam.
          </NavLink>
        </div>
        <div className="border border-dotted border-slate-700 flex flex-col justify-evenly items-center h-auto mb-8 p-2 shadow-lg shadow-gray-400 hover:scale-105 transform transition-all ease-in-out rounded-2xl">
          <img src={wallpainting} className="h-[250px] w-[300px] mb-5" />
          <p className="text-orange-700 font-bold mb-5">AUMNI & FRIENDS</p>
          <NavLink to="/News/News3" className="hover:underline mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam.
          </NavLink>
        </div>
        <div className="border border-dotted border-slate-700 flex flex-col justify-evenly items-center h-auto mb-8 p-2 shadow-lg shadow-gray-400 hover:scale-105 transform transition-all ease-in-out rounded-2xl">
          <img src={knitting} className="h-[250px] w-[300px] mb-5" />
          <p className="text-orange-700 font-bold mb-5">AUMNI & FRIENDS</p>
          <NavLink to="/News/News4" className="hover:underline mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quam.
          </NavLink>
        </div>
      </div>
      {/* Grow Section */}
      <div className="w-full border-2 border-slate-500 md:h-auto flex flex-wrap flex-col justify-around items-center  md:flex-row p-6">
        <div className="w-5/6 flex flex-col justify-evenly items-center h-auto mb-8 p-3 ">
          <img src={growingHand} className="w-[420px] h-[140px] mb-5 " />
          <p className="font-extrabold text-5xl text-slate-600 mb-5">Grow</p>
          <p className="w-5/6 mb-5">
            An active community helps support and build momentum for everything
            we strive to accomplish in work and in life. Join with others and
            watch the possibilities expand.
          </p>
        </div>
        <div className="w-5/6 md:w-1/4 border border-dotted border-slate-700 flex flex-col justify-evenly items-center md:h-[450px] mb-8 p-3 shadow-lg shadow-gray-400 rounded-2xl">
          <img src={careerPath} className="h-[160px] w-[200px]  my-5 " />
          <p className="text-orange-700 font-bold text-2xl mb-5">Careers</p>
          <p className="w-5/6 mb-5">
            Limitless opportunities in thriving fields and expanding frontiers
          </p>
          <NavLink
            to="/Grow/Careers"
            className=" text-center w-5/6 bg-green-950/75 text-white p-3 hover:bg-gray-600 hover:text-white"
          >
            Learn More About Careers
          </NavLink>
        </div>
        <div className=" w-5/6 md:w-1/4 border border-dotted border-slate-700 flex flex-col justify-evenly items-center md:h-[450px] mb-8 p-3 shadow-lg shadow-gray-400 rounded-2xl">
          <img src={networking} className="h-[160px] w-[200px] my-5 " />
          <p className="text-orange-700 font-bold text-2xl mb-5">Networking</p>
          <p className="w-5/6 mb-5">
            See your life and career as a team effort
          </p>
          <NavLink
            to="/Grow/Networking"
            className="w-5/6 bg-green-950/75 text-white p-3 text-center hover:bg-gray-600 hover:text-white"
          >
            Start Networking
          </NavLink>
        </div>
        <div className=" w-5/6 md:w-1/4  border border-dotted border-slate-700 flex flex-col justify-evenly items-center md:h-[450px] mb-8 p-3 shadow-lg shadow-gray-400 rounded-2xl">
          <img src={mentoring} className="h-[160px] w-[200px] my-5 " />
          <p className="text-orange-700 font-bold text-2xl mb-5">Mentoring</p>
          <p className="w-5/6 mb-5">Learning doesnot end at graduation.</p>
          <NavLink
            to="/Grow/Mentoring"
            className="w-5/6 bg-green-950/75 text-white p-3 text-center hover:bg-gray-600 hover:text-white"
          >
            Become a Mentor
          </NavLink>
        </div>
      </div>
      {/* Contact Section */}
      <div>
        <section className="bg-gray-400/50">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-700">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center  sm:text-xl">
              Do you want to contact us? It would be pleasure for us to fulfill
              your queries.
            </p>
            <form action="#" className="space-y-8 p-3">
              <div>
                <label className="block mb-2 text-sm font-medium ">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-dashed"
                  placeholder="abc@gmail.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium ">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-dashed"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-dashed"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-gray-600 text-white sm:w-fit "
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
