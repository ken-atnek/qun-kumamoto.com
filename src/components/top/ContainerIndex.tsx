/* =======================================
 * TOP INDEX
 * URL: /components/top/ContainerIndex.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-04-15
 * Last updated: 2025-04-23
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import styles from '@/styles/components/top/ContainerIndex.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import imageWork from '@/assets/images/components/top/containerIndex/item-work.webp';
import imageCompany from '@/assets/images/components/top/containerIndex/item-company.webp';
import imageVariation from '@/assets/images/components/top/containerIndex/item-variation.webp';

const ContainerIndex = () => {
  const { ref, isVisible } = useScrollTrigger<HTMLDivElement>();
  return (
    <section className={styles.containerIndex}>
      <article>
        <div
          className={`${styles.blockContentsHead} ${styles.slideIn} ${
            isVisible ? styles['is-active'] : ''
          }`}
          ref={ref}
        >
          <div className={styles.boxText}>
            <div className={styles.wrapText}>
              <p>
                地域密着と地域貢献を
                <br />
                コンセプトに
                <br />
                高品質輸送を展開
              </p>
            </div>
            <h2>
              <span>works</span>事業内容
            </h2>
            <Link href="#" className={styles.itemLink}>
              詳しく観る
            </Link>
          </div>
          <div className={styles.wrapImage}>
            <Image
              src={imageWork}
              alt="事業内容"
              className={styles.itemImage}
              fill
            />
          </div>
        </div>
        <div
          className={`${styles.blockContents} ${styles.blockCompany} ${
            styles.slideIn
          } ${isVisible ? styles['is-active'] : ''}`}
          ref={ref}
        >
          <div className={styles.wrapImage}>
            <Image
              src={imageCompany}
              alt="会社概要"
              className={styles.itemImage}
              fill
            />
          </div>
          <div className={styles.boxText}>
            <h2>
              <span>Company</span>会社概要
            </h2>
            <p>
              創業45年の信頼・安心・真心・誠実で新時代の物流業を目指します。
            </p>
            <Link href="/company/" className={styles.itemLink}>
              詳しく観る
            </Link>
          </div>
        </div>
        <div
          className={`${styles.blockContents} ${styles.blockVariation} ${
            styles.slideIn
          } ${isVisible ? styles['is-active'] : ''}`}
        >
          <div className={styles.boxText}>
            <h2>
              <span>variation</span>保有車両
            </h2>
            <Link href="/works/#CarVariation" className={styles.itemLink}>
              詳しく観る
            </Link>
          </div>
          <div className={styles.wrapImage}>
            <Image
              src={imageVariation}
              alt="保有車両"
              className={styles.itemImage}
              fill
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ContainerIndex;
