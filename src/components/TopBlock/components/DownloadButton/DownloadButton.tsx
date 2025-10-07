import Link from "next/link";
import Image from 'next/image';
import {Button} from "@/types";

import styles from "./DownloadButton.module.css";

interface DownloadButtonProps {
    buttonData: Button;
    icon: string;
}

export function DownloadButton({buttonData, icon}: DownloadButtonProps) {
    return (
        <Link href='/' className={styles.root}>
            <div className={styles.textWrap}>
                <div className={styles.before}>
                    <Image
                        src={icon}
                        alt=""
                        width={24}
                        height={24}
                        priority
                    />
                </div>
                <div className={styles.text}>
                    {buttonData.label}
                </div>
                <div className={styles.after}>
                    <Image
                        src="/assets/downloadIcon.svg"
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </Link>
    )
}
