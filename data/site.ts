export type PainPoint = {
  id: string;
  text: string;
};

export type ServicePath = {
  id: string;
  label: string;
  title: string;
  description: string;
  steps: readonly string[];
  bullets: readonly string[];
  ctaLabel: string;
  ctaHref: string;
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
  label: string;
  title: string;
  description: string;
};

export type TrustPoint = {
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
  heroEyebrow: "THIẾT KẾ FIGMA • WEBSITE THEO YÊU CẦU",
  heroNote: "Không cần biết hết công nghệ. Chỉ cần cho tụi mình biết bạn đang cần gì.",
  painPoints: [
    { id: "messy-ui", text: "Code gần xong nhưng giao diện vẫn còn rối." },
    { id: "figma-gap", text: "Có Figma nhưng dựng web lên không giống thiết kế." },
    { id: "deadline", text: "Deadline sát mà sản phẩm vẫn chưa đủ chỉn chu." },
    { id: "no-ui-specialist", text: "Không ai trong nhóm chuyên UI/UX." },
  ] satisfies readonly PainPoint[],
  servicePaths: [
    {
      id: "without-figma",
      label: "CHƯA CÓ FIGMA",
      title: "Bạn có ý tưởng, tụi mình dựng thành giao diện.",
      description: "Chỉ cần gửi nội dung, yêu cầu môn học và những gì bạn muốn có trong sản phẩm.",
      steps: ["Ý tưởng", "Nội dung", "Figma", "Responsive"],
      bullets: [
        "Bố cục rõ ràng",
        "Giao diện hiện đại",
        "Thiết kế phù hợp với nội dung thật",
        "Có thể tiếp tục triển khai thành website",
      ],
      ctaLabel: "Trao đổi thiết kế",
      ctaHref: "#final-cta",
    },
    {
      id: "with-figma",
      label: "ĐÃ CÓ FIGMA",
      title: "Bạn có thiết kế, tụi mình dựng thành website.",
      description: "Tụi mình kiểm tra Figma, trao đổi những điểm cần chỉnh rồi bắt đầu triển khai.",
      steps: ["Figma", "Kiểm tra", "Code", "Responsive", "Demo"],
      bullets: [
        "Bám sát thiết kế: màu sắc, font chữ, khoảng cách và bố cục được triển khai nhất quán theo Figma.",
        "Nút và luồng tương tác hoạt động",
        "Hiển thị phù hợp trên nhiều thiết bị",
        "Có thể bàn giao source theo phạm vi",
      ],
      ctaLabel: "Gửi Figma",
      ctaHref: "#final-cta",
    },
  ] satisfies readonly ServicePath[],
  projects: [
    {
      id: "landing-page",
      category: "MẪU GIAO DIỆN",
      title: "Website giới thiệu dịch vụ",
      description: "Giao diện tập trung vào nội dung chính và hành động rõ ràng.",
      image: "/images/projects/landing-page-concept.svg",
      alt: "Mẫu giao diện landing page giới thiệu dịch vụ",
    },
    {
      id: "dashboard",
      category: "MẪU GIAO DIỆN",
      title: "Web quản lý",
      description: "Bố cục rõ cho dữ liệu và thao tác.",
      image: "/images/projects/dashboard-concept.svg",
      alt: "Mẫu giao diện web quản lý dữ liệu",
    },
    {
      id: "responsive",
      category: "CONCEPT DESIGN",
      title: "Desktop & Mobile",
      description: "Giao diện đồng nhất trên nhiều kích thước màn hình.",
      image: "/images/projects/responsive-concept.svg",
      alt: "Mẫu concept design responsive trên desktop và mobile",
    },
  ] satisfies readonly ProjectShowcase[],
  deliverables: [
    {
      id: "figma",
      label: "TÀI LIỆU",
      title: "FIGMA",
      description: "File thiết kế và các màn hình đã thống nhất.",
    },
    {
      id: "responsive",
      label: "THIẾT BỊ",
      title: "RESPONSIVE",
      description: "Giao diện phù hợp laptop, tablet và điện thoại.",
    },
    {
      id: "source-code",
      label: "MÃ NGUỒN",
      title: "SOURCE CODE",
      description: "Bàn giao theo phạm vi dịch vụ đã thống nhất.",
    },
    {
      id: "guide",
      label: "HỖ TRỢ",
      title: "HƯỚNG DẪN",
      description: "Hỗ trợ cài đặt, chạy hoặc tiếp tục phát triển.",
    },
  ] satisfies readonly Deliverable[],
  trustPoints: [
    {
      id: "project-context",
      title: "HIỂU BỐI CẢNH ĐỒ ÁN",
      description: "Biết một dự án sinh viên cần cân bằng giữa giao diện, chức năng và thời gian.",
    },
    {
      id: "buildable-design",
      title: "THIẾT KẾ CÓ THỂ TRIỂN KHAI",
      description: "Không chỉ đẹp trên Figma mà còn tính tới cách code và responsive.",
    },
    {
      id: "clear-scope",
      title: "PHẠM VI RÕ RÀNG",
      description: "Thống nhất phần cần làm, thời gian và hình thức bàn giao trước khi bắt đầu.",
    },
    {
      id: "clear-communication",
      title: "TRAO ĐỔI DỄ HIỂU",
      description: "Không cần dùng quá nhiều thuật ngữ kỹ thuật để nói chuyện với tụi mình.",
    },
  ] satisfies readonly TrustPoint[],
  workflow: [
    { number: "01", title: "Trao đổi", description: "Hiểu nhu cầu và phạm vi." },
    { number: "02", title: "Thiết kế", description: "Xây dựng hoặc kiểm tra Figma." },
    { number: "03", title: "Phát triển", description: "Code và hoàn thiện giao diện." },
    { number: "04", title: "Bàn giao", description: "Kiểm tra và bàn giao phần đã thống nhất." },
  ] satisfies readonly WorkflowStep[],
  footerDescription: "Thiết kế Figma & phát triển website theo yêu cầu.",
  copyright: "© 2026 Flash Honner",
} as const;

export type Site = typeof site;
