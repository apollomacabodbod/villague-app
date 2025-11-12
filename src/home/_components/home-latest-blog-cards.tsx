import mediterranean from "src/assets/latest-blog/mediterranean.jpg";
import modernHouse from "src/assets/latest-blog/modern-house.jpg";
import modernHouseTwo from "src/assets/latest-blog/modern-house-two.jpg";

import { motion } from "framer-motion";

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
            <motion.img
              src={item.image}
              alt=""
              className="object-cover object-center h-[20.625em] "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            />

            <motion.p
              className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              {item.title}
            </motion.p>

            <motion.p
              className="text-[#828282] font-Inter text-[0.75rem] uppercase"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              {item.comment}
            </motion.p>
          </div>
        ))}
      </div>
    </>
  );
}
