'use client';
import React, { useEffect, useState } from 'react';

export default function YandexComp() {
    const latitude = 39.763836; // Ваши координаты
    const longitude = 64.430279;

    // Состояние для определения типа устройства
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Проверяем, доступен ли navigator
        if (typeof navigator !== 'undefined') {
            setIsMobile(/android|webOS|iPhone|iPad|iPod|blackberry|iemobile|opera mini/i.test(navigator.userAgent));
        }
    }, []);

    const handleClickMobile = () => {
        const yandexMapsUrl = `yandexmaps://maps.yandex.ru/?pt=${longitude},${latitude}&z=16&l=map`;

        if (typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent)) {
            const androidIntentUrl = `intent://maps.yandex.ru/?pt=${longitude},${latitude}&z=16&l=map#Intent;scheme=yandexmaps;package=ru.yandex.yandexmaps;end`;
            window.location.href = androidIntentUrl;
        } else if (typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            setTimeout(() => {
                window.location.href = `https://apps.apple.com/ru/app/id313877526`;
            }, 1000);
            window.location.href = yandexMapsUrl;
        }
    };

    const handleClickDesktop = () => {
        const yandexMapsUrl = `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=16&l=map`;
        window.open(yandexMapsUrl, '_blank');
    };

    return (
        <div className="yandexgo" id='yandex'>
            <div className="yandexgo-blok">
                {isMobile ? (
                    <div onClick={handleClickMobile} className="yandexgo-blok__section">
                        <img src="/images/yandexgo.png" alt="Яндекс Карты" />
                        <p>Открыть в приложении Яндекс Карты</p>
                    </div>
                ) : (
                    <div onClick={handleClickDesktop} className="yandexgo-blok__section">
                        <img src="/images/yandexmap.png" alt="Яндекс Карты" />
                        <p>Открыть на Яндекс Картах</p>
                    </div>
                )}
            </div>
        </div>
    );
};