import checkCircle from "src/assets/about-us/check-circle.svg";
import { motion } from "framer-motion";

export default function AboutOtherAmenitiesCards() {
  const data = [
    {
      id: 1,

      title: "Trusted",
      description:
        "Gravida vulputate aliquet tempor siteque sed quam pretium non urna sed etid aene haretra adipiscing penatibus a adipiscing gravida.",
      image: checkCircle,
    },

    {
      id: 2,
      title: "Maintenance",
      description:
        "Gravida vulputate aliquet tempor siteque sed quam pretium non urna sed etid aene haretra adipiscing penatibus a adipiscing gravida.",

      image: checkCircle,
    },

    {
      id: 3,
      title: "Easy Booking",
      description:
        "Gravida vulputate aliquet tempor siteque sed quam pretium non urna sed etid aene haretra adipiscing penatibus a adipiscing gravida.",
      image: checkCircle,
    },

    {
      id: 4,
      title: "Help Services",
      description:
        "Gravida vulputate aliquet tempor siteque sed quam pretium non urna sed etid aene haretra adipiscing penatibus a adipiscing gravida.",
      image: checkCircle,
    },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-2 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[1.875em]  relative top-[5.625em]">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-[#FFF] p-[2em] gap-[1em] shadow-lg"
          >
            <div className="flex items-center gap-[1em]">
              <motion.img
                src={item.image}
                alt=""
                className="object-cover object-center w-[2em]"
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
                {item.title}
              </motion.p>
            </div>

            <motion.p
              className="text-[#828282] font-Inter font-normal "
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
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
    </>
  );
}
