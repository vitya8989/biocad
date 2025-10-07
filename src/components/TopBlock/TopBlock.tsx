'use client';

import {MainData} from "@/types";
import {DownloadSection} from "@/components/TopBlock/components/DownloadSection/DownloadSection";
import {VideoSection} from "@/components/TopBlock/components/VideoSection/VideoSection";
import {FullScreenLink} from "@/components/TopBlock/components/FullScreenLink/FullScreenLink";
import {QrCodeSection} from "@/components/TopBlock/components/QrCodeSection/QrCodeSection";
import cn from "classnames";

import styles from "./TopBlock.module.css";
import {useEffect, useState} from "react";
import {useMediaQuery} from "@react-hook/media-query";

interface TopBlockProps {
    data: MainData;
}

export function TopBlock({data}: TopBlockProps) {
    const sidebar = data.sidebar;
    const video = data.videoUrl;
    const isMobile = useMediaQuery('(max-width: 743px)');
    const [isOnScroll, setIsOnScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isMobile) {
                if (window.pageYOffset > 0) {
                    setIsOnScroll(true);
                } else {
                    setIsOnScroll(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    if (!data) return (<div>Данные не загружены</div>);

    return (
        <section className={cn(styles.root, isOnScroll && styles.isOnScroll)}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.row}>
                        <div className={styles.downloadSection}>
                            <DownloadSection title={data.title} subtitle={data.subtitle} buttons={data.buttons}/>
                        </div>
                        <div className={styles.video}>
                            {!!video && (<VideoSection videoUrl={video}/>)}
                        </div>
                        <div className={styles.sidebar}>
                            {sidebar.watch_video.enabled && sidebar.watch_video && (
                                <FullScreenLink
                                    data={sidebar.watch_video}
                                    icon={'/assets/videoIcon.svg'}
                                />
                            )}
                            {sidebar.qr_code.enabled && sidebar.qr_code && (
                                <QrCodeSection
                                    data={sidebar.qr_code}
                                    icon={'/assets/scan-barcode.svg'}
                                />
                            )}
                        </div>
                    </div>

                    <div className={cn(styles.videoTablet, styles.video)}>
                        {!!video && (<VideoSection videoUrl={video}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
