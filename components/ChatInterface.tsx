import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface ChatInterfaceProps {
  onBack: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onBack }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-fade-in">
      {/* Header/Nav for Chat View */}
      <div className="h-16 bg-navy-900 flex items-center justify-between px-4 sm:px-6 shadow-md flex-shrink-0">
        <button
          onClick={onBack}
          className="flex items-center text-white hover:text-blue-300 transition-colors py-2"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-medium">Quay lại trang chủ</span>
        </button>
        
        <div className="flex items-center space-x-4">
           <span className="text-white font-bold hidden sm:block">Edukonomy AI Tutor</span>
           <a 
             href="https://edukonomy.streamlit.app" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-gray-400 hover:text-white transition-colors"
             title="Mở trong tab mới"
           >
             <ExternalLink size={20} />
           </a>
        </div>
      </div>

      {/* Streamlit Embed */}
      <div className="flex-1 w-full bg-gray-50 relative">
        <iframe
          src="https://edukonomy.streamlit.app/?embed=true"
          title="Edukonomy Chatbot"
          className="w-full h-full border-0"
          allow="camera; microphone; clipboard-read; clipboard-write;"
        />
      </div>
    </div>
  );
};

export default ChatInterface;