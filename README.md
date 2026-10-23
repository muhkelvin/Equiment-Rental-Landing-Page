# STAGEKRAFT — Event Equipment Rental Landing Page

> **Project:** Tinkerbench Portfolio Demo 01  
> **Product Type:** High-Conversion Business Landing Page  
> **Target Audience:** Bisnis penyewaan perlengkapan event di Indonesia (Sound system, lighting, panggung, LED display, tenda, meja & kursi)  
> **Primary Conversion:** WhatsApp Inquiry Click-to-Chat with contextual pre-filled messages  
> **Stack:** HTML5 Semantic Markup + Tailwind CSS + Vanilla JS + Local Node Server

---

## 1. Overview & Concept

STAGEKRAFT adalah implementasi landing page produksi peralatan event kontemporer (*Contemporary Event Production*). Desain diarahkan untuk memancarkan aura kredibilitas tinggi, presisi teknis, dan keandalan operasional industri audio-visual, menghindari kesan template generik (*Anti-AI-Slop*).

### Visual Identity Tokens
- **Background Utama:** Warm off-white (`#F5F4F0`)
- **Primary Dark (Charcoal):** `#171916` (digunakan pada Hero, Footer, dan kartu teknis)
- **Accent (Electric Lime):** `#C7F464` (CTA utama dan penanda status penting)
- **Secondary Surface:** `#E9E8E1` (kartu kategori dan pemisah section)
- **Body Text:** `#64665F` (teks sekunder yang mudah dibaca)
- **Typography:** *Plus Jakarta Sans* (editorial headlines & body) + *Space Grotesk* (technical tags & specs)

---

## 2. Struktur Proyek

```text
eqiemtn rental/
├── index.html              # Halaman utama landing page semantic HTML5
├── assets/
│   └── images/             # Aset fotografi resolusi tinggi (Hero, Kategori, Use Cases)
│       ├── hero-stage.jpg
│       ├── cat-sound.jpg
│       ├── cat-lighting.jpg
│       ├── cat-stage.jpg
│       ├── cat-led.jpg
│       ├── cat-tents.jpg
│       ├── cat-furniture.jpg
│       ├── feat-mic.jpg
│       ├── use-corporate.jpg
│       ├── use-wedding.jpg
│       └── use-concert.jpg
├── src/
│   └── input.css           # Tailwind CSS input dengan @theme tokens & custom rules
├── dist/
│   └── output.css          # File CSS produksi hasil kompilasi Tailwind (minified ~31KB)
├── scripts/
│   └── download-images.js  # Script download aset gambar terkurasi
├── server.js               # Local static preview server zero-dependency
├── package.json            # Konfigurasi dependensi dan scripts build
└── README.md               # Dokumentasi lengkap proyek
```

---

## 3. Fitur Utama & Kepatuhan PRD

1. **Header & Sticky Navigation:**
   - Wordmark STAGEKRAFT dengan indikator status demo Tinkerbench.
   - Anchor navigation (`#kategori`, `#katalog`, `#paket`, `#keunggulan`, `#faq`).
   - Tombol CTA desktop dan mobile drawer navigasi responsif.
2. **Hero Section (High-Impact Contemporary Production):**
   - Headline spesifik: *"Peralatan Event yang Siap Mendukung Acara Anda."*
   - Fotografi produksi panggung autentik dengan badge teknis.
   - Dual CTA: WhatsApp dan Scroll to Catalog.
   - 4 Metrik inventaris teknis nyata (Line Array, Moving Head, LED P3.9, Full Crew).
3. **6 Kategori Peralatan Lengkap:**
   - Sound System, Stage Lighting, Stage & Rigging, LED Screen & Display, Tents & Canopies, Tables & Chairs.
   - Setiap kategori memiliki foto nyata, ringkasan spesifikasi, dan link WhatsApp kontekstual.
4. **Katalog Pilihan dengan Tab Filter Interaktif:**
   - Filter instan tanpa reload (Semua, Audio, Lighting, LED Display, Stage Deck).
   - Spesifikasi teknis presisi per item (DMX, 96kHz FPGA, P3.91 3840Hz refresh rate, dsb).
