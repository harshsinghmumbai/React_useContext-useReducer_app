import { NavLink } from "react-router-dom";
import Custom_Hook from "../../Context/Custom_Hook";

const Here_Section = () => {
  const { name, image } = Custom_Hook();
  return (
    <>
      <main className="flex justify-center items-center h-screen ">
        <div className=" w-3/5 flex ">
          <div className="">
            <p className="text-base font-semibold text-gray-400">This is me</p>
            <h1 className="text-6xl font-bold mb-4">{name}</h1>
            <p className="text-base mb-5 text-gray-500 font-semibold leading-relaxed">
              I am {name} of 18yrs old & A passionate to become a Full-Stack Web
              developer using MERN Stack path
            </p>
            <button className="bg-blue-600 p-1 rounded-lg text-lg font-semibold text-white cursor-pointer active:bg-blue-500 px-4">
              <NavLink to={"contact"}> Hire me</NavLink>
            </button>
          </div>
          <div className="hidden lg:block">
            <img
              src={image}
              alt="Images"
              className="w-[40rem] h-[22rem] rounded-xl"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Here_Section;
