import mediterranean from "src/assets/latest-blog/mediterranean.jpg";
import modernHouse from "src/assets/latest-blog/modern-house.jpg";
import modernHouseTwo from "src/assets/latest-blog/modern-house-two.jpg";

export default function HomeLatestBlogCards() {
  const data = [
    {
      id: 1,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: mediterranean,
    },

    {
      id: 2,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: modernHouse,
    },

    {
      id: 3,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: modernHouseTwo,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[1.875em] max-w-[1200px] lg:mx-auto  px-[1.25em] my-[4em]">
        {data.map((item) => (
          <div className="flex flex-col gap-[1em]" key={item.id}>
            <img
              src={item.image}
              alt=""
              className="object-cover object-center h-[20.625em] "
            />

            <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold ">
              {item.title}
            </p>

            <p className="text-[#828282] font-Inter text-[0.75rem] uppercase">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
