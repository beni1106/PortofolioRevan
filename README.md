# Portfolio Revan Novendri

Website portfolio pribadi, dibuat dengan **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS 3**, **Framer Motion**, dan komponen **shadcn/ui**.

## Menjalankan

Butuh Node.js 20.9 atau lebih baru.

```bash
npm install
cp .env.example .env.local   # lalu isi nilainya (lihat di bawah)
npm run dev                  # http://localhost:3000
```

Perintah lain:

| Perintah            | Fungsi                         |
| ------------------- | ------------------------------ |
| `npm run build`     | Build production               |
| `npm start`         | Jalankan hasil build           |
| `npm run lint`      | ESLint                         |
| `npm run typecheck` | Cek tipe TypeScript            |

## Environment variable

| Nama                                | Keterangan                                                        |
| ----------------------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`  | Access key dari [web3forms.com](https://web3forms.com) untuk form kontak |
| `NEXT_PUBLIC_SITE_URL`              | Domain asli saat deploy, dipakai untuk metadata / OpenGraph       |

Saat deploy (mis. di Vercel), isi kedua variabel ini di pengaturan Environment Variables.
`.env.local` tidak ikut ter-commit (diabaikan oleh `.gitignore`).

## Struktur folder

```
app/
  layout.tsx            Layout root + metadata (SEO / OpenGraph)
  page.tsx              Halaman utama, menyusun semua section
  icon.svg              Favicon
  styles/globals.css    Tailwind + token warna shadcn + style kustom
components/
  layout/               Header, Footer, ScrollToTop, SocialMedia
  sections/             Hero, About, Certifications, Projects, Skills, ContactForm
  ui/                   Komponen shadcn/ui (button, card, badge, input, textarea)
  ParticlesBackground.tsx
  SocialIcon.tsx
lib/
  site.ts               Data pribadi (nama, email, sosial media, menu) - edit di sini
  utils.ts              Helper cn()
public/
  images/               Gambar project & foto (WebP)
  cv/                   File CV
```

> Folder `components/` ada di luar `app/` supaya file di dalamnya **tidak** otomatis menjadi route.

## Mengubah konten

- **Info pribadi / sosial media / menu:** `lib/site.ts`
- **Project:** array `projects` di `components/sections/Projects.tsx`
  (`github` dan `live` opsional; tombol hanya tampil jika diisi)
- **Sertifikat:** array `certificateData` di `components/sections/Certifications.tsx`
- **Skill:** `components/sections/Skills.tsx` dan `About.tsx`
- **Gambar:** ganti file di `public/images/` (disarankan WebP, lebar maksimal ~1600px)
- **Warna tema:** variabel CSS di `app/styles/globals.css`

## Catatan

- Project #3 ("PT. BERKAH AUTO SUKSES SEJAHTERA") belum punya link GitHub sendiri. Isi field `github` di `Projects.tsx` bila ada.
- Font **Inter** diambil dari Google Fonts lewat `next/font` saat build, jadi build butuh koneksi internet.
