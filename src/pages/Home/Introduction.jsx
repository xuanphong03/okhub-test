import IntroductionBanner from "@/assets/images/intro-banner.svg";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedWord = ({ word, variants }) => (
  <motion.span variants={variants} className="mr-2 inline-block">
    {word}
  </motion.span>
);
AnimatedWord.propTypes = {
  word: PropTypes.string.isRequired,
  variants: PropTypes.object.isRequired,
};

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

  const wordsFirstLine = ["Đồng", "hành"];
  const wordsSecondLine = ["khởi", "thịnh", "vượng"];

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
          {wordsFirstLine.map((word, index) => (
            <AnimatedWord key={index} word={word} variants={wordVariants} />
          ))}
          <br />
          {wordsSecondLine.map((word, index) => (
            <AnimatedWord key={index} word={word} variants={wordVariants} />
          ))}
        </motion.h1>
      </div>
    </section>
  );
}
