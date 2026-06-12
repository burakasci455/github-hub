import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, MapPin, Mail, Clock, Users, Monitor, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { artworks, INSTAGRAM_URL } from "@/lib/artworks";
import { PageTransition } from "@/components/site/PageTransition";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmet Faruk Art — Karakalem Atölyesi" },
      { name: "description", content: "Karakalem portre, natürmort ve figür çalışmaları. Sakarya'da atölye ve online resim kursları." },
      { property: "og:title", content: "Ahmet Faruk Art" },
      { property: "og:description", content: "Karakalemin sessiz çizgileri." },
    ],
  }),
  component: Index,
});

// 1 büyük + 3 destekleyici editorial grid
const heroWork = artworks[0];
const supportWorks = artworks.slice(1, 4);

const courseCards = [
  {
    icon: Users,
    title: "Kimler için",
    body: "Çizime yeni başlayanlardan tekniğini derinleştirmek isteyenlere kadar. Ön koşul yok — sadece bir kalem ve sabır.",
  },
  {
    icon: Sparkles,
    title: "Ne öğreneceksin",
    body: "Ton geçişleri, ışık-gölge etüdü, portre anatomisi, natürmort kompozisyonu. Her hafta bir konu, kalıcı bir alışkanlık.",
  },
  {
    icon: Monitor,
    title: "Online & atölye",
    body: "Sakarya'daki atölyede yüz yüze ya da canlı online dersler. Kaçırılan ders kaydı paylaşılır.",
  },
  {
    icon: Clock,
    title: "Ritim",
    body: "Haftalık 2 saatlik küçük gruplar. Sınırlı kontenjan, bireysel geri bildirim. 6 haftalık programlar.",
  },
];

