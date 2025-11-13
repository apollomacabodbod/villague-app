import { Link } from "react-router-dom";
import home from "src/assets/about-us/home.svg";
import route from "src/assets/about-us/route.svg";

export default function AboutHeroSection() {
  return (
    <>
      <div className="flex flex-col mt-[11.96875em] mb-[11.0625em] max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[2em]">
        <p className="text-[#F6D167] font-Inter text-[0.875rem] font-bold uppercase">
          About Us
        </p>

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-[#FFF] font-PlayfairDisplay text-[4.5rem] font-bold capitalize">
            About Us
          </p>

          <div className="flex items-center gap-[1em] mt-[1em] sm:mt-[0em]">
            <img
              src={home}
              alt=""
              className="object-cover object-center w-[1em]"
            />
            <Link
              to="/"
              className="text-[#FFF] font-Inter text-[0.875rem] font-bold uppercase"
            >
              home
            </Link>

            <img
              src={route}
              alt=""
              className="object-cover object-center w-[0.5em]"
            />

            <Link
              to="/about"
              className="text-[#FFF] font-Inter text-[0.875rem] font-bold uppercase"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
