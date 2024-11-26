'use client'
import React from 'react';
import { PARTNERS } from '@/app/utils/partners';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function PartnersComp() {

    return (
        <div className="partners">
            <div className="partners-static">
                {PARTNERS.map((partner) => (
                    <div key={partner.id} className="partner-item">
                        <img src={partner.image} alt={`Partner ${partner.id}`} />
                    </div>
                ))}
            </div>
            <div className="partners-mobile">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.5}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >
                    {PARTNERS.map((partner) => (
                        <SwiperSlide key={partner.id}>
                            <img src={partner.image} alt={`Partner ${partner.id}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};