/* =======================================
 * TOP INDEX
 * URL: /components/common/ContainerSdgs.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-04-15
 * Last updated: 2025-04-17
 * ======================================= */

import styles from '@/styles/components/common/ContainerSdgs.module.scss';
import Image from 'next/image';
import SdgsLogo from '@/assets/images/components/sdgs/sdgs_logo.webp';
import Sdgs01 from '@/assets/images/components/sdgs/sdg_icon_01.webp';
import Sdgs02 from '@/assets/images/components/sdgs/sdg_icon_02.webp';
import Sdgs03 from '@/assets/images/components/sdgs/sdg_icon_03.webp';
import Sdgs04 from '@/assets/images/components/sdgs/sdg_icon_04.webp';
import Sdgs05 from '@/assets/images/components/sdgs/sdg_icon_05.webp';

type Props = {
  title: string;
};

const ContainerSdgs = ({ title }: Props) => {
  return (
    <section className={styles.containerSdgs} id="ContainerSdgs">
      <h2>{title}</h2>
      <div className={styles.itemLogo}>
        <Image src={SdgsLogo} alt="九州運輸のSDGs" />
      </div>
      <ul>
        <li>
          <Image src={Sdgs01} alt="九州運輸のSDGs01" />
        </li>
        <li>
          <Image src={Sdgs02} alt="九州運輸のSDGs01" />
        </li>
        <li>
          <Image src={Sdgs03} alt="九州運輸のSDGs01" />
        </li>
        <li>
          <Image src={Sdgs04} alt="九州運輸のSDGs01" />
        </li>
        <li>
          <Image src={Sdgs05} alt="九州運輸のSDGs01" />
        </li>
      </ul>
    </section>
  );
};

export default ContainerSdgs;
