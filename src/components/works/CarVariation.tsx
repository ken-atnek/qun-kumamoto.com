/* =======================================
 * 事業内容 保有車両
 * URL:src/components/works/CarVariation.tsx
 * Referenced in: /works/page.tsx
 * Created: 2025-04-22
 * Last updated: 2025-04-22
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import VariationContents from '@/components/works/VariationContents';
import styles from '@/styles/components/works/CarVariation.module.scss';
import ImageVariation01a from '@/assets/images/components/works/Variation01a.webp';
import ImageVariation01b from '@/assets/images/components/works/Variation01b.webp';
import ImageVariation02a from '@/assets/images/components/works/Variation02a.webp';
import ImageVariation02b from '@/assets/images/components/works/Variation02b.webp';
import ImageVariation03a from '@/assets/images/components/works/Variation03a.webp';
import ImageVariation03b from '@/assets/images/components/works/Variation03b.webp';
import ImageVariation04a from '@/assets/images/components/works/Variation04a.webp';
import ImageVariation04b from '@/assets/images/components/works/Variation04b.webp';
const CarVariation = () => {
  const { ref, isVisible } = useScrollTrigger<HTMLDivElement>();
  return (
    <section className={styles.carVariation} id="CarVariation">
      <div
        className={`${styles.wrapH2} ${styles.slideIn} ${
          isVisible ? styles['is-active'] : ''
        }`}
        ref={ref}
      >
        <h2>
          <span>Variation</span>保有車両
        </h2>
      </div>
      <ul>
        <VariationContents
          heading="ウィング車"
          images={[
            { src: ImageVariation01a, alt: 'ウィング車外観1' },
            { src: ImageVariation01b, alt: 'ウィング車外観2' },
          ]}
          specs={[
            {
              title: '10t',
              details: [
                { label: 'ボディ長さ', value: '9,600' },
                { label: '幅', value: '2,400' },
                { label: '高さ', value: '2,600' },
              ],
            },
            {
              title: '4t',
              details: [
                { label: 'ボディ長さ', value: '6,350' },
                { label: '幅', value: '2,050' },
                { label: '高さ', value: '2,200' },
              ],
            },
          ]}
        />
        <VariationContents
          heading="冷凍車"
          images={[
            { src: ImageVariation02a, alt: '冷凍車1' },
            { src: ImageVariation02b, alt: '冷凍車2' },
          ]}
          specs={[
            {
              title: '10t',
              details: [
                { label: 'ボディ長さ', value: '9,550' },
                { label: '幅', value: '2,350' },
                { label: '高さ', value: '2,550' },
              ],
            },
            {
              title: '3.25t',
              details: [
                { label: 'ボディ長さ', value: '5,400' },
                { label: '幅', value: '2,200' },
                { label: '高さ', value: '2,300' },
              ],
            },
            {
              title: '2.4t',
              details: [
                { label: 'ボディ長さ', value: '6,400' },
                { label: '幅', value: '2,150' },
                { label: '高さ', value: '2,300' },
              ],
            },
          ]}
        />
        <VariationContents
          heading="平ボディ"
          images={[
            { src: ImageVariation03a, alt: '平ボディ1' },
            { src: ImageVariation03b, alt: '平ボディ2' },
          ]}
          specs={[
            {
              title: '10t',
              details: [
                { label: 'ボディ長さ', value: '9,600' },
                { label: '幅', value: '2,400' },
              ],
            },
            {
              title: '4t',
              details: [
                { label: 'ボディ長さ', value: '6,200' },
                { label: '幅', value: '2,200' },
              ],
            },
            {
              title: '2t',
              details: [
                { label: 'ボディ長さ', value: '3,150' },
                { label: '幅', value: '1,610' },
              ],
            },
          ]}
        />
        <VariationContents
          heading="家畜車"
          images={[
            { src: ImageVariation04a, alt: '家畜車1' },
            { src: ImageVariation04b, alt: '家畜車2' },
          ]}
          specs={[
            {
              title: '10t',
              details: [
                { label: 'ボディ長さ', value: '9,500' },
                { label: '幅', value: '2,400' },
                { label: '高さ', value: '2400' },
              ],
            },
            {
              title: '3.25t',
              details: [
                { label: 'ボディ長さ', value: '4,100' },
                { label: '幅', value: '1,950' },
                { label: '高さ', value: '1,850' },
              ],
            },
            {
              title: '2.4t',
              details: [
                { label: 'ボディ長さ', value: '4,270' },
                { label: '幅', value: '2,100' },
                { label: '高さ', value: '1,800' },
              ],
            },
          ]}
        />
      </ul>
    </section>
  );
};
export default CarVariation;
