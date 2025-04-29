/* =======================================
 * TOPページ
 * URL: /app/page.tsx
 * Created: 2025-04-14
 * Last updated: 2025-04-14
 * ======================================= */

import ContainerSdgs from '@/components/common/ContainerSdgs';
import ContainerHead from '@/components/top/ContainerHead';
import ContainerIndex from '@/components/top/ContainerIndex';
import ContainerRecruit from '@/components/top/ContainerRecruit';
// import ContainerSlide from '@/components/top/ContainerSlide';

export default function Home() {
  return (
    <main>
      <ContainerHead />
      {/* <ContainerSlide /> */}
      <ContainerIndex />
      <ContainerSdgs title="九州運輸のSDGs" />
      <ContainerRecruit />
    </main>
  );
}
