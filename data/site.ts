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

export type AssurancePoint = {
  label: string;
  description: string;
};

export type ContextPoint = {
  label: string;
  title: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  includes: string;
  timeline: string;
  price: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const site = {
  brandName: "Flash Honner",
  zaloUrl: "https://zalo.me/0379052767",
  heroEyebrow: "Thiết kế Figma · Dựng website responsive",
  heroHeadline: "Có ý tưởng rồi, nhưng giao diện vẫn chưa ổn?",
  heroDescription:
    "Flash Honner giúp bạn thiết kế Figma và dựng website chạy mượt trên cả laptop lẫn điện thoại. Phù hợp với sinh viên, nhóm dự án nhỏ, CLB và người mới bắt đầu kinh doanh online.",
  heroNote:
    "Chưa có gì cũng được, có sẵn Figma hoặc code dở cũng được. Gửi qua, tụi mình sẽ xem rồi phản hồi rõ ràng.",
  contextPoints: [
    { label: "FIGMA", title: "Thiết kế từng màn hình" },
    { label: "WEBSITE", title: "Code sạch, chạy thật" },
    { label: "RESPONSIVE", title: "Desktop, tablet, mobile" },
    { label: "BÀN GIAO", title: "File và source theo thỏa thuận" },
  ] satisfies readonly ContextPoint[],
  painPoints: [
    { id: "messy-ui", text: "Code chạy được nhưng nhìn còn rối, chưa biết chỉnh từ đâu." },
    { id: "figma-gap", text: "Có Figma đẹp, nhưng dựng ra web thì lệch hết màu, font và khoảng cách." },
    { id: "no-ui-specialist", text: "Trong nhóm không ai rành UI/UX, mỗi người làm một kiểu." },
    { id: "deadline", text: "Bản demo sắp đến hạn mà giao diện vẫn thiếu đồng nhất." },
    { id: "starting-point", text: "Muốn có trang giới thiệu cho CLB, dự án hay sản phẩm nhưng không biết bắt đầu từ đâu." },
  ] satisfies readonly PainPoint[],
  servicePaths: [
    {
      id: "new-idea",
      label: "MỚI CÓ Ý TƯỞNG",
      title: "Tụi mình cùng bạn biến ý tưởng thành thiết kế Figma.",
      description:
        "Bạn gửi mô tả sản phẩm, đối tượng người dùng và vài ví dụ giao diện bạn thích. Tụi mình lên luồng màn hình, chọn màu, font, rồi thiết kế đầy đủ bản desktop và mobile.",
      steps: ["Ý tưởng", "User flow", "Figma", "Desktop & Mobile"],
      bullets: [
        "Sơ đồ luồng màn hình (user flow)",
        "Bảng màu, font và thành phần giao diện dùng lại được",
        "Thiết kế desktop và mobile",
        "File Figma tổ chức gọn, dễ chỉnh sửa về sau",
      ],
      ctaLabel: "Xem quy trình",
    },
    {
      id: "with-figma",
      label: "ĐÃ CÓ FIGMA",
      title: "Tụi mình dựng đúng thiết kế đó thành website.",
      description:
        "Tụi mình xem file Figma trước, báo lại những điểm khó triển khai hoặc chưa hợp lý, rồi mới bắt tay vào code. Bạn sẽ có trang web khớp thiết kế về màu sắc, font chữ, khoảng cách và bố cục.",
      steps: ["Figma", "Kiểm tra", "Code", "Responsive", "Demo"],
      bullets: [
        "Bám sát Figma từng chi tiết",
        "Nút bấm, form và điều hướng hoạt động thật",
        "Hiển thị tốt trên nhiều kích thước màn hình",
        "Công nghệ được thống nhất theo phạm vi dự án",
      ],
      ctaLabel: "Xem quy trình",
    },
    {
      id: "existing-code",
      label: "CODE ĐÃ CÓ",
      title: "Chỉ cần chỉnh giao diện cho gọn và đồng nhất.",
      description:
        "Tụi mình rà lại giao diện, sửa lỗi hiển thị và làm cho trang đồng nhất hơn. Phù hợp khi chức năng đã xong mà giao diện còn lộn xộn, lệch trên mobile hoặc thiếu nhất quán.",
      steps: ["Rà soát", "Sửa giao diện", "Responsive", "Bàn giao"],
      bullets: [
        "Rà lại bố cục, màu, font và khoảng cách",
        "Sửa các lỗi hiển thị trên mobile",
        "Đồng nhất các thành phần giao diện",
        "Bàn giao phần đã thống nhất",
      ],
      ctaLabel: "Xem quy trình",
    },
  ] satisfies readonly ServicePath[],
  projects: [
    {
      id: "landing-page",
      category: "BẢN THIẾT KẾ MẪU · LANDING PAGE",
      title: "Landing page giới thiệu dịch vụ",
      description: "Bản thiết kế mẫu tập trung vào nội dung chính và hành động rõ ràng.",
      image: "/images/projects/landing-page-concept.svg",
      alt: "Bản thiết kế mẫu landing page giới thiệu dịch vụ",
    },
    {
      id: "dashboard",
      category: "BẢN THIẾT KẾ MẪU · WEB QUẢN LÝ",
      title: "Web quản lý",
      description: "Bản thiết kế mẫu với bố cục rõ cho dữ liệu và thao tác.",
      image: "/images/projects/dashboard-concept.svg",
      alt: "Bản thiết kế mẫu web quản lý dữ liệu",
    },
    {
      id: "responsive",
      category: "BẢN THIẾT KẾ MẪU · RESPONSIVE",
      title: "Desktop và mobile",
      description: "Bản thiết kế mẫu thể hiện giao diện đồng nhất trên nhiều kích thước màn hình.",
      image: "/images/projects/responsive-concept.svg",
      alt: "Bản thiết kế mẫu responsive trên desktop và mobile",
    },
  ] satisfies readonly ProjectShowcase[],
  deliverables: [
    {
      id: "figma",
      label: "THIẾT KẾ",
      title: "FILE FIGMA",
      description: "Đầy đủ các màn hình đã thống nhất, sắp xếp gọn gàng.",
    },
    {
      id: "responsive",
      label: "HIỂN THỊ",
      title: "WEBSITE RESPONSIVE",
      description: "Hiển thị ổn trên laptop, tablet và điện thoại.",
    },
    {
      id: "source-code",
      label: "MÃ NGUỒN",
      title: "SOURCE CODE",
      description: "Bàn giao theo phạm vi đã thỏa thuận.",
    },
    {
      id: "guide",
      label: "HƯỚNG DẪN",
      title: "CÀI ĐẶT VÀ CHỈNH SỬA",
      description: "Hướng dẫn cách cài đặt, chạy và chỉnh sửa tiếp.",
    },
  ] satisfies readonly Deliverable[],
  trustPoints: [
    {
      id: "buildable-design",
      title: "THIẾT KẾ ĐỂ CODE ĐƯỢC",
      description:
        "Tụi mình vừa thiết kế vừa lập trình, nên thiết kế nào cũng tính trước chuyện dựng web, không có cảnh đẹp trên Figma nhưng khó làm ngoài thực tế.",
    },
    {
      id: "student-context",
      title: "HIỂU DỰ ÁN CỦA SINH VIÊN",
      description:
        "Ngân sách có hạn, thời gian gấp, yêu cầu môn học nhiều. Tụi mình cân đối giữa giao diện, chức năng và deadline giúp bạn.",
    },
    {
      id: "clear-scope",
      title: "PHẠM VI RÕ RÀNG",
      description:
        "Làm gì, khi nào xong, bàn giao gì, tất cả được nói trước khi bắt đầu.",
    },
    {
      id: "clear-communication",
      title: "NÓI CHUYỆN DỄ HIỂU",
      description: "Không cần biết thuật ngữ. Bạn mô tả bằng lời của mình là đủ.",
    },
  ] satisfies readonly TrustPoint[],
  workflow: [
    { number: "01", title: "Trao đổi", description: "Bạn gửi yêu cầu qua Zalo. Tụi mình hỏi thêm cho rõ và báo giá, thời gian." },
    { number: "02", title: "Chốt phạm vi", description: "Hai bên thống nhất công việc, mốc giao và cách bàn giao." },
    { number: "03", title: "Thiết kế", description: "Làm mới hoặc kiểm tra Figma, gửi bạn xem và góp ý." },
    { number: "04", title: "Phát triển", description: "Dựng website, cập nhật tiến độ theo từng mốc." },
    { number: "05", title: "Kiểm tra và bàn giao", description: "Cùng chạy thử, chỉnh sửa theo thỏa thuận, gửi file và hướng dẫn." },
  ] satisfies readonly WorkflowStep[],
  assurancePoints: [
    { label: "PHẠM VI", description: "Tụi mình xác nhận phần cần làm trước khi triển khai." },
    { label: "TIẾN ĐỘ", description: "Thời gian được trao đổi dựa trên khối lượng thực tế." },
    { label: "BÀN GIAO", description: "File và source được bàn giao theo phạm vi đã thống nhất." },
    { label: "BẢO HÀNH", description: "Bảo hành 12 tháng kể từ ngày bàn giao đối với các lỗi thuộc chức năng đã thống nhất trong phạm vi dự án." },
  ] satisfies readonly AssurancePoint[],
  pricingPlans: [
    { id: "figma", name: "Thiết kế Figma", includes: "Luồng màn hình, thiết kế desktop và mobile", timeline: "Trao đổi theo phạm vi", price: "Liên hệ báo giá" },
    { id: "website", name: "Dựng web từ Figma", includes: "Code responsive, tương tác cơ bản", timeline: "Trao đổi theo phạm vi", price: "Liên hệ báo giá" },
    { id: "complete", name: "Trọn gói", includes: "Thiết kế, dựng web và bàn giao", timeline: "Trao đổi theo phạm vi", price: "Liên hệ báo giá" },
    { id: "refinement", name: "Chỉnh giao diện có sẵn", includes: "Rà soát, sửa lỗi, đồng nhất giao diện", timeline: "Trao đổi theo phạm vi", price: "Liên hệ báo giá" },
  ] satisfies readonly PricingPlan[],
  faq: [
    {
      id: "idea-only",
      question: "Tôi chưa có gì cả, chỉ có ý tưởng thì có làm được không?",
      answer: "Được. Bạn mô tả càng rõ càng tốt, còn lại tụi mình sẽ hỏi thêm.",
    },
    {
      id: "revisions",
      question: "Tôi có được chỉnh sửa sau khi nhận bản đầu không?",
      answer: "Có. Số vòng chỉnh sửa và phạm vi mỗi vòng được thống nhất trước khi bắt đầu. Thay đổi lớn ngoài phạm vi ban đầu sẽ được trao đổi riêng.",
    },
    {
      id: "timeline",
      question: "Cần bao lâu để xong?",
      answer: "Tùy số màn hình và độ phức tạp. Tụi mình báo mốc cụ thể sau khi xem yêu cầu.",
    },
    {
      id: "source",
      question: "Tôi có nhận được source code không?",
      answer: "Có, theo phạm vi đã thỏa thuận ở bước chốt.",
    },
    {
      id: "urgent",
      question: "Nếu cần gấp thì sao?",
      answer: "Nhắn sớm nhất có thể. Tụi mình sẽ nói thẳng có kịp hay không, không nhận nếu biết không đảm bảo chất lượng.",
    },
    {
      id: "school-project",
      question: "Tụi mình dùng sản phẩm này cho môn học được không?",
      answer: "Tụi mình hỗ trợ phần thiết kế và kỹ thuật như một người cố vấn. Bạn nên nắm rõ sản phẩm của mình và tuân thủ quy định của trường về việc nhờ hỗ trợ bên ngoài.",
    },
    {
      id: "payment",
      question: "Thanh toán thế nào?",
      answer: "Cách thanh toán được thống nhất rõ cùng phạm vi, mốc giao và cách bàn giao trước khi bắt đầu.",
    },
  ] satisfies readonly FaqItem[],
  footerDescription: "Thiết kế Figma và phát triển website theo yêu cầu.",
  copyright: "© 2026 Flash Honner. Product Design and Development.",
} as const;

export type Site = typeof site;
