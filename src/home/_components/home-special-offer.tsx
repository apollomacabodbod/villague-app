import viewAll from "src/assets/other-amenities/view-all.svg";
import mediterraneanVilla from "src/assets/other-amenities/mediterranean-villa.jpg";
import mediterraneanVillaInterior from "src/assets/other-amenities/mediterranean-villa-interior.jpg";
import massage from "src/assets/other-amenities/massage.jpg";
import location from "src/assets/other-amenities/location.svg";
import stars from "src/assets/other-amenities/stars.svg";
import price from "src/assets/other-amenities/price.svg";
import bookNow from "src/assets/other-amenities/book-now.svg";

import bathroom from "src/assets/other-amenities/bathroom.svg";
import bathtube from "src/assets/other-amenities/bathtube.svg";
import breakfast from "src/assets/other-amenities/breakfast.svg";
import fitness from "src/assets/other-amenities/fitness.svg";
import Minibar from "src/assets/other-amenities/Minibar.svg";
import RoomService from "src/assets/other-amenities/Room Service.svg";
import laundry from "src/assets/other-amenities/laundry.svg";

export default function HomeSpecialOffer() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[2em] mt-[3.125em]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
            Special offer
          </p>

          <button className="flex items-center border border-[#222] gap-[0.5em] py-[1em] px-[1.5em] mt-[1em] sm:mt-[0em]">
            <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
              View All
            </p>
            <img src={viewAll} alt="" className="object-cover object-center" />
          </button>
        </div>

        <p className="text-[#828282] font-Inter text-[1.125rem] font-normal lg:w-[33.75em]">
          Diam et habitasse tortor cras donec urna eget dolor in turpis
          venenatis eget pulvinar ipsum quisque non arcu nulla
        </p>
      </div>

      <div className="flex flex-col gap-[1.875em] max-w-[1200px] lg:mx-auto  px-[1.25em]  mt-[4em]">
        <div
          className="h-[28.0625em] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${mediterraneanVilla})` }}
        >
          <div className="customOne:block hidden absolute left-[33.75em] top-[13.375em]">
            <div className=" flex flex-col p-[2em] bg-[#FFF]  ">
              <div className="flex items-center gap-[0.5em]">
                <img
                  src={location}
                  alt=""
                  className="object-cover object-center"
                />
                <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase  ">
                  Bali, Indonesia
                </p>
              </div>
              <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
                Majapahit Beach Villas
              </p>

              <div className="flex items-center gap-[1em]">
                <img
                  src={stars}
                  alt=""
                  className="object-cover object-center"
                />

                <p className="text-[#27AE60] font-Inter text-[0.875rem] font-bold uppercase">
                  5.0 Average - 40 Reviews
                </p>
              </div>

              <p className="text-[#828282] font-Inter text-[1.125rem] font-normal mt-[2em]">
                Gravida vulputate aliquet tempor siteque sed quam pretium non
                urna sed etid aene haretra adipiscing penatibus a adipiscing
                gravida vulputate elemen aliquet eget senectus siteque sed quam
                pretium.
              </p>

              <div className="flex items-center justify-between mt-[2em] gap-[2em]">
                <img
                  src={price}
                  alt=""
                  className="object-cover object-center"
                />

                <button className="flex items-center justify-center py-[1em] px-[1.5em] bg-[#F6D167] w-full gap-[0.5em]">
                  <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase ">
                    book now
                  </p>
                  <img
                    src={bookNow}
                    alt=""
                    className="object-cover object-center"
                  />
                </button>
              </div>

              <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase mt-[2em]">
                Featured:
              </p>

              <div className="grid grid-cols-7 mt-[1em]">
                <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={bathroom}
                      alt=""
                      className="object-cover object-center w-[1.125em] h-[1.125em]"
                    />
                  </div>
                </div>

                <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={bathtube}
                      alt=""
                      className="object-cover object-center w-[1.125em] h-[1.125em]"
                    />
                  </div>
                </div>

                <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={breakfast}
                      alt=""
                      className="object-cover object-center w-[1.125em] h-[1.125em]"
                    />
                  </div>
                </div>

                <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={fitness}
                      alt=""
                      className="object-cover object-center w-[1.125em] h-[1.125em]"
                    />
                  </div>
                </div>

                <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={Minibar}
                      alt=""
                      className="object-cover object-center w-[1.125em] h-[1.125em]"
                    />
                  </div>
                </div>

                <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={RoomService}
                      alt=""
                      className="object-cover object-center w-[1.125em] h-[1.125em]"
                    />
                  </div>
                </div>

                <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={laundry}
                      alt=""
                      className="object-cover object-center w-[1.125em] h-[1.125em]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="customTwo:flex customTwo:items-center   customTwo:gap-[1.875em] mb-[2em] customOne:mb-[6.25em]">
          <img
            src={mediterraneanVillaInterior}
            alt=""
            className="object-cover object-center h-[15em] w-full customOne:w-[15em]"
          />

          <img
            src={massage}
            alt=""
            className="object-cover object-center h-[15em] w-full customOne:w-[15em] mt-[1.875em] customTwo:mt-[0em]"
          />
        </div>
      </div>

      <div className="block customOne:hidden max-w-[1200px] lg:mx-auto  px-[1.25em]">
        <div className=" flex flex-col  p-[2em] bg-[#FFF]  ">
          <div className="flex items-center gap-[0.5em]">
            <img src={location} alt="" className="object-cover object-center" />
            <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase  ">
              Bali, Indonesia
            </p>
          </div>
          <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
            Majapahit Beach Villas
          </p>

          <div className="sm:flex sm:items-center  sm:gap-[1em] ">
            <img src={stars} alt="" className="object-cover object-center" />

            <p className="text-[#27AE60] font-Inter text-[0.875rem] font-bold uppercase mt-[0.5em] sm:mt-[0em] ">
              5.0 Average - 40 Reviews
            </p>
          </div>

          <p className="text-[#828282] font-Inter text-[1.125rem] font-normal mt-[2em]">
            Gravida vulputate aliquet tempor siteque sed quam pretium non urna
            sed etid aene haretra adipiscing penatibus a adipiscing gravida
            vulputate elemen aliquet eget senectus siteque sed quam pretium.
          </p>

          <div className="sm:flex sm:items-center sm:justify-between mt-[2em] sm:gap-[2em]">
            <img src={price} alt="" className="object-cover object-center" />

            <button className="flex items-center justify-center py-[1em] px-[1.5em] bg-[#F6D167] w-full gap-[0.5em] mt-[1em] sm:mt-[0em]">
              <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase ">
                book now
              </p>
              <img
                src={bookNow}
                alt=""
                className="object-cover object-center"
              />
            </button>
          </div>

          <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase mt-[2em]">
            Featured:
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-7 mt-[1em] gap-y-[1em] sm:gap-[0em]">
            <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={bathroom}
                  alt=""
                  className="object-cover object-center w-[1.125em] h-[1.125em]"
                />
              </div>
            </div>

            <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={bathtube}
                  alt=""
                  className="object-cover object-center w-[1.125em] h-[1.125em]"
                />
              </div>
            </div>

            <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={breakfast}
                  alt=""
                  className="object-cover object-center w-[1.125em] h-[1.125em]"
                />
              </div>
            </div>

            <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={fitness}
                  alt=""
                  className="object-cover object-center w-[1.125em] h-[1.125em]"
                />
              </div>
            </div>

            <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={Minibar}
                  alt=""
                  className="object-cover object-center w-[1.125em] h-[1.125em]"
                />
              </div>
            </div>

            <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={RoomService}
                  alt=""
                  className="object-cover object-center w-[1.125em] h-[1.125em]"
                />
              </div>
            </div>

            <div className="rounded-[6.25em] border border-[#ACB889] w-[2.625em] h-[2.625em] relative bg-cover bg-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={laundry}
                  alt=""
                  className="object-cover object-center w-[1.125em] h-[1.125em]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
