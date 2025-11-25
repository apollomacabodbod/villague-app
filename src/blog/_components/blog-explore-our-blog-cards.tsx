import one from "src/assets/explore-our-blog/one.jpg";
import two from "src/assets/explore-our-blog/two.jpg";
import three from "src/assets/explore-our-blog/three.jpg";
import four from "src/assets/explore-our-blog/four.jpg";
import five from "src/assets/explore-our-blog/five.jpg";
import six from "src/assets/explore-our-blog/six.jpg";
import seven from "src/assets/explore-our-blog/seven.jpg";
import eight from "src/assets/explore-our-blog/eight.jpg";
import nine from "src/assets/explore-our-blog/nine.jpg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function BlogExploreOurBlogCards() {
  const data = [
    {
      id: 1,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: one,
    },

    {
      id: 2,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: two,
    },

    {
      id: 3,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: three,
    },

    {
      id: 4,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: four,
    },
    {
      id: 5,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: five,
    },
    {
      id: 6,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: six,
    },
    {
      id: 7,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: seven,
    },
    {
      id: 8,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: eight,
    },
    {
      id: 9,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: nine,
    },
  ];
  return (
    <>
      <div className="flex flex-col mt-[6.25em]">
        <motion.p
          className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize text-center "
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
          Explore Our Blog
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-[1.875em] max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[4em]">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/blog/${item.id}`}
            className="flex flex-col gap-[1em]"
          >
            <motion.img
              src={item.image}
              alt=""
              className="object-cover object-center aspect-[330/240]"
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
              Tellus massa tempor dignissim
            </motion.p>

            <motion.p
              className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase"
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
              OCTOBER 21, 2021 NO COMMENTS
            </motion.p>
          </Link>
        ))}
      </div>
    </>
  );
}
