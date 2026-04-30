import { useState } from 'react';

const faqs = [
  {
    q: '施術は痛いですか？',
    a: '強い痛みはほとんどありません。軽い振動・刺激程度で、多くの方が快適に施術を受けられています。痛みに敏感な方には出力を調整することも可能です。',
  },
  {
    q: '効果はすぐに実感できますか？',
    a: '1回でも変化を感じる方もいますが、通常は5回の施術で段階的に改善していきます。コンディションの変化には個人差があるため、継続的なケアをおすすめしています。',
  },
  {
    q: '誰でも受けられますか？',
    a: 'ほとんどの方が受けられますが、抗凝固薬を服用中の方、重度の循環器疾患をお持ちの方、感染や炎症がある方は事前にご相談ください。',
  },
  {
    q: '男性機能のお悩み薬と併用できますか？',
    a: 'はい、併用可能です。むしろ他のケアと併用しやすい点も特長です。薬の使用量を減らせる可能性もあります。',
  },
  {
    q: '効果はどのくらい持続しますか？',
    a: '個人差がありますが、5回の施術後、多くの方が数ヶ月〜半年以上効果を実感されています。定期的なメンテナンス施術で効果を維持できます。',
  },
  {
    q: '施術時間はどのくらいですか？',
    a: '1回の施術は約20分です。カウンセリングを含めると約40分程度です。お仕事帰りや休日にも通いやすい時間設定です。',
  },
  {
    q: '何回施術を受ければいいですか？',
    a: '基本は5回1クールです。症状の程度によっては10回以上の施術が効果的な場合もあります。施術者と相談しながら最適なプランを決定します。',
  },
  {
    q: '医師免許がなくても施術できますか？',
    a: 'はい、REJEMAX PROは医療行為ではないため、医師免許は不要です。約1時間の研修を受講いただければ、どなたでも施術が可能です。',
  },
  {
    q: '導入にはどのくらいの費用がかかりますか？',
    a: '機器の種類（卓上型・タワー型）や契約形態（購入・リース）によって異なります。詳細はお問い合わせください。初期費用を抑えたリースプランもご用意しています。',
  },
  {
    q: '研修はどのように行われますか？',
    a: '導入前に約1時間のオンライン研修を実施します。施術方法・機器操作・カウンセリング方法などを学んでいただきます。研修後も専任スタッフがサポートします。',
  },
  {
    q: '消耗品はどこで購入できますか？',
    a: '専用の消耗品（ジェル・ハンドピースカバー等）は弊社から直接ご購入いただけます。定期的な補充が必要ですが、コストは最小限に抑えられています。',
  },
  {
    q: '集客サポートはありますか？',
    a: 'はい、導入店舗向けに集客サポートを提供しています。SNS運用のアドバイス、チラシ・LP素材の提供、口コミ促進の方法など、収益化をトータルでサポートします。',
  },
  {
    q: '副作用の報告はありますか？',
    a: '全国60店舗以上での導入実績において、重大な副作用の報告はありません。施術直後に軽い赤みや温感を感じる場合がありますが、通常は数時間で消失します。',
  },
  {
    q: '糖尿病や高血圧の方でも受けられますか？',
    a: '多くの場合、受けていただけます。ただし、症状の程度や服用薬によっては注意が必要な場合もあります。事前のカウンセリングで詳しくご確認ください。',
  },
  {
    q: '他のサロンとの差別化はできますか？',
    a: 'はい、REJEMAX PROは日本国内での独占販売権を持つ機器です。競合が少なく、高単価・高リピートの施術として差別化が図れます。専門サロンとしてのブランディングも可能です。',
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-yellow-400 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-yellow-50 transition-all duration-300 cursor-pointer text-left"
      >
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-gray-900 font-bold text-sm">Q{index + 1}</span>
          </div>
          <h3 className="text-base font-bold text-gray-900 leading-snug">{question}</h3>
        </div>
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 ml-4">
          <i className={`ri-arrow-down-s-line text-2xl text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6">
          <div className="flex items-start space-x-4 pt-2 border-t border-gray-100">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-gray-700 font-bold text-sm">A</span>
            </div>
            <p className="text-gray-700 leading-relaxed pt-2 text-sm">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  scrollToSection: (id: string) => void;
}

export default function FAQSection({ scrollToSection }: Props) {

  return (
    <>
      {/* FAQ */}
      <section id="faq" className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">FAQ</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">よくある質問</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">お客様・導入検討者からよく寄せられる質問</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 text-center">
            <i className="ri-question-line text-4xl text-yellow-500 mb-3 block"></i>
            <h3 className="text-lg font-bold text-gray-900 mb-2">その他のご質問はお気軽に</h3>
            <p className="text-gray-600 text-sm mb-4">上記以外のご質問も、専任スタッフが丁寧にお答えします。</p>
            <button
              onClick={() => scrollToSection('cta')}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center space-x-2 text-sm"
            >
              <i className="ri-mail-line text-base"></i>
              <span>お問い合わせはこちら</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section id="cta" className="py-10 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-red-500 text-white px-5 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider animate-pulse">
              <i className="ri-time-line mr-2"></i>期間限定特典あり
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              今すぐ始めて、<br />新しい自信を手に入れませんか？
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-5"></div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-3">
              根本からの男性機能のお悩み改善で、自信と活力を取り戻しましょう。
            </p>
            <p className="text-base text-yellow-400 font-semibold">今なら初回体験特別価格でご案内中</p>
          </div>

          {/* 特典 - ハードコードカラー */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-14">
            <div className="bg-yellow-400/10 border-2 border-yellow-400 rounded-2xl p-5 text-center">
              <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-gift-line text-2xl text-gray-900"></i>
              </div>
              <p className="text-yellow-400 font-bold text-base mb-2">特典①</p>
              <p className="text-white font-medium text-sm">初回体験 ¥5,000（通常¥20,000）</p>
            </div>
            <div className="bg-green-400/10 border-2 border-green-400 rounded-2xl p-5 text-center">
              <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-customer-service-2-line text-2xl text-gray-900"></i>
              </div>
              <p className="text-green-400 font-bold text-base mb-2">特典②</p>
              <p className="text-white font-medium text-sm">無料カウンセリング付き（約30分）</p>
            </div>
            <div className="bg-orange-400/10 border-2 border-orange-400 rounded-2xl p-5 text-center">
              <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-book-open-line text-2xl text-gray-900"></i>
              </div>
              <p className="text-orange-400 font-bold text-base mb-2">特典③</p>
              <p className="text-white font-medium text-sm">男性機能のお悩み改善ガイドブック プレゼント</p>
            </div>
          </div>

          {/* お問い合わせの流れ */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10 md:mb-14">
            <h3 className="text-xl font-bold text-white mb-6 text-center">お問い合わせの流れ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: '1', icon: 'ri-mail-send-line', title: 'お問い合わせ', desc: 'フォームまたはお電話でご連絡ください' },
                { num: '2', icon: 'ri-phone-line', title: 'ご連絡', desc: '担当者より1営業日以内にご連絡します' },
                { num: '3', icon: 'ri-chat-smile-3-line', title: '無料相談', desc: 'オンラインまたは対面で詳しくご説明' },
                { num: '4', icon: 'ri-check-double-line', title: '導入決定', desc: '契約・研修を経て導入スタート' },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 relative">
                    <i className={`${step.icon} text-xl text-gray-900`}></i>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 border-2 border-yellow-400 rounded-full flex items-center justify-center text-yellow-400 text-xs font-bold">{step.num}</span>
                  </div>
                  <h4 className="text-white font-bold mb-1 text-sm">{step.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-01/logo-rejemax-pro.png"
                alt="REJEMAX PRO"
                className="h-12 w-auto object-contain mb-3"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                医療技術から着想を得た空気圧振動波で、男性特有のお悩みにアプローチするケア。薬に頼らず、自然な形で機能を回復させる革新的ソリューション。
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">コンテンツ</h4>
              <ul className="space-y-2">
                {[
                  { label: '男性機能のお悩み市場の現状', id: 'market' },
                  { label: '作用メカニズム', id: 'mechanism' },
                  { label: '3つのアプローチ', id: 'approach' },
                  { label: '体験者の声', id: 'voices' },
                  { label: '施術価格', id: 'pricing' },
                  { label: 'よくある質問', id: 'faq' },
                ].map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(link.id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm cursor-pointer"
                    >
                      <i className="ri-arrow-right-s-line mr-1"></i>{link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-600 text-xs mt-2">本サービスは医療行為ではありません。効果には個人差があります。</p>
          </div>
        </div>
      </footer>
    </>
  );
}
