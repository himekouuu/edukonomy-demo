import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Header & Stats Column */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
              Sinh viên Việt Nam <br/>
              <span className="text-navy-600">tin dùng Edukonomy</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Hàng ngàn bạn học đã cải thiện điểm số và tiết kiệm thời gian học tập.
            </p>
            
            <div className="bg-navy-50 rounded-3xl p-8 space-y-6 border border-blue-100">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-navy-900">10k+</div>
                <div className="text-sm text-gray-500 font-medium leading-tight">Câu hỏi được <br/>trả lời mỗi tuần</div>
              </div>
              <div className="w-full h-px bg-blue-200"></div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-navy-900">98%</div>
                <div className="text-sm text-gray-500 font-medium leading-tight">Sinh viên <br/>hài lòng</div>
              </div>
              <div className="w-full h-px bg-blue-200"></div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-navy-900">Top 1</div>
                <div className="text-sm text-gray-500 font-medium leading-tight">AI Tutor <br/>tại Việt Nam</div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-shadow">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{item.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center text-white font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500 font-semibold">{item.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;