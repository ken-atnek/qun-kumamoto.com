/* =======================================
 * 事業内容 コンテンツ
 * URL: src/components/works/BoxContents.tsx
 * Referenced in: /works/page.tsx
 * Created: 2025-04-22
 * Last updated: 2025-04-23
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import Image, { StaticImageData } from 'next/image';
import styles from '@/styles/components/works/BoxContents.module.scss';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  image: StaticImageData;
  alt: string;
  h3Title: ReactNode;
  description: ReactNode;
  linkText: string;
  linkHref: string;
  className?: string;
};

const BoxContents = ({
  image,
  alt,
  h3Title,
  description,
  linkText,
  linkHref,
  className,
}: Props) => {
  const { ref, isVisible } = useScrollTrigger<HTMLDivElement>();
  return (
    <div
      className={[
        styles.boxContents,
        styles.slideIn,
        isVisible ? styles['is-active'] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      ref={ref}
    >
      <div className={styles.wrapImage}>
        <Image src={image} alt={alt} className={styles.itemImage} />
      </div>
      <div className={styles.wrapText}>
        <h3>{h3Title}</h3>
        <p>{description}</p>
        <Link href={linkHref} className={styles.itemLink}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};
export default BoxContents;
