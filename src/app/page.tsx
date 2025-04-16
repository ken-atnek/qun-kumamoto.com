/* =======================================
 * TOPページ
 * URL: /app/page.tsx
 * Created: 2025-04-14
 * Last updated: 2025-04-14
 * ======================================= */

import ContainerSdgs from '@/components/common/ContainerSdgs';
import ContainerIndex from '@/components/top/ContainerIndex';
import ContainerRecruit from '@/components/top/ContainerRecruit';
import ContainerSlide from '@/components/top/ContainerSlide';

export default function Home() {
  return (
    <main>
      <ContainerSlide />
      <ContainerIndex />
      <ContainerSdgs />
      <ContainerRecruit />
    </main>
  );
}
