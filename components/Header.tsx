import { site } from "@/data/site";
import ActiveNavigation from "@/components/ActiveNavigation";
import HomeLink from "@/components/HomeLink";
import type { NavigationItem } from "@/components/MobileNavigation";
import Image from "next/image";

const navigation: NavigationItem[] = [
  { href: "#home", label: "Trang chủ" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#audience", label: "Đối tượng" },
  { href: "#workflow", label: "Quy trình" },
];

function BrandMark() {
  return <Image src="/brand/logo.png" width={1254} height={1254} alt="" aria-hidden="true" priority className="motion-logo h-auto w-[120px] shrink-0 object-contain md:w-[145px] lg:w-[170px] min-[1440px]:w-[190px]" />;
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-md">
      <div className="page-container flex min-h-[128px] items-center justify-between gap-4 md:min-h-[153px] md:gap-6 lg:min-h-[178px] lg:gap-8 min-[1440px]:min-h-[198px]">
        <HomeLink className="flex min-h-11 min-w-0 items-center" aria-label={`${site.brandName} - Trang chủ`}>
          <BrandMark />
        </HomeLink>

        <ActiveNavigation items={navigation} />
      </div>
    </header>
  );
}
