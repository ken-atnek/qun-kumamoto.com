/* =======================================
 * ページタイトル
 * URL: /components/common/PageTitle.tsx
 * Created: 2025-04-16
 * Last updated: 2025-04-16
 * ======================================= */

import styles from '@/styles/components/common/PageTitle.module.scss';

type PageTitleProps = {
  breadcrumb: string;
  titleEn: string;
  titleJp: string;
};

const PageTitle = ({ breadcrumb, titleEn, titleJp }: PageTitleProps) => {
  return (
    <>
      <section className={styles.blockBreadcrumb}>
        <div>
          TOP<span>{breadcrumb}</span>
        </div>
      </section>
      <section className={styles.blockTitle}>
        <article>
          <div className={styles.boxTitle}>
            <h2>{titleEn}</h2>
            <span>{titleJp}</span>
          </div>
        </article>
      </section>
    </>
  );
};

export default PageTitle;
