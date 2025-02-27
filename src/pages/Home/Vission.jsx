import BgVisionSection from "../../assets/images/bg-vision-section.png";
import * as motion from "motion/react-client";

export default function Vision() {
  return (
    <section id="vision" className="relative flex h-[42rem] justify-center">
      <img alt="background vision section" src={BgVisionSection} className="" />
      <div className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-4 pt-[14rem] text-center">
        <motion.h2
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="flex items-center gap-2 text-[1rem] leading-normal font-semibold -tracking-[0.1rem] text-indigo-500 uppercase"
        >
          <span className="inline-block size-1.5 rounded-full bg-indigo-500"></span>
          Tầm nhìn
          <span className="inline-block size-1.5 rounded-full bg-indigo-500"></span>
        </motion.h2>
        <div className="w-[60.0625rem] text-[2.65506rem] leading-[1.4] font-bold -tracking-[0.02656rem] text-[#031938]">
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
              hệ sinh thái đa ngành phát
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
              triển nhanh và bền vững
            </span>{" "}
            trên hành trình kiến
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
            tạo sự thịnh vượng đích thực!
          </motion.p>
        </div>
      </div>
    </section>
  );
}
