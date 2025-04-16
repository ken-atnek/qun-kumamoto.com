/* =======================================
 * RECRUITページ
 * URL: /app/recruit/page.tsx
 * Created: 2025-04-14
 * Last updated: 2025-04-16
 * ======================================= */

import MovePageTop from '@/components/common/MovePageTop';
import PageTitle from '@/components/common/PageTitle';
import RecruitContentsDetails from '@/components/recruit/RecruitContentsDetails';
import RecruitContentsHead from '@/components/recruit/RecruitContentsHead';

export default function Recruit() {
  return (
    <main>
      <PageTitle breadcrumb="Recruit" titleEn="Recruit" titleJp="採用情報" />
      <RecruitContentsHead />
      <RecruitContentsDetails />
      <MovePageTop backgroundColor="#f0f0f0" />
    </main>
  );
}
