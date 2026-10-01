import { site } from "@/data/site";
import ActiveNavigation from "@/components/ActiveNavigation";
import HomeLink from "@/components/HomeLink";
import type { NavigationItem } from "@/components/MobileNavigation";
import Image from "next/image";

const navigation: NavigationItem[] = [
  { href: "#home", label: "Trang chủ" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#projects", label: "Dự án" },
  { href: "#pricing", label: "Bảng giá" },
  { href: "#workflow", label: "Quy trình" },
  { href: "#faq", label: "Hỏi đáp" },
];

function BrandMark() {
  return <Image src="/brand/logo.png" width={1254} height={1254} alt="" aria-hidden="true" priority className="motion-logo h-auto w-[108px] shrink-0 object-contain md:w-[122px] lg:w-[140px] min-[1440px]:w-[158px]" />;
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-md">
      <div className="page-container flex min-h-[76px] items-center justify-between gap-3 md:min-h-[80px] md:gap-5 lg:min-h-[84px] lg:gap-6 min-[1440px]:min-h-[88px]">
        <HomeLink className="flex min-h-11 min-w-0 items-center" aria-label={`${site.brandName} - Trang chủ`}>
          <BrandMark />
        </HomeLink>

        <ActiveNavigation items={navigation} />
      </div>
    </header>
  );
}
