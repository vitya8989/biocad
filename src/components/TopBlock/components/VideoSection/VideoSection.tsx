import styles from "./VideoSection.module.css";

interface VideoSectionProps {
    videoUrl: string;
}

export function VideoSection({videoUrl}: VideoSectionProps) {
    return (
        <div className={styles.root}>
            <video src={videoUrl} autoPlay muted playsInline loop></video>
        </div>
    )
}
