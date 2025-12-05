import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Học tập thông minh chỉ với <span className="text-navy-600">3 bước</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium">Simple, Fast, Effective</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = step.icon!;
            return (
              <div 
                key={step.id} 
                className={`${step.bgColor} rounded-3xl p-8 border border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-50">
                  <Icon className="w-8 h-8 text-navy-800" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;