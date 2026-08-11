import { useNavigate } from 'react-router-dom';

interface Props {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: Props) {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 flex items-center space-x-2">
            <i className="ri-store-2-line text-yellow-400 text-xl"></i>
            <span className="text-white font-semibold text-sm">全国60店舗以上導入</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 flex items-center space-x-2">
            <i className="ri-star-fill text-yellow-400 text-xl"></i>
            <span className="text-white font-semibold text-sm">満足度95%以上</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 flex items-center space-x-2">
            <i className="ri-shield-check-line text-yellow-400 text-xl"></i>
            <span className="text-white font-semibold text-sm">医療技術応用</span>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-yellow-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-3">THE FUTURE OF MEN'S VITALITY</p>
          <div className="flex justify-center mb-4">
            <img alt="REJEMAX PRO" className="h-16 md:h-28 w-auto object-contain" src="/images/rejemax-pro/section-00-logo.webp" />
          </div>
          <p className="text-base md:text-2xl lg:text-3xl text-gray-200 mb-3 font-light">医療技術が生んだ、根本からの画期的なコンディショニングケア</p>
          <p className="text-sm md:text-base text-yellow-400 font-semibold">日本の約1,800万人が抱える悩みに、革新的アプローチ</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-7">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-8 border border-white/20 max-w-2xl w-full">
            <div className="grid grid-cols-3 gap-4 mb-5">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-close-circle-line text-yellow-400 text-2xl"></i>
                </div>
                <p className="text-white font-bold text-xs mb-1">薬の副作用が心配</p>
                <p className="text-gray-300 text-xs">頭痛・ほてり・動悸...</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-time-line text-yellow-400 text-2xl"></i>
                </div>
                <p className="text-white font-bold text-xs mb-1">効果が一時的</p>
                <p className="text-gray-300 text-xs">根本解決にならない</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-arrow-right-line text-yellow-400 text-2xl"></i>
                </div>
                <p className="text-white font-bold text-xs mb-1">根本から改善</p>
                <p className="text-gray-300 text-xs">血流環境・反応力を改善</p>
              </div>
            </div>
            <p className="text-white text-sm md:text-base leading-relaxed">空気圧振動波で血流環境と反応力にアプローチ<br className="md:hidden" />薬に頼らず、自然な形で機能を回復させる革新的ソリューション。</p>
          </div>
          <div className="flex-shrink-0">
            <img alt="REJEMAX PRO 機器" className="h-48 md:h-72 w-auto object-contain" src="/images/rejemax-pro/section-00-machine.webp" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-16 sm:pb-0">

          <button onClick={() => scrollToSection('market')} className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center space-x-3">
            <i className="ri-arrow-down-line text-2xl"></i>
            <span>詳しく見る</span>
          </button>
        </div>

      </div>
    </section>
  );
}
