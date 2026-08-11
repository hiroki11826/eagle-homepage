import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import MarketSection from './components/MarketSection';
import MechanismSection from './components/MechanismSection';
import ApproachSection from './components/ApproachSection';
import VoicesSection from './components/VoicesSection';
import BusinessSection from './components/BusinessSection';
import FAQSection from './components/FAQSection';

export default function RejemaxProPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { label: '市場性', id: 'market' },
    { label: '仕組み', id: 'mechanism' },
    { label: '3つのアプローチ', id: 'approach' },
    { label: '体験者の声', id: 'voices' },
    { label: '価格', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 固定ナビゲーション */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* ロゴ */}
            <div className="flex items-center space-x-3">
              <img
                alt="REJEMAX PRO Logo"
                className="h-10 md:h-12 w-auto object-contain cursor-pointer"
                src="/images/rejemax-pro/logo-rejemax-pro.webp"
                onClick={() => navigate('/')}
              />
            </div>

            {/* デスクトップナビ */}
            <div className="hidden lg:flex items-center space-x-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-sm whitespace-nowrap font-medium"
                >
                  {link.label}
                </button>
              ))}

            </div>

            {/* モバイルメニューボタン */}
            <button
              className="lg:hidden text-white cursor-pointer w-10 h-10 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          {/* モバイルメニュー */}
          {menuOpen && (
            <div className="lg:hidden mt-3 pb-4 border-t border-gray-700">
              <div className="flex flex-col space-y-2 pt-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-sm py-2 text-left font-medium"
                  >
                    <i className="ri-arrow-right-s-line mr-2"></i>{link.label}
                  </button>
                ))}

              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ヒーローセクション */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* 市場性・悩み・原因・問題 */}
      <MarketSection />

      {/* 誕生背景・比較・メカニズム */}
      <MechanismSection />

      {/* 3つのアプローチ・機器スペック */}
      <ApproachSection />

      {/* 体験者の変化・お客様の声・施術方法 */}
      <VoicesSection />

      {/* 価格・競合比較・収支シミュレーション・導入実績・今後の展望 */}
      <BusinessSection />

      {/* FAQ・CTA・フッター */}
      <FAQSection scrollToSection={scrollToSection} />
    </div>
  );
}
