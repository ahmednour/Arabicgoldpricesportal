import { MessageCircle, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-primary to-primary/70 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-primary">بوابة الذهب</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصتك الموثوقة لمتابعة أسعار الذهب والتحليلات المالية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الدول
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الأدوات
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  التوقعات
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">المصادر</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  المدونة
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  التحليلات
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-semibold mb-4">تابعنا</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="bg-primary/10 hover:bg-primary/20 p-2.5 rounded-lg transition-colors group"
                aria-label="Telegram"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الشروط والأحكام
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 بوابة الذهب. جميع الحقوق محفوظة.
            </p>
            <p className="text-xs text-muted-foreground">
              آخر تحديث: الخميس، 15 يناير 2026 - 15:30
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
