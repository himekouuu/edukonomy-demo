import React from 'react';
import { Check, X, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Bảng giá <span className="text-navy-600">linh hoạt</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chọn gói phù hợp với nhu cầu học tập của bạn. Bắt đầu miễn phí ngay hôm nay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="rounded-[2.5rem] p-8 md:p-10 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 relative">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">Cơ bản</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-navy-900">0đ</span>
              <span className="text-gray-500 ml-2">/ tháng</span>
            </div>
            <p className="text-gray-500 mb-8">Dành cho sinh viên muốn tra cứu nhanh các khái niệm cơ bản.</p>

            <button className="w-full py-4 rounded-xl border-2 border-navy-100 text-navy-900 font-bold text-lg hover:border-navy-600 hover:text-navy-600 transition-colors mb-8">
              Bắt đầu miễn phí
            </button>

            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Hỏi đáp không giới hạn với AI</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Giải thích khái niệm kinh tế</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Truy cập 24/7 trên mọi thiết bị</span>
              </li>
              <li className="flex items-center text-gray-400">
                <X className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Giải bài tập chi tiết từng bước</span>
              </li>
              <li className="flex items-center text-gray-400">
                <X className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Chế độ ôn thi nâng cao</span>
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="rounded-[2.5rem] p-8 md:p-10 border-2 border-blue-500 bg-navy-900 text-white shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-[2.3rem]">
              PHỔ BIẾN NHẤT
            </div>
            
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              Pro Student <Zap className="w-5 h-5 text-yellow-400 ml-2 fill-yellow-400" />
            </h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold">100.000đ</span>
              <span className="text-blue-200 ml-2">/ tháng</span>
            </div>
            <p className="text-blue-100 mb-8">Trợ thủ đắc lực giúp bạn đạt điểm A+ trong mọi kỳ thi.</p>

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all mb-8">
              Nâng cấp ngay
            </button>

            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-blue-500/20 p-1 rounded-full mr-3">
                   <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
                </div>
                <span>Tất cả tính năng gói Cơ bản</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-500/20 p-1 rounded-full mr-3">
                   <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
                </div>
                <span className="font-semibold text-blue-200">Giải bài tập chi tiết từng bước</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-500/20 p-1 rounded-full mr-3">
                   <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
                </div>
                <span>Chế độ ôn thi & Đề cương</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-500/20 p-1 rounded-full mr-3">
                   <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
                </div>
                <span>Phân tích Case Study thực tế</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-500/20 p-1 rounded-full mr-3">
                   <Check className="w-4 h-4 text-blue-400" strokeWidth={3} />
                </div>
                <span>Tốc độ phản hồi ưu tiên</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
