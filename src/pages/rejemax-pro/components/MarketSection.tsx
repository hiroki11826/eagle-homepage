export default function MarketSection() {
  return (
    <>
      {/* 株式会社LINK JAPANについて */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              { icon: 'ri-hospital-line', title: 'クリニック・サロン向け\n美容マシンソリューション', desc: '最先端の美容機器を提供し、クリニックやサロンの事業拡大をサポート' },
              { icon: 'ri-store-2-line', title: '自社エステサロンの運営', desc: '実際の運営ノウハウを蓄積し、導入店舗へのサポートに活用' },
              { icon: 'ri-lightbulb-line', title: 'OEM商品の企画・制作', desc: 'オリジナル商品の企画から製造まで、トータルでサポート' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className={`${item.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3 text-center whitespace-pre-line">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 text-center">
            <p className="text-xl font-bold text-gray-900">豊富な実績と確かな技術力で、<br className="hidden md:block" />お客様のビジネス成功をサポートします</p>
          </div>
        </div>
      </section>

      {/* ED市場の現状 */}
      <section id="market" className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">日本における男性機能のお悩みの現状と将来性</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">巨大市場で年々増加傾向</p>
          </div>

          {/* バナー：フォント統一のためHTMLで再現 */}
          <div className="relative w-full rounded-2xl shadow-xl mb-8 overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 py-10 md:py-14 px-6 md:px-14 text-center">
              <div className="inline-block border border-yellow-400/50 text-yellow-400 px-5 py-1 rounded-full text-xs tracking-widest uppercase mb-5 font-bold">
                Revolutionary Solution
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                <span className="text-red-400">REJEMAX PRO</span>
                <span className="text-white"> は</span>
              </h3>
              <p className="text-xl md:text-3xl font-bold mb-5 leading-snug">
                <span className="text-sky-400">薬に頼らない、画期的なコンディショニングケア</span>
                <span className="text-white">を実現します</span>
              </p>
              <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
                <span className="block">空気圧振動波で血流環境と反応力を本来のコンディショ<span style={{ fontSize: '0.875rem' }}>ンへ</span></span>
                身体への負担に配慮した薬に頼らないケアで、本来のパフォーマンスを引き出し、持続的な変化へ。
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: 'ri-leaf-line', text: '薬不要' },
                  { icon: 'ri-shield-check-line', text: '副作用なし' },
                  { icon: 'ri-infinity-line', text: '持続的な効果' },
                  { icon: 'ri-store-2-line', text: '全国60店舗以上' },
                ].map((badge, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center space-x-2">
                    <i className={`${badge.icon} text-yellow-400 text-sm`}></i>
                    <span className="text-white font-semibold text-xs">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center mb-5">
                <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3">市場規模</div>
                <p className="text-5xl font-bold text-gray-900 mb-2">1,800万人</p>
                <p className="text-base text-gray-600">男性機能お悩み・予備軍の推定人数</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 leading-relaxed text-center text-sm">日本の成人男性の約<strong className="text-yellow-600">4人に1人</strong>が男性機能にお悩みがあるまたはその予備軍であると言われています</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">男性機能のお悩み推移</h3>
              <div className="relative h-52 flex items-end justify-around px-4 mb-3 overflow-visible">
                {[
                  { year: '2000', val: 40, label: '800万' },
                  { year: '2005', val: 52, label: '1,000万' },
                  { year: '2010', val: 62, label: '1,200万' },
                  { year: '2015', val: 74, label: '1,450万' },
                  { year: '2020', val: 88, label: '1,700万' },
                  { year: '2024', val: 100, label: '1,800万' },
                ].map((d) => (
                  <div key={d.year} className="flex flex-col items-center flex-1">
                    <span className="text-xs text-gray-500 mb-1 font-semibold">{d.label}</span>
                    <div
                      className="w-full max-w-[36px] bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t-md"
                      style={{ height: `${d.val * 1.4}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-1">{d.year}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-center text-xs mt-2">
                <i className="ri-arrow-up-line text-yellow-600"></i> 年々増加傾向にあり、今後も市場拡大が見込まれます
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl font-bold mb-5 text-center">市場拡大の背景</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: 'ri-user-add-line', title: '高齢化社会', desc: '加齢に伴う男性機能のお悩みの増加' },
                { icon: 'ri-heart-pulse-line', title: '生活習慣病の増加', desc: '糖尿病・高血圧などの影響' },
                { icon: 'ri-mental-health-line', title: 'ストレス社会', desc: '心因性男性機能のお悩みの増加' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className={`${item.icon} text-2xl text-gray-900`}></i>
                  </div>
                  <h4 className="font-bold mb-1 text-sm">{item.title}</h4>
                  <p className="text-gray-300 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ED患者の悩み - ハードコードカラー */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-red-100 text-red-600 px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
              <i className="ri-alert-line mr-2"></i>こんなお悩みありませんか?
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">あなたはこんな悩みを<br />抱えていませんか?</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">一つでも当てはまる方は、ぜひご相談ください</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* 各カードをハードコード */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-red-200">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-emotion-sad-line text-xl text-white"></i>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed text-sm">以前のような硬さや持続力がなくなってきた</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-medicine-bottle-line text-xl text-white"></i>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed text-sm">男性機能のお悩み薬を飲んでいるが、副作用が心配</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-yellow-200">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-xl text-white"></i>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed text-sm">薬の効果が一時的で、根本的に治したい</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-green-200">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-team-line text-xl text-white"></i>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed text-sm">パートナーとの関係に自信が持てない</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-teal-200">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-cross-line text-xl text-white"></i>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed text-sm">薬に頼り続けることに抵抗がある</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-indigo-200">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-unfollow-line text-xl text-white"></i>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed text-sm">人に相談しづらく、一人で悩んでいる</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-pink-200">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-heart-line text-xl text-white"></i>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed text-sm">朝立ちの回数が減ってきた</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-violet-200">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-arrow-down-line text-xl text-white"></i>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed text-sm">途中で萎えてしまうことがある</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 md:p-8 text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <i className="ri-alert-line text-5xl text-white mb-3 block"></i>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">これらの悩み、放置していませんか?</h3>
              <p className="text-white text-sm md:text-base leading-relaxed mb-5">男性機能のお悩みは進行性の症状です。早期の対策が、より良い結果につながります。<br className="md:hidden" />従来の男性機能のお悩み薬では一時的な対症療法にすぎず、根本的な解決にはなりません。</p>
              <div className="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-bold text-base md:text-lg">根本から改善する、新しい選択肢があります</div>
            </div>
          </div>
        </div>
      </section>

      {/* EDの原因 */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">男性機能のお悩みの主な原因</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">根本原因は「血流不足」</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-8 shadow-xl">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">男性器の海綿体は毛細血管の集合体</h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">勃起は、男性器の海綿体に血液が流れ込むことで起こります。海綿体は無数の毛細血管で構成されており、この血管の健康状態が勃起機能に直結します。</p>
            <div className="bg-yellow-400/20 border-l-4 border-yellow-400 p-3 rounded">
              <p className="text-gray-900 font-semibold text-sm"><i className="ri-alert-line text-yellow-600 mr-2"></i>最大の要因は「血流不足」</p>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">血流不足を引き起こす6つの要因</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: 'ri-time-line', title: '加齢', desc: '年齢とともに血管が硬くなり、血流が悪化', useSvg: false },
                { icon: '', title: '喫煙', desc: 'ニコチンが血管を収縮させ、血流を阻害', useSvg: true },
                { icon: 'ri-goblet-line', title: '飲酒', desc: '過度な飲酒は血管にダメージを与える', useSvg: false },
                { icon: 'ri-run-line', title: '運動不足', desc: '運動不足により血液循環が低下', useSvg: false },
                { icon: 'ri-emotion-unhappy-line', title: 'ストレス', desc: '精神的ストレスが血管を収縮させる', useSvg: false },
                { icon: 'ri-heart-pulse-line', title: '中性脂肪', desc: '血液がドロドロになり血流が悪化', useSvg: false },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-yellow-400">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                    {item.useSvg ? (
                      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path d="M2 17h15v2H2zm16.5 0H21v2h-2.5zm-1.5-1.5h2V13c0-2.21-1.79-4-4-4h-1v1.5h1c1.38 0 2.5 1.12 2.5 2.5v3.5zM19 11h2V8c0-3.31-2.69-6-6-6h-1v1.5h1c2.48 0 4.5 2.02 4.5 4.5v3z" />
                      </svg>
                    ) : (
                      <i className={`${item.icon} text-2xl text-white`}></i>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1.5 text-center">{item.title}</h4>
                  <p className="text-gray-600 text-center leading-relaxed text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-200">
            <div className="text-center">
              <i className="ri-alert-line text-4xl text-red-600 mb-3 block"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-3">これらの要因が重なると...</h3>
              <p className="text-base text-gray-700 leading-relaxed">血管の健康が損なわれ、海綿体への血流が不足。<br />結果として、<strong className="text-red-600">勃起機能の低下(男性機能のお悩み)</strong>を引き起こします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ED患者が抱える問題 */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">男性機能のお悩みを抱える問題</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-300">従来の男性機能のお悩み薬では根本解決にならない</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: 'ri-heart-line', text: '以前のような自信が持てない' },
              { icon: 'ri-team-line', text: 'パートナーとの関係に不安がある' },
              { icon: 'ri-medicine-bottle-line', text: '男性機能のお悩み薬の副作用が心配' },
              { icon: 'ri-time-line', text: '薬の効果が一時的で根本解決にならない' },
              { icon: 'ri-emotion-unhappy-line', text: '人に相談しづらい悩みを抱えている' },
              { icon: 'ri-shield-cross-line', text: '薬に依存したくない' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600 hover:border-yellow-400 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-2xl text-yellow-400`}></i>
                  </div>
                  <p className="text-white font-medium text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">代表的な男性機能のお悩み薬の課題</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { name: 'バイアグラ', time: '約4時間', bgIcon: 'bg-sky-100', iconColor: 'text-sky-600' },
                { name: 'レビトラ', time: '約5時間', bgIcon: 'bg-orange-100', iconColor: 'text-orange-600' },
                { name: 'シアリス', time: '約36時間', bgIcon: 'bg-green-100', iconColor: 'text-green-600' },
              ].map((drug, i) => (
                <div key={i} className="text-center p-3 md:p-5 bg-gray-50 rounded-xl">
                  <div className={`w-16 h-16 ${drug.bgIcon} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <i className={`ri-capsule-line text-3xl ${drug.iconColor}`}></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">{drug.name}</h4>
                  <p className="text-gray-600 text-xs">効果時間:{drug.time}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
                <h4 className="font-bold text-red-900 mb-3 flex items-center text-sm"><i className="ri-close-circle-line text-xl mr-2"></i>従来薬の問題点</h4>
                <ul className="space-y-2">
                  {['根本改善にならない', '効果が一時的', '副作用のリスク(頭痛・ほてり等)', '薬への依存', '継続的なコスト負担'].map((t, i) => (
                    <li key={i} className="flex items-start text-gray-700 text-xs">
                      <i className="ri-arrow-right-s-line text-red-600 mt-0.5 mr-2"></i><span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
                <h4 className="font-bold text-green-900 mb-3 flex items-center text-sm"><i className="ri-check-line text-xl mr-2"></i>求められる解決策</h4>
                <ul className="space-y-2">
                  {['根本的な改善', '持続的な効果', '副作用のない安全性', '薬に頼らない方法', '長期的なコスト削減'].map((t, i) => (
                    <li key={i} className="flex items-start text-gray-700 text-xs">
                      <i className="ri-arrow-right-s-line text-green-600 mt-0.5 mr-2"></i><span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl p-6 md:p-8 border-2 border-yellow-400">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">根本改善を求める声が増加</h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-5">従来の男性機能のお悩み薬では一時的な対症療法にすぎず、根本的な解決にはなりません。<br className="md:hidden" />多くの男性が、薬に頼らず自然な形で機能を回復させる方法を求めています。</p>
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-base">だからこそ、新しいアプローチが必要です</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
