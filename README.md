🇬🇧 English README
md
Копировать
Редактировать
# Online Shop (React + PocketBase)

An elegant, responsive e-commerce frontend built with React, TypeScript, and PocketBase. It features product listings, category filtering, sorting, user authentication, and favorites.

All product data comes from [https://dummyjson.com](https://dummyjson.com), including names, prices, discounts, images, and ratings.

## 🔥 Features

- User registration and login (PocketBase)
- View and filter products by category
- Full-text search
- Sort by price, discount, name, and rating
- Add/remove products from favorites
- Responsive design for mobile and desktop
- State management with Zustand

## 📸 Screenshots

Screenshots are located in the `screenshots/` folder.

## 🧰 Tech Stack

- React + Vite
- TypeScript
- PocketBase
- Zustand (state management)
- CSS / Responsive layout

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mathmaxwell/newSite
cd newSite
npm install
2. Setup .env.local
Create a file in the root called .env.local and add the following:

ini
Копировать
Редактировать
BROWSER=none
VITE_PB_URL=http://127.0.0.1:8090
3. Install and Run PocketBase
Download from https://pocketbase.io/docs/

Extract the ZIP, rename the folder to pocketbase, and place it in the root of the project

Run PocketBase:

bash
Копировать
Редактировать
cd pocketbase
./pocketbase serve
4. Create PocketBase Collection
Inside the PocketBase admin UI:

Create a collection named favorite_products

Add these fields:

user (relation to users)

product_id (type: text)

5. Run the App
bash
Копировать
Редактировать
npm run dev
Open http://localhost:5173

📦 Notes
Favorites are linked to logged-in users

Product data is fetched live from dummyjson.com

You can register/login to save your favorite items

🐞 Known Limitations
No real checkout/cart logic

Data from dummyjson is static and not persisted

No admin panel for product control

📅 Created: May 2025
yaml
Копировать
Редактировать

---

## 🇷🇺 README на русском

```md
# Онлайн-магазин (React + PocketBase)

Современный адаптивный фронтенд интернет-магазина на React, TypeScript и PocketBase. Содержит список товаров, категории, фильтрацию, поиск, сортировку и возможность сохранять избранные товары.

Данные о товарах получаются с [https://dummyjson.com](https://dummyjson.com): названия, цены, скидки, изображения и рейтинг.

## 🔥 Возможности

- Регистрация и вход (через PocketBase)
- Просмотр и фильтрация товаров по категориям
- Поиск по ключевым словам
- Сортировка по цене, скидке, названию и рейтингу
- Добавление и удаление избранных товаров
- Адаптивный дизайн для мобильных и десктопов
- Управление состоянием через Zustand

## 📸 Скриншоты

Скриншоты находятся в папке `screenshots/`.

## 🧰 Стек технологий

- React + Vite
- TypeScript
- PocketBase
- Zustand
- CSS / адаптивная вёрстка

## 🚀 Как запустить

### 1. Клонируй проект

```bash
git clone https://github.com/mathmaxwell/newSite
cd newSite
npm install
2. Создай .env.local
Создай файл .env.local в корне и добавь:

ini
Копировать
Редактировать
BROWSER=none
VITE_PB_URL=http://127.0.0.1:8090
3. Скачай и запусти PocketBase
Перейди на https://pocketbase.io/docs/

Скачай ZIP, распакуй, переименуй папку в pocketbase и помести в корень проекта

Запусти PocketBase:

bash
Копировать
Редактировать
cd pocketbase
./pocketbase serve
4. Настрой коллекцию в PocketBase
Создай коллекцию с именем favorite_products

Добавь поля:

user (связь с users)

product_id (тип: text)

5. Запусти приложение
bash
Копировать
Редактировать
npm run dev
Открой http://localhost:5173

📦 Дополнительно
Избранные товары привязаны к аккаунту пользователя

Данные берутся с dummyjson.com в реальном времени

Можно войти и сохранять понравившиеся товары

🐞 Ограничения
Нет корзины и оформления заказа

Данные с dummyjson не сохраняются

Нет панели администратора

📅 Сделано: Май 2025
