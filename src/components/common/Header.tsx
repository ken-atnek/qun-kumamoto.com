/* =======================================
 * HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-04-14
 * Last updated: 2025-04-23
 * ======================================= */
'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/common/Header.module.scss';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { useEffect, useState } from 'react';
import ImageLogo from '@/assets/images/common/kyu-syu-unyu_logo.webp';
const Header = () => {
  const { ref, isVisible } = useScrollTrigger();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  // メニューが開いている間はスクロールを防ぐ
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 外側をクリックしたらメニューを閉じる
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById('headerNav')?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className={styles.containerHeader} id="ContainerHeader" ref={ref}>
      <article className={`${isVisible ? styles['is-active'] : ''}`}>
        <Link href="#" className={styles.boxLogo}>
          <Image
            src={ImageLogo}
            alt="株式会社九州運輸"
            className={styles.itemLogo}
          />
        </Link>
        <nav
          id="headerNav"
          className={`${isOpen ? styles['is-open'] : ''} ${
            !isOpen ? styles.closing : ''
          }`}
        >
          <Link href="/" className={styles.itemLink} onClick={closeMenu}>
            <span>top</span>トップ
          </Link>
          <Link href="/works/" className={styles.itemLink} onClick={closeMenu}>
            <span>works</span>事業内容
          </Link>
          <Link
            href="/company/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            <span>company</span>会社概要
          </Link>
          <Link
            href="/recruit/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            <span>recruit</span>採用情報
          </Link>
          <Link
            href="/contact/"
            className={styles.itemLinkForm}
            onClick={closeMenu}
          >
            <span>Contact us</span>ご依頼・お問い合せ
          </Link>
        </nav>
      </article>
      <button
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
