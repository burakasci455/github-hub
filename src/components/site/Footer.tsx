import { Link } from "@tanstack/react-router";
import { ETSY_URL, INSTAGRAM_URL } from "@/lib/artworks";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10 items-start">
          {/* İmza / marka */}
          <div className="md:col-span-5">
            <Link to="/" className="serif text-3xl lowercase tracking-tight leading-none">
              ahmet faruk <span className="italic text-ash">art</span>
            </Link>
            <p className="mt-6 serif italic text-lg text-ash max-w-sm leading-snug">
              "Bir kalem, biraz kağıt — gerisi sabırla biriken gölgeler."
            </p>
          </div>

          {/* Gezin */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-5">Sayfalar</p>
            <ul className="space-y-2.5 serif text-base">
              <li><Link to="/eserler" className="hover:text-ash transition-colors">Eserler</Link></li>
              <li><Link to="/kurslar" className="hover:text-ash transition-colors">Kurslar</Link></li>
              <li><Link to="/hakkinda" className="hover:text-ash transition-colors">Hakkında</Link></li>
              <li><Link to="/iletisim" className="hover:text-ash transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Takip et / satın al / atölye */}
          <div className="md:col-span-4 space-y-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-3">Takip Et</p>
              <div className="flex flex-col gap-1.5 serif text-base">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="hover:text-ash transition-colors w-fit">
                  Instagram — @ahmetfarukart
                </a>
                <a href={ETSY_URL} target="_blank" rel="noreferrer noopener" className="hover:text-ash transition-colors w-fit">
                  Etsy Mağazası →
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-3">Atölye</p>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Sakarya, Adapazarı.<br />
                Yüz yüze & canlı online dersler.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 text-[11px] text-ash flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Ahmet Faruk Art</span>
          <span className="serif italic">sessizliğin çizgileri</span>
        </div>
      </div>
    </footer>
  );
}
