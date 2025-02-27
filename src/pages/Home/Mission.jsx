import * as motion from "motion/react-client";
import MissionImage1 from "../../assets/images/section-mission-item-1.webp";
import MissionImage2 from "../../assets/images/section-mission-item-2.webp";
import MissionImage3 from "../../assets/images/section-mission-item-3.webp";
import MissionImage4 from "../../assets/images/section-mission-item-4.webp";
import MissionIcon1 from "../../assets/images/mission-icon-1.svg";

import { useEffect, useRef, useState } from "react";

export default function Mission() {
  const MissionArr = [
    {
      id: 1,
      icon: MissionIcon1,
      image: MissionImage1,
      title: "với cán bộ nhân viên",
      content:
        "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
    },
    {
      id: 2,
      icon: MissionIcon1,
      image: MissionImage2,
      title: "với cán bộ nhân viên",
      content:
        "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
    },
    {
      id: 3,
      icon: MissionIcon1,
      image: MissionImage3,
      title: "với cán bộ nhân viên",
      content:
        "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
    },
    {
      id: 4,
      icon: MissionIcon1,
      image: MissionImage4,
      title: "với cán bộ nhân viên",
      content:
        "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const missionListRef = useRef(null);
  useEffect(() => {
    if (!missionListRef.current) return;
    const listItems = missionListRef.current.querySelectorAll("li");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = entry.target.dataset.idx;
            setActiveIndex(+itemIndex);
          }
        });
      },
      {
        threshold: [1],
      },
    );

    listItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission-section" className="relative bg-gray-50 pt-40 pb-32">
      <div className="flex flex-col items-center justify-center gap-2">
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
          Sứ mệnh
          <span className="inline-block size-1.5 rounded-full bg-indigo-500"></span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="inline-block bg-gradient-to-r from-[#328AE2] to-[#FF0D39] bg-clip-text text-center text-[2.5rem] leading-[3.225rem] font-bold -tracking-wide text-transparent"
        >
          Mang lại cuộc sống tốt đẹp hơn
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="inline-block bg-gradient-to-r from-[#328AE2] to-[#FF0D39] bg-clip-text text-center text-[2.5rem] leading-[3.225rem] font-bold -tracking-wide text-transparent"
        >
          cho những người đồng hành
        </motion.p>
      </div>
      <div className="relative container mx-auto mt-[5.5rem] flex">
        <div className="sticky top-0 h-full basis-[15%]">
          <p className="pt-40 font-medium -tracking-tight text-[var(--text-color-desc-mission-section)]">
            {activeIndex + 1 < 10 ? "0" + (activeIndex + 1) : activeIndex + 1}
            /04
          </p>
        </div>
        <div className="basis-[35%]">
          <ul className="" ref={missionListRef}>
            {MissionArr.map(({ id, icon, title, content }, index) => (
              <li data-idx={index} key={id} className="pt-20 pb-10">
                <article
                  className={`flex flex-col gap-2 transition-opacity ${activeIndex === index ? "opacity-100" : "opacity-40"}`}
                >
                  <img alt="" src={icon} className="h-20 w-fit" />
                  <h3 className="text-[1.625rem] leading-[130%] font-bold -tracking-wider text-[var(--text-color-title-mission-section)] uppercase">
                    {title}
                  </h3>
                  <p className="w-96 text-xl font-medium -tracking-[0.0225rem] text-[var(--text-color-desc-mission-section)]">
                    {content}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-32 max-h-[50vh] basis-1/2">
          {MissionArr.map(({ id, image, title }, index) => (
            <img
              key={id}
              src={image}
              alt={title}
              className={`absolute inset-0 h-auto max-w-full rounded-2xl object-cover transition-all duration-500 ${activeIndex === index ? "visible opacity-100" : "invisible opacity-0"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
