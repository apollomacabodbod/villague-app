import modernHouseWithGarden from "src/assets/blog-detail/modern-house-with-garden.jpg";
import modernMansion from "src/assets/blog-detail/modern-mansion.jpg";
import modernVillaWithPool from "src/assets/blog-detail/modern-villa-with-pool.jpg";

export default function BlogDetailRelatedArticlesCards() {
  const data = [
    {
      id: 1,
      title: "Tellus massa tempor dignissim",
      comments: "OCTOBER 21, 2021 NO COMMENTS",
      image: modernHouseWithGarden,
    },

    {
      id: 2,
      title: "Tellus massa tempor dignissim",
      comments: "OCTOBER 21, 2021 NO COMMENTS",
      image: modernMansion,
    },

    {
      id: 3,
      title: "Tellus massa tempor dignissim",
      comments: "OCTOBER 21, 2021 NO COMMENTS",
      image: modernVillaWithPool,
    },
  ];
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1.875em] max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[4em] ">
        {data.map((item) => (
          <div className="flex flex-col gap-[1em]" key={item.id}>
            <img
              src={item.image}
              alt=""
              className="object-cover object-center aspect-[330/240]"
            />

            <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold ">
              Tellus massa tempor dignissim
            </p>

            <p className="text-[#828282] font-Inter text-[0.75rem] uppercase">
              OCTOBER 21, 2021 NO COMMENTS
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
