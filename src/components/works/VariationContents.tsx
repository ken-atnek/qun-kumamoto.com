/* =======================================
 * 事業内容 保有車両コンテンツ
 * URL:src/components/works/VariationContents.tsx
 * Referenced in: /works/page.tsx
 * Created: 2025-04-22
 * Last updated: 2025-04-22
 * ======================================= */
import React from 'react';
import type { StaticImageData } from 'next/image';
import styles from '@/styles/components/works/CarVariation.module.scss';

import Image from 'next/image';

type SpecItem = {
  title: string; // 10t / 4t など
  details: {
    label: string; // 例: ボディ長さ
    value: string; // 例: 9,600
  }[];
};

type VariationContentsProps = {
  heading: string;
  images: { src: StaticImageData; alt: string }[];
  specs: SpecItem[];
};

const VariationContents = ({
  heading,
  images,
  specs,
}: VariationContentsProps) => {
  return (
    <li className={styles.boxVariation}>
      <h3>{heading}</h3>
      <div className={styles.wrapImage}>
        {images.map((img, index) => (
          <Image key={index} src={img.src} alt={img.alt} />
        ))}
      </div>
      <dl className={styles.sizeDetails}>
        {specs.map((spec, index) => (
          <div key={index}>
            <dt>{spec.title}</dt>
            <dd>
              {spec.details.map((detail, idx) => (
                <React.Fragment key={idx}>
                  <h4>{detail.label}</h4>
                  <span>{detail.value}</span>
                </React.Fragment>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </li>
  );
};
export default VariationContents;
