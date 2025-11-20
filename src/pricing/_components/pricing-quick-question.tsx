import { motion } from "framer-motion";

export default function PricingQuickQuestion() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[2em]">
        <motion.p
          className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize text-center"
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
          Quick Questions
        </motion.p>

        <motion.p
          className="text-[#828282] font-Inter text-[1.125rem] font-normal text-center self-center lg:w-[39.375em]"
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
