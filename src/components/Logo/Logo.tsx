import Image from 'next/image'
import Link from 'next/link'
import cn from "classnames";

import styles from './Logo.module.css'


interface LogoProps {
    isHeader?: boolean;
}

export function Logo({isHeader}: LogoProps) {

    return (
        <Link
            href="/"
            className={cn(styles.logoLink, !!isHeader && styles.isHeader)}
        >
            <div className={styles.logo}>
                <Image
                    src="/assets/logo.svg"
                    alt=""
                    width={40}
                    height={36}
                    priority
                />
            </div>
            <div className={styles.logoText}>
                <Image
                    src="/assets/logoText.svg"
                    alt=""
                    width={103}
                    height={13}
                    priority
                />
            </div>
        </Link>
    )
}
