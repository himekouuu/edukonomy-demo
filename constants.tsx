import { Testimonial, Feature, NavItem } from './types';
import { MessageCircle, Brain, CheckCircle, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Tính năng', href: '#features' },
  { label: 'Cách hoạt động', href: '#how-it-works' },
  { label: 'Đánh giá', href: '#testimonials' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Minh Anh",
    university: "HCMUE",
    content: "Edukonomy giúp mình hiểu WACC chỉ trong 5 phút. Giải thích rất rõ ràng và có ví dụ Việt Nam!",
    rating: 5
  },
  {
    id: 2,
    name: "Thanh Tùng",
    university: "NEU",
    content: "Mình dùng để ôn thi kinh tế vĩ mô. Điểm tăng từ 6.5 lên 8.5! Cảm ơn Edukonomy.",
    rating: 5
  },
  {
    id: 3,
    name: "Hương Giang",
    university: "FTU",
    content: "24/7 sẵn sàng giúp đỡ, không cần chờ đợi như gia sư truyền thống. Rất tiện lợi.",
    rating: 5
  },
  {
    id: 4,
    name: "Quang Huy",
    university: "UEH",
    content: "Các ví dụ về thị trường Việt Nam làm mình dễ hiểu bài hơn hẳn sách giáo khoa.",
    rating: 5
  },
  {
    id: 5,
    name: "Lan Ngọc",
    university: "RMIT",
    content: "Giao diện đẹp, dễ sử dụng. AI trả lời cực nhanh và chính xác.",
    rating: 5
  },
  {
    id: 6,
    name: "Đức Thịnh",
    university: "Banking Academy",
    content: "Công cụ không thể thiếu cho sinh viên tài chính. Giải bài tập chi tiết từng bước.",
    rating: 5
  }
];

export const HOW_IT_WORKS_STEPS: Feature[] = [
  {
    id: 1,
    title: "Đặt câu hỏi",
    description: "Hỏi bất kỳ câu hỏi nào về kinh tế học, kinh doanh, tài chính, kế toán.",
    icon: MessageCircle,
    bgColor: "bg-pink-50"
  },
  {
    id: 2,
    title: "AI phân tích & trả lời",
    description: "Gemini AI xử lý và đưa ra câu trả lời chi tiết, chính xác trong vài giây.",
    icon: Brain,
    bgColor: "bg-teal-50"
  },
  {
    id: 3,
    title: "Hiểu bài & làm bài tốt",
    description: "Nhận giải thích từng bước, ví dụ thực tế và công thức để nắm vững kiến thức.",
    icon: TrendingUp,
    bgColor: "bg-orange-50"
  }
];

export const VALUE_PROPS: Feature[] = [
  {
    id: 1,
    title: "Thông minh",
    description: "AI học máy tiên tiến từ Google Gemini",
    icon: Brain,
  },
  {
    id: 2,
    title: "Nhanh chóng",
    description: "Trả lời trong vài giây, không phải chờ đợi",
    icon: Zap,
  },
  {
    id: 3,
    title: "Chính xác",
    description: "Kiến thức được kiểm chứng, đáng tin cậy",
    icon: ShieldCheck,
  }
];

export const PARTNER_LOGOS = [
  "NEU", "FTU", "UEH", "RMIT", "HCMUE", "BA"
];