import facade from "src/assets/blog/facade.jpg";
import { Link } from "react-router-dom";
import home from "src/assets/about-us/home.svg";
import route from "src/assets/about-us/route.svg";
import { motion } from "framer-motion";

export default function BlogHeroSection() {
  return (
    <>
      <div
        className="relative flex flex-col bg-cover bg-center"
        style={{
          backgroundImage: `url(${facade})`,
        }}
      >
        <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]"></div>

        <div className="z-10">
          <div className="flex flex-col mt-[11.96875em] mb-[11.0625em] max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[2em]">
            <motion.p
              className="text-[#F6D167] font-Inter text-[0.875rem] font-bold uppercase"
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
              Blog
            </motion.p>

            <div className="sm:flex sm:items-center sm:justify-between">
              <motion.p
                className="text-[#FFF] font-PlayfairDisplay text-[4.1rem] lg:text-[4.5rem] font-bold capitalize"
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
                Blog
              </motion.p>

              <motion.div
                className="flex items-center gap-[1em] mt-[1em] sm:mt-[0em]"
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
                  src={home}
                  alt=""
                  className="object-cover object-center w-[1em]"
                />
                <Link
                  to="/"
                  className="text-[#FFF] font-Inter text-[0.875rem] font-bold uppercase"
                >
                  home
                </Link>

                <img
                  src={route}
                  alt=""
                  className="object-cover object-center w-[0.5em]"
                />

                <Link
                  to="/blog"
                  className="text-[#FFF] font-Inter text-[0.875rem] font-bold uppercase"
                >
                  Blog
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
