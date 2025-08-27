import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  delay?: number;
}

export const ServiceCard = ({ title, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-500 group luxury-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <CheckCircle className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors duration-300" />
      </div>
      <p className="text-foreground text-lg font-medium leading-relaxed group-hover:text-primary-glow transition-colors duration-300">
        {title}
      </p>
    </div>
  );
};