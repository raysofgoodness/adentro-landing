"use client";

import { useState, useEffect  } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.shadow : ''}`}>
            <nav className={
                styles.mobile_navigation + (isMobileNavOpen ? ' ' + styles.active : '')
            } title="Mobile navigation">
                <ul>
                    <li><a className={styles.link} href="#">Approach</a></li>
                    <li><a className={styles.link} href="#">Services</a></li>
                    <li><a className={styles.link} href="#">Culture</a></li>
                    <li><a className={styles.link} href="#">Contact</a></li>
                </ul>
            </nav>
            <div className={`${styles.header__container} container`}>
                <div className={styles.header__block}>
                    <a className={styles.link} href="#">Approach</a>
                    <a className={styles.link} href="#">Services</a>
                </div>
                <Image src="logo.svg" alt="logo" width={141} height={25}/>
                <div className={styles.header__block}>
                    <a className={styles.link} href="#">Culture</a>
                    <a className={styles.link} href="#">Contact</a>
                </div>
                <button className={styles.burger} onClick={toggleMobileNav}>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                        <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                        <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
