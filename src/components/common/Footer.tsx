/* =======================================
 * FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-04-14
 * Last updated: 2025-04-17
 * ======================================= */

import Link from 'next/link';
import Image from 'next/image';
import itemLogo from '@/assets/images/common/kyu-syu-unyu_logo-w.webp';
import LinkKamenoko from '@/assets/images/common/link-camenoko.webp';
import LinkOkaInari from '@/assets/images/common/link-oka-inari.webp';
import styles from '@/styles/components/common/Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <section className={styles.containerFooterHead}>
        <article>
          <div className={styles.boxContents}>
            <h2>ご相談・お問い合せ</h2>
            <a href="tel:0968383515">0968-38-3515</a>
            <Image src={itemLogo} alt="株式会社九州運輸" />
            <address>
              <span>〒861-1214</span>熊本県菊池市泗水町田島2724-1
            </address>
          </div>
          <nav className={styles.navTop}>
            <Link href="#" className={`${styles.itemLink} ${styles.form}`}>
              <span>お問い合せフォームはこちら</span>
            </Link>
            <Link
              href="/company/#ContainerMap"
              className={`${styles.itemLink} ${styles.access}`}
            >
              <span>アクセスはこちら</span>
            </Link>
          </nav>
          <nav className={styles.navBottom}>
            <Link href="/" className={styles.itemLink}>
              トップ
            </Link>
            <Link href="#" className={styles.itemLink}>
              事業内容
            </Link>
            <Link href="/company/" className={styles.itemLink}>
              会社概要
            </Link>
            <Link href="/recruit/" className={styles.itemLink}>
              採用情報
            </Link>
          </nav>
        </article>
      </section>
      <section className={styles.containerFooterFoot}>
        <article>
          <nav>
            <a href="https://kamenokouonsen-kumamoto.com/" target="_blank">
              <Image
                src={LinkKamenoko}
                alt="亀の甲温泉"
                className={styles.LinkImage}
              />
            </a>
            <a
              href="https://kamenokouonsen-kumamoto.com/oka-inari-shrine.html"
              target="_blank"
            >
              <Image
                src={LinkOkaInari}
                alt="岡稲荷大明神"
                className={styles.LinkImage}
              />
            </a>
          </nav>
          <div className={styles.copyright}>
            Copyright 九州運輸. All Rights Reserved.
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
