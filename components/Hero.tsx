import React, { useState, useEffect } from 'react';
import { GraduationCap, Calculator, Star, TrendingUp } from 'lucide-react';

interface HeroProps {
  onStartChat: () => void;
}

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const i = loopNum % texts.length;
    const fullText = texts[i];

    const handleTyping = () => {
      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1) 
        : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <span className="text-yellow-400 inline-block min-w-[200px]">
      {currentText}
      <span className="animate-pulse border-r-2 border-yellow-400 ml-1">&nbsp;</span>
    </span>
  );
};

const Hero: React.FC<HeroProps> = ({ onStartChat }) => {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#172554] to-[#0f172a]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 opacity-20 rounded-full blur-3xl"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 right-1/4 text-white/5 transform rotate-12">
           <TrendingUp size={120} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] tracking-tight">
              Học Kinh Tế <br className="hidden lg:block"/> 
              Dễ Dàng Hơn <br/>
              <TypewriterText texts={['Với AI Thông Minh', 'Giải Đáp 24/7', 'Cùng Gemini AI', 'Miễn Phí 100%']} /> 🚀
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Giải đáp mọi câu hỏi về kinh tế, kinh doanh, tài chính chỉ trong vài giây. Miễn phí 100%. Sẵn sàng 24/7 cho sinh viên Việt Nam.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={onStartChat}
                className="w-full sm:w-auto px-8 py-4 bg-white text-navy-800 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Thử Ngay Miễn Phí →
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-navy-700/50 border border-white/20 text-white backdrop-blur-sm rounded-xl font-bold text-lg hover:bg-navy-700/70 transition-all duration-300">
                Xem Demo ▶
              </button>
            </div>
            
            <div className="pt-2 md:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 text-blue-200 text-sm font-medium">
              <span className="flex items-center"><span className="text-green-400 mr-1">●</span> 1,200+ sinh viên đang online</span>
              <span className="hidden sm:inline">|</span>
              <span>⭐ 4.9/5 đánh giá</span>
            </div>
          </div>

          {/* Visual - Penguin Mascot */}
          <div className="relative mx-auto lg:mr-0 max-w-sm sm:max-w-md lg:max-w-full w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 lg:left-2/3 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-400/20 rounded-full blur-[60px] -z-10"></div>

            {/* Floating Icons - Hidden on very small screens to reduce clutter */}
            <div className="absolute top-0 right-4 sm:right-10 bg-white p-2 sm:p-3 rounded-2xl shadow-xl animate-float text-navy-600 z-20 hidden sm:block">
              <GraduationCap size={28} className="sm:w-8 sm:h-8" />
            </div>
            <div className="absolute bottom-10 sm:bottom-20 left-0 sm:left-0 bg-white p-2 sm:p-3 rounded-2xl shadow-xl animate-float-delayed text-blue-500 z-20 hidden sm:block">
              <Calculator size={28} className="sm:w-8 sm:h-8" />
            </div>
            <div className="absolute top-1/2 -right-2 sm:-right-4 bg-white p-2 sm:p-3 rounded-2xl shadow-xl animate-pulse-slow text-yellow-500 z-20 hidden sm:block">
              <Star size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
            </div>
            
            {/* Penguin Image Container */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 w-full flex justify-center">
               <img 
                 src="https://placehold.co/500x500/transparent/FFFFFF?text=Penguin+Mascot"
                 alt="Edukonomy Penguin Mascot" 
                 className="w-[80%] sm:w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] h-auto object-contain drop-shadow-2xl animate-float"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;