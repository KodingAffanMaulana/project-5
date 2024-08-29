# Project 5 Express: Clean Pressured Line

CRUD and Authentication Backend Project

## Tentang Project

Project 5 Express adalah aplikasi backend menggunakan Node.js yang terintegrasi dengan database, dirancang untuk melakukan operasi CRUD (Create, Read, Update, Delete) serta menyediakan fitur autentikasi. Tujuan utama dari proyek ini adalah untuk menilai dan meningkatkan kemampuan Anda dalam membangun RESTful API, mengintegrasikan database, dan mengimplementasikan autentikasi, sambil menjaga kode yang clean dan terstruktur.

## Tujuan Project

- ✅ Menguji kemampuan dalam mengintegrasikan database dengan backend untuk mengoperasikan CRUD dan autentikasi.
- ✅ Memberikan pengalaman dalam merancang arsitektur database dan backend yang terstruktur dan baik.
- ✅ Menambah portofolio sebagai fullstack website developer.

## Fitur Utama

- CRUD Produk: Menambahkan, membaca, mengupdate, dan menghapus produk dalam database.
- Autentikasi: Pengguna dapat mendaftar dan login. Hanya admin yang dapat menambahkan, mengupdate, dan menghapus produk.
- Middleware Otentikasi dan Otorisasi: Menggunakan JSON Web Token (JWT) untuk memastikan bahwa hanya pengguna yang terotentikasi yang dapat mengakses endpoint tertentu, dan hanya admin yang dapat melakukan operasi sensitif.

## Teknologi yang Digunakan

- Node.js: Platform JavaScript untuk menjalankan aplikasi backend.
- Express.js: Framework web untuk Node.js, memudahkan pembuatan API RESTful.
- MongoDB: Database NoSQL yang digunakan untuk menyimpan data produk dan pengguna.
- Mongoose: ODM (Object Data Modeling) untuk MongoDB dan Node.js.
- JSON Web Token (JWT): Untuk autentikasi dan otorisasi pengguna.
- bcrypt.js: Untuk hashing password pengguna.

## Struktur Project

```text
project-5
│ .env
│ .gitignore
│ package.json
│ package-lock.json
│ README.md
│
└───src
    controllers
        │ authController.js
        │ productController.js
    middleware
        │ auth.js
    models
        │ product.js
        │ user.js
    routes
        │ router.js
```

## Cara Menjalankan Project

Kloning Repository:

```bash
git clone https://github.com/KodingAffanMaulana/project-5.git
```

Instal Dependensi:

```bash
npm install
```

Konfigurasi Environment:

Buat file .env berdasarkan .env.example.
Isi dengan variabel lingkungan yang diperlukan (contoh: SERVER_PORT, DB_URL,
DB_NAME, JWT_SECRET

Menjalankan Server:

```bash
npm start
```

Testing Endpoints: Gunakan tools seperti Postman atau Thunder Client untuk melakukan testing pada endpoint API yang telah dibuat.
