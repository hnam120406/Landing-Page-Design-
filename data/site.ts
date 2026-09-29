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

export const site = {
  brandName: "Flash Honner",
  heroEyebrow: "THIẾT KẾ FIGMA • PHÁT TRIỂN WEBSITE",
  heroHeadline: "Thiết kế Figma và xây dựng website theo yêu cầu.",
  heroDescription: "Từ ý tưởng đến giao diện và website hoàn chỉnh.",
  heroNote: "Không cần biết công nghệ. Chỉ cần nói rõ bạn muốn làm gì.",
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
  footerDescription: "Thiết kế Figma & phát triển website theo yêu cầu.",
  copyright: "© 2026 Flash Honner",
  zaloUrl: "https://zalo.me/0379052767",
} as const;

export type Site = typeof site;
