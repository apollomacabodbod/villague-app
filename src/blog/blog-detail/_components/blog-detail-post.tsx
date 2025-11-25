import { useParams } from "react-router-dom";

import one from "src/assets/explore-our-blog/one.jpg";
import two from "src/assets/explore-our-blog/two.jpg";
import three from "src/assets/explore-our-blog/three.jpg";
import four from "src/assets/explore-our-blog/four.jpg";
import five from "src/assets/explore-our-blog/five.jpg";
import six from "src/assets/explore-our-blog/six.jpg";
import seven from "src/assets/explore-our-blog/seven.jpg";
import eight from "src/assets/explore-our-blog/eight.jpg";
import nine from "src/assets/explore-our-blog/nine.jpg";

import facebook from "src/assets/single-blog/facebook.svg";
import twitter from "src/assets/single-blog/twitter.svg";
import instagram from "src/assets/single-blog/instagram.svg";
import youtube from "src/assets/single-blog/youtube.svg";

import mediterraneanVilla from "src/assets/single-blog/mediterranean-villa.jpg";
import mediterraneanVillaInterior from "src/assets/single-blog/mediterranean-villa-interior.jpg";

import { motion } from "framer-motion";

export default function BlogSinglePost() {
  const data = [
    {
      id: 1,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: one,
    },

    {
      id: 2,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: two,
    },

    {
      id: 3,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: three,
    },

    {
      id: 4,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: four,
    },
    {
      id: 5,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: five,
    },
    {
      id: 6,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: six,
    },
    {
      id: 7,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: seven,
    },
    {
      id: 8,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: eight,
    },
    {
      id: 9,
      title: "Tellus massa tempor dignissim",
      comment: "OCTOBER 21, 2021 NO COMMENTS",
      image: nine,
    },
  ];

  const { id } = useParams();

  const blog = data.find((item) => item.id === Number(id));
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[11.34375em]">
        <motion.p
          className="text-[#222] text-[4.5rem] font-bold capitalize font-PlayfairDisplay"
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
          Tips for a fun vacation with family abroad
        </motion.p>

        <div className="lg:flex lg:items-center lg:justify-between mt-[2em]">
          <div className="flex flex-col">
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
              October 18, 2021 No Comments
            </motion.p>
          </div>

          <div className="flex flex-col mt-[2em] lg:mt-[0em]">
            <div className="flex items-center gap-[1em]">
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
                Share this :
              </motion.p>

              <motion.img
                src={facebook}
                alt=""
                className="object-cover object-center w-[0.75em]"
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
                src={twitter}
                alt=""
                className="object-cover object-center w-[1.125em]"
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
                src={instagram}
                alt=""
                className="object-cover object-center w-[1em]"
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
                src={youtube}
                alt=""
                className="object-cover object-center w-[1.3125em]"
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

        <div className="flex flex-col mt-[4em]">
          <motion.img
            src={blog?.image}
            alt=""
            className="object-center object-cover aspect-[1050/600]"
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

        <div className="flex flex-col gap-[2em] mt-[4em]">
          <motion.p
            className="text-[#1E334B] font-PlayfairDisplay text-[2.25rem] font-bold capitalize "
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </motion.p>

          <motion.p
            className="text-[#1E334B] font-Inter text-[1.125rem] font-normal "
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
            Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus,
            at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu
            duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris
            condimentum amet tellus scelerisque semper blandit. Feugiat accumsan
            blandit acu, integer faucibus. At cursus elit hac vitae nec tortor
            iaculis viverra. Sem aliquet vulputate metus tristique sem commodo
            faucibus. Sagittis sittis eget at sit posuere est at. Eget eget id
            iaculis at est cras tristique sit. Nunc sem magna morbi vitae tempus
            sed consequat. Urna tellus id tique mattis molestie lectus
            imperdiet. Facilisi suscipit mauris nisl nibh felis pellentesque.
            Tempus et vitae, at quis nisl enim molestie felis. Tincidunt ornare
            facilisis interdum ipsum.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 mt-[2em] gap-[1.875em]">
          <div className="flex flex-col gap-[2em] order-2 lg:order-1 mt-[2em] lg:mt-[0em]">
            <motion.p
              className="text-[#1E334B] font-PlayfairDisplay text-[1.5rem] font-bold "
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
              Lorem ipsum dolor sit amet, consec tetuer.
            </motion.p>

            <motion.p
              className="text-[#1E334B] font-Inter text-[1.125rem] font-normal "
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
              Bibendum sit pharetra vitae pellentesque sodales neque mollis oci,
              purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra
              isse placerat leo. Libero vel mi porttitor luctus viverra a vel
              veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus
              auctor.
            </motion.p>

            <motion.p
              className="text-[#1E334B] font-PlayfairDisplay text-[1.5rem] font-bold "
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
              Eget ultrices evelit pellentesque tortor
            </motion.p>

            <motion.p
              className="text-[#1E334B] font-Inter text-[1.125rem] font-normal "
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
              Bibendum sit pharetra vitae pellentesque sodales neque mollis oci,
              purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra
              isse placerat leo. Libero vel mi porttitor luctus viverra a vel
              veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus
              auctor.
            </motion.p>
          </div>

          <div className="flex flex-col mt-[2em] lg:mt-[0em]  order-1 lg:order-2">
            <motion.img
              src={mediterraneanVilla}
              alt=""
              className="object-buttom object-cover aspect-[510/420]"
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

        <div className="grid lg:grid-cols-2 mt-[2em] gap-[1.875em]">
          <div className="flex flex-col">
            <motion.img
              src={mediterraneanVillaInterior}
              alt=""
              className="object-cover object-center aspect-[420/278]"
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

          <div className="flex flex-col gap-[2em] mt-[2em] lg:mt-[0em]">
            <motion.p
              className="text-[#1E334B] font-PlayfairDisplay text-[1.5rem] font-bold"
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
              Pellentesque augue diam augue lectus.
            </motion.p>

            <motion.p
              className="text-[#1E334B] font-Inter text-[1.125rem] font-normal "
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
              Bibendum sit pharetra vitae pellentesque sodales neque mollis oci,
              purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra
              isse placerat leo. Libero vel mi porttitor luctus viverra a vel
              veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus
              auctor.
            </motion.p>

            <motion.p
              className="text-[#1E334B] font-Inter text-[1.125rem] font-normal "
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
              Bibendum sit pharetra vitae pellentesque sodales neque mollis oci,
              purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra
              isse placerat leo. Libero vel mi.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col mt-[6em]">
          <div className="sm:flex sm:items-center sm:gap-[1em] gap-y-[1em]">
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
              Business,
            </motion.p>

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
              Technology,{" "}
            </motion.p>

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
              Food,{" "}
            </motion.p>
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
              Programming,
            </motion.p>
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
              Designer
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
