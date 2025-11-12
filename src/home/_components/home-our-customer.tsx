import viewAll from "src/assets/our-customer/view-all.svg";
import doubleQuotes from "src/assets/our-customer/double-quotes.svg";
import star from "src/assets/our-customer/star.svg";
import portrait from "src/assets/our-customer/portrait.jpg";
import youngPretty from "src/assets/our-customer/young-pretty.jpg";

export default function HomeOurCustomer() {
  return (
    <>
      <div className="bg-[#222]  pt-[6.25em] mb-[15em]">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em]">
          <div className="md:flex md:items-start md:justify-between">
            <p className="text-[#FFF] font-PlayfairDisplay text-[2.25rem] font-bold capitalize ">
              What Our Customer Say About Us
            </p>

            <button className="flex items-center self-start bg-[#F6D167] px-[1.5em] py-[1em] gap-[0.5em] mt-[1.5em] md:mt-[0em]">
              <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
                View All
              </p>

              <img
                src={viewAll}
                alt=""
                className="object-cover object-center"
              />
            </button>
          </div>

          <p className="text-[#F5F5F5] font-Inter text-[1.125rem] font-normal lg:w-[37.5em] mt-[2em]">
            Diam et habitasse tortor cras donec urna eget dolor in turpis
            venenatis eget pulvinar ipsum quisque non arcu nulla
          </p>

          <div className="grid md:grid-cols-2  relative top-[4em] gap-[1.875em]">
            <div className="flex flex-col p-[2em] bg-[#FFF] gap-[1.5em]">
              <img
                src={doubleQuotes}
                alt=""
                className="object-cover object-center w-[2.286em]"
              />

              <img
                src={star}
                alt=""
                className="object-cover object-center w-[6.375em] "
              />

              <p className="text-[#222] font-PlayfairDisplay text-[1.5rem] font-bold ">
                Awesome Services!
              </p>

              <p className="text-[#828282] font-Inter text-[1.125rem] font-normal ">
                Gravida vulputate aliquet tempor siteque sed quam pretium non
                urna sed etid aene haretra adipiscing penatibus a adipiscing
                gravida vulputate elemen aliquet eget senectus siteque sed quam
                pretium.
              </p>

              <div className="flex flex-col">
                <div className="flex items-start gap-[1em]">
                  <div className="flex flex-col">
                    <img
                      src={portrait}
                      alt=""
                      className="w-[4em] h-[4em] object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col gap-[0.5em]">
                    <p className="text-[#222] font-Inter text-[1.25rem] font-bold uppercase">
                      James Mason
                    </p>
                    <p className="text-[#26C] font-Inter font-bold text-[0.75rem] uppercase">
                      Freelancer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-[2em] bg-[#FFF] gap-[1.5em]">
              <img
                src={doubleQuotes}
                alt=""
                className="object-cover object-center w-[2.286em]"
              />

              <img
                src={star}
                alt=""
                className="object-cover object-center w-[6.375em] "
              />

              <p className="text-[#222] font-PlayfairDisplay text-[1.5rem] font-bold ">
                Awesome Services!
              </p>

              <p className="text-[#828282] font-Inter text-[1.125rem] font-normal ">
                Gravida vulputate aliquet tempor siteque sed quam pretium non
                urna sed etid aene haretra adipiscing penatibus a adipiscing
                gravida vulputate elemen aliquet eget senectus siteque sed quam
                pretium.
              </p>

              <div className="flex flex-col">
                <div className="flex items-start gap-[1em]">
                  <div className="flex flex-col">
                    <img
                      src={youngPretty}
                      alt=""
                      className="w-[4em] h-[4em] object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col gap-[0.5em]">
                    <p className="text-[#222] font-Inter text-[1.25rem] font-bold uppercase">
                      Anna Jackson
                    </p>
                    <p className="text-[#26C] font-Inter font-bold text-[0.75rem] uppercase">
                      Traveller
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
