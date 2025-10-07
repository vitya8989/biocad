'use client'

import Link from "next/link";
import Image from 'next/image'
import cn from "classnames";
import {MenuItem} from "@/types";
import {useRef, useState} from "react";
import { useMediaQuery } from '@react-hook/media-query';
import {useClickOutside} from "@/hooks/useClickOutside";

import styles from './Menu.module.css'

interface MenuProps {
    menuData: MenuItem[];
}

export function Menu({menuData}: MenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useMediaQuery('(max-width: 1023px)');

    useClickOutside(dropdownRef, () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    });

    const handleOpenMenu = () => {
        if (isMobile) {
            setIsMenuOpen(true);
        }
    }

    const handleCloseMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    }

    return (
        <nav className={styles.nav} ref={dropdownRef}>
            <div className={cn(styles.burger, isMenuOpen && styles.menuOpen)} onClick={handleOpenMenu}>
                <Image
                    src="/assets/dotsMenu.svg"
                    alt=""
                    width={24}
                    height={24}
                    priority
                />
            </div>
            <div className={cn(styles.list, isMenuOpen && styles.menuOpen)}>
                {menuData.map((item) => {
                    if (item.id === 5 && item.link === '/') {
                        return (<Link key={item.id} className={styles.link} href={item.link} onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById("reviews");
                            if (el) {
                                handleCloseMenu();
                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                        }}>
                            {item.label}
                        </Link>)
                    }
                   return (<Link key={item.id} className={cn(styles.link, item.id === 1 && styles.linkBack)} href={item.link}>
                       {item.id === 1 && (
                           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                               <path d="M10.07 5.93005L4 12.0001L10.07 18.0701" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M20.9999 12H4.16992" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                       )}
                       {item.label}
                   </Link>)
                })}
            </div>
        </nav>
    )
}
