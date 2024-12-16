'use client';
import React from 'react';

export default function YandexComp() {
    const latitude = 39.763836; // Ваши координаты
    const longitude = 64.430279;

    const handleClickMobile = () => {
        // URL для вызова приложения Яндекс Карты
        const yandexMapsUrl = `yandexmaps://maps.yandex.ru/?pt=${longitude},${latitude}&z=16&l=map`;

        if (/android/i.test(navigator.userAgent)) {
            // Android: Используем intent для вызова Яндекс Карт
            const androidIntentUrl = `intent://maps.yandex.ru/?pt=${longitude},${latitude}&z=16&l=map#Intent;scheme=yandexmaps;package=ru.yandex.yandexmaps;end`;
            window.location.href = androidIntentUrl;
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // iOS: Пробуем открыть приложение, если не сработает, переходим в App Store
            setTimeout(() => {
                window.location.href = `https://apps.apple.com/ru/app/id313877526`; // Ссылка на Яндекс Карты в App Store
            }, 1000);
            window.location.href = yandexMapsUrl;
        }
    };

    const handleClickDesktop = () => {
        // URL для открытия Яндекс Карт в браузере
        const yandexMapsUrl = `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=16&l=map`;
        window.open(yandexMapsUrl, '_blank');
    };

    return (
        <div className="yandexgo" id='yandex'>
            <div className="yandexgo-blok">
                {(/android|webOS|iPhone|iPad|iPod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)) ? (
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