## Hedef

`burakasci455/ahmet-faruk-art-studio` reposunun içeriğini (Türkçe sanat stüdyosu sitesi — anasayfa, eserler, hakkında, iletişim + kurs kayıt & iletişim formu backend'i) bu Lovable projesine birebir taşımak.

## Repodaki içerik

- **Stack**: Aynı (TanStack Start + Tailwind + shadcn + Supabase) — uyumlu.
- **Sayfalar** (`src/routes/`): `index.tsx`, `eserler.tsx`, `hakkinda.tsx`, `iletisim.tsx`
- **Site bileşenleri** (`src/components/site/`): `Header`, `Footer`, `PageTransition`, `Reveal`
- **Görseller** (`src/assets/`): `hero.jpg`, `about-portrait.jpg`, `art-1..6.jpg`
- **Server fonksiyonları** (`src/lib/courses.functions.ts`): `listCourses`, `registerForCourse`, `sendContactMessage`
- **Supabase entegrasyonu** (`src/integrations/supabase/*`)
- **Migrasyonlar** (`supabase/migrations/`): `courses`, `course_registrations`, `contact_messages` tabloları + RLS + demo veri; ikinci migrasyon anonim INSERT yetkilerini kaldırıyor (server fonksiyonları `service_role` üzerinden yazıyor)
- **Fontlar**: `@fontsource/dm-serif-display`, `@fontsource/fira-sans`
- **package.json**: birkaç ek bağımlılık (font paketleri, zaten kurulu olanların büyük çoğunluğu mevcut)

## Plan

1. **Lovable Cloud'u aç** — backend (Supabase) bu proje için gerekli; kurslar ve form gönderimleri buna bağlı.
2. **Eksik bağımlılıkları yükle** — özellikle font paketleri ve repoda var olup burada eksik olan diğer paketler.
3. **Kaynak dosyaları kopyala** (Lovable cross-project tool ile `burakasci455/ahmet-faruk-art-studio`'dan):
   - `src/assets/*` (8 görsel)
   - `src/components/site/*` (4 bileşen)
   - `src/routes/index.tsx`, `eserler.tsx`, `hakkinda.tsx`, `iletisim.tsx` (mevcut placeholder index ile değiştir)
   - `src/lib/artworks.ts`, `src/lib/courses.functions.ts`
   - `src/routes/__root.tsx` (meta etiketleri ve global stiller için — kontrol edip birleştireceğim)
   - `src/styles.css` (tema tokenları ve font ayarları)
4. **Veritabanı migrasyonlarını uygula** — `courses`, `course_registrations`, `contact_messages` tablolarını oluştur (GRANT + RLS dahil), ikinci migrasyondaki anonim INSERT iptallerini de uygula, demo kurs verisini ekle.
5. **Doğrula** — build temiz mi, dört sayfa da render oluyor mu, `/iletisim` form gönderimi ve `/eserler` (veya hangi sayfada kurs listesi varsa) çalışıyor mu.

## Notlar / sormak istediğim

- **Cross-project erişim**: `burakasci455/ahmet-faruk-art-studio` GitHub'da; Lovable'ın cross-project tool'ları başka bir **Lovable** projesini okur, GitHub'ı değil. Repoyu okumak için iki yol var:
  - **(a)** Eğer aynı GitHub reposu sizin başka bir Lovable projenize de bağlıysa, onu @mention ile referans verip cross-project copy ile direkt çekebilirim.
  - **(b)** Değilse, dosyaları GitHub raw URL'lerinden tek tek indirip projeye yazmam gerek (binary görseller dahil, ~15 dosya + 8 görsel). Bu da çalışır, sadece biraz daha uzun sürer.

Onay verirseniz **(b)** yolu ile başlarım (en garantili). Aynı zamanda Lovable Cloud'u açıp migrasyonları uygulayacağım.
