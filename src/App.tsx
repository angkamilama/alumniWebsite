import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className="box-border">
      <div className="flex flex-col justify-evenly items-center md:flex-row md:justify-evenly mt-5">
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
        <div className="md:w-4/6">
          {showMenu && (
            <div className=" md:hidden flex flex-col justify-between items-center p-2 h-[250px] w-full">
              <p className="  hover:bg-amber-100  tracking-widest hover:tracking-widest hover:underline">
                ABOUT
              </p>
              <p className="hover:bg-amber-100  tracking-widest hover:tracking-widest hover:underline">
                EVENTS
              </p>
              <p className="hover:bg-amber-100  tracking-widest hover:tracking-widest hover:underline">
                ENGAGE
              </p>
              <p className="hover:bg-amber-100 tracking-widest hover:tracking-widest hover:underline">
                GALLERY
              </p>
              <p className="hover:bg-amber-100  tracking-widest  hover:tracking-widest hover:underline">
                CONTACT
              </p>
            </div>
          )}

          <div className=" hidden md:flex justify-evenly items-center">
            <p className=" tracking-widest hover:bg-amber-200/75 hover:underline">
              ABOUT
            </p>
            <p className="tracking-widest  hover:bg-amber-200/75 hover:underline">
              EVENTS
            </p>
            <p className="tracking-widest hover:bg-amber-200/75  hover:underline">
              ENGAGE
            </p>
            <p className="tracking-widest hover:bg-amber-200/75  hover:underline">
              GALLERY
            </p>
            <p className="tracking-widest hover:bg-amber-200/75  hover:underline">
              CONTACT
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-300 my-4"></div>
    </div>
  );
}

export default App;
