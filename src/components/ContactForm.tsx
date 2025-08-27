import React, { useState } from 'react';
import { LuxuryButton } from './LuxuryButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "הצעת המחיר נשלחה בהצלחה!",
      description: "נחזור אליך בהקדם האפשרי"
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="p-8 bg-gradient-card border-primary/20 shadow-elegant max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
        <div>
          <Input
            name="name"
            placeholder="שם מלא"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background/50 border-primary/30 focus:border-primary text-right"
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="אימייל"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background/50 border-primary/30 focus:border-primary text-right"
          />
        </div>
        <div>
          <Input
            name="phone"
            type="tel"
            placeholder="טלפון"
            value={formData.phone}
            onChange={handleChange}
            className="bg-background/50 border-primary/30 focus:border-primary text-right"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="ספר לנו על הפרויקט שלך..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-background/50 border-primary/30 focus:border-primary text-right resize-none"
          />
        </div>
        <LuxuryButton type="submit" size="lg" className="w-full">
          בקש הצעת מחיר
        </LuxuryButton>
      </form>
    </Card>
  );
};