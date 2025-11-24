import mediterraneanVillaInterior from "src/assets/blog-latest-posts/mediterranean-villa-interior.jpg";
import modernVillaWithPool from "src/assets/blog-latest-posts/modern-villa-with-pool.jpg";
import { motion } from "framer-motion";

export default function BlogLatestBlogCards() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[4em] ">
        <div className="customFour:flex customFour:items-start customFour:justify-between customFour:gap-[1.875em] ">
          <div className="flex flex-col gap-[1em]">
            <motion.img
              src={mediterraneanVillaInterior}
              alt=""
              className="object-cover object-buttom aspect-[690/516] "
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
              className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase "
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
              senectus felis enim diam molestie. Aenean haretra quam placerat
              adipiscing pena
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 customFour:grid-cols-1 gap-[1.875em] mt-[2em] customFour:mt-[0em]">
            <div className="flex flex-col gap-[1em]">
              <motion.img
                src={modernVillaWithPool}
                alt=""
                className="object-cover object-center  customFour:w-[20.625em] h-[15em]"
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
                className="text-[#828282] font-Inter text-[0.75rem] font-bold  uppercase"
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
            </div>

            <div className="flex flex-col gap-[1em]">
              <motion.img
                src={modernVillaWithPool}
                alt=""
                className="object-cover object-center  customFour:w-[20.625em] h-[15em]"
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
                className="text-[#828282] font-Inter text-[0.75rem] font-bold  uppercase"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
