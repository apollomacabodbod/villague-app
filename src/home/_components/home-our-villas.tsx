import viewAllButton from "src/assets/villas/view-all-button.svg";
import { motion } from "framer-motion";

export default function HomeOurVillas() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[6.25em]">
        <div className="lg:flex lg:items-start lg:justify-between">
          <motion.p
            className="text-[#222] font-PlayfairDisplay font-bold capitalize text-[2.25rem]"
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
            Our Villas
          </motion.p>

          <motion.button
            className="bg-[#F6D167] py-[1em] px-[1.5em] flex items-center self-start gap-[0.5em] mt-[1em] lg:mt-[0em]"
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
            <p className="text-[#222] font-Inter text-[0.875rem] uppercase font-bold  ">
              View All
            </p>

            <img src={viewAllButton} alt="" />
          </motion.button>
        </div>

        <motion.p
          className="text-[#828282] font-Inter text-[1.125rem] font-normal lg:w-[33.75em] mt-[2em]"
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
          Diam et habitasse tortor cras donec urna eget dolor in turpis
          venenatis eget pulvinar ipsum quisque non arcu nulla
        </motion.p>
      </div>
    </>
  );
}
