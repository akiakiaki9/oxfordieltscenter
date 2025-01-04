/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://oxfordieltscenter.uz/', // Замените на URL вашего сайта
    generateRobotsTxt: true, // Создаёт robots.txt автоматически
    sitemapSize: 5000, // Максимум страниц в одном sitemap-файле
    changefreq: 'daily', // Частота обновления страниц
    priority: 0.7, // Приоритет страниц по умолчанию
    exclude: ['/admin', '/private'], // Исключите страницы
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                disallow: ['/private'], // Пример настройки для конкретного бота
            },
        ],
        // Уберите или оставьте пустым, если дополнительных карт сайта нет
        additionalSitemaps: [],
    },
};

module.exports = config;