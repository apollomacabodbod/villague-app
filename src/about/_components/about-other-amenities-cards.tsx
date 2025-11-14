import checkCircle from "src/assets/about-us/check-circle.svg";

export default function AboutOtherAmenitiesCards() {
  const data = [
    {
      id: 1,

      title: "Trusted",
      description:
        "Gravida vulputate aliquet tempor siteque sed quam pretium non urna sed etid aene haretra adipiscing penatibus a adipiscing gravida.",
      image: checkCircle,
    },

    {
      id: 2,
      title: "Maintenance",
      description:
        "Gravida vulputate aliquet tempor siteque sed quam pretium non urna sed etid aene haretra adipiscing penatibus a adipiscing gravida.",

      image: checkCircle,
    },

    {
      id: 3,
      title: "Easy Booking",
      description:
        "Gravida vulputate aliquet tempor siteque sed quam pretium non urna sed etid aene haretra adipiscing penatibus a adipiscing gravida.",
      image: checkCircle,
    },

    {
      id: 4,
      title: "Help Services",
      description:
        "Gravida vulputate aliquet tempor siteque sed quam pretium non urna sed etid aene haretra adipiscing penatibus a adipiscing gravida.",
      image: checkCircle,
    },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-2 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[1.875em]  relative top-[5.625em]">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-[#FFF] p-[2em] gap-[1em]"
          >
            <div className="flex items-center gap-[1em]">
              <img
                src={item.image}
                alt=""
                className="object-cover object-center w-[2em]"
              />

              <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold">
                {item.title}
              </p>
            </div>

            <p className="text-[#828282] font-Inter font-normal ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
