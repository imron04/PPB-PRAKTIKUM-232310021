Quiz Praktikum Pemrograman Mobile

Aplikasi pemesanan makanan kantin berbasis mobile dengan arsitektur terpisah antara **Routing (`app/`)** dan **UI Components (`components/`)**.

## ✨ Fitur Utama
- **Authentication**: Menggunakan API eksternal fungsional via *FakeStoreAPI*.
- **Kantin Menu**: Fetching data asinkronus untuk menu hidangan makanan kantin.
- **Cart & Total Calculation**: Logika komputasi otomatis harga belanjaan secara *real-time*.
- **Transaction History**: Pencatatan riwayat transaksi sukses secara global.
- **Clean Architecture**: Memisahkan komponen presentasional (UI) dengan konfigurasi navigasi routing.

## 🛠️ Tech Stack
- React Native & Expo (Managed Workflow)
- Expo Router (File-based Routing Navigation)
- Axios (HTTP Client REST API)
- Context API (State Management Global)

## 🏃 Cara Menjalankan Project
1. Pastikan Node.js sudah terpasang.
2. Clone repositori ini: `git clone <url-repository-kamu>`
3. Masuk ke direktori proyek: `cd KantinKu`
4. Install semua dependensi: `npm install`
5. Jalankan aplikasi via bundler Expo: `npx expo start`

## 🔑 Akun Uji Coba Login
- **Username:** `johnd`
- **Password:** `m38rmF$`