function Index() {
  return (
    <PageTransition>
      {/* 1. HERO — eser odaklı, dengeli */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-14 md:pt-20 pb-20 md:pb-28 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-ash mb-6"
            >
              Karakalem · Atölye · Sakarya
            </motion.p>
            <h1 className="serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-charcoal">
              {"Kalemin".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.04 }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="italic text-ash"
              >
                yavaş ışığı.
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-7 max-w-sm text-base text-charcoal/70 leading-relaxed"
            >
              Karakalem portreler, natürmortlar ve figür etütleri. Atölyede ve online derslerle çizmeyi paylaşıyorum.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.15 }}
              className="mt-9 flex flex-wrap gap-4 items-center"
            >
              <Link
                to="/eserler"
                className="group inline-flex items-center gap-2 bg-charcoal text-paper px-7 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-charcoal/90 transition-colors"
              >
                Eserleri Gör
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/kurslar"
                className="text-xs uppercase tracking-[0.18em] text-charcoal/70 hover:text-charcoal underline underline-offset-8 decoration-1"
              >
                Kurslara Katıl
              </Link>
            </motion.div>
          </div>

          {/* Görsel daha baskın — 7 sütun, asimetrik */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 order-1 md:order-2 relative"
          >
            <div className="relative aspect-[5/6] md:aspect-[4/5] overflow-hidden">
              <img
                src={heroImg}
                alt="Karakalem çalışma masası"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-4 -left-6 bg-paper px-5 py-3 border border-border">
              <p className="text-[10px] uppercase tracking-[0.25em] text-ash">Atölye No. 04</p>
              <p className="serif text-sm mt-0.5">Sessizliğin defteri</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SEÇİLMİŞ ESERLER — editorial: 1 büyük + 3 destekleyici */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
          <Reveal className="flex items-end justify-between mb-14 md:mb-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ash mb-4">Portföy · 2023—2024</p>
              <h2 className="serif text-4xl md:text-6xl leading-[0.95]">
                Defterden <span className="italic text-ash">seçkiler.</span>
              </h2>
            </div>
            <Link
              to="/eserler"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] hover:text-ash"
            >
              Tümü <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-6 md:gap-10">
            {/* Büyük iş — sol, 7 sütun */}
            <Reveal className="md:col-span-7">
              <Link to="/eserler" className="group block">
                <div className="relative overflow-hidden bg-secondary aspect-[4/5]">
                  <img
                    src={heroWork.image}
                    alt={heroWork.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[12%] group-hover:grayscale-0 group-hover:scale-[1.025] transition-all duration-[1.1s] ease-out"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-700" />
                </div>
                <div className="mt-5 flex items-end justify-between gap-6 border-b border-border/60 pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-2">No. 01 · {heroWork.category}</p>
                    <h3 className="serif text-2xl md:text-3xl">{heroWork.title}</h3>
                  </div>
                  <span className="serif italic text-ash text-sm whitespace-nowrap">{heroWork.year}</span>
                </div>
                <p className="mt-3 text-sm text-charcoal/70 max-w-md leading-relaxed">{heroWork.description}</p>
              </Link>
            </Reveal>

            {/* Destekleyici işler — sağ, 5 sütun, dikey stack */}
            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8">
              {supportWorks.map((art, i) => (
                <Reveal key={art.slug} delay={0.1 + i * 0.08}>
                  <Link to="/eserler" className="group block">
                    <div className="relative overflow-hidden bg-secondary aspect-[4/3]">
                      <img
                        src={art.image}
                        alt={art.title}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                      />
                    </div>
                    <div className="mt-3 flex items-baseline justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-ash">
                          No. 0{i + 2} · {art.category}
                        </p>
                        <h4 className="serif text-lg mt-1">{art.title}</h4>
                      </div>
                      <span className="serif italic text-ash text-xs">{art.year}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:hidden mt-10 text-center">
            <Link to="/eserler" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
              Tüm eserler <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. KURSLAR — belirgin, profesyonel blok */}
      <section className="border-t border-border/60 bg-charcoal text-paper">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
          <Reveal className="max-w-2xl mb-16 md:mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-paper/50 mb-5">Atölye & Online Kurslar</p>
            <h2 className="serif text-4xl md:text-6xl leading-[0.95] mb-6">
              Birlikte çizmeyi <span className="italic text-paper/60">öğrenelim.</span>
            </h2>
            <p className="text-paper/65 leading-relaxed max-w-lg">
              Küçük gruplar, bireysel geri bildirim ve sabırla kurulmuş bir çizim ritmi. Sakarya atölyesinde ya da canlı online.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10 border border-paper/10">
            {courseCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 0.08}>
                  <div className="bg-charcoal p-8 md:p-10 h-full flex flex-col">
                    <Icon size={20} className="text-paper/60 mb-6" strokeWidth={1.25} />
                    <h3 className="serif text-xl mb-3">{c.title}</h3>
                    <p className="text-sm text-paper/65 leading-relaxed">{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 flex flex-wrap items-center gap-6">
              <Link
                to="/kurslar"
                className="group inline-flex items-center gap-2 bg-paper text-charcoal px-7 py-3.5 text-xs uppercase tracking-[0.18em] hover:bg-paper/90 transition-colors"
              >
                Kurs Takvimi
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/kurslar"
                className="text-xs uppercase tracking-[0.18em] text-paper/65 hover:text-paper underline underline-offset-8 decoration-1"
              >
                Kayıt Formu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. KISA HAKKINDA — küçük, rafine */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <Reveal className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ash mb-4">Hakkında</p>
              <p className="serif text-3xl md:text-4xl leading-[1.05]">
                Ahmet Faruk, <span className="italic text-ash">karakalem.</span>
              </p>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-8">
              <p className="serif text-xl md:text-2xl text-charcoal/90 leading-snug">
                "Çizmek bana bir tekniği değil, bir dikkati öğretti."
              </p>
              <p className="mt-6 text-sm md:text-base text-charcoal/70 leading-relaxed max-w-xl">
                10+ yıldır karakalem üzerine çalışıyorum. Portre, natürmort ve figür etütleri ana odaklarım. Sakarya'daki küçük atölyemde ve online derslerimde, gözlem ve sabır üzerine kurulu bir çizim pratiği paylaşıyorum.
              </p>
              <Link
                to="/hakkinda"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] hover:text-ash"
              >
                Devamını Oku <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. İLETİŞİM / SOSYAL / ATÖLYE */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <Reveal>
              <MapPin size={18} className="text-ash mb-4" strokeWidth={1.25} />
              <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-3">Atölye</p>
              <p className="serif text-xl mb-2">Sakarya</p>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Adapazarı merkez. Ziyaret için randevu alınız.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <Instagram size={18} className="text-ash mb-4" strokeWidth={1.25} />
              <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-3">Takip Et</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="serif text-xl hover:text-ash transition-colors"
              >
                @ahmetfarukart
              </a>
              <p className="text-sm text-charcoal/70 leading-relaxed mt-2">
                Yeni çalışmalar ve atölye günleri.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <Mail size={18} className="text-ash mb-4" strokeWidth={1.25} />
              <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-3">İletişim</p>
              <Link
                to="/iletisim"
                className="serif text-xl hover:text-ash transition-colors inline-flex items-center gap-2 group"
              >
                Mesaj Bırak
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm text-charcoal/70 leading-relaxed mt-2">
                Sipariş, kurs ve işbirliği için.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
