/* =======================================
 * 会社概要 社長挨拶
 * URL:src/components/company/GreetingMessage.tsx
 * Referenced in: /company/page.tsx
 * Created: 2025-04-28
 * Last updated: 2025-04-28
 * ======================================= */

import styles from '@/styles/components/company/GreetingMessage.module.scss';
const GreetingMessage = () => {
  return (
    <section className={styles.containerGreetingMessage}>
      <article>
        <h3>社長挨拶</h3>
        <p>
          熊本県の物流市場は、半導体関連企業の集積に伴い、輸送需要の増加が見込まれています。
          <br />
          物流企業が県内に倉庫や営業所を設ける動きが広がっており、県も物流網の整備に力を入れています。
          <br />
          <br />
          当社では、物流業におけるDXに今後積極的に取り組み、業務効率化とともに熊本から未来への旬を届ける物流業への変革を遂げるべく邁進いたします。
          <br />
          今後より一層のご愛顧のほどよろしくお願い申し上げます。
          <span>
            代表取締役社長<em>渡邉 直美</em>
          </span>
        </p>
      </article>
    </section>
  );
};
export default GreetingMessage;
