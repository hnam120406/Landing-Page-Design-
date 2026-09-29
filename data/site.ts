export type Service = {
  id: string;
  title: string;
  description: string;
};

export type Audience = {
  id: string;
  title: string;
  description: string;
};

export type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

export type Capability = {
  id: string;
  label: string;
  title: string;
};

export type ProjectShowcase = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type Deliverable = {
  id: string;
  title: string;
  description: string;
};

export const site = {
  brandName: "Flash Honner",
  heroEyebrow: "THIẾT KẾ FIGMA • PHÁT TRIỂN WEBSITE",
  heroHeadline: "Thiết kế Figma và xây dựng website theo yêu cầu.",
  heroDescription: "Từ ý tưởng đến giao diện và website hoàn chỉnh.",
  heroNote: "Không cần biết công nghệ. Chỉ cần nói rõ bạn muốn làm gì.",
  capabilities: [
    { id: "figma", label: "FIGMA", title: "Thiết kế giao diện" },
    { id: "website", label: "WEBSITE", title: "Xây dựng website" },
    { id: "responsive", label: "RESPONSIVE", title: "Desktop & Mobile" },
  ] satisfies Capability[],
  services: [
    {
      id: "figma",
      title: "Thiết kế Figma",
      description: "Thiết kế giao diện theo nhu cầu.",
    },
    {
      id: "website",
      title: "Xây dựng website",
      description: "Code website từ thiết kế đã thống nhất.",
    },
    {
      id: "features",
      title: "Phát triển chức năng",
      description: "Xây dựng chức năng phù hợp với dự án.",
    },
    {
      id: "handover",
      title: "Bàn giao",
      description: "Source code và hướng dẫn sử dụng.",
    },
  ] satisfies Service[],
  audiences: [
    {
      id: "students",
      title: "Sinh viên",
      description: "Website bài tập và đồ án.",
    },
    {
      id: "educators",
      title: "Giảng viên / Giáo viên",
      description: "Website môn học và tài liệu.",
    },
    {
      id: "individuals",
      title: "Cá nhân",
      description: "Portfolio và landing page.",
    },
    {
      id: "small-business",
      title: "Nhóm nhỏ / Cửa hàng",
      description: "Website giới thiệu và bán hàng.",
    },
  ] satisfies Audience[],
  workflow: [
    { number: "01", title: "Trao đổi", description: "Hiểu nhu cầu." },
    { number: "02", title: "Thiết kế", description: "Xây dựng Figma." },
    { number: "03", title: "Phát triển", description: "Code và hoàn thiện website." },
    { number: "04", title: "Bàn giao", description: "Kiểm tra và bàn giao." },
  ] satisfies WorkflowStep[],
  projects: [
    {
      id: "landing-page",
      category: "Mẫu giao diện • Landing Page",
      title: "Website giới thiệu dịch vụ",
      description: "Giao diện tập trung vào nội dung và hành động chính.",
      image: "/images/projects/landing-page-concept.svg",
      alt: "Thiết kế minh họa landing page giới thiệu dịch vụ",
    },
    {
      id: "dashboard",
      category: "Mẫu giao diện • Dashboard",
      title: "Web quản lý",
      description: "Bố cục rõ ràng cho dữ liệu và thao tác quản lý.",
      image: "/images/projects/dashboard-concept.svg",
      alt: "Thiết kế minh họa dashboard quản lý dữ liệu",
    },
    {
      id: "responsive",
      category: "Mẫu giao diện • Responsive",
      title: "Website Desktop & Mobile",
      description: "Giao diện phù hợp trên nhiều kích thước màn hình.",
      image: "/images/projects/responsive-concept.svg",
      alt: "Thiết kế minh họa website responsive trên desktop và mobile",
    },
  ] satisfies ProjectShowcase[],
  deliverables: [
    { id: "design", title: "Giao diện", description: "Thiết kế theo nhu cầu." },
    { id: "website", title: "Website", description: "Hoàn thiện theo phạm vi đã thống nhất." },
    { id: "source", title: "Source code", description: "Bàn giao theo dự án." },
    { id: "guide", title: "Hướng dẫn", description: "Hỗ trợ cài đặt và sử dụng." },
  ] satisfies Deliverable[],
  footerDescription: "Thiết kế Figma & phát triển website theo yêu cầu.",
  copyright: "© 2026 Flash Honner",
  zaloUrl: "https://zalo.me/0379052767",
} as const;

export type Site = typeof site;
