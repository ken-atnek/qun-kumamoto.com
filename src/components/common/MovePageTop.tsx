/* =======================================
 * ページトップへ
 * URL: /components/common/MovePageTop.tsx
 * Created: 2025-04-16
 * Last updated: 2025-04-16
 * ======================================= */

import styles from '@/styles/components/common/MovePageTop.module.scss';
import Link from 'next/link';
type MovePageTopProps = {
  backgroundColor?: string;
};
const MovePageTop = ({ backgroundColor }: MovePageTopProps) => {
  return (
    <section
      className={styles.blockPageTop}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div>
        <Link href="#ContainerHeader" className={styles.pageTop}>
          ページトップへ
        </Link>
      </div>
    </section>
  );
};

export default MovePageTop;
