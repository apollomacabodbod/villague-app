import OurFacilitiesmassageOne from "src/assets/our-facilities/massage-one.jpg";
import mediterraneanVillaThree from "src/assets/our-facilities/mediterranean-villa-three.jpg";
import mediterraneanVillaTwo from "src/assets/our-facilities/mediterranean-villa-two.jpg";
import swimmingFour from "src/assets/our-facilities/swimming-four.jpg";
import viewDetail from "src/assets/our-facilities/view-detail.svg";
import { motion } from "framer-motion";

export default function HomeOurFacilitiesCards() {
  const data = [
    { id: 1, title: "Family Experience", image: OurFacilitiesmassageOne },
    { id: 2, title: "Private Spa", image: mediterraneanVillaThree },
    { id: 3, title: "Mini Golf", image: mediterraneanVillaTwo },
    { id: 4, title: "Outdoor Lounging Area", image: swimmingFour },
  ];
  return (
    <>
      <div className="mt-[4em] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[1.90625em]">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-cover bg-center flex flex-col  h-[25em] "
            style={{ backgroundImage: `url(${item.image})` }}
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
            <div className="absolute top-[20.8125em] left-[3.375em] right-0 ">
              <div className="flex flex-col p-[1em] bg-[#FFF] ">
                <motion.p
                  className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold"
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

                <div className="flex items-center gap-[0.5em]">
                  <motion.p
                    className="text-[#26C] font-Inter text-[0.875rem] font-bold uppercase"
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
                    View detail
                  </motion.p>

                  <motion.img
                    src={viewDetail}
                    alt=""
                    className="object-cover object-center"
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
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
