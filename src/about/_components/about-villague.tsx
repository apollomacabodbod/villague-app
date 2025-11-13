import modernHouse from "src/assets/about-villague/modern-house.jpg";
import one from "src/assets/about-villague/one.svg";
import two from "src/assets/about-villague/two.svg";
import three from "src/assets/about-villague/three.svg";
import four from "src/assets/about-villague/four.svg";
import five from "src/assets/about-villague/five.svg";
import six from "src/assets/about-villague/six.svg";

import bookNow from "src/assets/about-villague/book-now.svg";

export default function AboutVillague() {
  return (
    <>
      <div className="grid lg:grid-cols-2 ">
        <div className="flex flex-col ">
          <img
            src={modernHouse}
            alt=""
            className="object-cover object-center h-[31.1875em] lg:h-[56.25em] "
          />
        </div>

        <div className="flex flex-col py-[3.13em] lg:py-[6.25em] max-w-[1200px] lg:mx-auto  px-[1.25em] lg:px-[4em] gap-[2em]">
          <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
            About Villague
          </p>

          <p className="text-[#828282] font-Inter text-[1.125rem] font-normal  ">
            Gravida vulputate aliquet tempor sit. Neque sed pretium non urna sed
            etid aenean haretra quam plac adipiscing penatibus aliquam
            adipiscing gravida elementum aliquet eget senectus felis enim diam
            molestie. Aenean haretra quam placerat adipiscing penatibus aliquam{" "}
          </p>

          <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold">
            Our Partners
          </p>

          <div className="grid grid-cols-3 gap-y-[2em] gap-[1em]">
            <img
              src={one}
              alt=""
              className="object-cover object-center w-[9.375em]"
            />

            <img
              src={two}
              alt=""
              className="object-cover object-center w-[9.375em]"
            />

            <img
              src={three}
              alt=""
              className="object-cover object-center w-[9.375em]"
            />

            <img
              src={four}
              alt=""
              className="object-cover object-center w-[9.375em]"
            />

            <img
              src={five}
              alt=""
              className="object-cover object-center w-[9.375em]"
            />

            <img
              src={six}
              alt=""
              className="object-cover object-center w-[9.375em]"
            />
          </div>

          <p className="text-[#828282] font-Inter text-[1.125rem] font-normal">
            Gravida vulputate aliquet tempor sit. Neque sed pretium non urna sed
            etid aenean haretra quam plac adipiscing penatibus aliquam
            adipiscing gravida elementum aliquet eget senectus felis enim diam
            molestie. Aenean haretra quam placerat adipiscing penatibus aliquam{" "}
          </p>

          <button className="flex items-center bg-[#F6D167] py-[1em] px-[1.5em] self-start gap-[0.5em]">
            <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
              Book now
            </p>
            <img
              src={bookNow}
              alt=""
              className="object-cover object-center w-[0.6875em]"
            />
          </button>
        </div>
      </div>
    </>
  );
}
