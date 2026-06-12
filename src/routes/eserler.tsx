import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { artworks, ETSY_URL, type Artwork, type ArtworkCategory } from "@/lib/artworks";
import { PageTransition } from "@/components/site/PageTransition";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/eserler")({
  head: () => ({
    meta: [
      { title: "Eserler — Ahmet Faruk Art" },
      { name: "description", content: "Karakalem portre, natürmort ve figür çalışmalarından bir seçki." },
      { property: "og:title", content: "Eserler — Ahmet Faruk Art" },
    ],
  }),
  component: Eserler,
});

const filters: { id: ArtworkCategory | "tum"; label: string }[] = [
  { id: "tum", label: "Tümü" },
  { id: "portre", label: "Portre" },
  { id: "naturmort", label: "Natürmort" },
  { id: "figur", label: "Figür" },
];

function Eserler() {
  const [active, setActive] = useState<ArtworkCategory | "tum">("tum");
  const [lightbox, setLightbox] = useState<Artwork | null>(null);

  const shown = active === "tum" ? artworks : artworks.filter((a) => a.category === active);

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">Galeri</p>
          <h1 className="serif text-5xl md:text-7xl mb-8">Eserler.</h1>
          <p className="text-charcoal/70 max-w-xl leading-relaxed">
            Karakalem ile yapılmış portre, natürmort ve figür çalışmaları. Satın almak için Etsy mağazasını ziyaret edebilirsin.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                active === f.id
                  ? "bg-charcoal text-paper border-charcoal"
                  : "border-border text-ash hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8">
          <AnimatePresence>
            {shown.map((art, i) => (
              <motion.button
                key={art.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                onClick={() => setLightbox(art)}
                className="group mb-6 md:mb-8 block w-full break-inside-avoid text-left"
              >
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-auto grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  />
                </div>
                <div className="mt-3 flex justify-between items-baseline">
                  <h3 className="serif text-lg">{art.title}</h3>
                  <span className="text-xs text-ash uppercase tracking-wider">{art.year}</span>
                </div>
                <p className="text-xs text-ash mt-0.5">{art.description}</p>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-paper/80 hover:text-paper p-2"
              onClick={() => setLightbox(null)}
              aria-label="Kapat"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="max-h-[70vh] w-auto object-contain"
              />
              <div className="text-center text-paper">
                <h3 className="serif text-3xl">{lightbox.title}</h3>
                <p className="text-paper/60 text-sm mt-1">{lightbox.description}</p>
                <a
                  href={ETSY_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-2 border border-paper/40 text-paper px-5 py-2.5 text-xs uppercase tracking-wider hover:bg-paper hover:text-charcoal transition-colors"
                >
                  Etsy'de Satın Al <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
