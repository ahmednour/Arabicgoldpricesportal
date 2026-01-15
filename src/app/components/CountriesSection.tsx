import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

interface CountryCardProps {
  country: string;
  price: number;
  change: number;
  flag: string;
  delay?: number;
}

function CountryCard({ country, price, change, flag, delay = 0 }: CountryCardProps) {
  const isPositive = change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{flag}</div>
          <h3 className="text-lg font-semibold">{country}</h3>
        </div>
        <div className={`${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? (
            <TrendingUp className="w-5 h-5" />
          ) : (
            <TrendingDown className="w-5 h-5" />
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform duration-200">
          {price.toFixed(2)} <span className="text-sm text-muted-foreground">عيار 24</span>
        </div>
        <div className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change}%
        </div>
      </div>
    </motion.div>
  );
}

export function CountriesSection() {
  const countries = [
    { country: 'مصر', price: 2345.50, change: 1.2, flag: '🇪🇬' },
    { country: 'السعودية', price: 230.75, change: 0.8, flag: '🇸🇦' },
    { country: 'الإمارات', price: 243.20, change: -0.3, flag: '🇦🇪' },
    { country: 'الكويت', price: 20.15, change: 1.5, flag: '🇰🇼' },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">أسعار الدول</h2>
        <p className="text-muted-foreground">تابع أسعار الذهب في مختلف الدول العربية</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {countries.map((country, index) => (
          <CountryCard
            key={country.country}
            country={country.country}
            price={country.price}
            change={country.change}
            flag={country.flag}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
