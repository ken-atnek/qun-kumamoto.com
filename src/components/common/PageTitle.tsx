/* =======================================
 * ページタイトル
 * URL: /components/common/PageTitle.tsx
 * Created: 2025-04-16
 * Last updated: 2025-04-23
 * ======================================= */
'use client';
import styles from '@/styles/components/common/PageTitle.module.scss';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

type PageTitleProps = {
  breadcrumb: string;
  titleEn: string;
  titleJp: string;
};

const PageTitle = ({ breadcrumb, titleEn, titleJp }: PageTitleProps) => {
  const { ref, isVisible } = useScrollTrigger();
  return (
    <>
      <section className={styles.blockBreadcrumb}>
        <div>
          TOP<span>{breadcrumb}</span>
        </div>
      </section>
      <section className={styles.blockTitle} ref={ref}>
        <article>
          <div
            className={`${styles.boxTitle} ${
              isVisible ? styles['is-active'] : ''
            }`}
          >
            <h2>{titleEn}</h2>
            <span>{titleJp}</span>
          </div>
        </article>
      </section>
    </>
  );
};

export default PageTitle;
