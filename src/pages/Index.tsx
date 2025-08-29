import React from "react";
import { LuxuryButton } from "@/components/LuxuryButton";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Mail,
  Star,
  Code,
  Settings,
  Users,
  MessageCircle,
  MapPin,
  Clock,
  Globe,
  Instagram,
  Facebook,
} from "lucide-react";


const Index = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const message = "שלום, אני מעוניין לקבל הצעת מחיר";
    const phone = "972549598571";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Top Navigation */}
      <nav className="px-4 py-4" dir="rtl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Contact Info - Left Side */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <div className="text-sm text-primary hover:text-primary-glow transition-colors">
                054-9598571
              </div>
            </div>
            {/* <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a
                href="tel:052-8938327"
                className="text-sm text-primary hover:text-primary-glow transition-colors"
              >
                בדר : 052-8938327
              </a>
            </div> */}
            <button
              onClick={handleWhatsApp}
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>

          {/* Action Buttons - Right Side */}
          <div className="flex gap-3">
            <LuxuryButton size="sm" onClick={handleWhatsApp}>
              בקש הצעת מחיר
            </LuxuryButton>
            {/* <LuxuryButton variant="secondary" size="sm">
              צפה בעבודות
            </LuxuryButton> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<section className="relative px-4 py-16" dir="rtl">
   
    <div className="luxury-fade-in mb-8">
      <img
        src="/assets/luxury-tech-logo.png"
        alt="Luxury Tech Logo"
        className="h-20 w-auto mx-auto mb-6 animate-float"
      />
    </div>
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
  {/* Helal */}
  <div className="flex justify-center order-1 md:order-1">
    <img
      src="/assets/helal2.jpg"
      alt="Helal"
      className="w-24 sm:w-32 md:w-48 lg:w-60 object-cover drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]"
    />
  </div>

  {/* Bader */}
  <div className="flex justify-center order-2 md:order-3">
    <img
      src="/assets/bader2.jpg"
      alt="Bader"
      className="w-24 sm:w-32 md:w-48 lg:w-60 object-cover drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]"
    />
  </div>

  {/* Center - Title + Form */}
  <div className="col-span-2 md:col-span-1 text-center order-3 md:order-2">
    <h1 className="text-3xl md:text-6xl font-bold mb-6 luxury-fade-in bg-gradient-luxury bg-clip-text text-transparent leading-tight">
      Luxury Tech – פיתוח אתרים ואפליקציות בהתאמה אישית
    </h1>

    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed luxury-slide-up">
      אנחנו מפתחים אתרים, אפליקציות ומערכות חכמות שמותאמות בדיוק לצרכים של העסק שלך –
      עיצוב חדשני, קוד איכותי ותוצאות שמביאות לקוחות.
    </p>

    <div className="luxury-slide-up max-w-md mx-auto">
      <ContactForm />
    </div>
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
              <p className="text-muted-foreground">
                עם לקוחות אמיתיים כמו Raise Fitness
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <Settings className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
              <h3 className="font-bold text-lg mb-2">פתרונות מותאמים</h3>
              <p className="text-muted-foreground">100% לדרישות העסק שלך</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <Code className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
              <h3 className="font-bold text-lg mb-2">טכנולוגיות עדכניות</h3>
              <p className="text-muted-foreground">
                React, Node.js, MongoDB, Flutter
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
              <h3 className="font-bold text-lg mb-2">שירות מקצועי</h3>
              <p className="text-muted-foreground">זמין, מקצועי ומהיר</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-4 py-20 bg-secondary/20" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            💼חלק מהפרויקטים שלנו
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            דוגמאות לעבודות שביצענו עבור לקוחותינו
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href="https://raisesfitness.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="overflow-hidden bg-gradient-card border-primary/20 group hover:border-primary/40 transition-all duration-300 hover:shadow-luxury">
                <div className="h-48 bg-gradient-luxury/20 flex items-center justify-center">
                  <div className="text-primary text-6xl font-bold opacity-50">
                    RF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">
                    חדר כושר - Raise Fitness
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    אפליקציית ניהול חדר כושר מתקדמת עם מערכת תשלומים ומעקב אחר
                    מתאמנים.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      React 
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      express.js
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      mongoDB
                    </span>
                  </div>
                </div>
              </Card>
            </a>
            <a
              href="https://thefogbank.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="overflow-hidden bg-gradient-card border-primary/20 group hover:border-primary/40 transition-all duration-300 hover:shadow-luxury">
                <div className="h-48 bg-gradient-luxury/20 flex items-center justify-center">
                  <div className="text-primary text-4xl font-bold opacity-50">
                    E-Commerce
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">
                    חנות אונליין - The Fog Bank
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    פלטפורמת מכירות מקוונת מלאה עם מערכת הזמנות ותשלומים מאובטחת.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      next.js
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      mongoDB
                    </span>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://v0-tiling-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="overflow-hidden bg-gradient-card border-primary/20 group hover:border-primary/40 transition-all duration-300 hover:shadow-luxury">
                <div className="h-48 bg-gradient-luxury/20 flex items-center justify-center">
                  <div className="text-primary text-4xl font-bold opacity-50">
                    עבודות גמר
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Mo.al – עבודות גמר ושיפוצים</h3>
                  <p className="text-muted-foreground mb-4">
                    פלטפורמה תדמיתית לחברת בנייה וריצוף, כולל עבודות צבע, טיח ושיפוצים כלליים.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      react
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      express.js
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      node.js
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="px-4 py-20" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            👥 הצוות שלנו
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            מפתחים מנושים ומתמחים בטכנולוגיות המתקדמות ביותר
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card border-primary/20 text-center group hover:border-primary/40 transition-all duration-300 hover:shadow-luxury">
              <img 
             src="/assets/helal.jpg" 
             alt="Helal" 
            className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg"
             />
              <h3 className="font-bold text-xl mb-2">הלאל</h3>
              <p className="text-primary mb-4">
                Software Engineer | Full Stack Developer
              </p>
              <p className="text-muted-foreground mb-4">
                מומחה בפיתוח אפליקציות מובייל ו-web עם ניסיון של מעל 5 שנים
                בתחום
              </p>
              {/* <div className="flex items-center justify-center gap-2 mb-4">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  054-3596761
                </span>
              </div> */}
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  React 
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                 C
                </span>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-primary/20 text-center group hover:border-primary/40 transition-all duration-300 hover:shadow-luxury">
               <img 
             src="/assets/bader.jpg" 
             alt="bader" 
            className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg"
             />
              <h3 className="font-bold text-xl mb-2">בדר</h3>
              <p className="text-primary mb-4">Software Engineer</p>
              <p className="text-muted-foreground mb-4">
                מתמחה בעיצוב ופיתוח ממשקי משתמש מתקדמים ואינטראקטיביים עם ניסיון
                של מעל 3 שנים בתחום
              </p>
              {/* <div className="flex items-center justify-center gap-2 mb-4">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  052-8938327
                </span>
              </div> */}
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  next.js
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  MySQL
                </span>
                 <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  Tailwind css
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  java
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 bg-secondary/20" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            🚀 איך אנחנו עובדים
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            תהליך פיתוח מסודר ושקוף מההתחלה ועד לסיום
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">התייעצות</h3>
              <p className="text-muted-foreground">
                פגישה ראשונה להבנת הצרכים והדרישות של הפרויקט
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">תכנון ועיצוב</h3>
              <p className="text-muted-foreground">
                יצירת מתווה מפורט ועיצובים ראשוניים של הפרויקט
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">פיתוח</h3>
              <p className="text-muted-foreground">
                קידוד המערכת עם עדכונים שוטפים ומעקב אחר ההתקדמות
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">השקה וליווי</h3>
              <p className="text-muted-foreground">
                העלאה לאוויר וליווי מתמשך לתחזוקה ושיפורים
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            💬 מה הלקוחות אומרים
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            המלצות מלקוחות מרוצים שעבדנו איתם
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-card border-primary/20 group hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "העבודה עם הצוות הייתה מקצועית וחלקה. קיבלנו בדיוק מה שרצינו ואף
                יותר!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">ס</span>
                </div>
                <div>
                  <p className="font-semibold">סראג</p>
                  <p className="text-sm text-muted-foreground">
                    מנכ"ל חברת טכנולוגיה
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20 group hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "האפליקציה שפיתחו עבורנו הגדילה את המכירות שלנו ב-40%. ממליץ
                בחום!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">מ</span>
                </div>
                <div>
                  <p className="font-semibold">מיכא</p>
                  <p className="text-sm text-muted-foreground">
                    בעלת חנות אונליין
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary/20 group hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "זמינות מלאה, תגובות מהירות וחשיבה יצירתית. בדיוק מה שחיפשנו!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">ע</span>
                </div>
                <div>
                  <p className="font-semibold">עליסאת</p>
                  <p className="text-sm text-muted-foreground">
                    מנהל פיתוח עסקי
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer
        className="px-4 py-16 border-t border-primary/20 bg-secondary/10"
        dir="rtl"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img
                src="/assets/luxury-tech-logo.png"
                alt="Luxury Tech Logo"
                className="h-12 w-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-4 text-primary">
                Luxury Tech
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                אנחנו מפתחים פתרונות טכנולוגיים מתקדמים ומותאמים אישית לעסקים.
                המטרה שלנו היא לסייע לך להגיע לקהל הרחב ביותר עם הכלים
                הטכנולוגיים המתאימים.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleWhatsApp}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
              </div>
            </div>
            {/* Contact Info */}

            <div>
              <h4 className="font-bold text-lg mb-4 text-primary">צור קשר</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div>
                    <a
                      href="tel:054-9598571"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3"
                    >
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      054-9598571
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="mailto:luxurytech30@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3"
                  >
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    luxurytech30@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com/luxury_tech7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3"
                  >
                    <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Instagram</span>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61579726990565" // שנה ללינק שלך
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3"
                  >
                    <Facebook className="w-4 h-4 text-primary flex-shrink-0" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            {/* Services */}
            <div className="mr-5">
              <h4 className="font-bold text-lg mb-4 text-primary ">
                השירותים שלנו
              </h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    פיתוח אתרים
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    אפליקציות מובייל
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    מערכות ניהול
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    עיצוב UX/UI
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    ליווי טכני
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Luxury Tech. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>זמין 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
