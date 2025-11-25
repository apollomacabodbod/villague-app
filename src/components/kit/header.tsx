import { useEffect, useState } from "react";
import logo from "src/assets/header/logo.svg";
import { Link, useLocation } from "react-router-dom";
import telephone from "src/assets/header/telephone.svg";
import humberger from "src/assets/header/humberger.svg";
import Sidebar from "./side-bar";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect if user is on blog detail page
  const isBlogDetail =
    location.pathname.startsWith("/blog/") && location.pathname !== "/blog";

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full  transition-all duration-1000 ease-in-out z-40 ${
          isBlogDetail || scrolling
            ? "backdrop-blur-lg bg-[#28252E]/40 shadow-lg"
            : "bg-transparent backdrop-blur-none shadow-none"
        }`}
      >
        <div className="flex flex-col  max-w-[1200px] lg:mx-auto  px-[1.25em] py-[1em]">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer ">
              <Link to={"/"} className="flex flex-col  py-[1.0625em] ">
                <img src={logo} alt="" className="min-w-[7.5em]" />
              </Link>
            </div>

            <div className="lg:flex lg:flex-col hidden">
              <div className="flex items-center  lg:gap-[1.7em] xl:gap-[2em]">
                <Link
                  to={"/"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  HOME
                </Link>
                <Link
                  to={"/about"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  ABOUT
                </Link>
                <Link
                  to={"/vacancies"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {""}
                  VACANCIES
                </Link>
                <Link
                  to={"/pricing"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  PRICING
                </Link>
                <Link
                  to={"/blog"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  BLOG
                </Link>
                <Link
                  to={"/contact"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  CONTACT
                </Link>
              </div>
            </div>

            <div className="lg:flex lg:flex-col hidden">
              <div className="flex items-center gap-[1em] ">
                <div className="flex items-center gap-[0.5em] cursor-pointer  border border-[#FFF] py-[1em] px-[1.5em] hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">
                  <p className="text-[#FFF] font-inter text-[1rem] not-italic font-bold ">
                    (021) 345-6789
                  </p>

                  <img src={telephone} alt="" />
                </div>
              </div>
            </div>

            <div
              className="flex flex-col lg:hidden cursor-pointer  hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <img
                src={humberger}
                alt=""
                width={23}
                height={0}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)} // Close sidebar on overlay click
        />
      )}

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
}
