import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  university: string;
  content: string;
  rating: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: LucideIcon;
  bgColor?: string; // Tailwind class
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
  isThinking?: boolean;
}