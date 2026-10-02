import { site } from "@/data/site";
import HomeLink from "@/components/HomeLink";
import SectionLink from "@/components/SectionLink";
import Image from "next/image";

type FooterNavigationItem = {
  href: string;
  label: string;
};

const footerNavigation: FooterNavigationItem[] = [
  { href: "#services", label: "Dịch vụ" },
  { href: "#projects", label: "Dự án" },
  { href: "#pricing", label: "Bảng giá" },
  { href: "#workflow", label: "Quy trình" },
  { href: "#faq", label: "Hỏi đáp" },
];

export default function Footer() {
  return (
    <footer className="footer-shell border-t border-[rgba(41,37,36,0.08)]">
      <div className="page-container grid gap-8 py-12 sm:py-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-10 lg:py-16">
        <div className="max-w-md">
          <HomeLink className="inline-flex min-h-11 items-center gap-3" aria-label={`${site.brandName} - Trang chủ`}>
            <Image src="/brand/logo.png" width={1254} height={1254} alt="" aria-hidden="true" className="h-auto w-[136px] shrink-0 object-contain lg:w-[154px]" />
          </HomeLink>
          <p className="mt-4 max-w-[36rem] text-[14px] leading-[1.6] text-text-secondary lg:text-[15px]">{site.footerDescription}</p>
        </div>

        <nav aria-label="Điều hướng cuối trang" className="md:w-full md:max-w-md md:justify-self-end">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[14px] font-medium text-text-secondary sm:grid-cols-3 md:grid-cols-2 lg:text-[15px]">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <SectionLink href={item.href} className="inline-flex min-h-10 items-center transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-brand focus-visible:text-brand">
                  {item.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="page-container py-4 text-[13px] text-text-muted lg:py-5 lg:text-[14px]">
          <p>{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
