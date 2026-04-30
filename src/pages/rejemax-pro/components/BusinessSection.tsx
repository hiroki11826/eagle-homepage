export default function BusinessSection() {
  return (
    <>
      {/* 施術価格 */}
      <section id="pricing" className="py-10 md:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">料金プラン</div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">施術価格</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-300">あなたの未来への投資</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              {
                label: '初回体験', price: '¥5,000', sub: '特別体験価格', highlight: false,
                features: ['約20分の施術', 'カウンセリング付き', '効果を実感できる1回', '次回コース案内'], badge: '',
              },
              {
                label: '5回コース', price: '¥100,000', sub: '1回あたり ¥20,000', highlight: true,
                features: ['基本1クール', '段階的な改善', '効果が持続', '定期フォロー付き'], badge: 'おすすめ',
              },
              {
                label: '単回施術', price: '¥20,000', sub: '1回ごとの施術', highlight: false,
                features: ['約20分の施術', 'メンテナンスに最適', '効果の維持', '随時予約可能'], badge: '',
              },
              {
                label: '機器購入', price: '要相談', sub: 'サロン導入向け', highlight: false,
                features: ['卓上型・タワー型', '研修・サポート付き', '導入後フォロー', '収益化サポート'], badge: '法人向け',
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 relative ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 scale-105'
                    : 'bg-gray-800 border border-gray-700 hover:border-yellow-400'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${plan.highlight ? 'bg-gray-900 text-yellow-400' : 'bg-yellow-400 text-gray-900'}`}>
                    {plan.badge}
                  </div>
                )}
                <div className="p-6">
                  <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${plan.highlight ? 'text-gray-900' : 'text-gray-400'}`}>{plan.label}</p>
                  <p className={`text-3xl font-bold mb-1 ${plan.highlight ? 'text-gray-900' : 'text-white'}`}>{plan.price}</p>
                  <p className={`text-xs mb-5 ${plan.highlight ? 'text-gray-800' : 'text-gray-400'}`}>{plan.sub}</p>
                  <ul className="space-y-2.5">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className={`flex items-center text-xs ${plan.highlight ? 'text-gray-900' : 'text-gray-300'}`}>
                        <i className={`ri-check-line mr-2 text-base ${plan.highlight ? 'text-gray-900' : 'text-yellow-400'}`}></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-400/10 border-2 border-yellow-400 rounded-2xl p-5 text-center">
            <p className="text-yellow-400 font-bold text-sm">
              <i className="ri-information-line mr-2"></i>
              価格はすべて税込表示です。初回体験後、コースへのご案内もございます。
            </p>
          </div>
        </div>
      </section>

      {/* 競合比較 */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">競合比較</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">他社との徹底比較</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">なぜREJEMAX PROが選ばれるのか</p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-gray-900">
                  <th className="py-4 px-4 text-left text-gray-300 font-bold text-sm">比較項目</th>
                  <th className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-1.5">
                        <i className="ri-flashlight-line text-xl text-gray-900"></i>
                      </div>
                      <p className="text-yellow-400 font-bold text-xs">REJEMAX PRO</p>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-1.5">
                        <i className="ri-hospital-line text-xl text-white"></i>
                      </div>
                      <p className="text-gray-300 font-bold text-xs">クリニック</p>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-1.5">
                        <i className="ri-capsule-line text-xl text-white"></i>
                      </div>
                      <p className="text-gray-300 font-bold text-xs">男性機能のお悩み薬</p>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-1.5">
                        <i className="ri-store-2-line text-xl text-white"></i>
                      </div>
                      <p className="text-gray-300 font-bold text-xs">他社機器</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {[
                  {
                    item: '根本改善',
                    rejemax: { val: '◎', note: '血流環境・反応力を改善', good: true },
                    clinic: { val: '○', note: '医療機関で対応', good: true },
                    drug: { val: '✕', note: '一時的な対症療法', good: false },
                    other: { val: '△', note: '効果にばらつき', good: false },
                  },
                  {
                    item: '医師免許',
                    rejemax: { val: '不要', note: '誰でも施術可能', good: true },
                    clinic: { val: '必要', note: '医師のみ', good: false },
                    drug: { val: '処方箋必要', note: '医師の処方が必要', good: false },
                    other: { val: '不要', note: '施術可能', good: true },
                  },
                  {
                    item: '副作用',
                    rejemax: { val: 'ほぼなし', note: '安全性が高い', good: true },
                    clinic: { val: '少ない', note: '医師管理下', good: true },
                    drug: { val: 'あり', note: '頭痛・ほてり等', good: false },
                    other: { val: '少ない', note: '機器による', good: true },
                  },
                  {
                    item: '効果の持続',
                    rejemax: { val: '数ヶ月〜半年以上', note: '長期持続', good: true },
                    clinic: { val: '数ヶ月', note: '定期通院が必要', good: true },
                    drug: { val: '4〜36時間', note: '一時的', good: false },
                    other: { val: '数週間〜数ヶ月', note: '機器による', good: false },
                  },
                  {
                    item: '収益性',
                    rejemax: { val: '◎', note: '高単価・高リピート', good: true },
                    clinic: { val: '○', note: '保険外診療', good: true },
                    drug: { val: '✕', note: '販売のみ', good: false },
                    other: { val: '△', note: '差別化困難', good: false },
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-bold text-gray-900 border-b border-gray-100 text-xs">{row.item}</td>
                    <td className="py-3 px-4 text-center border-b border-gray-100 bg-yellow-50">
                      <p className={`font-bold text-sm ${row.rejemax.good ? 'text-green-600' : 'text-red-500'}`}>{row.rejemax.val}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{row.rejemax.note}</p>
                    </td>
                    <td className="py-3 px-4 text-center border-b border-gray-100">
                      <p className={`font-bold text-sm ${row.clinic.good ? 'text-green-600' : 'text-red-500'}`}>{row.clinic.val}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{row.clinic.note}</p>
                    </td>
                    <td className="py-3 px-4 text-center border-b border-gray-100">
                      <p className={`font-bold text-sm ${row.drug.good ? 'text-green-600' : 'text-red-500'}`}>{row.drug.val}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{row.drug.note}</p>
                    </td>
                    <td className="py-3 px-4 text-center border-b border-gray-100">
                      <p className={`font-bold text-sm ${row.other.good ? 'text-green-600' : 'text-red-500'}`}>{row.other.val}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{row.other.note}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 収支シミュレーション */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">収益シミュレーション</div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">収支シミュレーション</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-300">導入後の収益モデルをシミュレーション</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 月5名モデル */}
            <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-block bg-gray-700 text-gray-300 px-4 py-1 rounded-full text-xs font-bold mb-2">スモールスタート</div>
                <h3 className="text-xl font-bold text-white">月5名モデル</h3>
                <p className="text-gray-400 text-xs mt-1">副業・兼業での導入に最適</p>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { label: '月間施術人数', value: '5名', sub: '（5回コース）', highlight: false, positive: false },
                  { label: '1人あたり単価', value: '¥100,000', sub: '', highlight: false, positive: false },
                  { label: '月間売上', value: '¥500,000', sub: '', highlight: true, positive: false },
                  { label: '機器リース費用', value: '▲¥50,000', sub: '/月', highlight: false, positive: false },
                  { label: '消耗品・経費', value: '▲¥30,000', sub: '/月', highlight: false, positive: false },
                  { label: '月間純利益', value: '¥420,000', sub: '', highlight: true, positive: true },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between items-center py-2.5 border-b border-gray-700 ${row.highlight ? 'bg-gray-700/50 rounded-lg px-3' : ''}`}>
                    <span className="text-gray-300 text-xs">{row.label}<span className="text-gray-500 text-xs ml-1">{row.sub}</span></span>
                    <span className={`font-bold text-base ${row.positive ? 'text-yellow-400' : row.highlight ? 'text-white' : 'text-gray-200'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-700/50 rounded-xl p-3">
                <p className="text-gray-400 text-xs text-center mb-2">月間収益推移（導入後6ヶ月）</p>
                <div className="flex items-end justify-around h-16 gap-1">
                  {[30, 50, 65, 75, 85, 100].map((h, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div className="w-full bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t-sm" style={{ height: `${h * 0.56}px` }}></div>
                      <span className="text-gray-500 text-xs mt-1">{i + 1}月</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 月30名モデル */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
              <div className="text-center mb-6 relative z-10">
                <div className="inline-block bg-gray-900 text-yellow-400 px-4 py-1 rounded-full text-xs font-bold mb-2">本格運営モデル</div>
                <h3 className="text-xl font-bold text-gray-900">月30名モデル</h3>
                <p className="text-gray-800 text-xs mt-1">専門サロンとして本格展開</p>
              </div>
              <div className="space-y-3 mb-6 relative z-10">
                {[
                  { label: '月間施術人数', value: '30名', sub: '（5回コース）', highlight: false, positive: false },
                  { label: '1人あたり単価', value: '¥100,000', sub: '', highlight: false, positive: false },
                  { label: '月間売上', value: '¥3,000,000', sub: '', highlight: true, positive: false },
                  { label: '機器リース費用', value: '▲¥100,000', sub: '/月', highlight: false, positive: false },
                  { label: '人件費・経費', value: '▲¥500,000', sub: '/月', highlight: false, positive: false },
                  { label: '月間純利益', value: '¥2,400,000', sub: '', highlight: true, positive: true },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between items-center py-2.5 border-b border-yellow-300/50 ${row.highlight ? 'bg-black/10 rounded-lg px-3' : ''}`}>
                    <span className="text-gray-900 text-xs font-medium">{row.label}<span className="text-gray-700 text-xs ml-1">{row.sub}</span></span>
                    <span className={`font-bold text-base ${row.positive ? 'text-gray-900 text-xl' : 'text-gray-900'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-black/10 rounded-xl p-3 relative z-10">
                <p className="text-gray-800 text-xs text-center mb-2">月間収益推移（導入後6ヶ月）</p>
                <div className="flex items-end justify-around h-16 gap-1">
                  {[25, 45, 60, 75, 88, 100].map((h, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div className="w-full bg-gray-900 rounded-t-sm opacity-70" style={{ height: `${h * 0.56}px` }}></div>
                      <span className="text-gray-800 text-xs mt-1">{i + 1}月</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
            <p className="text-gray-300 text-xs">
              <i className="ri-information-line text-yellow-400 mr-2"></i>
              上記はシミュレーションです。実際の収益は導入環境・運営方法により異なります。詳細は個別にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 導入実績と条件 */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">導入実績</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">全国60店舗以上に導入</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">多様な業態での導入実績</p>
          </div>

          {/* 実績数値 - ハードコードカラー */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 md:mb-14">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-store-2-line text-2xl text-white"></i>
              </div>
              <p className="text-3xl font-bold text-yellow-500 mb-1">60+</p>
              <p className="text-gray-600 font-medium text-xs">導入店舗数</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-user-smile-line text-2xl text-white"></i>
              </div>
              <p className="text-3xl font-bold text-green-500 mb-1">1,000+</p>
              <p className="text-gray-600 font-medium text-xs">施術実績</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-star-fill text-2xl text-white"></i>
              </div>
              <p className="text-3xl font-bold text-orange-500 mb-1">95%</p>
              <p className="text-gray-600 font-medium text-xs">顧客満足度</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-repeat-line text-2xl text-white"></i>
              </div>
              <p className="text-3xl font-bold text-teal-500 mb-1">88%</p>
              <p className="text-gray-600 font-medium text-xs">リピート率</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl mb-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">導入可能な業態</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: 'ri-scissors-line', label: '理容室・床屋' },
                { icon: 'ri-store-2-line', label: 'エステサロン' },
                { icon: 'ri-building-2-line', label: '整骨院・接骨院' },
                { icon: 'ri-hotel-line', label: 'メンズエステ' },
                { icon: 'ri-heart-pulse-line', label: '健康サロン' },
                { icon: 'ri-user-star-line', label: 'パーソナルジム' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-3 flex items-center space-x-3 border border-white/10 hover:border-yellow-400 transition-all duration-300">
                  <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-base text-gray-900`}></i>
                  </div>
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">導入条件</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: 'ri-check-double-line', title: '個室スペースがあること', desc: 'プライバシーを確保できる個室が必要です（最低4畳程度）' },
                { icon: 'ri-check-double-line', title: '研修への参加', desc: '導入前に約1時間の研修を受講いただきます（オンライン可）' },
                { icon: 'ri-check-double-line', title: '契約の締結', desc: '機器使用契約・守秘義務契約を締結いただきます' },
                { icon: 'ri-check-double-line', title: '定期報告', desc: '月次の施術実績報告をお願いしています' },
              ].map((cond, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex items-start space-x-3">
                  <div className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${cond.icon} text-base text-yellow-400`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{cond.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{cond.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 今後の展望 */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">将来ビジョン</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">今後の展望</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">REJEMAX PROが目指す未来</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {[
              { icon: 'ri-map-pin-line', num: '01', title: '全国500店舗展開', desc: '2026年までに全国500店舗への導入を目指します。地方都市への展開も積極的に推進します。' },
              { icon: 'ri-global-line', num: '02', title: 'アジア市場への進出', desc: '韓国・台湾・シンガポールなどアジア主要都市への展開を計画中。グローバルブランドへの成長を目指します。' },
              { icon: 'ri-microscope-line', num: '03', title: '技術のさらなる進化', desc: 'AI制御による個別最適化施術の開発。より精密で効果的な治療プロトコルの確立を進めます。' },
              { icon: 'ri-graduation-cap-line', num: '04', title: '専門家育成プログラム', desc: 'REJEMAX認定施術士制度の創設。高品質な施術を提供できる専門家を全国に育成します。' },
              { icon: 'ri-flask-line', num: '05', title: '研究・エビデンス蓄積', desc: '大学・研究機関との共同研究を推進。科学的エビデンスの蓄積により、さらなる信頼性向上を図ります。' },
              { icon: 'ri-heart-add-line', num: '06', title: '男性健康の総合支援', desc: '男性機能のお悩みだけでなく、男性の総合的な健康支援へと事業を拡大。男性の生活の質向上に貢献します。' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-3 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-400">
                <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-sm md:text-xl text-gray-900`}></i>
                  </div>
                  <span className="text-2xl md:text-4xl font-bold text-gray-400">{item.num}</span>
                </div>
                <h3 className="text-xs md:text-base font-bold text-gray-900 mb-1 md:mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-xs hidden md:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
