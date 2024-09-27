import KailashBuilding from "../public/Kailash-main-building.jpeg";

function Home() {
  return (
    <>
      <div
        className=" md:bg-contain bg-no-repeat bg-center bg-cover h-[600px] w-full contrast-75 "
        style={{
          backgroundImage: `url(${KailashBuilding})`,
        }}
      ></div>
      <div className="bg-orange-300/50 h-50">
        <p className="text-xl mb-6 w-2/3 tracking-wider  mx-auto p-4">
          "Success isn't just about where you end up — it's about the
          experiences and people who shape your journey. Get involved. Give
          back. Make life long connections"
        </p>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Home;
