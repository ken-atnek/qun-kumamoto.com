/* =======================================
 * 事業内容 サービスメニュー
 * URL:src/components/works/ServiceMenu.tsx
 * Referenced in: /works/page.tsx
 * Created: 2025-04-22
 * Last updated: 2025-04-22
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import styles from '@/styles/components/works/ServiceMenu.module.scss';
import Image from 'next/image';
import ServiceMenuImage01 from '@/assets/images/components/works/ServiceMenu01.webp';
import ServiceMenuImage02 from '@/assets/images/components/works/ServiceMenu02.webp';
import ServiceMenuImage03 from '@/assets/images/components/works/ServiceMenu03.webp';
import ServiceMenuImage04 from '@/assets/images/components/works/ServiceMenu04.webp';
import ServiceMenuImage05 from '@/assets/images/components/works/ServiceMenu05.webp';
import ServiceMenuImage06 from '@/assets/images/components/works/ServiceMenu06.webp';

const ServiceMenu = () => {
  const { ref, isVisible } = useScrollTrigger<HTMLDivElement>();
  return (
    <section
      className={`${styles.ServiceMenu} ${styles.slideIn} ${
        isVisible ? styles['is-active'] : ''
      }`}
      ref={ref}
    >
      <h2>サービスメニュー</h2>
      <span className={styles.h2Sidebar}>service menu</span>
      <ul>
        <li>
          <div className={styles.wrapImage}>
            <Image
              src={ServiceMenuImage01}
              alt="個別配送便"
              className={styles.itemImage}
            />
          </div>
          <h3>個別配送便</h3>
          <p>
            個別配送便
            様々なお客様から集荷した商品を、ルート別に仕分けして特定のお届け先に配送します。
          </p>
        </li>
        <li>
          <div className={styles.wrapImage}>
            <Image
              src={ServiceMenuImage02}
              alt="チャーター便"
              className={styles.itemImage}
            />
          </div>
          <h3>チャーター便</h3>
          <p>
            早朝から深夜まで、全国へ輸送対応いたします。
            <br />
            終日トラックを貸切りたい場合は、チャーター便がおススメです。
          </p>
        </li>
        <li>
          <div className={styles.wrapImage}>
            <Image
              src={ServiceMenuImage03}
              alt="スポット便"
              className={styles.itemImage}
            />
          </div>
          <h3>スポット便</h3>
          <p>
            短期間だけの輸送にもご対応します。また、緊急の依頼にも迅速に対応できます。トラックが見つからないというときはぜひ相談ください。
          </p>
        </li>
        <li>
          <div className={styles.wrapImage}>
            <Image
              src={ServiceMenuImage04}
              alt="個別配送便"
              className={styles.itemImage}
            />
          </div>
          <h3>倉庫保管サービス</h3>
          <p>
            入手作業から倉庫保管を行います。様々な荷物の保管実績があり、多様な荷姿の商品の対応が可能です。
          </p>
        </li>
      </ul>
      <article>
        <div>
          <h3>＜九州運輸の高品質輸送＞</h3>
          <Image
            src={ServiceMenuImage05}
            alt="九州運輸の高品質輸送"
            className={styles.itemImage}
          />
        </div>
        <div>
          <h3>＜輸送可能商材(例)＞</h3>
          <Image
            src={ServiceMenuImage06}
            alt="輸送可能商材(例)"
            className={styles.itemImage}
          />
          <p>
            ※ご紹介の商材は一部になります。
            <br />
            その他、お気軽にご相談ください。
          </p>
        </div>
      </article>
    </section>
  );
};
export default ServiceMenu;
