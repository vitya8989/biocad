import Image from 'next/image'
import Link from 'next/link'

import styles from './DownloadAppLink.module.css'

interface downLoadAppLinkProps {
    downLoadAppLinkLabel: string;
}

export function DownloadAppLink({ downLoadAppLinkLabel }: downLoadAppLinkProps) {
    return (
        <Link
            href="/"
            className={styles.link}
        >
            <div className={styles.img}>
                <Image
                    src="/assets/downloadIcon.svg"
                    alt=""
                    width={24}
                    height={24}
                    priority
                />
            </div>
            <div className={styles.text}>
                { downLoadAppLinkLabel }
                <div className={styles.arrows}>
                    <Image
                        src="/assets/arrow.svg"
                        alt=""
                        width={18}
                        height={18}
                        priority
                        style={{opacity: 0.2}}
                    />
                    <Image
                        src="/assets/arrow.svg"
                        alt=""
                        width={18}
                        height={18}
                        priority
                        style={{opacity: 0.4}}
                    />
                    <Image
                        src="/assets/arrow.svg"
                        alt=""
                        width={18}
                        height={18}
                        priority
                        style={{opacity: 0.6}}
                    />
                </div>
            </div>
        </Link>
    )
}