5. **Paket Sewa Terstruktur:**
   - *Intimate Gathering (50–150 Pax)*: Rp 3.500.000 / hari
   - *Corporate Conference (200–600 Pax)*: Rp 16.500.000 / hari (Rekomendasi Utama)
   - *Festival & Stage Production (1000+ Pax)*: Custom Quote
6. **Standar Layanan & Keunggulan (Why Choose Us):**
   - 4 pilar teknis: Zero-Fault Prep, Crew & Sound Engineer Standby, On-Schedule Load-in, Transparent Quotation.
7. **Use Cases / Tipe Acara:**
   - Corporate Conference, Wedding Reception, Concert & Live Festival.
8. **Alur Pemesanan 5 Langkah:**
   - Tentukan Kebutuhan → Kirim Jadwal via WA → Penawaran & Booking → Instalasi → Standby Show.
9. **Interactive FAQ Accordion:**
   - Menggunakan elemen semantik `<details>` dan `<summary>` yang dapat diakses penuh melalui keyboard.
10. **Final Conversion CTA & Footer:**
    - Callout konfirmasi tanggal acara dengan integrasi WhatsApp langsung.
    - Disclaimer demo Tinkerbench yang transparan.
11. **Floating WhatsApp Quick Action:**
    - Tombol aksi mengambang dengan indikator pulse hijau di pojok kanan bawah.

---

## 4. Cara Menjalankan Secara Lokal

### Prasyarat
- Node.js (v18 ke atas)

### Langkah Menjalankan:
1. **Instalasi dependensi:**
   ```bash
   npm install
   ```

2. **Kompilasi CSS Tailwind:**
   ```bash
   npm run build:css
   ```
   *(Untuk mode pengembangan dengan auto-rebuild, gunakan `npm run watch:css`)*

3. **Jalankan preview server lokal:**
   ```bash
   node server.js
   ```

4. Buka browser di:
   **[http://localhost:3000](http://localhost:3000)**

---

## 5. Integrasi WhatsApp Contextual Links

Semua CTA WhatsApp menggunakan format standar internasional tanpa backend:
- Format URL: `https://wa.me/6281234567890?text=[ENCODED_MESSAGE]`
- Pesan otomatis disesuaikan berdasarkan tombol yang diklik:
  - Hero CTA: *"Halo Stagekraft, saya ingin konsultasi ketersediaan peralatan untuk acara saya."*
  - Kategori Sound: *"Halo Stagekraft, saya tertarik menyewa kategori Sound System."*
  - Paket Corporate: *"Halo Stagekraft, saya ingin menanyakan rincian Paket Corporate Conference."*
  - Rider Khusus: *"Halo Stagekraft, saya memiliki rider spesifik peralatan event."*

---

## 6. Checklist Kriteria Penerimaan (PRD Section 12)

- [x] Semua section utama (11 section) telah tersedia secara utuh.
- [x] Hierarki visual konsisten dengan palet warm off-white, charcoal, dan electric lime.
- [x] Desain bebas dari pola template generik AI-slop (tanpa gradient ungu-biru, tanpa fake rating).
- [x] Seluruh CTA WhatsApp menggunakan URL click-to-chat yang valid dan ter-encode.
- [x] Navigasi anchor link berfungsi mulus ke setiap section.
- [x] FAQ dapat digunakan dengan keyboard (semantic details/summary).
- [x] Layout responsif dari 320px mobile hingga layar desktop lebar tanpa horizontal overflow.
- [x] Gambar tersimpan secara lokal di `assets/images/` dengan alt text deskriptif.
- [x] CSS dioptimalkan dan diminifikasi (~31 KB) tanpa dependensi library berat.
- [x] Dukungan `prefers-reduced-motion` aktif.
- [x] Title, meta description, OpenGraph tags, dan semantic H1/H2/H3 telah disiapkan.
- [x] Informasi demo ditandai secara transparan.
