import IntroductionBanner from "@/assets/images/intro-banner.svg";
import { motion } from "framer-motion";

export default function Introduction() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const wordVariants = {
    initial: { opacity: 0, translateY: "100%" },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="introduction-section"
      className="relative h-[80vh] sm:h-screen lg:hidden 2xl:block"
    >
      <img
        alt=""
        src={IntroductionBanner}
        className="h-full w-full object-cover object-[80%]"
      />
      <div className="relative container mx-auto">
        <motion.h1
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="absolute bottom-0 p-4 text-[28px] leading-tight font-bold text-white uppercase sm:text-5xl xl:pb-10 xl:text-6xl"
        >
          {["Đồng", "hành"].map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}{" "}
          <br />
          {["khởi", "thịnh", "vượng"].map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}
