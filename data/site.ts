export type Service = {
  id: string;
  title: string;
  description: string;
  details: string[];
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
  productName: "Product Design & Development",
  heroEyebrow: "THIẾT KẾ FIGMA • XÂY DỰNG WEBSITE • PHÁT TRIỂN THEO YÊU CẦU",
  heroHeadline: "Bạn có ý tưởng, Flash Honner giúp biến nó thành một website rõ ràng và có thể sử dụng.",
  heroDescription:
    "Flash Honner là một nhóm nhỏ chuyên thiết kế giao diện trên Figma và xây dựng website theo từng yêu cầu cụ thể. Từ một ý tưởng còn đơn giản, nhóm cùng bạn làm rõ nội dung, chia cấu trúc từng màn hình, thiết kế giao diện và phát triển thành website có thể chạy thực tế.",
  heroNote: "Bạn chưa cần biết công nghệ. Chỉ cần nói rõ website dùng để làm gì.",
  services: [
    {
      id: "requirements",
      title: "Phân tích yêu cầu & cấu trúc website",
      description: "Làm rõ mục tiêu, người dùng, số lượng trang và chức năng trước khi bắt đầu thiết kế.",
      details: ["Xác định người dùng và luồng chính", "Đề xuất sơ đồ trang và cấu trúc màn hình", "Phân biệt website giới thiệu với hệ thống có dữ liệu"],
    },
    {
      id: "figma",
      title: "Thiết kế UI/UX trên Figma",
      description: "Thiết kế giao diện dựa trên nội dung, thương hiệu và cách người dùng thực tế sẽ sử dụng website.",
      details: ["Landing page, portfolio và website giới thiệu", "Màn hình tổng quan, trang quản trị và biểu mẫu nghiệp vụ", "Responsive — hiển thị phù hợp trên điện thoại, máy tính bảng và máy tính"],
    },
    {
      id: "frontend",
      title: "Xây dựng giao diện thủ công",
      description: "Phát triển giao diện từ Figma bằng mã nguồn rõ ràng thay vì chỉ ghép template có sẵn.",
      details: ["Cấu trúc mã nguồn dễ đọc và chỉnh sửa", "Hiển thị phù hợp trên các thiết bị theo bố cục đã thống nhất", "Hạn chế thành phần dư thừa không cần thiết"],
    },
    {
      id: "development",
      title: "Phát triển website theo yêu cầu",
      description: "Mở rộng website thành sản phẩm có chức năng phù hợp với phạm vi dự án.",
      details: ["Đăng nhập, người dùng và phân quyền", "Thêm, sửa, xóa và quản lý dữ liệu", "Kết nối dịch vụ và dữ liệu khi cần"],
    },
    {
      id: "handover",
      title: "Bàn giao & hỗ trợ kỹ thuật",
      description: "Bàn giao những phần đã thống nhất cùng tài liệu cần thiết để tiếp tục sử dụng và phát triển.",
      details: ["Mã nguồn và file thiết kế theo phạm vi", "Tài liệu hướng dẫn cài đặt và chạy thử", "Hỗ trợ lỗi thuộc chức năng đã thống nhất"],
    },
  ] satisfies Service[],
  audiences: [
    {
      id: "students",
      title: "Sinh viên",
      description: "Có đề bài, đồ án hoặc sản phẩm học tập và cần hỗ trợ phân tích, thiết kế, cấu trúc mã nguồn, cơ sở dữ liệu, bản demo và tài liệu hướng dẫn.",
    },
    {
      id: "educators",
      title: "Giảng viên / Giáo viên",
      description: "Cần website giới thiệu cá nhân, môn học, tài liệu, lớp học, dự án nghiên cứu hoặc một chương trình giáo dục.",
    },
    {
      id: "individuals",
      title: "Cá nhân / Freelancer",
      description: "Cần portfolio, landing page hoặc website giới thiệu dịch vụ với nội dung rõ ràng và dễ tiếp cận.",
    },
    {
      id: "small-business",
      title: "Nhóm nhỏ / Cửa hàng",
      description: "Cần website giới thiệu, trình bày sản phẩm, nhận thông tin khách hàng hoặc quản lý đơn giản.",
    },
    {
      id: "project-teams",
      title: "Nhóm dự án / Người có ý tưởng",
      description: "Có ý tưởng nhưng chưa biết bắt đầu từ giao diện, cấu trúc hay công nghệ và cần người cùng làm rõ từng phần.",
    },
  ] satisfies Audience[],
  workflow: [
    { number: "01", title: "Nhận yêu cầu", description: "Bạn gửi ý tưởng, nội dung hoặc mô tả ngắn. Không cần viết tài liệu kỹ thuật." },
    { number: "02", title: "Làm rõ phạm vi", description: "Hai bên thống nhất mục tiêu, người dùng, trang, chức năng, dữ liệu và thời gian mong muốn." },
    { number: "03", title: "Xây dựng cấu trúc", description: "Sắp xếp sơ đồ trang, luồng người dùng, màn hình và các thành phần chính." },
    { number: "04", title: "Thiết kế Figma", description: "Thiết kế trước để hai bên nhìn thấy sản phẩm và xử lý thay đổi lớn trước khi lập trình." },
    { number: "05", title: "Phát triển website", description: "Xây dựng giao diện và chức năng sau khi cấu trúc, phạm vi và thiết kế đã rõ." },
    { number: "06", title: "Kiểm tra & chỉnh sửa", description: "Kiểm tra giao diện, khả năng hiển thị trên các thiết bị, luồng chức năng, nội dung và lỗi trong phạm vi đã thống nhất." },
    { number: "07", title: "Bàn giao", description: "Bàn giao mã nguồn, file thiết kế, cơ sở dữ liệu, tài liệu hướng dẫn và cách chạy tùy theo dự án." },
  ] satisfies WorkflowStep[],
  preparation: [
    { title: "Website dùng để làm gì?", description: "Giới thiệu dịch vụ, đồ án, bán hàng, portfolio hay quản lý dữ liệu?" },
    { title: "Ai sẽ sử dụng?", description: "Khách truy cập, sinh viên, giáo viên, nhân viên, quản lý hay người quản trị?" },
    { title: "Chức năng bắt buộc?", description: "Ưu tiên những chức năng thực sự cần để website đạt mục tiêu ban đầu." },
    { title: "Nội dung hiện có?", description: "Logo, văn bản, hình ảnh, Word, Excel, PDF, Figma cũ hoặc website tham khảo." },
    { title: "Website tham khảo?", description: "Gửi link và nói rõ phần bạn thích để nhóm hiểu phong cách mong muốn." },
    { title: "Thời gian mong muốn?", description: "Cho biết thời điểm cần bản đầu tiên, demo và bàn giao để cùng thống nhất thực tế." },
  ],
  scope: [
    "Số lượng trang / màn hình",
    "Phạm vi chức năng",
    "Thiết bị cần hỗ trợ",
    "Có Figma hay chưa",
    "Giao diện và xử lý dữ liệu",
    "Cơ sở dữ liệu",
    "Đăng nhập và phân quyền",
    "Trang tổng quan / quản trị",
    "Hosting / domain",
    "Nội dung và hình ảnh",
    "Số vòng chỉnh sửa",
    "Thời gian bàn giao",
    "Hình thức bàn giao",
    "Hỗ trợ sau bàn giao",
  ],
  footerDescription:
    "Thiết kế Figma và phát triển website theo yêu cầu cho cá nhân, sinh viên, giáo viên, nhóm nhỏ và các dự án cần một sản phẩm rõ ràng, dễ sử dụng.",
  copyright: "© 2026 Flash Honner. Product Design and Development.",
  zaloUrl: "https://zalo.me/0379052767",
} as const;

export type Site = typeof site;
