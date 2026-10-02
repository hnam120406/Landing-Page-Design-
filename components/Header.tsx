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
  return <Image src="/brand/logo.png" width={1254} height={1254} alt="" aria-hidden="true" priority className="motion-logo h-auto w-[112px] shrink-0 object-contain md:w-[126px] lg:w-[138px]" />;
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-3 md:px-6 md:pt-4 lg:px-8">
      <div className="relative mx-auto flex min-h-[68px] w-[calc(100vw-2rem)] max-w-[1180px] items-center justify-between gap-3 rounded-full px-3 py-2 nav-shell md:w-full md:min-h-[74px] md:gap-5 md:px-5 lg:min-h-[78px] lg:gap-6 lg:px-6">
        <HomeLink className="flex min-h-11 min-w-0 items-center" aria-label={`${site.brandName} - Trang chủ`}>
          <BrandMark />
        </HomeLink>

        <ActiveNavigation items={navigation} />
      </div>
    </header>
  );
}
