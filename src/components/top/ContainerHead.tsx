/* =======================================
 * TOP HEADイメージ
 * URL: src/components/top/ContainerHead.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-04-28
 * Last updated: 2025-04-28
 * ======================================= */

'use client';
import slide01 from '@/assets/images/components/top/containerSlide/slide01.webp';
import Image from 'next/image';
import styles from '@/styles/components/top/ContainerHead.module.scss';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

const ContainerHead = () => {
  const { ref, isVisible } = useScrollTrigger();
  return (
    <section
      className={`${styles.containerHead} ${styles.slideIn} ${
        isVisible ? styles['is-active'] : ''
      }`}
      ref={ref}
    >
      <Image
        src={slide01}
        alt="熊本の心と旬を運ぶ"
        className={styles.itemSlideImage}
      />
      <article>
        <p
          className={`${styles.slideIn} ${
            isVisible ? styles['is-active'] : ''
          }`}
        >
          物流を通し<i>人</i>と<i>人</i>との懸け橋に。熊本と全国を<i>結ぶ</i>。
          <br />
          それが私たち <em>九州運輸</em>。
        </p>
      </article>
    </section>
  );
};

export default ContainerHead;
