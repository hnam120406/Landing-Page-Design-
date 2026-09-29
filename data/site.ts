export type Service = {
  id: string;
  label: string;
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

export const site = {
  brandName: "Flash Honner",
  heroEyebrow: "THIẾT KẾ FIGMA • WEBSITE THEO YÊU CẦU",
  heroHeadline: "Bạn có ý tưởng. Flash Honner biến nó thành website hoàn chỉnh.",
  heroDescription: "Thiết kế giao diện, xây dựng website và hoàn thiện sản phẩm theo nhu cầu thực tế của bạn.",
  heroNote: "Không cần biết công nghệ. Chỉ cần nói rõ bạn muốn làm gì.",
  capabilities: [
    { id: "figma", label: "FIGMA", title: "Thiết kế giao diện" },
    { id: "website", label: "WEBSITE", title: "Xây dựng website" },
    { id: "responsive", label: "RESPONSIVE", title: "Desktop & Mobile" },
  ] satisfies Capability[],
  services: [
    {
      id: "figma",
      label: "FIGMA",
      title: "Thiết kế Figma",
      description: "Nhìn rõ giao diện trước khi bắt đầu code.",
    },
    {
      id: "website",
      label: "WEBSITE",
      title: "Xây dựng website",
      description: "Biến thiết kế thành website responsive hoàn chỉnh.",
    },
    {
      id: "features",
      label: "CHỨC NĂNG",
      title: "Phát triển chức năng",
      description: "Xây dựng các chức năng phù hợp với nhu cầu dự án.",
    },
    {
      id: "handover",
      label: "BÀN GIAO",
      title: "Bàn giao dự án",
      description: "Source code và hướng dẫn theo phạm vi đã thống nhất.",
    },
  ] satisfies Service[],
  audiences: [
    {
      id: "students",
      title: "Sinh viên",
      description: "Website bài tập, đồ án và sản phẩm học tập.",
    },
    {
      id: "educators",
      title: "Giảng viên / Giáo viên",
      description: "Website môn học, tài liệu và nội dung giáo dục.",
    },
    {
      id: "individuals",
      title: "Cá nhân / Freelancer",
      description: "Portfolio, landing page và website dịch vụ.",
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
    { number: "03", title: "Phát triển", description: "Hoàn thiện website." },
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
  footerDescription: "Thiết kế Figma & phát triển website theo yêu cầu.",
  copyright: "© 2026 Flash Honner",
} as const;

export type Site = typeof site;
