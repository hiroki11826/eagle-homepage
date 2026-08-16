import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLineModal, setShowLineModal] = useState(false);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  // スクロールアニメーション用 - 1回のみ発火
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-25% 0px -25% 0px' // ビューポート中央（50%）で発火
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-6');
          // アニメーション後に監視を解除して、再発火を防止
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (formId: string, formData: FormData) => {
    const formUrls: { [key: string]: string } = {
      'subsidy-form': 'https://readdy.ai/api/form/d5q4dggtu5df1co4d510',
      'document-form': 'https://readdy.ai/api/form/d5q4dggtu5df1co4d51g',
      'consultation-form': 'https://readdy.ai/api/form/d5q4dggtu5df1co4d520',
    };

    try {
      const response = await fetch(formUrls[formId], {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('送信が完了しました。担当者より順次ご連絡いたします。');
        (document.getElementById(formId) as HTMLFormElement)?.reset();
      } else {
        alert('送信に失敗しました。もう一度お試しください。');
      }
    } catch {
      alert('送信エラーが発生しました。しばらくしてから再度お試しください。');
    }
  };

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        const href = link.getAttribute('href');
        const text = link.textContent || '';
        
        // LINEお問合せボタン
        if (href === '#contact' || text.includes('LINEでお問合せ')) {
          e.preventDefault();
          setShowLineModal(true);
          return;
        }
        
        // 資料請求ボタン
        if (text.includes('資料請求')) {
          e.preventDefault();
          setShowDocumentModal(true);
          return;
        }
        
        // 無料相談ボタン
        if (text.includes('無料相談')) {
          e.preventDefault();
          setShowConsultationModal(true);
          return;
        }
        
        // スムーススクロール
        if (href && href.startsWith('#') && href !== '#contact') {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* 追従型お問い合わせボタン - 画面中央下 */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => setShowLineModal(true)}
          className="
            flex items-center justify-center gap-2
            px-8 py-3 md:px-12 md:py-4
            bg-gradient-to-b from-yellow-50 to-yellow-100
            border-b-2 border-yellow-300
            rounded-full
            shadow-md hover:shadow-lg
            transition-all duration-300 ease-out
            hover:brightness-105 hover:-translate-y-0.5
            cursor-pointer
            min-w-[260px] md:min-w-[340px]
          "
        >
          <i className="ri-chat-smile-2-line text-xl md:text-2xl text-yellow-600"></i>
          <span className="text-sm md:text-base font-semibold text-gray-700 whitespace-nowrap">
            お問い合わせ・資料請求はこちら
          </span>
        </button>
      </div>

      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-gray-100 backdrop-blur-sm z-50 shadow-sm transition-all duration-500 ease-out">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/images/chelma-logo.png"
                alt="株式会社chelma Logo"
                className="h-10 w-10 object-contain"
              />
              <div className="text-base font-bold text-gray-900 tracking-wide">株式会社chelma</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#product" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                製品について
              </a>
              <a href="#features" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                特徴・効果
              </a>
              <a href="#support" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                サポート
              </a>
              <a href="#cases" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                導入事例
              </a>
              <a href="#subsidy" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                補助金
              </a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base whitespace-nowrap">
                LINEでお問合せ
              </a>
              <button
                onClick={() => navigate('/rejemax-pro')}
                className="
                  px-4 py-2
                  bg-gradient-to-r from-yellow-500 to-yellow-600
                  hover:from-yellow-600 hover:to-yellow-700
                  text-white font-bold text-sm
                  rounded-full
                  shadow-md hover:shadow-lg
                  border border-yellow-300
                  transition-all duration-300 ease-out
                  hover:scale-105
                  cursor-pointer
                  whitespace-nowrap
                  flex items-center gap-1.5
                "
              >
                <i className="ri-heart-pulse-line text-sm"></i>
                <span>男性機能改善マシン</span>
              </button>
            </div>
            {/* モバイルメニューボタン */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => navigate('/rejemax-pro')}
                className="
                  px-3 py-1.5
                  bg-gradient-to-r from-yellow-500 to-yellow-600
                  text-white font-bold text-xs
                  rounded-full
                  shadow-md
                  border border-yellow-300
                  cursor-pointer
                  whitespace-nowrap
                  flex items-center gap-1
                "
              >
                <i className="ri-heart-pulse-line text-xs"></i>
                <span>男性機能改善マシン</span>
              </button>
              <button
                className="text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`text-2xl transition-transform duration-400 ease-out ${isMenuOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'}`}></i>
              </button>
            </div>
          </div>
          
          {/* モバイルメニュー */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-300">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#product" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                  製品について
                </a>
                <a href="#features" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                  特徴・効果
                </a>
                <a href="#support" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                  サポート
                </a>
                <a href="#cases" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                  導入事例
                </a>
                <a href="#subsidy" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                  補助金
                </a>
                <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors duration-400 ease-out cursor-pointer text-base">
                  LINEでお問合せ
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* オーナーセラピスト紹介 */}
      <section className="py-12 bg-white mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
              <img
                src="/images/owner-kumi.png"
                alt="オーナーセラピスト KUMI"
                className="w-full max-w-sm h-80 object-cover rounded-3xl shadow-2xl mx-auto lg:mx-0 object-[center_70%] lg:object-top transition-transform duration-500 ease-out hover:scale-105"
              />
              <div className="mt-6 text-center lg:text-left">
                <p className="text-sm tracking-wider text-yellow-500 uppercase mb-1">Owner Therapist</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">KUMI</h3>
                <p className="text-base text-gray-600">元歯科衛生士・美容講師・中国語対応可能</p>
              </div>
            </div>
            <div className="space-y-3 scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out delay-200">
              <div className="text-center lg:text-left mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-2 leading-tight">
                  1回目から、後悔させない脱毛。
                </h2>
                <p className="text-lg md:text-xl text-[#2B2B2B]">効果 × 黒字経営を両立する、<br className="md:hidden" />サロン専用脱毛機</p>
              </div>

              {/* スペーサー（モバイル用） */}
              <div className="block md:hidden h-4"></div>

              {/* 実績テキスト */}
              <div className="mb-2 text-center lg:text-left">
                <p className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-2 leading-tight">
                  未経験でも月50万～200万売上を作れる脱毛サロンへ
                </p>
                <ul className="space-y-1.5 inline-block text-left">
                  <li className="flex items-center space-x-2 text-[#2B2B2B] text-base">
                    <i className="ri-checkbox-circle-fill text-yellow-500 text-base flex-shrink-0"></i>
                    <span>月商530万円サロン運営実績あり</span>
                  </li>
                  <li className="flex items-center space-x-2 text-[#2B2B2B] text-base">
                    <i className="ri-checkbox-circle-fill text-yellow-500 text-base flex-shrink-0"></i>
                    <span>複数店舗展開</span>
                  </li>
                  <li className="flex items-center space-x-2 text-[#2B2B2B] text-base">
                    <i className="ri-checkbox-circle-fill text-yellow-500 text-base flex-shrink-0"></i>
                    <span>現場ベースのノウハウ提供</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg tracking-wider text-yellow-500 uppercase mb-3">想い</h2>
                <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              </div>
              <div className="text-base md:text-lg leading-[1.75] text-[#2B2B2B] space-y-5 font-normal">
                <p>
                  <span className="text-[#1A1A1A] font-medium">EAGLEは、効果に後悔させないために<br className="md:hidden" />作りました。</span>
                  <br />
                  脱毛で一番あってはいけないのは、<br />
                  「効果が出なかった」という後悔。
                </p>
                <p>
                  EAGLEは、<br />
                  1回目から実感できる効果にこだわり、<br />
                  お客様に「やってよかった」と<br className="md:hidden" />思ってもらうために<br className="md:hidden" />作った脱毛機です。
                </p>
                <p>
                  お客様には最高の結果を。<br />
                  サロンオーナー様には、<br />
                  売り切りではなく、<br />
                  きちんと黒字で続く経営を。
                </p>
                <p>
                  お店が続くから、<br />
                  サービスの質が上がり、<br />
                  またお客様に還元できる。<br />
                  その循環こそが、<br className="md:hidden" />良いサロンを育てると<br className="md:hidden" />私たちは考えています。
                </p>
                <p>
                  当社は、美容機器を売る会社ではありません。<br />
                  実店舗の実績をもとに作った脱毛機と、<br />
                  伴走サポートで、<br />
                  あなたのサロンを
                  <span className="text-[#1A1A1A] font-medium">「選ばれ続ける人気店」</span>
                  にすること。<br />
                  それが、EAGLEに込めた想いです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サロン黒字化サポート */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-3xl p-3 md:p-10 shadow-2xl border-2 border-yellow-200 transition-all duration-500 ease-out hover:scale-105 hover:shadow-3xl scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            <div className="text-center mb-3 md:mb-6">
              <div className="inline-block bg-yellow-400 text-black px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base font-bold mb-1 md:mb-3">
                他社にはない強み！
              </div>
              <h2 className="text-lg md:text-4xl font-bold text-gray-900 mb-1 md:mb-3 animate-pulse">
                サロン黒字化！
              </h2>
              <p className="text-sm md:text-2xl font-bold text-yellow-600 animate-fade-in-up">
                現役サロンオーナーの<br className="md:hidden" />伴走サポート付き
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 md:gap-6 mt-3 md:mt-8">
              <div className="bg-white rounded-xl p-2 md:p-5 shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:bg-yellow-50 group">
                <div className="w-6 h-6 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-1 md:mb-3 mx-auto transition-transform duration-500 ease-out group-hover:scale-110">
                  <i className="ri-line-chart-line text-sm md:text-2xl text-black"></i>
                </div>
                <h3 className="text-[9px] md:text-lg font-bold text-gray-900 mb-1 md:mb-2 text-center transition-colors duration-400 ease-out group-hover:text-yellow-600">実績に基づく<br className="md:hidden" />経営ノウハウ</h3>
                <p className="text-[8px] md:text-base text-gray-700 text-center transition-colors duration-400 ease-out group-hover:text-gray-800 leading-relaxed">
                  7桁売上を継続する<br className="md:hidden" />現役サロンオーナーが、<br className="md:hidden" />実践的な経営戦略を<br className="md:hidden" />サポート
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-2 md:p-5 shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:bg-yellow-50 group">
                <div className="w-6 h-6 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-1 md:mb-3 mx-auto transition-transform duration-500 ease-out group-hover:scale-110">
                  <i className="ri-team-line text-sm md:text-2xl text-black"></i>
                </div>
                <h3 className="text-[9px] md:text-lg font-bold text-gray-900 mb-1 md:mb-2 text-center transition-colors duration-400 ease-out group-hover:text-yellow-600">継続的な<br className="md:hidden" />伴走サポート</h3>
                <p className="text-[8px] md:text-base text-gray-700 text-center transition-colors duration-400 ease-out group-hover:text-gray-800 leading-relaxed">
                  購入後も電話相談<br className="md:hidden" />随時受付。<br className="md:hidden" />開業から黒字化まで、<br className="md:hidden" />しっかりサポート
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-2 md:p-5 shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:bg-yellow-50 group">
                <div className="w-6 h-6 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-1 md:mb-3 mx-auto transition-transform duration-500 ease-out group-hover:scale-110">
                  <i className="ri-file-list-3-line text-sm md:text-2xl text-black"></i>
                </div>
                <h3 className="text-[9px] md:text-lg font-bold text-gray-900 mb-1 md:mb-2 text-center transition-colors duration-400 ease-out group-hover:text-yellow-600">実店舗で使う<br className="md:hidden" />資料提供</h3>
                <p className="text-[8px] md:text-base text-gray-700 text-center transition-colors duration-400 ease-out group-hover:text-gray-800 leading-relaxed">
                  カウンセリングシートや<br className="md:hidden" />集客ワークシートなど、<br className="md:hidden" />実践的な資料を<br className="md:hidden" />プレゼント
                </p>
              </div>
            </div>
            
            <div className="mt-3 md:mt-8 text-center animate-fade-in-up">
              <p className="text-[10px] md:text-lg text-gray-800 font-medium transition-transform duration-500 ease-out hover:scale-105">
                <strong className="text-yellow-600">売り切りではなく、<br className="md:hidden" />黒字で続く経営を。</strong><br />
                それが、私たちの使命です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 双方が求める価値 - 新規セクション */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-6 md:p-12 shadow-lg scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            {/* 中央タイトル */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                双方が求める"本当の価値"
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            </div>

            {/* 比較カード */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
              {/* オーナー様が求めるもの */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center">
                  オーナー様が求めるもの
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-money-dollar-circle-line text-sm text-black"></i>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>安定した収益</strong>と<br className="md:hidden" />黒字経営の継続
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-user-heart-line text-sm text-black"></i>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>リピート率の高い</strong><br className="md:hidden" />顧客基盤
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-star-line text-sm text-black"></i>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>口コミで広がる</strong><br className="md:hidden" />評判と信頼
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-line-chart-line text-sm text-black"></i>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>長期的な成長</strong>と<br className="md:hidden" />事業の拡大
                    </p>
                  </div>
                </div>
              </div>

              {/* 脱毛するお客様が求めるもの */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center">
                  脱毛するお客様が求めるもの
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-flashlight-line text-sm text-black"></i>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>確実な効果</strong>と<br className="md:hidden" />目に見える結果
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-heart-pulse-line text-sm text-black"></i>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>痛みが少なく</strong><br className="md:hidden" />快適な施術体験
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-shield-check-line text-sm text-black"></i>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>安心・安全</strong>な<br className="md:hidden" />施術環境
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-time-line text-sm text-black"></i>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      <strong>短期間で完了</strong>する<br className="md:hidden" />効率的な脱毛
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 下部説明文 */}
            <div className="text-center space-y-3 px-4">
              <p className="text-lg md:text-xl font-bold text-gray-900 leading-relaxed">
                EAGLEは、この両方を同時に叶える<br className="md:hidden" />脱毛機です。
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                お客様に確実な効果を提供することで、<br className="md:hidden" />リピート率が上がり、<br className="md:hidden" />口コミが広がる。<br />
                その結果、サロンの収益が安定し、<br className="md:hidden" />黒字経営が続く。<br />
                この好循環こそが、<br className="md:hidden" />選ばれ続けるサロンを作る秘訣です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ロゴ画像セクション */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src="/images/eagle-logo.jpeg"
              alt="EAGLE Logo"
              className="w-64 md:w-96 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* EAGLE製品詳細 */}
      <section id="product" className="py-8 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="relative h-full flex flex-col scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
              <img
                src="/images/eagle-machine-white.jpeg"
                alt="EAGLE業務用脱毛機（ホワイト）"
                className="w-full rounded-3xl shadow-2xl object-contain transition-transform duration-500 ease-out hover:scale-105"
                style={{ minHeight: '300px' }}
              />
              <img
                src="/images/eagle-machine.jpeg"
                alt="EAGLE業務用脱毛機"
                className="w-full rounded-3xl shadow-2xl object-contain transition-transform duration-500 ease-out hover:scale-105"
                style={{ minHeight: '300px' }}
              />
            </div>
            <div className="space-y-4 md:space-y-8 h-full flex flex-col scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out delay-200">
              <div>
                <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-6">EAGLE の特徴</h2>
                <div className="w-20 md:w-32 h-1 bg-yellow-400 mb-4 md:mb-8"></div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-6 flex-grow">
                <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl flex flex-col">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 flex-shrink-0">
                    <i className="ri-flashlight-line text-lg md:text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-xs md:text-lg font-bold text-gray-900 mb-1 md:mb-2">SHR×IPLのWモード搭載</h3>
                  <p className="text-gray-600 text-[10px] md:text-base flex-grow leading-relaxed">最新技術の組み合わせで最適な効果を</p>
                </div>
                <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl flex flex-col">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 flex-shrink-0">
                    <i className="ri-snowy-line text-lg md:text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-xs md:text-lg font-bold text-gray-900 mb-1 md:mb-2">強冷却で痛み暖和</h3>
                  <p className="text-gray-600 text-[10px] md:text-base flex-grow leading-relaxed">快適な施術を実現</p>
                </div>
                <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl flex flex-col">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 flex-shrink-0">
                    <i className="ri-time-line text-lg md:text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-xs md:text-lg font-bold text-gray-900 mb-1 md:mb-2">メンズの剛毛から産毛まで対応可能</h3>
                  <p className="text-gray-600 text-[10px] md:text-base flex-grow leading-relaxed">幅広い毛質に対応</p>
                </div>
                <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl flex flex-col">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 flex-shrink-0">
                    <i className="ri-body-scan-line text-lg md:text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-xs md:text-lg font-bold text-gray-900 mb-1 md:mb-2">全身脱毛最速30分</h3>
                  <p className="text-gray-600 text-[10px] md:text-base flex-grow leading-relaxed">効率的な施術時間</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 md:p-6 rounded-xl border-l-4 border-yellow-400">
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                  <i className="ri-star-line text-yellow-500 mr-2"></i>
                  フォトフェイシャルモード搭載
                </h3>
                <p className="text-xs md:text-lg text-gray-700 leading-relaxed">
                  エイジング・ニキビ・リフトアップ効果で、脱毛以外のメニューも提供可能
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 圧倒的効果 */}
      <section className="py-8 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4 md:mb-12 scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-1 md:mb-3">
              EAGLE <span className="text-yellow-500">-圧倒的効果-</span>
            </h2>
            <div className="w-12 md:w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="mb-6 md:mb-16 scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            <h3 className="text-sm md:text-2xl font-bold text-gray-900 text-center mb-3 md:mb-10">
              意識高いメンズは全身つるつるを選ぶ
            </h3>
            <div className="grid grid-cols-2 gap-2 md:gap-8 max-w-5xl mx-auto">
              {/* Before/After 1 */}
              <div className="flex justify-center">
                <img
                  src="/images/before-after-vline.png"
                  alt="施術前後 Vライン"
                  className="w-full max-w-md h-auto object-contain rounded-xl md:rounded-2xl border border-white shadow-lg transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>

              {/* Before/After 2 */}
              <div className="flex justify-center">
                <img
                  src="/images/before-after-beard.png"
                  alt="施術前後 髭"
                  className="w-full max-w-md h-auto object-contain rounded-xl md:rounded-2xl border border-white shadow-lg transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* 安値提供の理由 */}
          <div className="text-center scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            <div className="inline-block bg-yellow-400 text-black px-2 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-base font-bold mb-2 md:mb-6">
              安値提供の理由！
            </div>
            <h3 className="text-sm md:text-3xl font-bold text-gray-900 mb-2 md:mb-6 leading-tight px-4">
              工場直送のため国内流通品<br />
              <span className="text-yellow-600">200万円相当</span>と同品質なので<br />
              安値提供可能もちろん<br />
              効果も抜群！
            </h3>
            <div className="inline-block bg-yellow-400 text-black px-3 py-1 md:px-5 md:py-3 rounded-lg text-[10px] md:text-xl font-bold shadow-xl">
              是非一度体験してみてください！
            </div>
          </div>

          {/* 5大特典 */}
          <section className="py-6 md:py-16 bg-white mt-6 md:mt-0">
            <div className="max-w-6xl mx-auto px-4">
              {/* 特典画像 */}
              <div className="mb-6 md:mb-10 scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
                <img
                  src="/images/benefits.png"
                  alt="5大特典"
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>

              <div className="text-center scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out delay-300">
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* 保証・サポート */}
      <section id="support" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">保証・サポート</h2>
              <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-base md:text-lg font-bold">
                1年保証付き
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-600">保証・サポートがとにかく手厚い！</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="h-full flex flex-col scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg flex-grow">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-tools-line text-xl text-yellow-500 flex-shrink-0 mt-1"></i>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">故障の際は代替え機あり</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-graduation-cap-line text-xl text-yellow-500 flex-shrink-0 mt-1"></i>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">脱毛技術指導者or大阪市以外の場合はオンライン指導</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-user-star-line text-xl text-yellow-500 flex-shrink-0 mt-1"></i>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">カウンセリング指導、シート作成サービス</p>
                  </div>
                  <div className="bg-yellow-400 p-4 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line text-xl text-black"></i>
                      <a href="tel:08061577520" className="text-base md:text-lg text-black font-bold underline">購入後の電話相談随時受付</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full flex flex-col scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out delay-200">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-xl flex-grow flex flex-col">
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-base font-medium text-gray-700 mb-4 self-start">
                  機械見学可能
                </div>
                <img
                  src="/images/machine-visit.jpeg"
                  alt="機械見学"
                  className="w-full h-48 object-contain rounded-xl mb-4"
                />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">心斎橋の実店舗にて機械見学</h3>
                <p className="text-base md:text-lg text-gray-700 mb-3 leading-relaxed">動作確認、質疑応答可能</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  施術を受け効果確認後購入検討も可能です◎
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入サロン実績 */}
      <section id="cases" className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10 scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">導入サロン実績</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out border border-gray-100">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* 左側：サロン画像 */}
              <div className="md:w-2/5 flex-shrink-0">
                <div className="w-full h-64 md:h-full min-h-[280px]">
                  <img
                    src="/images/salon-reamica.jpeg"
                    alt="北堀江リアミカ"
                    className="w-full h-full object-cover object-center md:object-top"
                  />
                </div>
              </div>

              {/* 右側：テキスト情報 */}
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide">
                    SUCCESS STORY
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    北堀江リアミカ
                  </h3>
                  <div className="w-12 h-1 bg-yellow-400 mb-5"></div>
                </div>

                <div className="bg-gray-50 p-5 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-line-chart-line text-lg text-black"></i>
                    </div>
                    <p className="text-lg md:text-xl font-bold text-gray-900 leading-relaxed">
                      月商<span className="text-yellow-600 text-2xl md:text-3xl mx-1">200万円</span>を達成している導入サロン
                    </p>
                  </div>
                </div>

                <p className="text-base text-gray-600 leading-relaxed">
                  EAGLEを導入し、効果の高い施術と充実したサポートを活かして、安定した黒字経営を実現。
                  お客様からの口コミで集客が広がり、月商200万円を継続達成しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 製品詳細情報 */}
      <section id="features" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">購入詳細</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 製品概要 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl flex flex-col scroll-animate opacity-0 translate-y-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">製品概要</h3>
                <img
                  src="/images/product-overview.jpeg"
                  alt="EAGLE脱毛機"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="space-y-4 flex-grow">
                <div className="bg-gray-100 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-flashlight-fill text-xl text-yellow-500"></i>
                    <div>
                      <h4 className="text-base md:text-lg font-bold mb-1 text-gray-900">
                        1ハンドルにつき60万ショット！
                      </h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">（従来品は25万ショット）</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-home-smile-line text-xl text-yellow-500 mt-1"></i>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">従来のIPL脱毛に比べて脱毛完了期間が早い！</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 機能・効果 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl flex flex-col scroll-animate opacity-0 translate-y-6 delay-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">機能・効果</h3>
                <img
                  src="/images/function-effect.png"
                  alt="施術イメージ"
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-3 flex-grow">
                <div className="flex items-start space-x-3">
                  <i className="ri-check-line text-lg text-yellow-500 flex-shrink-0 mt-1"></i>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">連射可能で施術時間短縮！単発照射も可能</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-check-line text-lg text-yellow-500 flex-shrink-0 mt-1"></i>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">様々な毛質、肌質に対応◎</p>
                </div>
                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-sm md:text-base font-medium mb-2 text-gray-900">対応症状：</p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">ニキビケア・毛穴・そばかす・シミ・ハリに対応</p>
                </div>
                <div className="flex items-start space-x-3 mt-3">
                  <i className="ri-star-fill text-lg text-yellow-500"></i>
                  <p className="text-sm md:text-base font-bold text-gray-900 leading-relaxed">
                    フォトフェイシャルで様々な効果を一台で実現★
                  </p>
                </div>
              </div>
            </div>

            {/* 付属品・交換 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl scroll-animate opacity-0 translate-y-6 delay-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">付属品・交換</h3>
                <img
                  src="/images/accessories.png"
                  alt="付属品"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="space-y-5">
                <div className="bg-gray-100 rounded-xl p-4">
                  <h4 className="text-base md:text-lg font-bold mb-3 flex items-center text-gray-900">
                    <i className="ri-gift-line text-lg text-yellow-500 mr-2"></i>
                    付属品
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-start text-gray-700 leading-relaxed">
                      <span className="mr-2">•</span>
                      <span>保護用ゴーグル・給水用漏斗</span>
                    </li>
                    <li className="flex items-start text-gray-700 leading-relaxed">
                      <span className="mr-2">•</span>
                      <span>1ハンドル（カートリッジ）</span>
                    </li>
                    <li className="flex items-start text-gray-700 leading-relaxed">
                      <span className="mr-2">•</span>
                      <span>フォトフェイシャルフィルターセット（3枚プレゼント）</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-xl p-4">
                  <h4 className="text-base md:text-lg font-bold mb-3 flex items-center text-gray-900">
                    <i className="ri-refresh-line text-lg text-yellow-500 mr-2"></i>
                    交換部品
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li>
                      <p className="font-medium text-gray-900 leading-relaxed">ランプ交換 ¥180,000（税込）（60万ショット使用後の交換）</p>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        ※交換中はハンドピース無料レンタル可能
                      </p>
                    </li>
                    <li>
                      <p className="font-medium text-gray-900 leading-relaxed">
                        フィルター（割れた場合の購入費）¥25,000/枚
                      </p>
                    </li>
                    <li>
                      <p className="font-medium text-gray-900 leading-relaxed">ハンドピース1本追加購入 ¥300,000（税込）</p>
                    </li>
                    <li>
                      <p className="font-medium text-gray-900 leading-relaxed">スポット照射（鼻毛・耳毛・眉毛回り）先端（税込）</p>
                      <ul className="mt-1 ml-3 space-y-0.5 text-sm text-gray-700">
                        <li>・機械購入サロン：¥150,000（税込）</li>
                        <li>・機械未購入サロン：¥300,000（税込）</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 補助金・費用 */}
      <section id="subsidy" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">初期費用0円で導入可能</h2>
            <p className="text-lg md:text-2xl text-yellow-600 mb-12">補助金活用で実現</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12 shadow-lg scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out delay-200">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">補助金活用の流れ</h3>
            <div className="space-y-8 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-black">
                  1
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">補助金申請のサポートを行います（無料相談）</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-black">
                  2
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">承認後、機器導入と設置を実施</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-black">
                  3
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">補助金を活用して実質負担を大幅軽減</p>
              </div>
            </div>
          </div>

          {/* 脱毛機リースプラン */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out delay-300 text-left">
            {/* タイトル */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                脱毛機リースプラン
              </h3>
              <span className="inline-block bg-red-500 text-white text-sm md:text-base font-bold px-4 py-1.5 rounded-full">
                限定3社のみ
              </span>
            </div>

            {/* 月額料金 */}
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-8 text-center">
              <p className="text-base text-gray-600 mb-1">月額</p>
              <p className="text-3xl md:text-4xl font-bold text-yellow-600 mb-1">
                55,000<span className="text-xl font-semibold">円（税込）</span>
              </p>
              <p className="text-sm text-gray-500">（税別 50,000円）</p>
              <p className="text-base text-gray-700 mt-3 leading-relaxed">
                初期費用を抑えて導入できる、サロン向けリースプランです。
              </p>
            </div>

            {/* 契約条件 */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                契約条件
              </h4>
              <div className="bg-white rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-line text-yellow-500 text-lg flex-shrink-0 mt-0.5"></i>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">最低契約期間：<strong>1年間</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-checkbox-circle-line text-yellow-500 text-lg flex-shrink-0 mt-0.5"></i>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">2年間利用後はマシンをそのまま<strong>譲渡（買い切り）</strong></p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 mt-2">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    2年間の支払い総額は<strong className="text-yellow-600">約120万円＋税</strong>となり、<br className="md:hidden" />
                    その後は追加費用なしで機器を所有できます。
                  </p>
                </div>
              </div>
            </div>

            {/* 研修サポート */}
            <div className="mb-6">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                研修サポート
              </h4>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-base text-gray-600 mb-4">導入時に以下の研修を行います。</p>
                <div className="space-y-2 mb-4">
                  {['マシンの使い方', '脱毛理論', '施術方法', '注意事項'].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <i className="ri-check-line text-yellow-500 text-lg flex-shrink-0"></i>
                      <p className="text-base md:text-lg text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-base md:text-lg font-bold text-gray-900">
                    合計：約6時間の座学・実技研修
                  </p>
                  <p className="text-sm text-gray-600 mt-1">※研修後すぐに施術できるレベルまでサポートします。</p>
                </div>
              </div>
            </div>

            {/* 注意事項 */}
            <div className="mb-8">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                注意事項
              </h4>
              <div className="bg-white rounded-xl p-5 shadow-sm space-y-3">
                <div className="flex items-start space-x-3">
                  <i className="ri-error-warning-line text-gray-400 text-lg flex-shrink-0 mt-0.5"></i>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">ハンドピース交換は弊社での対応必須</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-error-warning-line text-gray-400 text-lg flex-shrink-0 mt-0.5"></i>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">経営コンサル・集客サポートは含まれません</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 mt-2">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    ※本プランは「機器導入＋基本技術サポート」のみの<br />
                    シンプル導入プランになります。
                  </p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">※リースの場合は伴走支援は含まれません。</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">※リース機器は必ずしも新品とは限りません。</p>
                </div>
              </div>
            </div>

            {/* 募集枠 */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 text-center">
              <p className="text-base text-gray-700 mb-2">■ 募集枠</p>
              <p className="text-2xl md:text-3xl font-bold text-red-600 mb-2">限定3社のみ</p>
              <p className="text-sm md:text-base text-gray-600">※枠が埋まり次第終了</p>
            </div>
          </div>
        </div>
      </section>

      {/* 脱毛機購入者向けサポートプラン */}
      <section id="support-plan" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          {/* セクションヘッダー */}
          <div className="text-center mb-10 scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
            <span className="inline-block bg-yellow-400 text-black text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide">
              新品購入者限定
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              脱毛機購入者向けサポートプラン
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-left max-w-xl mx-auto">
              <div className="flex items-start space-x-3">
                <i className="ri-information-line text-yellow-500 text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <p className="text-sm md:text-base text-gray-800 font-medium leading-relaxed">
                    本プランは、<strong>新品の脱毛機をご購入いただいたお客様限定</strong>の特典となります。
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">※中古機をご購入の場合は本プランは適用されません。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">

            {/* 導入研修 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-graduation-cap-line text-white text-lg"></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-black">導入研修（初回）</h3>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <i className="ri-time-line text-yellow-500"></i>
                  <span className="text-base font-semibold text-gray-800">実施時間：合計6時間</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-book-open-line text-black text-xs"></i>
                      </div>
                      <span className="text-sm font-bold text-gray-900">座学</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">脱毛理論・機器知識の基礎から丁寧に指導します</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-hand-heart-line text-black text-xs"></i>
                      </div>
                      <span className="text-sm font-bold text-gray-900">実技研修</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">施術方法・実践トレーニングで即戦力に</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 継続コンサルティング */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-line-chart-line text-white text-lg"></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-black">継続コンサルティング（1年間）</h3>
              </div>
              <div className="p-5 md:p-6">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-yellow-50 rounded-xl p-3 text-center border border-yellow-100">
                    <p className="text-xs text-gray-500 mb-1">期間</p>
                    <p className="text-sm md:text-base font-bold text-gray-900 leading-tight">導入日より<br /><span className="text-yellow-600">1年間</span></p>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-3 text-center border border-yellow-100">
                    <p className="text-xs text-gray-500 mb-1">回数</p>
                    <p className="text-sm md:text-base font-bold text-gray-900 leading-tight"><span className="text-yellow-600">月1回</span></p>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-3 text-center border border-yellow-100">
                    <p className="text-xs text-gray-500 mb-1">時間</p>
                    <p className="text-sm md:text-base font-bold text-gray-900 leading-tight">1回<br /><span className="text-yellow-600">1時間</span></p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4">
                    <i className="ri-store-line text-yellow-500 text-lg flex-shrink-0 mt-0.5"></i>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">集客運用サポート（新規、リピート戦略）</p>
                      <p className="text-sm text-gray-600 leading-relaxed">運営サポートで黒字経営をサポート</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ハンドピース関連 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-tools-line text-white text-lg"></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-black">ハンドピース関連</h3>
              </div>
              <div className="p-5 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <i className="ri-refresh-line text-yellow-500 text-base"></i>
                      <span className="text-sm font-bold text-gray-900">ランプ交換費用</span>
                    </div>
                    <p className="text-lg font-bold text-yellow-600">¥180,000<span className="text-xs text-gray-500 font-normal ml-1">（税込）</span></p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <i className="ri-focus-3-line text-yellow-500 text-base"></i>
                      <span className="text-sm font-bold text-gray-900">スポット照射（税込）</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">・機械購入サロン：¥150,000（税込）</p>
                    <p className="text-sm text-gray-700 leading-relaxed">・機械未購入サロン：¥300,000（税込）</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <i className="ri-truck-line text-yellow-500 text-base"></i>
                      <span className="text-sm font-bold text-gray-900">送料</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">ハンドピース交換時の<strong>往復送料は当社負担</strong></p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <i className="ri-exchange-line text-yellow-500 text-base"></i>
                      <span className="text-sm font-bold text-gray-900">代替機対応</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">修理期間中の代替機・ハンドピースを<strong>当社にて貸出対応</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* 保証内容 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-white text-lg"></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-black">保証内容</h3>
              </div>
              <div className="p-5 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">保証期間</p>
                    <p className="text-base md:text-lg font-bold text-yellow-600">購入日より1年間</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">保証対象</p>
                    <p className="text-sm font-bold text-gray-800 leading-tight">初期不良および<br />通常使用における自然故障</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <i className="ri-close-circle-line text-red-400 text-base"></i>
                    <span className="text-sm font-bold text-gray-900">保証対象外</span>
                  </div>
                  <div className="space-y-2">
                    {['人為的破損・過失による故障', '不適切な使用・管理による故障', '天災・外的要因による損傷'].map((item) => (
                      <div key={item} className="flex items-start space-x-2">
                        <i className="ri-subtract-line text-gray-400 text-sm flex-shrink-0 mt-1"></i>
                        <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3 border-t border-gray-200 pt-2">
                    ※保証対象外の修理は有償対応となります。
                  </p>
                </div>
              </div>
            </div>

            {/* PL保険・その他 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 scroll-animate opacity-0 translate-y-6 transition-all duration-800 ease-out">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 py-3.5 flex items-center space-x-2">
                  <div className="w-7 h-7 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-secure-payment-line text-white text-sm"></i>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-black">PL保険</h3>
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    本機器には、万が一に備えた<strong>PL（製造物責任）保険</strong>を付帯しております。
                  </p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">詳細については別途契約書および納付書に記載いたします。</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 py-3.5 flex items-center space-x-2">
                  <div className="w-7 h-7 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-file-text-line text-white text-sm"></i>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-black">その他</h3>
                </div>
                <div className="p-4 md:p-5 space-y-2">
                  <div className="flex items-start space-x-2">
                    <i className="ri-checkbox-circle-line text-yellow-500 text-sm flex-shrink-0 mt-0.5"></i>
                    <p className="text-sm text-gray-700 leading-relaxed">本内容は契約書および納付書に準拠します</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <i className="ri-checkbox-circle-line text-yellow-500 text-sm flex-shrink-0 mt-0.5"></i>
                    <p className="text-sm text-gray-700 leading-relaxed">内容は予告なく変更される場合があります</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="/images/chelma-logo.png"
                  alt="株式会社chelma Logo"
                  className="h-10 w-10 object-contain"
                  style={{ filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))' }}
                />
                <div className="text-base font-bold text-yellow-400 tracking-wide">株式会社chelma</div>
              </div>
              <p className="text-gray-300 leading-relaxed text-base mb-6 max-w-sm">
                効果と黒字経営を両立する業務用脱毛機。<br />
                サロンオーナー様の成功を<br />
                全力でサポートします。
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2 text-gray-400 text-sm">
                  <i className="ri-map-pin-line text-yellow-400 mr-1 flex-shrink-0 mt-0.5"></i>
                  <span>大阪府大阪市中央区博労町4-2-8<br />ROGERビル301</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <i className="ri-time-line text-yellow-400 mr-1 flex-shrink-0"></i>
                  <span>11:00~23:00（最終受付22:00）</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-6 relative">
                サイトマップ
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400 mt-2"></div>
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#product" className="text-gray-300 hover:text-yellow-400 transition-colors duration-400 ease-out cursor-pointer text-base flex items-center group">
                    <i className="ri-arrow-right-s-line text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out mr-1"></i>
                    製品について
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors duration-400 ease-out cursor-pointer text-base flex items-center group">
                    <i className="ri-arrow-right-s-line text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out mr-1"></i>
                    特徴・効果
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-gray-300 hover:text-yellow-400 transition-colors duration-400 ease-out cursor-pointer text-base flex items-center group">
                    <i className="ri-arrow-right-s-line text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out mr-1"></i>
                    サポート内容
                  </a>
                </li>
                <li>
                  <a href="#cases" className="text-gray-300 hover:text-yellow-400 transition-colors duration-400 ease-out cursor-pointer text-base flex items-center group">
                    <i className="ri-arrow-right-s-line text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out mr-1"></i>
                    導入事例
                  </a>
                </li>
                <li>
                  <a href="#subsidy" className="text-gray-300 hover:text-yellow-400 transition-colors duration-400 ease-out cursor-pointer text-base flex items-center group">
                    <i className="ri-arrow-right-s-line text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out mr-1"></i>
                    補助金について
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-6 relative">
                お問合せ
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400 mt-2"></div>
              </h4>
              <div className="space-y-6">
                <button
                  onClick={() => setShowLineModal(true)}
                  className="group bg-gradient-to-r from-[#00B900] to-[#00D000] hover:from-[#00A000] hover:to-[#00C000] rounded-2xl p-6 w-full transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-500 ease-out">
                      <i className="ri-line-fill text-3xl text-white"></i>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">LINE</div>
                      <div className="text-white/80 text-sm">お気軽にご相談ください</div>
                    </div>
                    <i className="ri-arrow-right-line text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-400 ease-out"></i>
                  </div>
                </button>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50">
                  <div className="flex items-start space-x-3">
                    <i className="ri-information-line text-[#00B900] text-lg text-yellow-500 mr-2"></i>
                    <div className="text-left">
                      <p className="text-gray-300 text-base leading-relaxed">
                        製品についてのご質問やご相談を<br />
                        お気軽にお送りください。
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        営業時間：11:00~23:00（最終受付22:00）
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* フォームモーダル */}
      <div id="form-modals">
        {/* LINE QRコードモーダル */}
        {showLineModal && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-400 ease-out p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowLineModal(false);
              }
            }}
          >
            <div className="bg-white rounded-2xl md:rounded-3xl max-w-lg w-full mx-4 overflow-hidden shadow-2xl transition-all duration-500 ease-out transform scale-100 max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* ヘッダー */}
                <div className="bg-[#00B900] px-4 py-3 md:px-8 md:py-6 text-center">
                  <button
                    onClick={() => setShowLineModal(false)}
                    className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-200 transition-colors cursor-pointer"
                  >
                    <i className="ri-close-line text-2xl md:text-3xl"></i>
                  </button>
                  <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-4">
                    <i className="ri-line-fill text-2xl md:text-3xl text-white"></i>
                    <h3 className="text-xl md:text-2xl font-bold text-white">LINE</h3>
                  </div>
                  <p className="text-white/90 text-sm md:text-base">お気軽にご相談ください</p>
                </div>
                
                {/* QRコード表示エリア */}
                <div className="p-4 md:p-8 text-center">
                  <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-8 mb-4 md:mb-6">
                    <img
                      src="/images/line-qr.png"
                      alt="LINE QRコード"
                      className="w-48 h-48 md:w-80 md:h-80 object-contain mx-auto rounded-lg md:rounded-xl border-2 border-gray-200"
                    />
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">
                      QRコードをスキャンすると<br />
                      LINEの友だちに追加されます
                    </h4>
                    
                    <a
                      href="https://lin.ee/MGcILER"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2
                        w-48 md:w-80
                        py-4 md:py-5
                        bg-[#06C755] hover:bg-[#05B54C]
                        text-white font-bold text-base md:text-lg
                        rounded-xl md:rounded-2xl
                        shadow-md hover:shadow-lg
                        transition-all duration-300 ease-out
                        cursor-pointer
                      "
                    >
                      <i className="ri-user-add-line text-xl md:text-2xl"></i>
                      友だち追加
                    </a>

                    <a
                      href="tel:08061577520"
                      className="
                        inline-flex items-center justify-center gap-2
                        w-48 md:w-80
                        py-4 md:py-5
                        bg-yellow-400 hover:bg-yellow-500
                        text-gray-900 font-bold text-base md:text-lg
                        rounded-xl md:rounded-2xl
                        shadow-md hover:shadow-lg
                        transition-all duration-300 ease-out
                        cursor-pointer
                      "
                    >
                      <i className="ri-phone-line text-xl md:text-2xl"></i>
                      電話相談
                    </a>
                    
                    <div className="bg-[#00B900]/10 border border-[#00B900]/20 rounded-lg md:rounded-xl p-3 md:p-4">
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <i className="ri-information-line text-[#00B900] text-lg text-yellow-500 mr-2"></i>
                        <div className="text-left">
                          <p className="text-gray-800 font-medium text-sm md:text-base mb-0.5 md:mb-2">
                            フォトフェイシャルで様々な効果を一台で実現★
                          </p>
                          <p className="text-gray-700 text-sm md:text-base">
                            LINE追加後脱毛器検討と一言送りください。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 資料請求フォーム */}
        {showDocumentModal && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-400 ease-out"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowDocumentModal(false);
              }
            }}
          >
            <div className="bg-white rounded-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto transition-all duration-500 ease-out transform scale-100">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">資料請求</h3>
                  <button
                    onClick={() => setShowDocumentModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                </div>
                <form
                  id="document-form"
                  data-readdy-form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    handleSubmit('document-form', formData);
                  }}
                  action="https://readdy.ai/api/form/d5q4dggtu5df1co4d51g"
                  method="POST"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">お名前 *</label>
                      <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base" />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">メールアドレス *</label>
                      <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base" />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">電話番号 *</label>
                      <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base" />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">郵便番号</label>
                      <input type="text" name="postal_code" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base" />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">住所</label>
                      <input type="text" name="address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base" />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">ご質問・ご要望（500文字以内）</label>
                      <textarea
                        name="message"
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base"
                        placeholder="ご質問やご要望がございましたらお書きください"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="w-full mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-500 ease-out rounded-lg whitespace-nowrap cursor-pointer transform hover:scale-105 text-base">
                    資料を請求する
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* 無料相談フォーム */}
        {showConsultationModal && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-400 ease-out"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowConsultationModal(false);
              }
            }}
          >
            <div className="bg-white rounded-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto transition-all duration-500 ease-out transform scale-100">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">無料相談</h3>
                  <button
                    onClick={() => setShowConsultationModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                </div>
                <form
                  id="consultation-form"
                  data-readdy-form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    handleSubmit('consultation-form', formData);
                  }}
                  action="https://readdy.ai/api/form/d5q4dggtu5df1co4d520"
                  method="POST"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">お名前 *</label>
                      <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base" />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">メールアドレス *</label>
                      <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base" />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">電話番号 *</label>
                      <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base" />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">サロンの状況</label>
                      <select name="salon_status" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base">
                        <option value="">選択してください</option>
                        <option value="planning">開業予定</option>
                        <option value="new">開業1年未満</option>
                        <option value="existing">既存サロン</option>
                        <option value="expansion">店舗拡大検討</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">希望相談内容</label>
                      <div className="space-y-2">
                        <label className="flex items-center text-base">
                          <input type="checkbox" name="consultation_type" value="product" className="mr-2" />
                          <span>製品について</span>
                        </label>
                        <label className="flex items-center text-base">
                          <input type="checkbox" name="consultation_type" value="pricing" className="mr-2" />
                          <span>料金・導入費用</span>
                        </label>
                        <label className="flex items-center text-base">
                          <input type="checkbox" name="consultation_type" value="support" className="mr-2" />
                          <span>サポート内容</span>
                        </label>
                        <label className="flex items-center text-base">
                          <input type="checkbox" name="consultation_type" value="subsidy" className="mr-2" />
                          <span>補助金活用</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">詳細・ご質問（500文字以内）</label>
                      <textarea
                        name="message"
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base"
                        placeholder="相談したい内容や質問がございましたらお書きください"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="w-full mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-500 ease-out rounded-lg whitespace-nowrap cursor-pointer transform hover:scale-105 text-base">
                    相談を申し込む
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
