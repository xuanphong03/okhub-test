import AchievementIcon1 from "@/assets/images/section-dau-an-item-1.svg";
import AchievementIcon2 from "@/assets/images/section-dau-an-item-2.svg";
import AchievementIcon3 from "@/assets/images/section-dau-an-item-3.svg";
import AchievementIcon4 from "@/assets/images/section-dau-an-item-4.svg";
import AchievementIcon5 from "@/assets/images/section-dau-an-item-5.svg";

export default function Achievement() {
  const AchievementList = [
    {
      id: 1,
      title: "Tổng tài sản và Vốn chủ sở hữu",
      content: "686 tỷ",
      iconUrl: AchievementIcon1,
    },
    {
      id: 2,
      title: "Sự kiện văn hóa và phát triển đội ngũ",
      content: "68+",
      iconUrl: AchievementIcon2,
    },
    {
      id: 3,
      title: "Bước chân lên vùng đất dự án",
      content: "6 triệu",
      iconUrl: AchievementIcon3,
    },
    {
      id: 4,
      title: "Dự án trọng điểm",
      content: "20+",
      iconUrl: AchievementIcon4,
    },
    {
      id: 5,
      title: "Trên các tỉnh thành",
      content: "05 văn phòng",
      iconUrl: AchievementIcon5,
    },
  ];
  return (
    <section id="achievement-section" className="font-inter">
      <div className="relative grid grid-cols-2 gap-5 py-20">
        <div className="top-1/3 col-span-full px-2 sm:px-5 lg:col-span-1 xl:max-h-[50vh] 2xl:sticky 2xl:max-h-[40vh] 2xl:pl-28">
          <h2 className="mb-1 text-xs font-bold tracking-[0.01rem] text-[#165BB8] uppercase sm:text-xl md:text-[26px] lg:text-[10px] xl:text-base">
            Từng bước phát triển
          </h2>
          <h3 className="font-quicksand mb-4 inline-block bg-gradient-to-r from-[#328AE2] to-[#FF0D39] bg-clip-text text-[28px] leading-none font-bold text-transparent sm:text-[46px] md:text-[62px] lg:text-[52px] xl:text-[85px]">
            Dấu ấn Ami&m
          </h3>
          <p className="w-9/10 text-xs font-medium text-[#333333] sm:text-xl md:text-[26px] lg:text-[10px] xl:text-lg 2xl:w-[500px]">
            Phía sau những con số là hành trình nỗ lực không ngừng của đội ngũ
            những Người đồng hành cùng chung giá trị, sát cánh bên nhau, tin
            tưởng nhau, và từng ngày phấn đấu cho mục tiêu chung.
          </p>
        </div>
        <div className="col-span-full lg:col-span-1">
          <ul className="border-l border-solid border-gray-200">
            {AchievementList.map(({ id, title, content, iconUrl }) => (
              <li
                key={id}
                className="group flex gap-4 border-b border-solid border-gray-200 p-5 sm:p-8 md:gap-8 2xl:gap-10 2xl:px-12 2xl:py-8"
              >
                <div className="flex size-[68px] shrink-0 items-center justify-center rounded-full bg-gray-50 sm:size-[115px] md:size-[160px]">
                  <img
                    alt={title}
                    src={iconUrl}
                    className="max-w-3/4 object-cover"
                  />
                </div>
                <div>
                  <p className="mb-1 text-[28px] font-bold text-[#2a2b6b] sm:mb-4 sm:text-[46px] md:mb-5 md:text-[65px]">
                    {content}
                  </p>
                  <h4 className="text-xs font-semibold text-[#646464] sm:text-xl">
                    {title}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
