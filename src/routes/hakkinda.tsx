import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-portrait.jpg";
import { PageTransition } from "@/components/site/PageTransition";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/hakkinda")({
  head: () => ({
    meta: [
      { title: "Hakkında — Ahmet Faruk Art" },
      { name: "description", content: "Ahmet Faruk hakkında: hikaye, eğitim, sanat anlayışı ve sergiler." },
      { property: "og:title", content: "Hakkında — Ahmet Faruk Art" },
    ],
  }),
  component: Hakkinda,
});

function Hakkinda() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-24 pb-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <Reveal>
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={aboutImg}
                  alt="Ahmet Faruk atölyede"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 space-y-12">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">Hakkında</p>
              <h1 className="serif text-5xl md:text-7xl leading-[0.95]">
                Ahmet Faruk.
              </h1>
              <p className="mt-6 serif text-xl md:text-2xl text-ash italic">
                Karakalem sanatçısı, eğitmen — Sakarya.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="prose-content space-y-5 text-charcoal/80 leading-relaxed max-w-xl">
                <p>
                  Karakaleme küçük yaşta, bir defterin arka sayfasına gizlice çizdiğim eskizlerle başladım. O günlerde hiç bilmiyordum ki bir kalemin ucu, sessizliği görünür kılabiliyor.
                </p>
                <p>
                  Yıllar içinde portre, natürmort ve figür çalışmaları üzerine odaklandım. Klasik akademik gelenekle çağdaş bir hassasiyeti birleştirmeye çalışıyorum: ışığın yavaşça bir yüzü nasıl şekillendirdiğine, bir kumaş kıvrımının nasıl bir karakter taşıdığına bakmayı seviyorum.
                </p>
                <p>
                  Sakarya'daki küçük atölyemde grup dersleri veriyor, online platformlarda da öğrencilerimle çalışıyorum. Bana göre çizmek, bir tekniği öğrenmekten çok bir dikkati öğrenmek.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                <div>
                  <p className="text-xs uppercase tracking-widest text-ash mb-3">Odak</p>
                  <ul className="serif text-lg space-y-1">
                    <li>Portre</li>
                    <li>Natürmort</li>
                    <li>Figür Etüdü</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ash mb-3">Eğitim</p>
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    Güzel Sanatlar mezunu. 10+ yıllık atölye deneyimi, 200'den fazla öğrenci.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-8 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-ash mb-4">Seçilmiş Sergiler</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between gap-4 border-b border-border/60 pb-3">
                    <span>Karakalem Günlükleri — Grup Sergisi</span>
                    <span className="text-ash">2024</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-border/60 pb-3">
                    <span>Yüzler — Kişisel Sergi, Sakarya</span>
                    <span className="text-ash">2023</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-border/60 pb-3">
                    <span>Genç Sanatçılar Buluşması</span>
                    <span className="text-ash">2021</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
