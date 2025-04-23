/* =======================================
 * リクルートコンテンツヘッド
 * URL: /components/recruit/RecruitContentsHead.tsx
 * Created: 2025-04-16
 * Last updated: 2025-04-16
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import styles from '@/styles/components/recruit/RecruitContentsHead.module.scss';
import Image from 'next/image';
import HeadImage from '@/assets/images/components/recruit/2700872_m.webp';
import ScheduleImage01 from '@/assets/images/components/recruit/schedule01.webp';
import ScheduleImage02 from '@/assets/images/components/recruit/schedule02.webp';
import ScheduleImage03 from '@/assets/images/components/recruit/schedule03.webp';
import PointImage01 from '@/assets/images/components/recruit/point01.webp';
import PointImage02 from '@/assets/images/components/recruit/point02.webp';
import WelfareImage01 from '@/assets/images/components/recruit/welfare01.webp';
import WelfareImage02 from '@/assets/images/components/recruit/welfare02.webp';
import WelfareImage03 from '@/assets/images/components/recruit/welfare03.webp';
import WelfareImage04 from '@/assets/images/components/recruit/welfare04.webp';
import WelfareImage05 from '@/assets/images/components/recruit/welfare05.webp';
import WelfareImage06 from '@/assets/images/components/recruit/welfare06.webp';
import WelfareImage07 from '@/assets/images/components/recruit/welfare07.webp';
import WelfareImage08 from '@/assets/images/components/recruit/welfare08.webp';
import WelfareImage09 from '@/assets/images/components/recruit/welfare09.webp';

const RecruitContentsHead = () => {
  const triggerA = useScrollTrigger<HTMLDivElement>();
  const triggerB = useScrollTrigger<HTMLDivElement>();
  const triggerC = useScrollTrigger<HTMLDivElement>();
  return (
    <section className={styles.contentsHead}>
      <p className={styles.catchCopy}>
        熊本の旬を運ぶ。
        <br />
        そして、届け繋ぐ喜び。
        <br />
        そんな物流の仕事を一緒にしませんか？
      </p>
      <div className={styles.boxImage}>
        <Image src={HeadImage} alt="九州運輸の車両" />
      </div>
      <article
        className={`${styles.blockSchedule} ${styles.slideIn} ${
          triggerA.isVisible ? styles['is-active'] : ''
        }`}
        ref={triggerA.ref}
      >
        <h3>1日の業務の流れ</h3>
        <ul>
          <li>
            <h4>■ルート配達業務❶​</h4>
            <span>＜現地での積込の場合１＞</span>
            <div className={styles.itemImage}>
              <Image src={ScheduleImage01} alt="ルート配送業務01" />
            </div>
          </li>
          <li>
            <h4>■ルート配達業務❷​</h4>
            <span>＜現地での積込の場合２＞</span>
            <div className={styles.itemImage}>
              <Image src={ScheduleImage02} alt="ルート配送業務02" />
            </div>
          </li>
          <li>
            <h4>■ルート配達業務❸​</h4>
            <span>＜会社での積込スタートの場合＞</span>
            <div className={styles.itemImage}>
              <Image src={ScheduleImage03} alt="ルート配送業務03" />
            </div>
          </li>
        </ul>
        <p className={styles.notice}>
          ※あくまで参考例です。熊本県内、佐賀・長崎・宮崎・鹿児島など各方面でタイムスケジュールは異なります。​
        </p>
      </article>
      <article
        className={`${styles.blockPoint} ${styles.slideIn} ${
          triggerB.isVisible ? styles['is-active'] : ''
        }`}
        ref={triggerB.ref}
      >
        <ul>
          <li>
            <h3>九州運輸で働く魅力</h3>
            <div className={styles.itemImage}>
              <Image src={PointImage01} alt="九州運輸で働く魅力" />
            </div>
            <p>
              スタッフはみんな明るく、楽しい職場です。会社行事(夏祭り、安全運転研修、社員旅行等)も充実。
              仕事で知らない場所・土地へ行き、自身の見聞を広めることもできるステキな仕事です。
            </p>
          </li>
          <li>
            <h3>未経験者へのサポート</h3>
            <div className={styles.itemImage}>
              <Image src={PointImage02} alt="未経験者へのサポート" />
            </div>
            <p>
              未経験者大歓迎！/ 普通免許の方でもＯＫ！/ 働きながら免許取得可能
              <span>（中型・大型・リフト免許取得制度あり）</span>
              <i>
                免許取得費用は<em>当社全額負担します。</em>
              </i>
            </p>
          </li>
        </ul>
      </article>
      <article
        className={`${styles.blockWelfare} ${styles.slideIn} ${
          triggerC.isVisible ? styles['is-active'] : ''
        }`}
        ref={triggerC.ref}
      >
        <h3>福利厚生</h3>
        <ul>
          <li>
            <div className={styles.itemImage}>
              <Image src={WelfareImage01} alt="社会保障完備" />
            </div>
            <h4>社会保障完備</h4>
            <p>社会保険、厚生年金、雇用保険、有給取得制度等があります。</p>
          </li>
          <li>
            <div className={styles.itemImage}>
              <Image src={WelfareImage02} alt="キャリアアップ制度" />
            </div>
            <h4>キャリアアップ制度</h4>
            <p>大型免許取得・フォークリフト免許取得費用を全額負担します。</p>
          </li>
          <li>
            <div className={styles.itemImage}>
              <Image src={WelfareImage03} alt="充実した研修制度" />
            </div>
            <h4>充実した研修制度</h4>
            <p>
              社員のスキルに応じた必要とされる定期的な社内研修を実施いたします。
            </p>
          </li>
          <li>
            <div className={styles.itemImage}>
              <Image src={WelfareImage04} alt="定期健康診断" />
            </div>
            <h4>定期健康診断</h4>
            <p>
              全運転者に毎年健康診断を受診しており、深夜時間従事者は年２回会社負担で、実施しております。
            </p>
          </li>
          <li>
            <div className={styles.itemImage}>
              <Image src={WelfareImage05} alt="再雇用制度" />
            </div>
            <h4>再雇用制度</h4>
            <p>65歳定年後もご希望をいただければ継続的に雇用いたします。</p>
          </li>
          <li>
            <div className={styles.itemImage}>
              <Image src={WelfareImage06} alt="制服貸与" />
            </div>
            <h4>制服貸与</h4>
            <p>制服、帽子、ヘルメットを支給いたします。</p>
          </li>
          <li>
            <div className={styles.itemImage}>
              <Image src={WelfareImage07} alt="各種表彰制度" />
            </div>
            <h4>各種表彰制度</h4>
            <p>
              永年勤続表彰（10年・20年・30年）のほか、無事故無違反安全運転表彰を毎年行っています。
            </p>
          </li>
          <li>
            <div className={styles.itemImage}>
              <Image src={WelfareImage08} alt="退職金制度" />
            </div>
            <h4>退職金制度</h4>
            <p>一定の期間、社業に従事された社員には退職金を支給いたします。</p>
          </li>
          <li>
            <div className={styles.itemImage}>
              <Image src={WelfareImage09} alt="社会保障完備" />
            </div>
            <h4>その他</h4>
            <p>
              「亀の甲温泉」入浴無料券支給
              <br />
              （※毎日）{' '}
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default RecruitContentsHead;
