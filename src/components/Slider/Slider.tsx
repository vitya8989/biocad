'use client';

import {SliderData} from "@/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {SliderItem} from "@/components/Slider/components/SliderItem/SliderItem";
import {Pagination} from "swiper/modules";

import styles from "./Slider.module.css";

interface SliderProps {
    data: SliderData;
}

export function Slider({data}: SliderProps) {
    const slides = data.data;

    return (
        <section className={styles.root} id="reviews">
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.top}>
                        <h2 className={styles.title}>{data.title}</h2>
                        <div className={styles.subtitle}>{data.description}</div>
                    </div>
                    <div className={styles.sliderWrapper}>
                        <Swiper
                            className={styles.swiper}
                            spaceBetween={12}
                            slidesPerView='auto'
                            modules={[Pagination]}
                            pagination={{
                                type: 'progressbar',
                            }}
                        >
                            {slides.map((slide) => (
                                <SwiperSlide key={slide.id} className={styles.slide}>
                                    <SliderItem slide={slide}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
