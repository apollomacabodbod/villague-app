import mediterraneanVillaInterior from "src/assets/villas/mediterranean-villa-interior.jpg";
import viewAllButton from "src/assets/villas/view-all-button.svg";
import logoipsumOne from "src/assets/villas/logoipsum-one.svg";
import logoipsumTwo from "src/assets/villas/logoipsum-two.svg";
import logoipsumThree from "src/assets/villas/logoipsum-three.svg";
import logoipsumFour from "src/assets/villas/logoipsum-four.svg";
import logoipsumFive from "src/assets/villas/logoipsum-five.svg";
import logoipsumSix from "src/assets/villas/logoipsum-six.svg";

export default function HomeAboutVillague() {
  const data = [
    { id: 1, image: logoipsumOne },
    { id: 2, image: logoipsumTwo },
    { id: 3, image: logoipsumThree },
    { id: 4, image: logoipsumFour },
    { id: 5, image: logoipsumFive },
    { id: 6, image: logoipsumSix },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <img
            src={mediterraneanVillaInterior}
            alt=""
            className="object-cover object-center  md:w-[45.3125em]"
          />
        </div>

        <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] md:px-[4em] gap-[2em] mt-[1em] md:mt-[0em]">
          <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize ">
            About Villague
          </p>

          <p className="text-[#828282] font-Inter text-[1.125rem] font-normal">
            Gravida vulputate aliquet tempor sit. Neque sed pretium non urna sed
            etid aenean haretra quam plac adipiscing penatibus aliquam
            adipiscing gravida elementum aliquet eget senectus felis enim diam
            molestie. Aenean haretra quam placerat adipiscing penatibus aliquam{" "}
          </p>

          <button className="flex items-center justify-between bg-[#F6D167] py-[1em] px-[1.5em] self-start gap-[0.5em]">
            <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
              read more
            </p>

            <img src={viewAllButton} alt="" className="object-cover" />
          </button>

          <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold ">
            Our Partners
          </p>

          <div className="grid grid-cols-3 gap-[2em]">
            {data.map((item) => (
              <div className="flex items-center justify-between">
                {" "}
                <img
                  src={item.image}
                  alt=""
                  className="object-cover object-center"
                />{" "}
              </div>
            ))}
          </div>
          {/* 
          <div className="flex items-center justify-between">
            <img
              src={logoipsumOne}
              alt=""
              className="object-cover object-center"
            />

            <img
              src={logoipsumTwo}
              alt=""
              className="object-cover object-center"
            />

            <img
              src={logoipsumThree}
              alt=""
              className="object-cover object-center"
            />
          </div>

          <div className="flex items-center justify-between">
            <img
              src={logoipsumFour}
              alt=""
              className="object-cover object-center"
            />

            <img
              src={logoipsumFive}
              alt=""
              className="object-cover object-center"
            />

            <img
              src={logoipsumSix}
              alt=""
              className="object-cover object-center"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
