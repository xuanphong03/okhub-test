import TeamworkBanner from "../../assets/images/bg-teamwork.png";
import VectorTeamwork1 from "../../assets/images/vector-teamwork-1.png";
import VectorTeamwork2 from "../../assets/images/vector-teamwork-2.png";
import ArrowLeftToRightIcon from "../../assets/images/arrow-left-to-right.png";
import * as motion from "motion/react-client";
import { Link } from "react-router-dom";

export default function Friendship() {
  return (
    <section
      id="friendship"
      className="relative h-[58rem] w-full bg-[var(--bg-section-friendship)]"
    >
      <img
        alt="teamwork banner"
        src={TeamworkBanner}
        className="pointer-events-none absolute z-[1] h-full w-full max-w-full object-cover"
      />
      <img
        alt="vector teamwork 1"
        src={VectorTeamwork1}
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-[2] h-fit translate-y-[5.25rem] object-cover"
      />
      <img
        alt="vector teamwork 2"
        src={VectorTeamwork2}
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-[2] h-fit translate-y-[6.5rem] object-cover"
      />
      <div className="absolute top-1/5 left-24 z-10 text-white">
        <motion.h3
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="mb-4 flex items-center gap-1 font-semibold"
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
          className="mb-6 text-[4rem] leading-tight font-bold"
        >
          Khởi nguồn từ <br /> tình bằng hữu
        </motion.h2>
        <p className="mb-4 max-w-1/3 text-[1.125rem] leading-normal font-medium -tracking-[0.0225rem]">
          Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí hướng
          chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực không
          ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.
        </p>
        <p className="mb-20 max-w-2/5 text-[1.125rem] leading-normal font-medium -tracking-[0.0225rem]">
          Tại Ami&M, chúng tôi được sống và làm việc hết mình! <br /> Được gắn
          bó và kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM -
          AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức thử
          thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà mình
          tin tưởng.
        </p>
        <Link
          to="#"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--primary-color)] px-8 py-4 font-bold uppercase"
        >
          Hành trình của AMI&M
          <img
            alt="arrow icon"
            src={ArrowLeftToRightIcon}
            className="size-3 object-cover"
          />
        </Link>
      </div>
    </section>
  );
}
