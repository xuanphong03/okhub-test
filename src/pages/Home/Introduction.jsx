import { motion } from "framer-motion";
import IntroBanner from "../../assets/images/IntroBanner.svg";

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
    <section id="intro">
      <div className="relative">
        <img
          src={IntroBanner}
          alt="Introduction banner"
          className="h-screen w-screen object-cover"
        />
        <motion.h1
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="absolute bottom-16 left-24 text-7xl leading-tight font-bold text-white uppercase"
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
