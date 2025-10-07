import {SliderItemType} from "@/types";
import Image from 'next/image'
import styles from "./SliderItem.module.css";

interface SliderItemProps {
    slide: SliderItemType;
}

export function SliderItem({slide}: SliderItemProps) {

    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <div className={styles.author}>
                    <div className={styles.img}>
                        <Image
                            src={slide.photo}
                            alt=""
                            width={36}
                            height={36}
                            unoptimized
                        />
                    </div>
                    <div className={styles.name}>{slide.name}</div>
                </div>
                <div className={styles.date}>
                    <div className={styles.dateValue}>{slide.date}</div>
                    <div className={styles.dateImg}>
                        <Image
                            src='/assets/calendar.svg'
                            alt=""
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.text}>{slide.text}</div>
        </div>
    )
}
