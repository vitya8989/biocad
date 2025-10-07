import {SidebarItem} from "@/types";
import Image from 'next/image'

import styles from "./QrCodeSection.module.css";

interface QrCodeSectionProps {
    data: SidebarItem;
    icon: string;
}

export function QrCodeSection({data, icon}: QrCodeSectionProps) {
    return (
        <div className={styles.root}>
            <div className={styles.group}>
                <div className={styles.icon}>
                    <Image
                        src={icon}
                        alt=""
                        width={24}
                        height={24}
                        priority
                    />
                </div>
                <div className={styles.text}>
                    {data.label}
                </div>
            </div>
            <div className={styles.qrImg}>
                {!!data.url && (
                    <Image
                        src={data.url}
                        alt=""
                        width={120}
                        height={120}
                        priority
                    />
                )}
            </div>
        </div>
    )
}
