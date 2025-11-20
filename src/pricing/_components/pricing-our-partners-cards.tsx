import one from "src/assets/our-partners/one.svg";
import two from "src/assets/our-partners/two.svg";
import three from "src/assets/our-partners/three.svg";
import four from "src/assets/our-partners/four.svg";
import five from "src/assets/our-partners/five.svg";
import six from "src/assets/our-partners/six.svg";

import { motion } from "framer-motion";

export default function PricingOurPartnersCards() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[1em]  max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[2em]">
        <motion.div
          className="flex items-center justify-center"
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
          <img
            src={one}
            alt=""
            className="object-cover object-center w-[9.375em] "
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
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
          <img
            src={two}
            alt=""
            className="object-cover object-center w-[9.375em] "
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
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
          <img
            src={three}
            alt=""
            className="object-cover object-center w-[9.375em] "
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
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
          <img
            src={four}
            alt=""
            className="object-cover object-center w-[9.375em] "
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
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
          <img
            src={five}
            alt=""
            className="object-cover object-center w-[9.375em]"
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
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
          <img
            src={six}
            alt=""
            className="object-cover object-center w-[9.375em] "
          />
        </motion.div>
      </div>
    </>
  );
}
