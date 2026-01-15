import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

interface PriceCardProps {
  carat: string;
  price: number;
  change: number;
  delay?: number;
}

function PriceCard({ carat, price, change, delay = 0 }: PriceCardProps) {
  const isPositive = change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{carat}</h3>
        <div className={`p-2 rounded-lg ${isPositive ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
          {isPositive ? (
            <TrendingUp className="w-5 h-5 text-green-500" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-500" />
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-3xl font-bold text-primary group-hover:scale-105 transition-transform duration-200">
          ${price.toFixed(2)}
        </div>
        <div className={`flex items-center gap-2 text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          <span>{isPositive ? '+' : ''}{change}%</span>
          <span className="text-muted-foreground text-xs">
            ({isPositive ? '+' : ''}${(price * change / 100).toFixed(2)})
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/30">
        <span className="text-xs text-muted-foreground">الجرام / دولار</span>
      </div>
    </motion.div>
  );
}

export function PriceCards() {
  const carats = [
    { carat: 'عيار 24', price: 65.75, change: 1.24 },
    { carat: 'عيار 21', price: 57.53, change: 0.98 },
    { carat: 'عيار 18', price: 49.31, change: -0.45 },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {carats.map((item, index) => (
          <PriceCard
            key={item.carat}
            carat={item.carat}
            price={item.price}
            change={item.change}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
