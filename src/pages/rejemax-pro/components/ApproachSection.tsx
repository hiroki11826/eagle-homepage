export default function ApproachSection() {
  return (
    <>
      {/* 3つの革新的アプローチ */}
      <section id="approach" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">他社が真似できない</div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">3つの革新的アプローチ</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">医療技術から着想を得た空気圧振動波が、男性機能に多角的にアプローチ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* アプローチ1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-pulse-line text-5xl text-yellow-500"></i>
                </div>
                <div className="inline-block bg-black/20 text-white px-4 py-1 rounded-full text-xs font-bold mb-3">APPROACH 01</div>
                <h3 className="text-2xl font-bold text-gray-900">血流改善</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-center mb-6 font-semibold">根本原因へ直接アプローチ</p>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                    <p className="text-gray-800 font-semibold mb-1">血流改善サポート</p>
                    <p className="text-gray-600 text-sm leading-relaxed">やさしい刺激により、デリケートゾーンの血流環境にアプローチし、コンデイションを整えるケアです。硬さ・持続力のあるコンディションを目指します。</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                    <p className="text-gray-800 font-semibold mb-1">血管拡張機能の向上</p>
                    <p className="text-gray-600 text-sm leading-relaxed">血管の柔軟性が回復し、血液の流れがスムーズに</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                    <p className="text-gray-800 font-semibold mb-1">海綿体への血液供給増加</p>
                    <p className="text-gray-600 text-sm leading-relaxed">勃起に必要な血液量が確保され、硬さが向上</p>
                  </div>
                </div>
              </div>
            </div>

            {/* アプローチ2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-brain-line text-5xl text-gray-900"></i>
                </div>
                <div className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-1 rounded-full text-xs font-bold mb-3">APPROACH 02</div>
                <h3 className="text-2xl font-bold text-white">内側のコンディションへの働きかけ</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-center mb-6 font-semibold">神経の修復と再生を促進</p>
                <div className="space-y-4">
                  <div className="bg-gray-50 border-l-4 border-gray-800 rounded-r-lg p-4">
                    <p className="text-gray-800 font-semibold mb-1">末梢神経の修復促進</p>
                    <p className="text-gray-600 text-sm leading-relaxed">衝撃波が神経の再生をサポートし、感度が向上</p>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-gray-800 rounded-r-lg p-4">
                    <p className="text-gray-800 font-semibold mb-1">神経伝達の改善</p>
                    <p className="text-gray-600 text-sm leading-relaxed">空気圧振動波は血流だけでなく、多角的にもアプローチ可能です。糖尿病などの要因によるコンディションの乱れにアプローチします。</p>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-gray-800 rounded-r-lg p-4">
                    <p className="text-gray-800 font-semibold mb-1">感度・反応性の向上</p>
                    <p className="text-gray-600 text-sm leading-relaxed">性的刺激への反応が改善され、自然な勃起が促進</p>
                  </div>
                </div>
              </div>
            </div>

            {/* アプローチ3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-capsule-line text-5xl text-yellow-500"></i>
                </div>
                <div className="inline-block bg-black/20 text-white px-4 py-1 rounded-full text-xs font-bold mb-3">APPROACH 03</div>
                <h3 className="text-2xl font-bold text-gray-900">男性機能のお悩み薬の効果向上</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-center mb-6 font-semibold">薬の効きを最大化</p>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                    <p className="text-gray-800 font-semibold mb-1">NO産生促進</p>
                    <p className="text-gray-600 text-sm leading-relaxed">一酸化窒素の生成を促進し血管拡張作用を強化</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                    <p className="text-gray-800 font-semibold mb-1">薬の効きが向上</p>
                    <p className="text-gray-600 text-sm leading-relaxed">男性機能のお悩み薬の効果が高まり、より確実な結果に</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                    <p className="text-gray-800 font-semibold mb-1">薬の使用量削減</p>
                    <p className="text-gray-600 text-sm leading-relaxed">少量でも効果が出るようになり、副作用リスクが低下</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 総合効果 */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">3つのアプローチが生み出す相乗効果</h3>
              <p className="text-gray-300 text-lg">単独でも効果的ですが、3つが組み合わさることで最大の効果を発揮</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'ri-arrow-up-circle-line', title: '硬さやボリューム感のケア', desc: '血流改善により、より力強いパフォーマンスに！' },
                { icon: 'ri-time-line', title: '持続力の改善', desc: '神経機能の回復で、長時間の維持が可能に' },
                { icon: 'ri-emotion-happy-line', title: '自信の回復', desc: '自然な形での機能回復で、精神的な自信も取り戻す' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 text-center border border-white/20">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-3xl text-gray-900`}></i>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 機器スペック */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">製品ラインナップ</div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">REJEMAX PRO 機器スペック</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">用途・スペースに合わせた2タイプをご用意</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* 卓上型 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-gray-900 p-6 text-center">
                <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold mb-3">TYPE A</div>
                <h3 className="text-2xl font-bold text-white">卓上型</h3>
                <p className="text-gray-400 text-sm mt-1">コンパクトで設置しやすい</p>
              </div>
              <div className="p-8">
                <div className="space-y-3">
                  {[
                    { label: '本体サイズ', value: 'W300 × D200 × H250mm' },
                    { label: '重量', value: '約5kg' },
                    { label: '電源', value: 'AC100V 50/60Hz' },
                    { label: '出力周波数', value: '1〜20Hz' },
                    { label: '衝撃波強度', value: '0.09〜0.25mJ/mm²' },
                    { label: '適応部位', value: '男性のデリケートゾーン' },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm font-medium">{spec.label}</span>
                      <span className="text-gray-900 font-semibold text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-yellow-50 rounded-xl p-4">
                  <p className="text-gray-700 text-sm text-center font-medium">
                    <i className="ri-check-line text-yellow-600 mr-2"></i>
                    省スペースで導入しやすく、個室サロンに最適
                  </p>
                </div>
              </div>
            </div>

            {/* タワー型 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-center">
                <div className="inline-block bg-gray-900 text-yellow-400 px-4 py-1 rounded-full text-xs font-bold mb-3">TYPE B</div>
                <h3 className="text-2xl font-bold text-gray-900">タワー型</h3>
                <p className="text-gray-800 text-sm mt-1">プロ仕様の高機能モデル</p>
              </div>
              <div className="p-8">
                <div className="space-y-3">
                  {[
                    { label: '本体サイズ', value: 'W400 × D350 × H1200mm' },
                    { label: '重量', value: '約25kg' },
                    { label: '電源', value: 'AC100V 50/60Hz' },
                    { label: '出力周波数', value: '1〜25Hz' },
                    { label: '衝撃波強度', value: '0.09〜0.35mJ/mm²' },
                    { label: '適応部位', value: '男性のデリケートゾーン・全身対応' },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600 text-sm font-medium">{spec.label}</span>
                      <span className="text-gray-900 font-semibold text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-yellow-50 rounded-xl p-4">
                  <p className="text-gray-700 text-sm text-center font-medium">
                    <i className="ri-star-line text-yellow-600 mr-2"></i>
                    高出力・多機能で、本格的な男性機能のお悩みケアサロンに最適
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 共通特徴 */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">両モデル共通の特徴</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'ri-shield-check-line', title: '安全設計', desc: '過負荷保護・自動停止機能搭載' },
                { icon: 'ri-settings-3-line', title: '簡単操作', desc: 'タッチパネルで直感的に操作' },
                { icon: 'ri-customer-service-2-line', title: '充実サポート', desc: '導入後も専任スタッフがサポート' },
                { icon: 'ri-award-line', title: '品質保証', desc: '1年間のメーカー保証付き' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className={`${item.icon} text-2xl text-yellow-400`}></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
