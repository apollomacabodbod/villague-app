import PrivateCHef from "src/assets/other-amenities/Cutlery.svg";
import Waiter from "src/assets/other-amenities/Waiter.svg";
import parkingCar from "src/assets/other-amenities/parking Car.svg";
import fitness from "src/assets/other-amenities/fitness.svg";
import laundry from "src/assets/other-amenities/laundry.svg";
import CCTV from "src/assets/other-amenities/CCTV.svg";
import receptionist from "src/assets/other-amenities/receptionist.svg";
import iconArrow from "src/assets/other-amenities/icon-arrow.svg";

export default function HomeOtherAmenities() {
  return (
    <>
      <div className="flex flex-col mt-[6.25em] max-w-[1200px] lg:mx-auto  px-[1.25em]">
        <p className="text-[#222] text-center font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
          Other Amenities
        </p>

        <p className="text-[#828282] font-Inter text-[1.125rem] font-normal text-center mt-[2em]">
          Diam et habitasse tortor cras donec urna eget dolor in turpis
          venenatis eget pulvinar ipsum quisque non arcu nulla
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mt-[4em] gap-[1.875em]">
          <div className="flex flex-col gap-[1.5em] ">
            <div className="flex items-center justify-center">
              <img
                src={PrivateCHef}
                alt=""
                className="object-cover h-[2em] w-[2em] object-center"
              />
            </div>

            <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase text-center">
              Private CHef
            </p>
          </div>
          <div className="flex flex-col gap-[1.5em]">
            <div className="flex items-center justify-center">
              <img
                src={Waiter}
                alt=""
                className="object-cover h-[2em] w-[2em] object-center"
              />
            </div>

            <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase text-center">
              Private CHef
            </p>
          </div>

          <div className="flex flex-col gap-[1.5em]">
            <div className="flex items-center justify-center">
              <img
                src={parkingCar}
                alt=""
                className="object-cover h-[2em] w-[2em] object-center"
              />
            </div>

            <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase text-center">
              parking
            </p>
          </div>

          <div className="flex flex-col gap-[1.5em]">
            <div className="flex items-center justify-center">
              <img
                src={fitness}
                alt=""
                className="object-cover h-[2em] w-[2em] object-center"
              />
            </div>

            <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase text-center">
              Fitness
            </p>
          </div>

          <div className="flex flex-col gap-[1.5em]">
            <div className="flex items-center justify-center">
              <img
                src={laundry}
                alt=""
                className="object-cover h-[2em] w-[2em] object-center"
              />
            </div>

            <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase text-center">
              Laundry
            </p>
          </div>

          <div className="flex flex-col gap-[1.5em]">
            <div className="flex items-center justify-center">
              <img
                src={CCTV}
                alt=""
                className="object-cover h-[2em] w-[2em] object-center"
              />
            </div>

            <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase text-center">
              Security
            </p>
          </div>

          <div className="flex flex-col gap-[1.5em]">
            <div className="flex items-center justify-center">
              <img
                src={receptionist}
                alt=""
                className="object-cover h-[2em] w-[2em] object-center"
              />
            </div>

            <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase text-center">
              Support
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[4em]">
          <img src={iconArrow} alt="" className="object-cover cursor-pointer" />
        </div>
      </div>
    </>
  );
}
