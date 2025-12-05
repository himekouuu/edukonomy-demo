import React from 'react';
import { VALUE_PROPS, PARTNER_LOGOS } from '../constants';

const Values: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Values */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-bold text-navy-900 mb-12">Đối tác học tập đáng tin cậy</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {VALUE_PROPS.map((prop) => {
              const Icon = prop.icon!;
              return (
                <div key={prop.id} className="flex flex-col items-center group">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:-translate-y-2 transition-transform duration-300">
                    <Icon className="text-white w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{prop.title}</h3>
                  <p className="text-gray-500 max-w-xs mx-auto">{prop.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-gray-200 pt-16">
          <p className="text-center text-gray-400 font-semibold uppercase tracking-wider mb-8 text-sm">
            Được tin dùng bởi sinh viên từ các trường hàng đầu
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {PARTNER_LOGOS.map((school) => (
               <span key={school} className="text-2xl md:text-3xl font-black text-gray-300 font-serif hover:text-navy-800 cursor-default transition-colors">
                 {school}
               </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Values;