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
  { href: "#projects", label: "Giao diện" },
  { href: "#workflow", label: "Quy trình" },
];

export default function Footer() {
  return (
    <footer className="footer-shell border-t border-border">
      <div className="page-container grid gap-6 py-10 sm:gap-8 sm:py-11 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-10 lg:py-12">
        <div className="max-w-md">
          <HomeLink className="inline-flex min-h-11 items-center gap-3 rounded-2xl border border-border bg-white p-3" aria-label={`${site.brandName} - Trang chủ`}>
            <Image src="/brand/logo.png" width={1254} height={1254} alt="" aria-hidden="true" className="h-auto w-[132px] shrink-0 object-contain lg:w-[160px] min-[1440px]:w-[180px]" />
          </HomeLink>
          <p className="mt-3 max-w-[36rem] text-[14px] leading-[1.6] text-text-secondary lg:text-[15px]">{site.footerDescription}</p>
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
