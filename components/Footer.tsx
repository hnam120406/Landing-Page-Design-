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
    <footer className="border-t border-border bg-dark text-white">
      <div className="page-container grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-12">
        <div className="max-w-md">
          <HomeLink className="inline-flex min-h-11 items-center gap-3" aria-label={`${site.brandName} - Trang chủ`}>
            <Image src="/brand/logo.png" width={1254} height={1254} alt="" aria-hidden="true" className="h-auto w-[145px] shrink-0 object-contain lg:w-[180px] min-[1440px]:w-[210px]" />
          </HomeLink>
          <p className="mt-4 text-base leading-7 text-white/65 lg:text-[16px] min-[1440px]:text-[17px]">{site.footerDescription}</p>
        </div>

        <nav aria-label="Điều hướng cuối trang" className="md:w-full md:max-w-md md:justify-self-end">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-[15px] font-medium text-white/70 sm:grid-cols-3 md:grid-cols-2 sm:text-base lg:text-base min-[1440px]:text-[17px]">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="page-container py-5 text-sm text-white/45 min-[1440px]:text-[15px]">
          <p className="text-white/60">{site.copyright}</p>
          <a href={site.zaloUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-white/60 transition-colors duration-200 hover:text-white focus-visible:text-white">Zalo: 037 905 2767</a>
        </div>
      </div>
    </footer>
  );
}
