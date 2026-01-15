import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

const chartData = {
  today: [
    { time: '09:00', price: 2040 },
    { time: '10:00', price: 2042 },
    { time: '11:00', price: 2038 },
    { time: '12:00', price: 2044 },
    { time: '13:00', price: 2041 },
    { time: '14:00', price: 2043 },
    { time: '15:00', price: 2046 },
  ],
  week: [
    { time: 'السبت', price: 2030 },
    { time: 'الأحد', price: 2035 },
    { time: 'الاثنين', price: 2032 },
    { time: 'الثلاثاء', price: 2040 },
    { time: 'الأربعاء', price: 2038 },
    { time: 'الخميس', price: 2046 },
  ],
  month: [
    { time: 'الأسبوع 1', price: 2020 },
    { time: 'الأسبوع 2', price: 2028 },
    { time: 'الأسبوع 3', price: 2035 },
    { time: 'الأسبوع 4', price: 2046 },
  ],
  year: [
    { time: 'يناير', price: 1980 },
    { time: 'فبراير', price: 1990 },
    { time: 'مارس', price: 2000 },
    { time: 'أبريل', price: 2010 },
    { time: 'مايو', price: 2005 },
    { time: 'يونيو', price: 2015 },
    { time: 'يوليو', price: 2025 },
    { time: 'أغسطس', price: 2030 },
    { time: 'سبتمبر', price: 2035 },
    { time: 'أكتوبر', price: 2040 },
    { time: 'نوفمبر', price: 2042 },
    { time: 'ديسمبر', price: 2046 },
  ],
};

type TimePeriod = 'today' | 'week' | 'month' | 'year';

export function PriceChart() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('today');
  const data = chartData[selectedPeriod];

  const stats = {
    high: Math.max(...data.map(d => d.price)),
    low: Math.min(...data.map(d => d.price)),
    avg: data.reduce((sum, d) => sum + d.price, 0) / data.length,
  };

  const tabs: { id: TimePeriod; label: string }[] = [
    { id: 'today', label: 'اليوم' },
    { id: 'week', label: 'أسبوع' },
    { id: 'month', label: 'شهر' },
    { id: 'year', label: 'سنة' },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-card border border-border/50 rounded-2xl p-8"
      >
        {/* Tabs */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">تحركات السعر</h2>
          <div className="flex gap-2 bg-background/50 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedPeriod(tab.id)}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  selectedPeriod === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="w-full mb-8" style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C9A227" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#C9A227" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
              <XAxis 
                dataKey="time" 
                stroke="#9CA3AF"
                tick={{ fill: '#9CA3AF' }}
              />
              <YAxis 
                stroke="#9CA3AF"
                tick={{ fill: '#9CA3AF' }}
                domain={['dataMin - 10', 'dataMax + 10']}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#141A21',
                  border: '1px solid rgba(201, 162, 39, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff',
                }}
                labelStyle={{ color: '#C9A227' }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#C9A227"
                strokeWidth={3}
                dot={{ fill: '#C9A227', r: 4 }}
                activeDot={{ r: 6, fill: '#C9A227' }}
                fill="url(#colorPrice)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">أعلى سعر</div>
            <div className="text-2xl font-bold text-green-500">${stats.high.toFixed(2)}</div>
          </div>
          <div className="bg-background/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">أقل سعر</div>
            <div className="text-2xl font-bold text-red-500">${stats.low.toFixed(2)}</div>
          </div>
          <div className="bg-background/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">متوسط السعر</div>
            <div className="text-2xl font-bold text-primary">${stats.avg.toFixed(2)}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}