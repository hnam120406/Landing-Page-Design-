import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flash Honner | Thiết kế Figma & dựng website responsive cho sinh viên, nhóm nhỏ và dự án mới",
  description:
    "Hỗ trợ từ Figma đến website chạy được trên laptop và điện thoại. Báo giá và thời gian rõ ràng trước khi bắt đầu. Liên hệ để được tư vấn miễn phí.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
