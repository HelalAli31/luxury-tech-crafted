import React from 'react';
import { LuxuryButton } from '@/components/LuxuryButton';
import { ServiceCard } from '@/components/ServiceCard';
import { ContactForm } from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import { Phone, Mail, Star, Code, Settings, Users } from 'lucide-react';
import luxuryTechLogo from '@/assets/luxury-tech-logo.png';

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <div className="luxury-fade-in mb-8">
            <img 
              src={luxuryTechLogo} 
              alt="Luxury Tech Logo" 
              className="h-20 w-auto mx-auto mb-6 animate-float"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 luxury-fade-in bg-gradient-luxury bg-clip-text text-transparent leading-tight">
            Luxury Tech – פיתוח אתרים ואפליקציות בהתאמה אישית
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed luxury-slide-up">
            אנחנו מפתחים אתרים, אפליקציות ומערכות חכמות שמותאמות בדיוק לצרכים של העסק שלך – עיצוב חדשני, קוד איכותי ותוצאות שמביאות לקוחות.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap luxury-slide-up">
            <LuxuryButton size="xl" onClick={scrollToContact}>
              בקש הצעת מחיר
            </LuxuryButton>
            <LuxuryButton variant="secondary" size="xl">
              צפה בעבודות שלנו
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            💡 מה אנחנו מציעים
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            פתרונות טכנולוגיים מותאמים אישית לכל עסק
          </p>
          
          <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
            <ServiceCard 
              title="פיתוח אתרים מותאמים אישית – דפי נחיתה, אתרי תדמית, חנויות אונליין."
              delay={100}
            />
            <ServiceCard 
              title="פיתוח אפליקציות – אפליקציות מובייל (iOS/Android) או ווב, עם ממשק נוח ויעיל."
              delay={200}
            />
            <ServiceCard 
              title="מערכות ניהול חכמות – פתרונות להזמנות, לקוחות ותשלומים."
              delay={300}
            />
            <ServiceCard 
              title="UX/UI מודרני – עיצוב שמושך את המשתמשים ומעלה המרות."
              delay={400}
            />
            <ServiceCard 
              title="ליווי אישי – משלב הרעיון ועד ההשקה."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-20" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            📊 למה לבחור בנו
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 bg-gradient-card border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <Star className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
              <h3 className="font-bold text-lg mb-2">ניסיון מוכח</h3>
              <p className="text-muted-foreground">עם לקוחות אמיתיים כמו Raise Fitness</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <Settings className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
              <h3 className="font-bold text-lg mb-2">פתרונות מותאמים</h3>
              <p className="text-muted-foreground">100% לדרישות העסק שלך</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <Code className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
              <h3 className="font-bold text-lg mb-2">טכנולוגיות עדכניות</h3>
              <p className="text-muted-foreground">React, Node.js, MongoDB, Flutter</p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
              <h3 className="font-bold text-lg mb-2">שירות מקצועי</h3>
              <p className="text-muted-foreground">זמין, מקצועי ומהיר</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-4 py-20" dir="rtl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            📞 רוצה אתר או אפליקציה שיקפיצו את העסק שלך קדימה?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            השאר פרטים ונחזור אליך בהקדם!
          </p>
          
          <ContactForm />
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="px-4 py-16 bg-card/30" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            📱 פרטי התקשרות
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-8 h-8 text-primary" />
              <p className="font-semibold">הלל</p>
              <a href="tel:054-3596761" className="text-primary hover:text-primary-glow transition-colors">
                054-3596761
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-8 h-8 text-primary" />
              <p className="font-semibold">בדר</p>
              <a href="tel:052-8938327" className="text-primary hover:text-primary-glow transition-colors">
                052-8938327
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-8 h-8 text-primary" />
              <p className="font-semibold">אימייל</p>
              <a href="mailto:luxury.tech.development@gmail.com" className="text-primary hover:text-primary-glow transition-colors text-sm">
                luxury.tech.development@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 text-center border-t border-primary/20">
        <div className="max-w-6xl mx-auto">
          <img 
            src={luxuryTechLogo} 
            alt="Luxury Tech Logo" 
            className="h-12 w-auto mx-auto mb-4 opacity-80"
          />
          <p className="text-muted-foreground">
            © 2024 Luxury Tech. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
