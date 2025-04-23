/* =======================================
 * 事業内容ページ
 * URL: /works/page.tsx
 * Created: 2025-04-22
 * Last updated: 2025-04-22
 * ======================================= */
import MovePageTop from '@/components/common/MovePageTop';
import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/Works.module.scss';
import BoxContents from '@/components/works/BoxContents';
import ServiceMenu from '@/components/works/ServiceMenu';
import ContentsImage01 from '@/assets/images/components/works/contents01.webp';
import ContentsImage02 from '@/assets/images/components/works/contents02.webp';
import ContentsImage03 from '@/assets/images/components/works/contents03.webp';
import ContentsImage04 from '@/assets/images/components/works/contents04.webp';
import ContentsImage05 from '@/assets/images/components/works/contents05.webp';
import CarVariation from '@/components/works/CarVariation';

export default function Works() {
  return (
    <main>
      <PageTitle breadcrumb="works" titleEn="works" titleJp="事業内容" />
      <section className={styles.container01}>
        <BoxContents
          image={ContentsImage01}
          alt="事業内容01"
          h3Title={
            <>
              県内～全国へどこまでも、
              <br />
              熊本の旬を運ぶ。
            </>
          }
          description="熊本県菊池の旬を中心に、あらゆる商材を全国どこまでも迅速かつ丁寧に輸送します。"
          linkText="保有車両はこちら"
          linkHref="#CarVariation"
        />
      </section>
      <ServiceMenu />
      <section className={styles.containerContents}>
        <BoxContents
          image={ContentsImage02}
          alt="貸切運送"
          h3Title="貸切運送"
          description={
            <>
              日時・時間・場所・車種と自由に設定でき、お客様のニーズに応じてトラックを貸し切り、輸送するサービスです。
              <br />
              タイムリーかつ最適な車両で効率的なお荷物の配送を実現します。
            </>
          }
          linkText="ご依頼はこちら"
          linkHref="/contact/"
        />
        <BoxContents
          image={ContentsImage03}
          alt="一時保管・在庫管理"
          h3Title="一時保管・在庫管理"
          description="一時的にお客様の大事な荷物をお預かり致します。 入出庫・在庫管理・簡易品質確認も請け負います。"
          linkText="ご依頼はこちら"
          linkHref="/contact/"
        />
        <BoxContents
          image={ContentsImage04}
          alt="積替え輸送"
          h3Title="積替え輸送"
          description={
            <>
              各地から届いた荷物を利便性を活かして、各方面に分配配送致します。
              <br />
              作業場所・装備の提供や、積替え作業等も柔軟に対応いたします。
            </>
          }
          linkText="ご依頼はこちら"
          linkHref="/contact/"
        />
        <BoxContents
          image={ContentsImage05}
          alt="一般貨物自動車運送事業"
          h3Title="一般貨物自動車運送事業"
          description="熊本各地域、並びに九州各県より東北、関東、関西、中京、中国、四国方面に輸送致します。主に青果物、一般荷物、プラスチック製品の原料、家畜の飼料、農作物の肥料、自動販売機、家畜(牛)その他各種貨物。"
          linkText="ご依頼はこちら"
          linkHref="/contact/"
        />
      </section>
      <CarVariation />
      <MovePageTop />
    </main>
  );
}
