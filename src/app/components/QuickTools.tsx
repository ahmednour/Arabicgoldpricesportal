import { Bell, Calculator, Brain } from 'lucide-react';
import { motion } from 'motion/react';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function ToolCard({ icon, title, description, delay = 0 }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
    >
      <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export function QuickTools() {
  const tools = [
    {
      icon: <Bell className="w-7 h-7 text-primary" />,
      title: 'تنبيه سعر',
      description: 'احصل على إشعارات فورية عند وصول الذهب للسعر المستهدف',
    },
    {
      icon: <Calculator className="w-7 h-7 text-primary" />,
      title: 'حاسبة الأرباح',
      description: 'احسب أرباحك وخسائرك المحتملة من استثمارات الذهب',
    },
    {
      icon: <Brain className="w-7 h-7 text-primary" />,
      title: 'توقعات الذكاء الاصطناعي',
      description: 'تحليلات ذكية وتوقعات دقيقة لأسعار الذهب المستقبلية',
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">أدوات سريعة</h2>
        <p className="text-muted-foreground">أدوات احترافية لمتابعة وتحليل استثماراتك</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard
            key={tool.title}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
