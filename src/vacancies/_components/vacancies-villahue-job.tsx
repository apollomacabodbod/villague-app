import mediterraneanVilla from "src/assets/vacancies/mediterranean-villa.jpg";
import { motion } from "framer-motion";

export default function VacanciesVillahueJob() {
  return (
    <>
      <div className="grid lg:grid-cols-2 ">
        <div className="flex flex-col">
          <motion.img
            src={mediterraneanVilla}
            alt=""
            className="object-cover object-center aspect-[785/568]"
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

        <div className="flex flex-col gap-[2em] max-w-[1200px] lg:mx-auto  px-[1.25em] lg:px-[4em] mt-[2em] lg:mt-[0em]">
          <motion.p
            className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize"
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
            What to expect working in a Villahue job
          </motion.p>

          <motion.p
            className="text-[#828282] font-Inter text-[1.125rem] font-normal "
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
            Gravida vulputate aliquet tempor sit. Neque sed pretium non urna sed
            etid aenean haretra quam plac adipiscing penatibus aliquam
            adipiscing gravida elementum aliquet eget senectus felis enim diam
            molestie. Aenean haretra quam placerat adipiscing penatibus aliquam{" "}
          </motion.p>

          <motion.p
            className="text-[#828282] font-Inter text-[1.125rem] font-normal "
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
            Adipiscing penatibus aliquam adipiscing gravida elementum aliquet
            eget senectus felis enim diam molestie. Aenean haretra quam placerat
            adipiscing penatibus aliquam{" "}
          </motion.p>
        </div>
      </div>
    </>
  );
}
