/* =======================================
 * 会社概要 コンポーネント
 * URL: /components/CompanyDetails.tsx
 * Created: 2025-04-17
 * Last updated: 2025-04-17
 * ======================================= */

import styles from '@/styles/components/CompanyDetails.module.scss';

const CompanyDetails = () => {
  return (
    <>
      <section className={styles.containerDetails} id="ContainerDetails">
        <h3 className={styles.itemH3}>会社概要</h3>
        <dl>
          <div>
            <dt>会社名</dt>
            <dd>株式会社九州運輸</dd>
          </div>
          <div>
            <dt>住所</dt>
            <dd>
              <address>熊本県菊池市泗水町田島2724-1</address>
            </dd>
          </div>
          <div>
            <dt>TEL</dt>
            <dd>
              <a href="tel:0968383515">0968-38-3515</a>
            </dd>
          </div>
          <div>
            <dt>FAX</dt>
            <dd>
              <a href="tel:0968383715">0968-38-3715</a>
            </dd>
          </div>
          <div>
            <dt>創業</dt>
            <dd>昭和48年3月</dd>
          </div>
          <div>
            <dt>創立</dt>
            <dd>昭和51年5月</dd>
          </div>
          <div>
            <dt>資本金</dt>
            <dd>1,000万円</dd>
          </div>
          <div>
            <dt>従業員数</dt>
            <dd>50名</dd>
          </div>
          <div>
            <dt>取引銀行</dt>
            <dd>
              <span>みずほ銀行熊本支店</span>
              <span>肥後銀行泗水支店</span>
            </dd>
          </div>
          <div>
            <dt>事業内容（許認可）</dt>
            <dd>
              <span>一般貨物自動車運送事業</span>
              <span>自動車運送取扱事業</span>
              <span>倉庫業・産業廃棄物収集運搬事業</span>
            </dd>
          </div>
          <div>
            <dt>施設等</dt>
            <dd>
              <ul>
                <li>
                  <h4>敷地面積</h4>
                  <span>26,400m2</span>
                </li>
                <li>
                  <h4>倉庫</h4>
                  <span>17,000m2</span>
                </li>
                <li>
                  <h4>事務所</h4>
                  <span>170m2</span>
                </li>
              </ul>
            </dd>
          </div>
          <div>
            <dt>車両台数総数</dt>
            <dd>
              <span>45台 トレーラー2台</span>
              <span>10t車25台・4t車13台・2t車5台</span>
            </dd>
          </div>
          <div>
            <dt>関連会社</dt>
            <dd>
              <span>有限会社九州商事</span>
              <span>農業法人 亀の甲ファーム</span>
              <span>亀の甲温泉</span>
            </dd>
          </div>
        </dl>
      </section>
      <section className={styles.containerCreed}>
        <h3 className={styles.itemH3}>経営の信条</h3>
        <article>
          <span>一、事業を通じて社会に奉仕する</span>
          <span>一、人の和をもって事業を興す</span>
          <span>一、丁寧、迅速をモットーにする</span>
          <span>一、従業員の生活安定向上を図る</span>
          <span>一、適正利潤を確保する</span>
          <span>一、安全輸送、無事故、無違反の確立</span>
        </article>
      </section>
      <section className={styles.containerMap} id="ContainerMap">
        <h3 className={styles.itemH3}>事務所マップ</h3>
        <div className={styles.boxMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13393.632593818716!2d130.745871!3d32.940232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540fb97515ea385%3A0x1b47126a47e8c439!2z44CSODYxLTEyMTQg54aK5pys55yM6I-K5rGg5biC5rOX5rC055S655Sw5bO277yS77yX77yS77yU4oiS77yR!5e0!3m2!1sja!2sjp!4v1638198053043!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default CompanyDetails;
