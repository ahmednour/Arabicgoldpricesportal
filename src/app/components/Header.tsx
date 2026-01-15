import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-primary to-primary/70 p-2 rounded-lg">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">بوابة الذهب</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              الرئيسية
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              الدول
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              الأدوات
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              التوقعات
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 font-medium">
            اشترك الآن
          </button>
        </div>
      </div>
    </header>
  );
}
