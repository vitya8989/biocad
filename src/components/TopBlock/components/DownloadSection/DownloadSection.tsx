import {Buttons} from "@/types";
import Link from "next/link";
import Image from 'next/image';

import styles from "./DownloadSection.module.css";
import {DownloadButton} from "@/components/TopBlock/components/DownloadButton/DownloadButton";

interface DownloadSectionProps {
    title: string;
    subtitle: string;
    buttons: Buttons;
}

export function DownloadSection({title, subtitle, buttons}: DownloadSectionProps) {
    return (
        <div className={styles.root}>
            {buttons.apk.enabled && (<Link href='/' className={styles.toplink}>
                <span>{buttons.apk.label}</span>
                <Image
                    src="/assets/downloadIconBlack.svg"
                    alt=""
                    width={24}
                    height={24}
                    priority
                />
            </Link>)}
            <div className={styles.center}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
            <div className={styles.bottom}>
                {buttons.ios.enabled && (
                    <DownloadButton
                        buttonData={buttons.ios}
                        icon={'/assets/apple.svg'}
                    />
                )}
                {buttons.android.enabled && (
                    <DownloadButton
                        buttonData={buttons.android}
                        icon={'/assets/android.svg'}
                    />
                )}
            </div>
        </div>
    )
}
