'use client';

import {SidebarItem} from "@/types";
import Image from 'next/image'
import {useEffect, useRef} from "react";

import styles from "./FullScreenLink.module.css";

interface FullScreenLinkProps {
    data: SidebarItem;
    icon: string;
}

export function FullScreenLink({data, icon}: FullScreenLinkProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const openFullscreen = () => {
        if (videoRef.current) {
            videoRef.current.style.display = 'block';

            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }

            videoRef.current.play().catch(console.error);
        }
    };

    const handleFullscreenChange = () => {
        if (!document.fullscreenElement && videoRef.current) {
            videoRef.current.style.display = 'none';
            videoRef.current.pause();
        }
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <button className={styles.root} onClick={openFullscreen}>
            <video
                ref={videoRef}
                style={{ display: 'none' }}
                controls
                className={styles.video}
            >
                <source src={data.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.icon}>
                <Image
                    src={icon}
                    alt=""
                    width={40}
                    height={36}
                    priority
                />
            </div>
            <div className={styles.text}>
                {data.label}
            </div>
        </button>
    )
}
