import React from 'react';
import { ChevronRight, Calculator, FileText } from 'lucide-react';

const UseCases: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Edukonomy giúp bạn <span className="text-navy-600">trong mọi tình huống</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Từ làm bài tập về nhà đến ôn thi cuối kỳ - chúng tôi luôn bên cạnh hỗ trợ bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-8 inline-block p-4 bg-white rounded-2xl shadow-sm text-blue-600">
              <Calculator size={32} />
            </div>
            <h3 className="text-3xl font-bold text-navy-900 mb-4">Giải bài tập nhanh chóng</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Gặp bài toán khó? Chụp ảnh hoặc nhập đề bài, AI sẽ hướng dẫn giải chi tiết từng bước một.
            </p>
            
            <ul className="space-y-3 mb-8">
              {['Giải toán kinh tế lượng', 'Phân tích case study', 'Công thức chi tiết kèm ví dụ'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center text-blue-700 font-bold text-lg group-hover:translate-x-2 transition-transform">
              Thử giải bài tập <ChevronRight className="ml-2" />
            </button>
            
            {/* Visual Abstract */}
            <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm opacity-80 scale-95 group-hover:scale-100 transition-transform origin-top">
               <div className="font-mono text-sm text-gray-500">
                  Calculating NPV...<br/>
                  <span className="text-green-600">NPV = 2,450,000 VND</span> (Dự án khả thi)
               </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2.5rem] bg-gradient-to-br from-cyan-50 to-blue-50 p-8 md:p-12 border border-cyan-100 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-8 inline-block p-4 bg-white rounded-2xl shadow-sm text-cyan-600">
              <FileText size={32} />
            </div>
            <h3 className="text-3xl font-bold text-navy-900 mb-4">Ôn tập trước kỳ thi</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Tổng hợp kiến thức trọng tâm, tạo đề cương ôn tập và các câu hỏi trắc nghiệm thử.
            </p>

            <ul className="space-y-3 mb-8">
              {['Ngân hàng câu hỏi trắc nghiệm', 'Tổng hợp lý thuyết chương', 'Mẹo làm bài thi điểm cao'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center text-cyan-700 font-bold text-lg group-hover:translate-x-2 transition-transform">
              Bắt đầu ôn tập <ChevronRight className="ml-2" />
            </button>

             {/* Visual Abstract */}
             <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm opacity-80 scale-95 group-hover:scale-100 transition-transform origin-top">
               <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                  <span className="text-xs font-bold text-gray-500">ĐỀ CƯƠNG ÔN TẬP</span>
                  <span className="text-xs font-bold text-cyan-700">Download PDF</span>
               </div>
               <div className="space-y-2">
                 <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                 <div className="h-2 bg-gray-100 rounded w-1/2"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCases;