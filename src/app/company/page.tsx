/* =======================================
 * 会社概要ページ
 * URL: /company/page.tsx
 * Created: 2025-04-17
 * Last updated: 2025-04-17
 * ======================================= */
import ContainerSdgs from '@/components/common/ContainerSdgs';
import MovePageTop from '@/components/common/MovePageTop';
import PageTitle from '@/components/common/PageTitle';
import Link from 'next/link';
import styles from '@/styles/Company.module.scss';
import CompanyDetails from '@/components/company/CompanyDetails';
// import GreetingMessage from '@/components/company/GreetingMessage';

export default function Recruit() {
  return (
    <main>
      <PageTitle breadcrumb="company" titleEn="Company" titleJp="会社概要" />
      {/* <GreetingMessage /> */}
      <nav className={styles.navList}>
        <Link href="#ContainerSdgs" className={styles.itemLink}>
          我が社とSDGs
        </Link>
        <Link href="#ContainerDetails" className={styles.itemLink}>
          会社概要
        </Link>
        <Link href="#ContainerMap" className={styles.itemLink}>
          事務所マップ
        </Link>
      </nav>
      <ContainerSdgs title="我が社のSDGs" />
      <CompanyDetails />
      <MovePageTop />
    </main>
  );
}
