# Luxima Wedding Directory & Listing (Luxima-WDL)

Luxima-WDL adalah aplikasi web yang dibangun menggunakan Next.js untuk menyediakan layanan pencarian vendor pernikahan, pemesanan layanan, serta sistem manajemen vendor secara efisien.

## 🚀 Fitur Utama

- **Multi-Vendor Management**: Vendor dapat mendaftarkan layanan mereka.
- **Booking & Scheduling**: Sistem pemesanan layanan pernikahan.
- **Referral System**: Pengguna dapat mendaftar dengan kode referral.
- **Social Media Integration**: Tautan langsung ke media sosial vendor.
- **Interactive Gallery**: Tampilan galeri berbasis Swiper.js.
- **Dark Mode Support**: Menggunakan Next-Themes.
- **SEO Friendly**: Dibangun dengan Next.js dan optimasi performa.

## 📦 Teknologi yang Digunakan

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **UI Components**: Hero UI, Framer Motion, Swiper.js, ShadCN UI
- **State Management**: React Context API
- **Backend API**: Laravel 11 (terpisah)
- **Database**: PostgreSQL (Neon DB)
- **Authentication**: NextAuth.js, Laravel Passport

## 📑 Instalasi & Menjalankan Proyek

### 1️⃣ **Clone Repository**

```bash
git clone https://github.com/Siddiq-Achmad/luxima-wdl
cd luxima-wdl
```

### 2️⃣ **Instalasi Dependensi**

```bash
npm install
# atau
yarn install
```

### 3️⃣ **Menjalankan Server Lokal**

```bash
npm run dev
# atau
yarn dev
```

Aplikasi akan berjalan di **http://localhost:3000**.

### 4️⃣ **Build untuk Production**

```bash
npm run build
npm run start
```

## 📌 Struktur Proyek

```
luxima-wdl/
├── public/           # File statis (logo, gambar, dll.)
├── components/       # Komponen UI yang dapat digunakan ulang
├── context/          # Context API untuk state management
├── hooks/            # Custom hooks
├── app/              # Folder utama App Router Next.js
│   ├── layout.tsx    # Layout utama aplikasi
│   ├── page.tsx      # Halaman utama
│   ├── (dashboard)/  # Grup route untuk dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── settings/
│   │   │   ├── page.tsx
│   │   │   ├── notifications.tsx
│   │   │   ├── account.tsx
│   │   └── bookings/
│   │       ├── page.tsx
│   │       ├── [id].tsx
│   ├── vendor/
│   │   ├── [slug]/   # Halaman dinamis untuk vendor berdasarkan slug
│   │       ├── page.tsx
│   │       ├── gallery.tsx
│   │       ├── services.tsx
│   │       ├── reviews.tsx
│
├── styles/           # Styling menggunakan Tailwind
├── types/            # TypeScript interfaces
├── utils/            # Utility functions
│
├── package.json      # Dependencies dan scripts
├── tailwind.config.js # Konfigurasi Tailwind CSS
├── next.config.js    # Konfigurasi Next.js
└── tsconfig.json     # Konfigurasi TypeScript
```

## 📜 Skrip yang Tersedia

| Perintah        | Deskripsi                               |
| --------------- | --------------------------------------- |
| `npm run dev`   | Menjalankan server pengembangan         |
| `npm run build` | Membuat build untuk produksi            |
| `npm run start` | Menjalankan aplikasi di mode produksi   |
| `npm run lint`  | Menjalankan ESLint untuk memeriksa kode |

## 📄 Lisensi

Proyek ini menggunakan lisensi **MIT**.

---

💡 Dibuat dengan ❤️ oleh **Luxima Team**
