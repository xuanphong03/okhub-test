import * as motion from "motion/react-client";
import MissionImage1 from "@/assets/images/section-mission-item-1.webp";
import MissionImage2 from "@/assets/images/section-mission-item-2.webp";
import MissionImage3 from "@/assets/images/section-mission-item-3.webp";
import MissionImage4 from "@/assets/images/section-mission-item-4.webp";
import MissionIcon1 from "@/assets/images/mission-icon-1.svg";

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
  const missionListMobileRef = useRef(null);
  useEffect(() => {
    if (!missionListRef.current) return;
    const listItems = missionListRef.current.querySelectorAll("li");
    const listMobileItems = missionListRef.current.querySelectorAll("li");

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
    listMobileItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mission-section"
      className="relative lg:hidden xl:py-40 2xl:block"
    >
      <svg
        className="pointer-events-none absolute top-0 left-1/2 z-0 hidden h-[40rem] w-full -translate-x-1/2 lg:block"
        xmlns="http://www.w3.org/2000/svg"
        width="1599"
        height="713"
        viewBox="0 0 1599 713"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M795.5 341.676C1281.79 341.676 1676 265.34 1676 171.176C1676 77.0112 1281.79 0.675781 795.5 0.675781C309.213 0.675781 -85 77.0112 -85 171.176C-85 265.34 309.213 341.676 795.5 341.676ZM1598 496.676H-2V712.676H1598V496.676Z"
          fill="url(#paint0_linear_11728_50788)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_11728_50788"
            x1="771.676"
            y1="0.675781"
            x2="771.676"
            y2="676.868"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#373981" stopOpacity="0.1"></stop>
            <stop offset="0.25" stopColor="#FFE1E5" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="container mx-auto hidden flex-col items-center justify-center gap-2 lg:flex">
        <motion.h2
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="flex items-center gap-2 text-base leading-normal font-semibold -tracking-[0.1rem] text-indigo-500 uppercase"
        >
          <span className="inline-block size-1.5 rounded-full bg-indigo-500"></span>
          Sứ mệnh
          <span className="inline-block size-1.5 rounded-full bg-indigo-500"></span>
        </motion.h2>
        <div className="flex flex-col text-xl 2xl:text-[2.5rem]">
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className="inline-block bg-gradient-to-r from-[#328AE2] to-[#FF0D39] bg-clip-text text-center leading-tight font-bold -tracking-wide text-transparent xl:leading-[3.225rem]"
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
            className="inline-block bg-gradient-to-r from-[#328AE2] to-[#FF0D39] bg-clip-text text-center leading-tight font-bold -tracking-wide text-transparent xl:leading-[3.225rem]"
          >
            cho những người đồng hành
          </motion.p>
        </div>
      </div>
      <div className="relative container mx-auto mt-[5.5rem] hidden gap-x-5 px-5 lg:flex">
        <div className="sticky top-20 max-h-[50vh] basis-[15%]">
          <p className="pt-20 font-medium -tracking-tight text-[var(--text-color-desc-mission-section)] xl:pt-40">
            {activeIndex + 1 < 10 ? "0" + (activeIndex + 1) : activeIndex + 1}
            /04
          </p>
        </div>
        <div className="basis-[35%]">
          <ul className="" ref={missionListRef}>
            {MissionArr.map(({ id, icon, title, content }, index) => (
              <li data-idx={index} key={id} className="pb-10 xl:pt-20">
                <article
                  className={`flex flex-col gap-2 transition-opacity ${activeIndex === index ? "opacity-100" : "opacity-40"}`}
                >
                  <img alt="" src={icon} className="h-20 w-fit" />
                  <h3 className="text-xl leading-[130%] font-bold -tracking-wider text-[var(--text-color-title-mission-section)] uppercase xl:text-[1.625rem]">
                    {title}
                  </h3>
                  <p className="text-lg font-medium -tracking-[0.0225rem] text-[var(--text-color-desc-mission-section)] xl:w-96 xl:text-xl">
                    {content}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-32 max-h-[40vh] basis-1/2 xl:max-h-[50vh]">
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
      <div className="relative mt-5 px-2 pb-10 md:px-5 lg:hidden">
        <div className="sticky top-0 z-10 basis-1/2 bg-white pt-10">
          <h2 className="flex items-center justify-center gap-2 text-xs leading-normal font-bold text-[var(--secondary-color)] uppercase sm:text-base md:text-2xl lg:text-sm">
            <span className="inline-block size-1.5 rounded-full bg-[var(--secondary-color)]"></span>
            Sứ mệnh
            <span className="inline-block size-1.5 rounded-full bg-[var(--secondary-color)]"></span>
          </h2>
          <div className="text-xl leading-tight font-bold md:mb-20 md:text-[46px]">
            <p className="inline-block w-full bg-gradient-to-r from-[#328AE2] to-[#FF0D39] bg-clip-text text-center -tracking-wide text-transparent xl:leading-[3.225rem]">
              Mang lại cuộc sống tốt đẹp hơn
            </p>
            <p className="inline-block w-full bg-gradient-to-r from-[#328AE2] to-[#FF0D39] bg-clip-text text-center -tracking-wide text-transparent xl:leading-[3.225rem]">
              cho những người đồng hành
            </p>
          </div>
          <div className="relative mt-5 aspect-video h-full bg-white">
            {MissionArr.map(({ id, image, title }, index) => (
              <img
                key={id}
                src={image}
                alt={title}
                className={`absolute inset-0 h-full w-full rounded-2xl object-cover transition-all duration-500 ${activeIndex === index ? "visible opacity-100" : "invisible opacity-0"}`}
              />
            ))}
          </div>
        </div>
        <ul ref={missionListMobileRef} className="py-5">
          {MissionArr.map(({ id, title, icon, content }, index) => {
            const currentIndex = index > 10 ? index : "0" + (index + 1);
            return (
              <li
                data-idx={index}
                key={id}
                className="relative mb-4 rounded-2xl border border-solid border-gray-200 p-5 xl:pt-20"
              >
                <article className={`flex flex-col gap-2`}>
                  <span className="absolute top-2 right-2 text-sm font-medium">{`${currentIndex}/04`}</span>
                  <img alt="" src={icon} className="h-20 w-fit" />
                  <h3 className="text-base leading-[130%] font-bold -tracking-wider text-[var(--secondary-color)] uppercase xl:text-[1.625rem]">
                    {title}
                  </h3>
                  <p className="text-sm font-medium -tracking-[0.0225rem] text-[var(--text-color-desc-mission-section)] xl:w-96 xl:text-xl">
                    {content}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
