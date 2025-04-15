/* =======================================
 * TOP RECRUIT
 * URL: components/top/ContainerRecruit.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-04-15
 * Last updated: 2025-04-15
 * ======================================= */

import Link from 'next/link';
import styles from '@/styles/components/top/ContainerRecruit.module.scss';

const ContainerRecruit = () => {
  return (
    <section className={styles.containerRecruit}>
      <article>
        <div className={styles.boxContents}>
          <h2>
            <span>recruit</span>採用情報
          </h2>
          <p className={styles.h2Sidebar}>
            熊本の旬を運ぶ。届け繋ぐ喜び。
            <br />
            そんな物流の仕事を一緒にしませんか？
          </p>
          <span>・未経験者大歓迎！</span>
          <span>・普通免許の方でもＯＫ！</span>
          <span>・働きながら免許取得可能 ※</span>
          <span>免許取得費用は当社全額負</span>
          <Link href="#" className={styles.itemLink}>
            詳しく観る
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ContainerRecruit;
