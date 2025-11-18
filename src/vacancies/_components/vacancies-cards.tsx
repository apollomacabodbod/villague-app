import asianMature from "src/assets/vacancies/asian-mature.jpg";
import businessman from "src/assets/vacancies/businessman.jpg";
import businessWoman from "src/assets/vacancies/business-woman.jpg";
import clock from "src/assets/vacancies/clock.svg";

import location from "src/assets/vacancies/location.svg";
import applyButton from "src/assets/vacancies/apply-button.svg";

export default function VacanciesCards() {
  const data = [
    { id: 1, image: asianMature },
    { id: 2, image: businessman },
    { id: 3, image: businessWoman },
  ];
  return (
    <>
      <div className="flex flex-col gap-[2em] mt-[6.25em] max-w-[1200px] lg:mx-auto  px-[1.25em]">
        <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize text-center">
          Vacancies
        </p>

        <p className="text-[#828282] font-Inter text-[1.125rem] font-normal text-center self-center lg:w-[39.375em]  ">
          Diam et habitasse tortor cras donec urna eget dolor in turpis
          venenatis eget pulvinar ipsum quisque non arcu nulla
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[1.875em] mt-[4em] mb-[6.25em]">
        {data.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col gap-[1em]">
              <div
                className="relative bg-center bg-cover aspect-[33/40]"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute bottom-[4%] left-[4%] ">
                  <div className="bg-[#FFF] py-[0.5em] px-[1em]  rounded-[3.125em]  flex flex-col ">
                    <div className="flex items-center gap-[0.5em]">
                      <img src={clock} alt="" className="w-[0.75em]" />
                      <p className="text-[#26C] font-Inter font-bold uppercase">
                        full-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}

              <div className="flex items-center justify-between">
                <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold ">
                  Management
                </p>
                <p className="text-[#F08420] font-Inter text-[0.875rem] font-bold uppercase">
                  $450 - $600
                </p>
              </div>

              {/*  */}
              <div className="flex items-center gap-[0.5em]">
                <img
                  src={location}
                  alt=""
                  className="w-[0.5625em] object-cover object-center"
                />

                <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase">
                  Bali, Indonesia
                </p>
              </div>

              {/*  */}

              <button className="flex items-center gap-[0.5em] bg-[#F6D167] self-start py-[1em] px-[1.5em] cursor-pointer">
                <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
                  Apply
                </p>
                <img
                  src={applyButton}
                  alt=""
                  className="w-[0.6875em] object-cover object-center"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
