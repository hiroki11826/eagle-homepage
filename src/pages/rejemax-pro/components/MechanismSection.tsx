export default function MechanismSection() {
  return (
    <>
      {/* REJEMAX PROの誕生 */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-14">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">革新的ソリューション</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">REJEMAX PROの誕生</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">医療技術を応用した、根本からの男性機能のお悩み改善</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-10 mb-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-4">医療技術から着想で<br />実現した革新</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">REJEMAX PROは、医療分野でも注目されている技術から着想。<br className="md:hidden" />血流環境と反応力にアプローチした男性向けの革新的ケア機器です。</p>
                <div className="space-y-3">
                  {[
                    { title: '医療分野でも注目されている技術に着想を得たケアマシ', desc: '整形外科や循環器科で実績のある技術を転用' },
                    { title: '男性向け専用設計', desc: '海綿体の構造に最適化された照射パターン' },
                    { title: '高い満足度と実績', desc: '全国60店舗以上で導入、多数の改善報告' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-base text-white"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-0.5">{item.title}</h4>
                        <p className="text-gray-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-flashlight-line text-4xl text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">空気圧振動波技術</h4>
                  <p className="text-gray-500 text-xs">Low-Intensity Extracorporeal Shock Wave Therapy</p>
                </div>
                <div className="space-y-2.5 text-sm">
                  {[
                    { title: '血流改善サポート', desc: '新しい血管を生成し血流を改善' },
                    { title: '内側のコンディションへの働きかけ', desc: '末梢神経の修復をサポート' },
                    { title: 'パフォーマンスを最大限に引き出すケア', desc: '血管拡張機能を強化' },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3">
                      <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: 'ri-shield-check-line', title: '安全性', desc: '医療分野でも活用されている技術をもとにしたケア。身体への負担に配慮した設計です。' },
              { icon: 'ri-time-line', title: '短時間施術', desc: '1回約20分の施術で、忙しい方でも通いやすい' },
              { icon: 'ri-leaf-line', title: '薬不要', desc: '薬に頼らず、本来のコンディションへ' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-md text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* なぜED薬では根本解決しないのか */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">なぜ男性機能のお悩み薬では根本解決しないのか?</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">メカニズムを理解すれば、答えは明確です</p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 text-center">勃起のメカニズム</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: '1', title: '性的刺激', desc: '視覚・触覚などの刺激が脳に伝わる' },
                { num: '2', title: '神経伝達', desc: '脳から陰茎への信号が伝達される' },
                { num: '3', title: '血管拡張', desc: '海綿体の血管が拡張し、血液が流入' },
                { num: '4', title: '勃起', desc: '海綿体が血液で満たされ、硬く膨張' },
              ].map((step, i) => (
                <div key={i} className="flex items-start space-x-4 bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-5">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1.5">{step.title}</h4>
                    <p className="text-gray-700 text-sm leading-7">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 従来治療との比較表 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-6 text-center">従来治療との徹底比較</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-gray-700">
                    <th className="py-3 px-4 text-left text-gray-400 font-bold text-sm">比較項目</th>
                    <th className="py-3 px-4 text-center">
                      <div className="bg-red-500/20 rounded-lg p-2">
                        <i className="ri-capsule-line text-2xl text-red-400 mb-1 block"></i>
                        <p className="text-white font-bold text-sm">男性機能のお悩み薬</p>
                        <p className="text-gray-400 text-xs">バイアグラ等</p>
                      </div>
                    </th>
                    <th className="py-3 px-4 text-center">
                      <div className="bg-yellow-400/20 rounded-lg p-2">
                        <i className="ri-flashlight-line text-2xl text-yellow-400 mb-1 block"></i>
                        <p className="text-white font-bold text-sm">REJEMAX PRO</p>
                        <p className="text-gray-400 text-xs">空気圧振動波</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { item: '根本改善', bad: '一時的な対症療法', good: '血流環境と反応力にアプローチ', badIcon: 'ri-close-circle-fill', goodIcon: 'ri-check-double-line' },
                    { item: '効果の持続性', bad: '4〜36時間のみ', good: '数ヶ月〜半年以上', badIcon: 'ri-time-line', goodIcon: 'ri-infinity-line' },
                    { item: '副作用', bad: '頭痛・ほてり・動悸', good: 'ほとんどなし', badIcon: 'ri-alert-line', goodIcon: 'ri-shield-check-line' },
                    { item: '依存性', bad: '継続的な服用が必要', good: '薬に頼らない', badIcon: 'ri-loop-right-line', goodIcon: 'ri-check-line' },
                    { item: '自然な改善', bad: '化学的作用', good: '自然治癒力を活用', badIcon: 'ri-flask-line', goodIcon: 'ri-leaf-line' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-700">
                      <td className="py-3 px-4 text-white font-semibold text-xs md:text-sm">{row.item}</td>
                      <td className="py-3 px-4 text-center">
                        <i className={`${row.badIcon} text-2xl text-red-500`}></i>
                        <p className="text-gray-400 text-xs mt-1">{row.bad}</p>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <i className={`${row.goodIcon} text-2xl text-green-400`}></i>
                        <p className="text-gray-400 text-xs mt-1">{row.good}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-yellow-400/20 border-2 border-yellow-400 rounded-xl p-5 text-center">
              <h4 className="text-white font-bold text-base mb-2"><i className="ri-lightbulb-flash-line text-yellow-400 mr-2"></i>結論</h4>
              <p className="text-white text-sm md:text-base leading-relaxed">男性機能のお悩み薬は「その場しのぎ」の対症療法。<br className="md:hidden" />REJEMAX PROは本来のパフォーマンス引き出したい方に。<br className="md:hidden" /><strong className="text-yellow-400">本当の解決を求めるなら、選択は明確です。</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* 低出力衝撃波のメカニズム */}
      <section id="mechanism" className="py-10 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-14">
            <div className="inline-block bg-yellow-400 text-black px-5 py-1.5 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">医療技術応用</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">空気圧振動波のメカニズム</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">医療分野でも活用されている技術をもとにした男性コンディショニング<br className="md:hidden" />男性機能のお悩みの根本原因に直接アプローチ</p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 text-center">線形衝撃波療法(REJEMAX)とは</h3>
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <img alt="衝撃波男性機能のお悩みケアのイメージ" className="w-full h-auto rounded-xl shadow-lg" src="https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-05/section-05-main.png" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">空気圧振動波で血流環境と反応力にアプローチし、血流環境と反応力を改善する画期的なケア法です。</p>
                <p className="text-gray-700 text-sm leading-relaxed">空気圧振動波を与えることで、滞りがちな血流環境を改善し、コンディションを整え、本来のパフォーマンスを最大限に引き出します。</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 text-center">施術前後の血管変化</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <div className="text-center">
                  <img alt="施術前" className="w-40 h-auto mx-auto rounded-lg shadow" src="https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-05/section-05-therapy-before.png" />
                  <p className="mt-2 font-semibold text-gray-700 text-sm">施術前</p>
                </div>
                <div className="flex items-center justify-center">
                  <img alt="→" className="w-12 h-auto" src="https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-05/section-05-therapy-arrow.png" />
                </div>
                <div className="text-center">
                  <img alt="施術後" className="w-40 h-auto mx-auto rounded-lg shadow" src="https://rejemax-pro.com/wp-content/themes/linkjapan/assets/images/section-05/section-05-therapy-after.png" />
                  <p className="mt-2 font-semibold text-gray-700 text-sm">施術後</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4ステップ - 完全ハードコード */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl mb-12">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center">4つのステップで根本改善</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* STEP 1 - 黄色 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 shadow-xl h-full">
                  <div className="absolute -top-4 -left-4 w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-400">1</span>
                  </div>
                  <div className="mt-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-flashlight-line text-3xl text-yellow-600"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">振動波照射</h4>
                    <p className="text-gray-900 text-sm text-center leading-relaxed">空気の圧力を利用した振動波を男性器に照射。痛みはほとんどなく、安全に施術できます。</p>
                  </div>
                </div>
              </div>

              {/* STEP 2 - 赤 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-red-400 to-red-500 rounded-2xl p-6 shadow-xl h-full">
                  <div className="absolute -top-4 -left-4 w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-400">2</span>
                  </div>
                  <div className="mt-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-heart-pulse-line text-3xl text-red-600"></i>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 text-center">血管新生</h4>
                    <p className="text-white text-sm text-center leading-relaxed">振動波が血流環境と反応力を改善し、本来のパフォーマンスを引き出します。</p>
                  </div>
                </div>
              </div>

              {/* STEP 3 - 青 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl p-6 shadow-xl h-full">
                  <div className="absolute -top-4 -left-4 w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-sky-400">3</span>
                  </div>
                  <div className="mt-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-water-flash-line text-3xl text-sky-600"></i>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 text-center">血流改善</h4>
                    <p className="text-white text-sm text-center leading-relaxed">新しい血管により血流が大幅に改善。必要な部分へスムーズな流れをサポートします。</p>
                  </div>
                </div>
              </div>

              {/* STEP 4 - 緑 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-6 shadow-xl h-full">
                  <div className="absolute -top-4 -left-4 w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-400">4</span>
                  </div>
                  <div className="mt-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-emotion-happy-line text-3xl text-green-600"></i>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 text-center">勃起機能回復</h4>
                    <p className="text-white text-sm text-center leading-relaxed">血流改善によりパフォーマンスが整い、ハリ感・持続力を引き出します。</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 医療行為ではない */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-line text-4xl text-green-600"></i>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">医療行為ではありません</h3>
                <p className="text-white text-sm md:text-base leading-relaxed mb-3">医師免許は不要。<br className="md:hidden" />整骨院やエステサロンでも導入可能です。</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {['✓ 研修1時間で習得', '✓ 高度な技術不要', '✓ 誰でも同じ効果'].map((t, i) => (
                    <div key={i} className="bg-white/20 rounded-full px-4 py-1.5">
                      <span className="text-white font-semibold text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
