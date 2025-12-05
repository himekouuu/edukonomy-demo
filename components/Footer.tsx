import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section inside Footer */}
        <div className="bg-gradient-to-r from-navy-700 to-navy-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between mb-16 md:mb-20 shadow-2xl relative overflow-hidden border border-white/10">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
           <div className="relative z-10 mb-8 md:mb-0 text-center md:text-left">
             <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Sẵn sàng chinh phục Kinh Tế Học?</h2>
             <p className="text-blue-100">Tham gia ngay với hàng ngàn sinh viên đang học thông minh hơn.</p>
           </div>
           <div className="relative z-10 flex w-full md:w-auto">
             <button className="w-full md:w-auto bg-white text-navy-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
               Bắt đầu ngay
             </button>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="assets/images/edukonomy_logo.svg" 
                alt="Edukonomy Logo" 
                className="h-8 md:h-9 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-xs">
              AI Economics Tutor for Vietnamese Students. Master Economics with AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-navy-600 transition-colors"><Facebook size={20}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-navy-600 transition-colors"><Instagram size={20}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-navy-600 transition-colors"><Youtube size={20}/></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 md:mb-6">Tính năng</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">AI Tutoring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Giải bài tập</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ôn thi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bảng giá (Miễn phí)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 md:mb-6">Hỗ trợ</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Góp ý</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 md:mb-6">Về chúng tôi</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sứ mệnh</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Đội ngũ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 text-center md:text-left">
          <p>© 2025 Edukonomy. Powered by Google Gemini AI.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;