import { site } from "@/data/site";
import HomeLink from "@/components/HomeLink";
import Image from "next/image";

const footerNavigation = [
  { href: "#services", label: "Dịch vụ" },
  { href: "#process", label: "Quy trình" },
  { href: "#requirements", label: "Yêu cầu" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Footer() {
  return (
    <footer className="footer-shell border-t border-[#FED7AA]">
      <div className="page-container grid gap-8 py-12 sm:gap-10 sm:py-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-12 lg:py-16">
        <div className="max-w-md">
          <HomeLink className="inline-flex min-h-11 items-center gap-3 rounded-2xl border border-[#FED7AA] bg-white/75 p-3" aria-label={`${site.brandName} - Trang chủ`}>
            <Image src="/brand/logo.png" width={1254} height={1254} alt="" aria-hidden="true" className="h-auto w-[145px] shrink-0 object-contain lg:w-[180px] min-[1440px]:w-[210px]" />
          </HomeLink>
          <p className="mt-4 max-w-[36rem] text-[15px] leading-7 text-[#9A3412] lg:text-base min-[1440px]:text-[17px]">{site.footerDescription}</p>
        </div>

        <nav aria-label="Điều hướng cuối trang" className="md:w-full md:max-w-md md:justify-self-end">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-[15px] font-medium text-[#9A3412] sm:grid-cols-3 md:grid-cols-2 sm:text-base lg:text-base min-[1440px]:text-[17px]">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-[#F97316] focus-visible:text-[#F97316]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="page-container py-5 text-[15px] text-[#9A3412] lg:py-6 min-[1440px]:text-base">
          <p>{site.copyright}</p>
          <a href={site.zaloUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-[#C2410C] transition-colors duration-200 hover:text-[#F97316] focus-visible:text-[#F97316]">Zalo: 037 905 2767</a>
        </div>
      </div>
    </footer>
  );
}
