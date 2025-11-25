import { motion } from "framer-motion";

export default function BlogDetailRelatedArticles() {
  return (
    <>
      <div className="flex flex-col mt-[6.25em]">
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
          Related Articles
        </motion.p>
      </div>
    </>
  );
}
