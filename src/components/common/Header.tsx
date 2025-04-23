/* =======================================
 * HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-04-14
 * Last updated: 2025-04-17
 * ======================================= */
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/common/Header.module.scss';

import ImageLogo from '@/assets/images/common/kyu-syu-unyu_logo.webp';
const Header = () => {
  return (
    <header className={styles.containerHeader} id="ContainerHeader">
      <article>
        <Link href="#" className={styles.boxLogo}>
          <Image
            src={ImageLogo}
            alt="株式会社九州運輸"
            className={styles.itemLogo}
          />
        </Link>
        <nav>
          <Link href="/" className={styles.itemLink}>
            <span>top</span>トップ
          </Link>
          <Link href="/works/" className={styles.itemLink}>
            <span>works</span>事業内容
          </Link>
          <Link href="/company/" className={styles.itemLink}>
            <span>company</span>会社概要
          </Link>
          <Link href="/recruit/" className={styles.itemLink}>
            <span>recruit</span>採用情報
          </Link>
          <Link href="/contact/" className={styles.itemLinkForm}>
            <span>Contact us</span>ご依頼・お問い合せ
          </Link>
        </nav>
      </article>
    </header>
  );
};

export default Header;
