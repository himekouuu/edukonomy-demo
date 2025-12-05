import React from 'react';
import { Check, Star, BarChart3, Book } from 'lucide-react';

const Features: React.FC = () => {
  const featureList = [
    "Trả lời ngay lập tức - không phải đợi",
    "Sẵn sàng 24/7 - học lúc nào cũng được",
    "Ví dụ Việt Nam - dễ hiểu, dễ nhớ",
    "Giải thích từng bước - không bỏ sót chi tiết",
    "Hỗ trợ đa môn - Kinh tế, Tài chính, Kế toán",
    "Hoàn toàn miễn phí - không giới hạn câu hỏi"
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-navy-50/50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column - Shows second on mobile (Order 2), first on Desktop (Order 1) */}
          <div className="order-1 lg:order-1">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 leading-tight">
              Tính năng vượt trội - <br/>
              <span className="gradient-text">Không cần lo lắng nữa</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-medium">
              Mọi thứ bạn cần để xuất sắc trong môn kinh tế. Từ lý thuyết cơ bản đến bài tập nâng cao.
            </p>

            <ul className="space-y-4">
              {featureList.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-4">
                    <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />
                  </div>
                  <span className="text-base md:text-lg text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden md:block">
              <button className="px-8 py-4 bg-navy-900 text-white rounded-xl font-bold text-lg hover:bg-navy-800 transition-colors shadow-lg shadow-navy-900/20">
                Khám Phá Ngay →
              </button>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="order-2 lg:order-2 relative mt-8 lg:mt-0">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[350px]">
              {/* Phone Mockup Frame */}
              <div className="relative rounded-[2.5rem] bg-navy-900 p-2 shadow-2xl">
                <div className="rounded-[2rem] overflow-hidden bg-white aspect-[9/19] relative">
                  {/* Phone Screen Content */}
                  <div className="absolute top-0 w-full h-full bg-gray-50 flex flex-col">
                     {/* Header */}
                     <div className="bg-navy-800 h-28 md:h-32 p-6 flex flex-col justify-end">
                        <h4 className="text-white font-bold text-xl">Chào Minh, 👋</h4>
                        <p className="text-blue-200 text-sm">Hôm nay bạn muốn học gì?</p>
                     </div>
                     
                     {/* Content Body */}
                     <div className="p-4 space-y-4 flex-1 overflow-hidden">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-gray-400">TIẾN ĐỘ HỌC TẬP</span>
                            <span className="text-xs font-bold text-blue-600">85%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-600 to-navy-800 h-2 rounded-full w-[85%]"></div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                          <div className="flex items-start space-x-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                              <Book size={20} className="text-blue-600"/>
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-800 text-sm">Kinh tế Vi mô</h5>
                              <p className="text-xs text-gray-500 mt-1">Đã hoàn thành chương 3</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                           <div className="flex items-start space-x-3">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                              <BarChart3 size={20} className="text-indigo-600"/>
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-800 text-sm">Tài chính DN</h5>
                              <p className="text-xs text-gray-500 mt-1">Đang giải bài tập NPV...</p>
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Floating Notifications - Hidden on small mobile */}
              <div className="absolute top-20 -right-4 sm:-right-12 bg-white p-3 sm:p-4 rounded-xl shadow-xl animate-float border-l-4 border-green-500 hidden sm:block">
                <div className="flex items-center space-x-3">
                   <div className="bg-green-100 p-1.5 rounded-full">
                     <Check size={16} className="text-green-600"/>
                   </div>
                   <div>
                     <p className="text-xs font-bold text-gray-800">Xuất sắc!</p>
                     <p className="text-xs text-gray-500">Bạn đã hiểu khái niệm GDP</p>
                   </div>
                </div>
              </div>

              <div className="absolute bottom-32 -left-4 sm:-left-12 bg-white p-3 sm:p-4 rounded-xl shadow-xl animate-float-delayed border-l-4 border-yellow-500 hidden sm:block">
                <div className="flex items-center space-x-3">
                   <div className="bg-yellow-100 p-1.5 rounded-full">
                     <Star size={16} className="text-yellow-600"/>
                   </div>
                   <div>
                     <p className="text-xs font-bold text-gray-800">Điểm số</p>
                     <p className="text-lg font-bold text-navy-600">9.5/10</p>
                   </div>
                </div>
              </div>

            </div>
            
            <div className="mt-8 text-center md:hidden">
              <button className="w-full px-8 py-4 bg-navy-900 text-white rounded-xl font-bold text-lg hover:bg-navy-800 transition-colors shadow-lg">
                Khám Phá Ngay →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;