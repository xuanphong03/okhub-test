import BgVisionSection from "../../assets/images/bg-vision-section.png";
import BgVisionSectionMobile from "../../assets/images/section-tam-nhin-bg-mobile.png";

import * as motion from "motion/react-client";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative flex h-[34rem] justify-center pt-[14rem] sm:h-[40rem]"
    >
      <img
        alt="background vision section"
        src={BgVisionSection}
        className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
      />
      <img
        alt="background vision section"
        src={BgVisionSectionMobile}
        className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
      />
      <div className="absolute right-0 left-0 flex flex-col items-center justify-center gap-4 px-5 text-center">
        <motion.h2
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="flex items-center gap-2 text-xs leading-normal font-bold text-[var(--secondary-color)] uppercase sm:text-xl md:text-2xl lg:text-sm 2xl:text-base"
        >
          <span className="inline-block size-1.5 rounded-full bg-[var(--secondary-color)]"></span>
          Tầm nhìn
          <span className="inline-block size-1.5 rounded-full bg-[var(--secondary-color)]"></span>
        </motion.h2>
        <div className="hidden text-xl leading-[1.4] font-bold -tracking-[0.02656rem] text-[#031938] md:text-3xl lg:block 2xl:text-[2.5rem]">
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
          >
            Ami&M xây dựng{" "}
            <span className="inline-block bg-gradient-to-r from-fuchsia-600 to-red-600 bg-clip-text text-transparent">
              hệ sinh thái đa ngành
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              phát triển nhanh và bền vững
            </span>{" "}
            trên hành trình
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
          >
            kiến tạo sự thịnh vượng đích thực!
          </motion.p>
        </div>
        <div className="text-xl leading-[1.4] font-bold -tracking-[0.02656rem] text-[#031938] sm:text-3xl md:text-[46px] lg:hidden">
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
          >
            Ami&M xây dựng{" "}
            <span className="inline-block bg-gradient-to-r from-fuchsia-600 to-red-600 bg-clip-text text-transparent">
              hệ sinh
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              thái đa ngành phát triển
            </span>{" "}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              nhanh và bền vững
            </span>{" "}
            trên
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
          >
            hành trình kiến tạo sự thịnh
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
          >
            vượng đích thực!
          </motion.p>
        </div>
      </div>
    </section>
  );
}
