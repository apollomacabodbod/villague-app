import postCommentButton from "src/assets/single-blog/post-comment-button.svg";
import { motion } from "framer-motion";

export default function BlogDetailPostComment() {
  return (
    <>
      <div className="flex flex-col mt-[6.25em] max-w-[1200px] lg:mx-auto  px-[1.25em] mb-[6.25em]">
        <div className="flex flex-col">
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
            Post a comments
          </motion.p>
        </div>

        <div className="flex flex-col mt-[4em] px-[1.25em] lg:p-[2em]">
          <div className="flex flex-col gap-[1em]">
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
              Leave a Reply
            </motion.p>

            <motion.p
              className="text-[#222] font-Inter text-[1.125rem] font-normal "
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
              Your email address will not be published. Required fields are
              marked *
            </motion.p>
          </div>

          <div className="flex flex-col mt-[2em] gap-[1em]">
            <motion.input
              type="text"
              className="pt-[1em] pb-[4em] px-[1em] placeholder-[#222]"
              placeholder="Comment"
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

            <motion.input
              type="text"
              className="p-[1em] placeholder-[#222]"
              placeholder="Name"
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

            <motion.input
              type="text"
              className="p-[1em] placeholder-[#222]"
              placeholder="Email"
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

            <motion.input
              type="text"
              className="p-[1em] placeholder-[#222]"
              placeholder="Website (Optional)"
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

            <motion.button
              className="flex items-center bg-[#F6D167] py-[1em] px-[1.5em] self-start gap-[0.5em] cursor-pointer"
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
                Post comment
              </p>

              <img
                src={postCommentButton}
                alt=""
                className="object-cover object-center w-[0.6875em]"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
