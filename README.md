# EHA Institute Web Design - Svelte Implementation

Implementasi komponen Svelte berdasarkan frame desain Figma:
`https://www.figma.com/design/cqqNbTuMyneiyQcu3KDXoM/EHA-Institute-Web-Design--Copy-?node-id=24-2`

## Fitur & Struktur Komponen

Halaman ini dibangun dengan arsitektur modular Svelte dan Tailwind CSS yang merefleksikan seluruh section pada desain:

1. **`Navbar.svelte`**:
   - Utility menu atas (`Publications`, `Collaborators`).
   - Logo EHA Institute.
   - Menu navigasi utama (`Our Work`, `Our People`, `News`, `About` dropdown, search/grid icon).
   - Menu mobile responsive.

2. **`Hero.svelte`**:
   - Headline utama: *"Lorem ipsum dolor sit amet, consectetuer adipiscing elit..."*
   - Tombol play bulat + label `"OUR STORY"` (membuka modal video player interaktif).
   - **Video Latar Belakang Penuh (Full-Width Background Video)**: Satu video besar sebagai background seluruh area hero landing page dengan overlay gradasi hijau transparan yang estetis. Untuk saat ini diisi placeholder visual dan siap dihubungkan ke file `.mp4` asli lewat prop `videoSrc`.

3. **`LatestNews.svelte`**:
   - Section label `| THE LATEST`.
   - Artikel utama (featured) di kolom kiri dengan gambar besar, deskripsi, dan meta (`NEWS BRIEF 11.04.26`).
   - 3 artikel di kolom kanan (dengan thumbnail dan format teks).

4. **`NewsBrief.svelte`**:
   - Section label `| NEWS BRIEF`.
   - Card split container (gambar kiri, konten kanan).
   - Tombol `▸ READ MORE`.
   - Kontrol carousel panah bulat (`←` / `→`) dan link `VIEW ALL`.

5. **`UpcomingEvents.svelte`**:
   - Section label `| UPCOMING EVENTS`.
   - Badge tanggal besar (`JULY 15`).
   - Info seminar dan tanggal `15.07.26`.
   - Kotak media event serta tombol navigasi dan `VIEW ALL`.

6. **`Featured.svelte`**:
   - Section label `| FEATURED`.
   - 3 Card vertikal: `Careers`, `Publications`, dan `Expeditions` dengan hover zoom & subtle elevation.

7. **`Resources.svelte`**:
   - Section label `| RESOURCES`.
   - Kolom kiri: Judul, deskripsi, tombol `▸ EXPLORE`, dan navigasi panah.
   - Kolom kanan: Galeri mosaik/masonry 6 gambar yang tersusun bertingkat (staggered).

8. **`MissionBanner.svelte`**:
   - Card *"EHA Institute is orem ipsum dolor sit amet... founded in 20XX"*.
   - Gambar arsip dan tombol `▸ MISSION & VALUES`.

9. **`Footer.svelte`**:
   - Background gelap `#353736`.
   - Form langganan newsletter *"Stay Connected"* dengan input email bergaris bawah.
   - Ikon sosial media (Instagram, YouTube, Facebook, LinkedIn, X).
   - Alamat: *Jl. Margonda Raya No.404, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424*.

10. **`pages/MainResearchAreas.svelte`**:
    - Halaman khusus untuk *"Our Work > Main Research Areas"*.
    - Hero section dengan judul besar, deskripsi, dan background media watermark.
    - Grid 2-kolom dengan 13 card area riset (*Lorem*), dilengkapi efek gradasi vignette dan hover elevation.

11. **`pages/ConsultationServices.svelte`**:
    - Halaman khusus untuk *"Our Work > Consultation Services"*.
    - Hero section dengan background media watermark dan garis separator.
    - Tombol filter interaktif `[ ALL FOCUS AREAS ▾ ]` dengan pilihan kategori konsultasi.
    - Grid 3-kolom dengan 22 card layanan konsultasi (*Lorem*), disusun rapi 7 baris berisi 3 card + 1 card di baris ke-8.

12. **`pages/ScientificWriting.svelte`**:
    - Halaman khusus untuk *"Our Work > Scientific Writing"*.
    - Hero section dengan tab navigasi interaktif: `Current Projects` dan `Past Projects`.
    - Garis separator pembatas section.
    - Tombol filter interaktif `[ ALL FOCUS AREAS ▾ ]`.
    - Grid 3-kolom dengan 24 card publikasi dan karya ilmiah (*Lorem*), disusun penuh 8 baris × 3 card.

13. **`pages/WebinarSeries.svelte`**:
    - Halaman khusus untuk *"Education & Literacy > Webinar Series"*.
    - Hero section dengan background media watermark dan garis separator.
    - Baris filter ganda interaktif: `[ CATEGORIES ▾ ]` dan `[ FEBRUARY ▾ ]` (filter bulan).
    - Grid 3-kolom dengan 22 card webinar edukasi (*Lorem*), disusun 7 baris berisi 3 card + 1 card di baris ke-8.

---

## Cara Menjalankan

Buka terminal di folder project ini:

```bash
# 1. Install dependencies
npm install

# 2. Jalankan server development
npm run dev

# 3. Build untuk production
npm run build
```
Akses di browser pada URL yang muncul (biasanya `http://localhost:5173`).

