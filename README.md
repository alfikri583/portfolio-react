# Portfolio React

Website portofolio responsif menggunakan React, Vite, CSS, Framer Motion, dan Lucide React.

## Persyaratan
- Node.js versi LTS
- npm
- Git (opsional untuk mengunggah ke GitHub)

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka alamat lokal yang dicetak Vite di terminal.

## Membuat build produksi

```bash
npm run build
npm run preview
```

Hasil build tersedia di folder `dist/`.

## Personalisasi sebelum dipublikasikan
1. Ubah nama/brand `PORTOFOLIO` di `src/components` jika kelak komponen dipisah, atau di `src/App.jsx`.
2. Ubah judul dan deskripsi di `Hero`, `About`, dan `Contact` dalam `src/App.jsx`.
3. Ganti data proyek pada array `projects` dengan karya asli, gambar, dan URL demo/GitHub.
4. Ganti `hello@example.com` dengan email kamu.
5. Ganti URL GitHub dan LinkedIn dengan profil milikmu.
6. Sesuaikan judul dan deskripsi SEO di `index.html`.

## Teknologi
- React 18
- Vite 6
- Framer Motion 11
- Lucide React
- CSS responsif tanpa framework tambahan

## Deploy ke Vercel
1. Push repositori ke GitHub.
2. Masuk ke Vercel dan impor repositori tersebut.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Klik Deploy.

Vercel biasanya mendeteksi pengaturan Vite secara otomatis.

## Deploy ke Netlify
1. Impor repositori GitHub ke Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy site.

## Lisensi
Bebas dimodifikasi untuk portofolio pribadi. Ganti semua contoh dengan informasi dan karya kamu sendiri sebelum dipublikasikan.
