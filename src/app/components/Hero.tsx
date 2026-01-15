import { TrendingUp, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const currentPrice = 2045.50;
  const priceChange = 1.24;
  const lastUpdate = "15:30";

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-right"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            سعر الذهب اليوم
            <br />
            <span className="text-primary">لحظة بلحظة</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            تابع الأسعار، التحليلات والتنبيهات الذكية
          </p>
        </motion.div>

        {/* Right Side - Price Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card border border-border/50 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{lastUpdate}</span>
                </div>
                <span className="text-sm text-muted-foreground">أونصة / دولار</span>
              </div>

              <div className="mb-4">
                <div className="text-5xl font-bold text-primary mb-2">
                  ${currentPrice.toFixed(2)}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-lg font-medium">+{priceChange}%</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (+${(currentPrice * priceChange / 100).toFixed(2)})
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">آخر تحديث</span>
                  <span className="text-foreground">الخميس، 15 يناير 2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
