# 📊 SubscriptionsAnalytics

Трекер подписок с умным определением иконок и напоминаниями о пополнении.

![SubAnalytics](https://img.shields.io/badge/SubAnalytics-Tracker-667eea?style=for-the-badge)

## ✨ Возможности

- 🎯 **Умные иконки** — вводите название подписки (CapCut Pro, Kling AI, Spotify Premium, Netflix...) и иконка определится автоматически
- ✅ **Тестовая проверка** — форма показывает, что пользователь хочет посмотреть, какая подписка найдена, категорию и цену из каталога
- 💰 **Гибкая настройка** — стоимость в $, период обновления (неделя / месяц / 3 месяца / год)
- ⚡ **Автоматическая цена** — для известных подписок цена подставляется сразу из встроенной базы; интернет используется только для неизвестных сервисов
- 🔔 **Напоминания** — уведомления за 3 дня до обновления подписки
- 📅 **Календарь** — визуальный календарь с датами обновления
- 📊 **Аналитика** — расходы по категориям и периодам
- 🌙 **Тёмная тема** — красивый современный интерфейс
- 💾 **Локальное хранение** — данные хранятся в браузере, приватность гарантирована

## 🚀 Каталог сервисов (180+)

Автоматическое определение иконок для:

| Категория | Сервисы |
|-----------|---------|
| 🎬 Стриминг | Netflix, YouTube Premium, Disney+, HBO Max, Hulu, Crunchyroll |
| 🎵 Музыка | Spotify, Apple Music, YouTube Music, SoundCloud |
| 🤖 AI | ChatGPT Plus, Claude, Gemini, Grok, Perplexity, Midjourney, GitHub Copilot, Cursor |
| 🎥 AI-видео | Kling AI, Runway, Pika, Luma Dream Machine, PixVerse, Hailuo, HeyGen, Synthesia |
| 🎨 Дизайн | Figma, Canva, Adobe CC, CapCut Pro, Photoshop |
| ☁️ Облако | iCloud+, Google One, Dropbox, OneDrive, MEGA |
| 🎮 Игры | Xbox Game Pass, PlayStation Plus, Discord Nitro, Roblox Plus, Roblox Plus 500/1000/2000 |
| 🔒 VPN | NordVPN, ExpressVPN, Surfshark, 1Password |
| 📚 Обучение | Coursera, Udemy, Skillshare, Duolingo |
| 📝 Продуктивность | Notion, Slack, Trello, Todoist, Zoom |
| 💬 Соцсети | Telegram Premium, Discord Nitro, X Premium |

## 🧪 Проверка

В проект добавлен простой тест каталога:

```bash
node tests/catalog-check.test.js
```

Он проверяет Kling/PixVerse, замену Roblox Premium → Roblox Plus, тарифы Roblox Plus 500/1000/2000, встроенные цены для известных подписок и онлайн-поиск только для неизвестных сервисов.

## 🛠 Технологии

- HTML5 / CSS3 / Vanilla JavaScript
- LocalStorage для хранения данных
- Google Fonts (Inter)
- Font Awesome Icons
- Icons8 Color Icons

## 📱 Скриншоты

_Дашборд с карточками подписок и статистикой расходов_

## 📄 License

MIT
