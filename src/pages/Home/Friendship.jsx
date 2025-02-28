import TeamworkBanner from "../../assets/images/bg-hand-friendship-section.webp";
import TeamworkBannerMobile from "../../assets/images/bg-teamwork-mobile.png";
import VectorTeamwork1 from "../../assets/images/vector-teamwork-1.png";
import VectorTeamwork2 from "../../assets/images/vector-teamwork-2.png";
import ArrowLeftToRightIcon from "../../assets/images/arrow-left-to-right.png";
import BgOverlayBlue from "../../assets/images/bg-overlay-friendship-section.webp";
import * as motion from "motion/react-client";
import { Link } from "react-router-dom";

export default function Friendship() {
  return (
    <section
      id="friendship"
      className="relative w-full bg-[var(--bg-section-friendship)] px-3 py-24 md:px-6 md:py-28 lg:h-screen lg:p-0 xl:py-14 2xl:h-[58rem]"
    >
      <img
        src={BgOverlayBlue}
        className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full max-w-full object-cover object-right-bottom lg:inline-block"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:inline-block">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
          }}
          src={TeamworkBanner}
          className="h-full max-w-full object-cover object-right-bottom"
        />
      </div>
      <img
        src={VectorTeamwork1}
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-[2] hidden h-fit translate-y-[3rem] object-cover lg:inline-block xl:translate-y-[4rem] 2xl:translate-y-[5.25rem]"
      />
      <img
        src={VectorTeamwork2}
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-[2] hidden h-fit translate-y-[4.25rem] object-cover lg:inline-block xl:translate-y-[5.25rem] 2xl:translate-y-[6.5rem]"
      />
      <img
        alt="Teamwork"
        src={TeamworkBannerMobile}
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full object-cover object-bottom lg:hidden"
      />
      <div className="relative inset-0 z-10 flex items-center text-white md:mb-7 lg:absolute">
        <div className="container mx-auto px-5">
          <motion.h3
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="font-inter mb-4 flex items-center gap-1 text-xs font-bold uppercase sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-base"
          >
            <span className="inline-block size-2 rounded-full bg-white"></span>
            Công ty cổ phần Tập đoàn AMI&M Việt Nam
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="mb-6 text-4xl leading-tight font-bold uppercase sm:text-6xl md:mb-12 md:text-7xl lg:mb-4 lg:text-[40px] xl:text-[46px] 2xl:text-[62px]"
          >
            Khởi nguồn từ <br /> tình bằng hữu
          </motion.h2>
          <div className="font-inter mb-20 flex flex-col gap-y-4 text-sm sm:text-xl md:gap-y-12 md:text-2xl lg:gap-y-4 lg:text-[10px] xl:text-xs 2xl:text-[1.125rem]">
            <motion.p
              initial={{ opacity: 0, translateY: "50%" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
              className="font-semibold tracking-[-0.0225rem] lg:max-w-[25rem] xl:max-w-[30rem]"
            >
              Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí
              hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực
              không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt
              động.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateY: "50%" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
              }}
              className="font-semibold tracking-[-0.0225rem] lg:max-w-[25rem] xl:max-w-[30rem]"
            >
              Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó
              và kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM -
              AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức thử
              thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà
              mình tin tưởng.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          >
            <Link
              to="#"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--primary-color)] px-8 py-4 text-sm font-bold uppercase transition-colors duration-500 hover:bg-red-500 sm:text-xl md:text-2xl lg:text-[10px] xl:text-xs 2xl:text-base"
            >
              Hành trình của AMI&M
              <img
                alt="arrow icon"
                src={ArrowLeftToRightIcon}
                className="size-3 object-cover"
              />
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
