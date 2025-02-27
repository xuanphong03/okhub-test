import BgOverlayGradient from "@/assets/images/bg-overlay-gradient.png";
import InvestmentBg from "@/assets/images/he-sinh-thai_amiInvestment.webp";
import BgOverlaySectionInvestment from "@/assets/images/bg-overlay-section-investment.png";
import BgTeamworkSectionInvestment from "@/assets/images/bg-teamwork-section-investment.webp";

export default function Investment() {
  return (
    <section
      id="investment-section"
      className="relative hidden h-[54rem] overflow-hidden p-24 xl:block"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={BgOverlaySectionInvestment}
          className="max-w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-10 -z-10">
        <img src={BgOverlayGradient} className="max-w-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-10 -z-10">
        <img src={BgTeamworkSectionInvestment} className="w-2xl object-cover" />
      </div>
      <div className="absolute top-0 right-0 -z-10 aspect-square w-[54.5rem] translate-x-1/4 -translate-y-1/4 overflow-hidden rounded-full">
        <div className="relative">
          <img src={InvestmentBg} />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#2F2E79] to-[#A6122078]"></div>
      </div>
      <div className="flex">
        <div className="font-inter basis-1/2">
          <h2 className="mb-2 text-base font-semibold tracking-[0.01rem] text-[#165BB8] uppercase">
            Lĩnh vực đầu tư
          </h2>
          <h3 className="mb-2 w-lg bg-gradient-to-r from-[#328AE2] to-[#FF0D39] bg-clip-text text-[2rem] leading-[2.4rem] font-bold tracking-[-0.08rem] text-transparent">
            Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao
            cấp và nâng tầm giáo dục trải nghiệm.
          </h3>
          <p className="w-[30rem] text-lg font-medium tracking-tight text-[#333]">
            Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh
            vượng đích thực cho những Người đồng hành và tạo lập di sản xứng tầm
            cho thế hệ tương lai.{" "}
          </p>
        </div>
        <div className="basis-1/2">
          <div></div>
        </div>
      </div>
    </section>
  );
}
