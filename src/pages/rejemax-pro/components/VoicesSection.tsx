export default function VoicesSection() {
  const experienceItems = [
    { icon: 'ri-arrow-up-circle-line', bg: 'bg-yellow-100', iconText: 'text-yellow-500', pctText: 'text-yellow-500', title: '勃起の硬さが向上', pct: '92%' },
    { icon: 'ri-sun-line', bg: 'bg-orange-100', iconText: 'text-orange-500', pctText: 'text-orange-500', title: '朝立ちが復活', pct: '87%' },
    { icon: 'ri-time-line', bg: 'bg-green-100', iconText: 'text-green-500', pctText: 'text-green-500', title: '持続力が改善', pct: '85%' },
    { icon: 'ri-emotion-happy-line', bg: 'bg-teal-100', iconText: 'text-teal-500', pctText: 'text-teal-500', title: '自信が回復', pct: '94%' },
    { icon: 'ri-heart-line', bg: 'bg-red-100', iconText: 'text-red-500', pctText: 'text-red-500', title: 'パートナーとの関係改善', pct: '88%' },
    { icon: 'ri-capsule-line', bg: 'bg-indigo-100', iconText: 'text-indigo-500', pctText: 'text-indigo-500', title: '男性機能のお悩み薬の使用量が減少', pct: '76%' },
    { icon: 'ri-shield-check-line', bg: 'bg-gray-100', iconText: 'text-gray-500', pctText: 'text-gray-500', title: '副作用なし', pct: '100%' },
    { icon: 'ri-repeat-line', bg: 'bg-pink-100', iconText: 'text-pink-500', pctText: 'text-pink-500', title: '継続利用を希望', pct: '91%' },
  ];

  return (
    <>
      {/* 体験者が実感した変化 */}
      <section id="voices" className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">実績・効果</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">体験者が実感した変化</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">施術を受けた方々から寄せられたリアルな声</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-10 md:mb-14">
            {experienceItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${item.icon} text-2xl ${item.iconText}`}></i>
                </div>
                <p className={`text-3xl font-bold ${item.pctText} mb-1`}>{item.pct}</p>
                <p className="text-gray-700 text-xs font-medium leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-10 md:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">お客様の声</div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">施術を受けたお客様の声</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-300">導入店舗で施術を受けたお客様より</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                age: '20代',
                img: 'https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-11/mask-group.png',
                stars: 5,
                text: '使用直後にムズムズする感覚あり。3日後にS◯Xした時にいつも以上に硬くなって驚いた。直後ムズムズした。翌日の朝立ちが凄かった。勃起時の張りが今まで以上で驚いた。',
                tag: '硬さ向上・朝立ち復活',
              },
              {
                age: '30代',
                img: 'https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-11/mask-group.png',
                stars: 5,
                text: '男性機能のお悩み薬を飲んでいたが副作用が嫌で悩んでいた。REJEMAX PROを5回受けたら薬なしでも問題なくなった。こんなに変わるとは思わなかった。本当に感謝しています。',
                tag: '薬不要・根本改善',
              },
              {
                age: '40代',
                img: 'https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-11/mask-group-1.png',
                stars: 5,
                text: '数年間、朝立ちしていなかったのが朝立ちするようになった。たまに中折れする時があったのが中折れしなくなった。自信がついた。彼女から大きくなったと言われた。',
                tag: '朝立ち復活・中折れ改善',
              },
              {
                age: '50代',
                img: 'https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-11/mask-group-2.png',
                stars: 5,
                text: '今もS◯Xは問題なく出来るが硬さが足りなくなったので体験。効果あり。サイズUPしたような気がするので定期的にしたい。朝立ちし始めたので継続したい。',
                tag: '硬さ向上・サイズアップ',
              },
              {
                age: '60代',
                img: 'https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-11/mask-group-2.png',
                stars: 4,
                text: '年齢的に諦めていたが、友人に勧められて試してみた。5回の施術後、若い頃のような感覚が戻ってきた気がする。妻との関係も改善され、生活の質が上がった。',
                tag: '機能回復・関係改善',
              },
              {
                age: '45代',
                img: 'https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-11/mask-group-1.png',
                stars: 5,
                text: '糖尿病の影響で男性機能のお悩みになり、薬も効きにくくなっていた。REJEMAX PROを試したところ、薬の効きが格段に良くなった。血流が改善されているのを実感できる。',
                tag: '男性機能のお悩み薬効果向上・血流改善',
              },
            ].map((voice, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl p-5 shadow-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 flex-shrink-0">
                    <img src={voice.img} alt={voice.age} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-white font-bold">{voice.age}</p>
                    <div className="flex space-x-0.5">
                      {Array.from({ length: voice.stars }).map((_, si) => (
                        <i key={si} className="ri-star-fill text-yellow-400 text-sm"></i>
                      ))}
                      {Array.from({ length: 5 - voice.stars }).map((_, si) => (
                        <i key={si} className="ri-star-line text-gray-600 text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <i className="ri-double-quotes-l text-yellow-400 text-2xl"></i>
                  <p className="text-gray-300 leading-relaxed text-sm mt-1">{voice.text}</p>
                </div>
                <div className="inline-block bg-yellow-400/20 border border-yellow-400/50 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                  {voice.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 施術・運営方法 */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">導入ガイド</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">施術・運営方法</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">シンプルな4ステップで、誰でも安全に施術できます</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8 md:mb-12">
            {[
              { num: '01', icon: 'ri-user-smile-line', title: 'カウンセリング', desc: 'お客様の症状・悩みをヒアリング。施術内容と効果を丁寧に説明します。', time: '約10分' },
              { num: '02', icon: 'ri-settings-3-line', title: '機器セッティング', desc: 'お客様の状態に合わせて出力を調整。最適なパラメーターを設定します。', time: '約5分' },
              { num: '03', icon: 'ri-flashlight-line', title: '振動波照射', desc: '専用ハンドピースで陰茎に衝撃波を照射。痛みはほとんどありません。', time: '約20分' },
              { num: '04', icon: 'ri-chat-smile-3-line', title: 'アフターケア', desc: '施術後の状態確認と次回の施術スケジュールを調整します。', time: '約5分' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex flex-col items-center justify-center mb-4 shadow-lg relative">
                  <span className="text-gray-900 text-xs font-bold absolute top-3">STEP</span>
                  <span className="text-gray-900 text-2xl md:text-3xl font-bold">{step.num}</span>
                  <i className={`${step.icon} text-gray-900 text-base md:text-lg absolute bottom-3`}></i>
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-2 hidden md:block">{step.desc}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-2 md:hidden">{step.desc.substring(0, 25)}...</p>
                <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
                  <i className="ri-time-line mr-1"></i>{step.time}
                </div>
              </div>
            ))}
          </div>

          {/* 安全性 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 md:p-10 shadow-xl border-2 border-green-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">安全性について</h3>
              <p className="text-gray-700 text-sm md:text-base">REJEMAX PROは安全性を最優先に設計されています</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: 'ri-stethoscope-line', title: '医療技術から着想', desc: '整形外科・循環器科で実績のある低出力衝撃波技術から着想。安全性に配慮して設計されています。' },
                { icon: 'ri-user-star-line', title: '医師免許不要', desc: '医療行為ではないため医師免許は不要。研修1時間で習得でき、誰でも同じ品質の施術が可能です。' },
                { icon: 'ri-heart-pulse-line', title: '副作用報告なし', desc: '全国60店舗以上での導入実績において、重大な副作用の報告はありません。安心してご利用いただけます。' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-md text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
