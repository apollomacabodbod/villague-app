import basic from "src/assets/pricing/basic.svg";
import rightArrow from "src/assets/pricing/right-arrow.svg";
import star from "src/assets/pricing/star.svg";

export default function PricingCards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[4em]">
        {/*  */}
        <div className="flex flex-col p-[2em] mt-[2.75em]">
          <div className="flex flex-col gap-[1em] mb-[2em]">
            <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold ">
              Basic
            </p>

            <div className="flex items-center gap-[0.5em]">
              <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
                $49
              </p>

              <p className="text-[#222] font-Inter text-[0.75rem] font-bold uppercase">
                / Per Package
              </p>
            </div>

            <p className="text-[#222] font-Inter text-[0.875rem] font-normal ">
              Diam et habitasse tortor cras urna eget dolor in turpis venenatis
              eget pulvinar
            </p>
          </div>

          {/*  */}

          <div className="flex flex-col my-[2em] gap-[1em]">
            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Diam egestas posuere
              </p>
            </div>
            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Tempor incididunt labore
              </p>
            </div>

            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Quis nostrud exercitation
              </p>
            </div>

            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Duis aute irure dolor in
              </p>
            </div>

            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Excepteur sint occaecat
              </p>
            </div>
          </div>

          {/*  */}

          <button className="flex items-center py-[1em] px-[1.5em] gap-[0.5em]">
            <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
              select plan
            </p>
            <img
              src={rightArrow}
              alt=""
              className="object-cover object-center w-[0.6875em]"
            />
          </button>
        </div>

        {/*  */}

        <div className="flex flex-col bg-[#222] p-[2em]">
          <div className="flex flex-col gap-[1em] mb-[2em]">
            <div className="flex items-center bg-[#26C] gap-[0.625em] self-start py-[0.25em] px-[0.5em] rounded-[3.125em]">
              <img
                src={star}
                alt=""
                className="object-center object-cover w-[1em]"
              />

              <p className="text-[#FFF] font-Inter text-[0.75rem] font-bold uppercase">
                Most Popular
              </p>
            </div>

            <p className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold ">
              Pro
            </p>

            <div className="flex items-center gap-[0.5em]">
              <p className="text-[#FFF] font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
                $149
              </p>

              <p className="text-[#FFF] font-Inter text-[0.75rem] font-bold uppercase">
                / Per Package
              </p>
            </div>

            <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
              Diam et habitasse tortor cras urna eget dolor in turpis venenatis
              eget pulvinar
            </p>
          </div>

          {/*  */}

          <div className="flex flex-col my-[2em] gap-[1em]">
            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#FFF] font-Inter text-[1.125rem] font-normal ">
                Diam egestas posuere
              </p>
            </div>
            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#FFF] font-Inter text-[1.125rem] font-normal ">
                Tempor incididunt labore
              </p>
            </div>

            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#FFF] font-Inter text-[1.125rem] font-normal ">
                Quis nostrud exercitation
              </p>
            </div>

            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#FFF] font-Inter text-[1.125rem] font-normal ">
                Duis aute irure dolor in
              </p>
            </div>

            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#FFF] font-Inter text-[1.125rem] font-normal ">
                Excepteur sint occaecat
              </p>
            </div>
          </div>

          {/*  */}

          <button className="flex items-center justify-center py-[1em] px-[1.5em] gap-[0.5em] bg-[#F6D167]">
            <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
              select plan
            </p>
            <img
              src={rightArrow}
              alt=""
              className="object-cover object-center w-[0.6875em]"
            />
          </button>
        </div>

        {/*  */}
        <div className="flex flex-col p-[2em] mt-[2.75em]">
          <div className="flex flex-col gap-[1em] mb-[2em]">
            <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold ">
              Basic
            </p>

            <div className="flex items-center gap-[0.5em]">
              <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
                $200
              </p>

              <p className="text-[#222] font-Inter text-[0.75rem] font-bold uppercase">
                / Per Package
              </p>
            </div>

            <p className="text-[#222] font-Inter text-[0.875rem] font-normal ">
              Diam et habitasse tortor cras urna eget dolor in turpis venenatis
              eget pulvinar
            </p>
          </div>

          {/*  */}

          <div className="flex flex-col my-[2em] gap-[1em]">
            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Diam egestas posuere
              </p>
            </div>
            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Tempor incididunt labore
              </p>
            </div>

            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Quis nostrud exercitation
              </p>
            </div>

            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Duis aute irure dolor in
              </p>
            </div>

            <div className="flex items-center gap-[0.5em]">
              <img
                src={basic}
                alt=""
                className="object-center object-cover w-[1.125em]"
              />

              <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
                Excepteur sint occaecat
              </p>
            </div>
          </div>

          {/*  */}

          <button className="flex items-center py-[1em] px-[1.5em] gap-[0.5em]">
            <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
              select plan
            </p>
            <img
              src={rightArrow}
              alt=""
              className="object-cover object-center w-[0.6875em]"
            />
          </button>
        </div>

        {/*  */}
      </div>
    </>
  );
}
