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
  title: "Flash Honner | Thiết kế Figma & Phát triển Website theo yêu cầu",
  description:
    "Flash Honner thiết kế Figma và phát triển website theo yêu cầu, từ ý tưởng đến sản phẩm rõ ràng, dễ sử dụng.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
