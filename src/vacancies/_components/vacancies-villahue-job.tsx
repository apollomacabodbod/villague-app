import mediterraneanVilla from "src/assets/vacancies/mediterranean-villa.jpg";

export default function VacanciesVillahueJob() {
  return (
    <>
      <div className="grid lg:grid-cols-2 ">
        <div className="flex flex-col">
          <img
            src={mediterraneanVilla}
            alt=""
            className="object-cover object-center aspect-[785/568]"
          />
        </div>

        <div className="flex flex-col gap-[2em] max-w-[1200px] lg:mx-auto  px-[1.25em] lg:px-[4em] mt-[2em] lg:mt-[0em]">
          <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize">
            What to expect working in a Villahue job
          </p>

          <p className="text-[#828282] font-Inter text-[1.125rem] font-normal ">
            Gravida vulputate aliquet tempor sit. Neque sed pretium non urna sed
            etid aenean haretra quam plac adipiscing penatibus aliquam
            adipiscing gravida elementum aliquet eget senectus felis enim diam
            molestie. Aenean haretra quam placerat adipiscing penatibus aliquam{" "}
          </p>

          <p className="text-[#828282] font-Inter text-[1.125rem] font-normal ">
            Adipiscing penatibus aliquam adipiscing gravida elementum aliquet
            eget senectus felis enim diam molestie. Aenean haretra quam placerat
            adipiscing penatibus aliquam{" "}
          </p>
        </div>
      </div>
    </>
  );
}
