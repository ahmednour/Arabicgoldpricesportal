import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { PriceCards } from '@/app/components/PriceCards';
import { PriceChart } from '@/app/components/PriceChart';
import { QuickTools } from '@/app/components/QuickTools';
import { CountriesSection } from '@/app/components/CountriesSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <main>
        <Hero />
        <PriceCards />
        <PriceChart />
        <QuickTools />
        <CountriesSection />
      </main>
      <Footer />
    </div>
  );
}
