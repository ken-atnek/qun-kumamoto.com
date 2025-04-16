/* =======================================
 * リクルート募集要項
 * URL: /components/recruit/RecruitContentsDetails.tsx
 * Created: 2025-04-16
 * Last updated: 2025-04-16
 * ======================================= */

import styles from '@/styles/components/recruit/RecruitContentsDetails.module.scss';
import Link from 'next/link';

const RecruitContentsDetails = () => {
  return (
    <section className={styles.contentsDetails}>
      <article>
        <h3>募集要項</h3>
        <dl>
          <div>
            <dt>職種</dt>
            <dd>
              <span>①大型長距離乗務員</span>
              <span>②4t九州管内乗務員</span>
              <span>③大型定期便乗務員</span>
              <span>④大型九州管内乗務員</span>
            </dd>
          </div>
          <div>
            <dt>給与</dt>
            <dd>
              <span>①月給300,000～500,000円以上</span>
              <span>②月給230,000～260,000円以上</span>
              <span>③月給370,000円以上</span>
              <span>④月給280,000～350,000円以上</span>
              <p className={styles.notice}>
                ※①②③④一律手当含む 時間 実働8時間程度
                ルートにより異なる　面談の上
              </p>
            </dd>
          </div>
          <div>
            <dt>休日</dt>
            <dd>日曜日、年末年始、夏期休暇、有給休暇有り</dd>
          </div>
          <div>
            <dt>資格</dt>
            <dd>
              <span>①③④要大型免許</span>
              <span>②要中型免許</span>
            </dd>
          </div>
          <div>
            <dt>待遇</dt>
            <dd>
              <span>昇給年1回</span>
              <span>賞与年3回</span>
              <span>各種保険完備</span>
              <span>退職金制度あり</span>
              <span>各種表彰制度あり</span>
            </dd>
          </div>
          <div>
            <dt>応募</dt>
            <dd>
              <p>
                毎日随時、電話後履歴書持参ください
                <a href="tel:0968383515"> (電話：0968-38-3515)</a>
              </p>
            </dd>
          </div>
          <div>
            <dt>事業内容</dt>
            <dd>一般貨物運送業</dd>
          </div>
        </dl>
        <Link href="#" className={styles.itemLink}>
          求人応募はこちら
        </Link>
      </article>
    </section>
  );
};

export default RecruitContentsDetails;
