/* =======================================
 * TOP スライド
 * URL: /components/top/ContainerSlide.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-04-15
 * Last updated: 2025-04-15
 * ======================================= */

'use client';
import { useEffect, useRef } from 'react';
import React from 'react';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from '@/styles/components/top/ContainerSlide.module.scss';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

// Swiper用CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// 画像を管理
import slide01 from '@/assets/images/components/top/containerSlide/slide01.webp';
import slide02 from '@/assets/images/components/top/containerSlide/slide02.webp';

const ContainerSlide = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const { ref, isVisible } = useScrollTrigger();
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;

      if (
        swiperInstance.params.navigation &&
        typeof swiperInstance.params.navigation === 'object'
      ) {
        swiperInstance.params.navigation.prevEl = `.${styles.buttonPrev}`;
        swiperInstance.params.navigation.nextEl = `.${styles.buttonNext}`;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }

    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.update();
        }
      }, 300); // debounceで300ms遅延
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  return (
    <section
      className={`${styles.containerSlide} ${styles.slideIn} ${
        isVisible ? styles['is-active'] : ''
      }`}
      ref={ref}
    >
      <Swiper
        ref={swiperRef}
        className={styles.blockSlide}
        modules={[Autoplay, Navigation, Pagination]}
        observer={true}
        observeParents={true}
        observeSlideChildren={true}
        navigation={{
          prevEl: `.${styles.buttonPrev}`,
          nextEl: `.${styles.buttonNext}`,
        }}
        pagination={{
          type: 'bullets',
          clickable: true,
          bulletClass: styles.customBullet,
          bulletActiveClass: styles.customBulletActive,
          renderBullet: (index, className) =>
            `<span class="${className}"></span>`,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        spaceBetween="0"
        slidesPerView={1} // ← ここを固定数値に変更
        centeredSlides
        loop
      >
        <SwiperSlide className={styles.boxSlideContents}>
          <Image
            src={slide01}
            alt="熊本の心と旬を運ぶ"
            className={styles.itemSlideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.boxSlideContents}>
          <Image
            src={slide02}
            alt="誠実な仕事こそ、信頼・安心の証"
            className={styles.itemSlideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.boxSlideContents}>
          <Image
            src={slide01}
            alt="熊本の心と旬を運ぶ"
            className={styles.itemSlideImage}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.boxSlideContents}>
          <Image
            src={slide02}
            alt="誠実な仕事こそ、信頼・安心の証"
            className={styles.itemSlideImage}
          />
        </SwiperSlide>
      </Swiper>
      {/* カスタム矢印ボタン */}
      <div className={styles.buttonPrev}></div>
      <div className={styles.buttonNext}></div>
      <article>
        <p
          className={`${styles.slideIn} ${
            isVisible ? styles['is-active'] : ''
          }`}
        >
          物流を通し<i>人</i>と<i>人</i>との懸け橋に。熊本と全国を<i>結ぶ</i>。
          <br />
          それが私たち <em>九州運輸</em>。
        </p>
      </article>
    </section>
  );
};
export default ContainerSlide;
