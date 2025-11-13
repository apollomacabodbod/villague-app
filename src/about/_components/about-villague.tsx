import modernHouse from "src/assets/about-villague/modern-house.jpg";
import one from "src/assets/about-villague/one.svg";
import two from "src/assets/about-villague/two.svg";
import three from "src/assets/about-villague/three.svg";
import four from "src/assets/about-villague/four.svg";
import five from "src/assets/about-villague/five.svg";
import six from "src/assets/about-villague/six.svg";

import bookNow from "src/assets/about-villague/book-now.svg";

import { motion } from "framer-motion";

export default function AboutVillague() {
  return (
    <>
      <div className="grid lg:grid-cols-2 ">
        <div className="flex flex-col ">
          <motion.img
            src={modernHouse}
            alt=""
            className="object-cover object-center h-[31.1875em] lg:h-[56.25em] "
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

        <div className="flex flex-col py-[3.13em] lg:py-[6.25em] max-w-[1200px] lg:mx-auto  px-[1.25em] lg:px-[4em] gap-[2em]">
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
            About Villague
          </motion.p>

          <motion.p
            className="text-[#828282] font-Inter text-[1.125rem] font-normal  "
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
            Our Partners
          </motion.p>

          <div className="grid grid-cols-3 gap-y-[2em] gap-[1em]">
            <motion.img
              src={one}
              alt=""
              className="object-cover object-center w-[9.375em]"
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

            <motion.img
              src={two}
              alt=""
              className="object-cover object-center w-[9.375em]"
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

            <motion.img
              src={three}
              alt=""
              className="object-cover object-center w-[9.375em]"
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

            <motion.img
              src={four}
              alt=""
              className="object-cover object-center w-[9.375em]"
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

            <motion.img
              src={five}
              alt=""
              className="object-cover object-center w-[9.375em]"
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

            <motion.img
              src={six}
              alt=""
              className="object-cover object-center w-[9.375em]"
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

          <motion.p
            className="text-[#828282] font-Inter text-[1.125rem] font-normal"
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

          <motion.button
            className="flex items-center bg-[#F6D167] py-[1em] px-[1.5em] self-start gap-[0.5em]"
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
            <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
              Book now
            </p>
            <img
              src={bookNow}
              alt=""
              className="object-cover object-center w-[0.6875em]"
            />
          </motion.button>
        </div>
      </div>
    </>
  );
}
