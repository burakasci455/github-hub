import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Instagram, Check } from "lucide-react";
import { toast } from "sonner";
import { sendContactMessage } from "@/lib/courses.functions";
import { PageTransition } from "@/components/site/PageTransition";
import { Reveal } from "@/components/site/Reveal";
import { ETSY_URL, INSTAGRAM_URL } from "@/lib/artworks";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — Ahmet Faruk Art" },
      { name: "description", content: "Eserler, kurslar veya özel sipariş için iletişime geçin." },
      { property: "og:title", content: "İletişim — Ahmet Faruk Art" },
    ],
  }),
  component: Iletisim,
});

function Iletisim() {
  const send = useServerFn(sendContactMessage);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitting(true);
    try {
      await send({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          subject: String(fd.get("subject") || ""),
          message: String(fd.get("message") || ""),
        },
      });
      setDone(true);
      toast.success("Mesajın gönderildi.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Bir hata oluştu.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-24 pb-24">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">İletişim</p>
              <h1 className="serif text-5xl md:text-7xl leading-[0.95] mb-8">Yazışalım.</h1>
              <p className="text-charcoal/70 leading-relaxed max-w-md">
                Özel sipariş, kurs bilgisi ya da sadece selam vermek için mesaj bırakabilirsin. Genellikle birkaç gün içinde dönüş yaparım.
              </p>

              <div className="mt-12 space-y-5">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="flex items-center gap-3 text-sm hover:text-ash transition-colors">
                  <Instagram size={16} /> @ahmetfarukart
                </a>
                <a href={ETSY_URL} target="_blank" rel="noreferrer noopener" className="block text-sm hover:text-ash transition-colors">
                  Etsy Mağazası →
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              {done ? (
                <div className="border border-border p-10 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                    <Check className="text-sage" size={22} />
                  </div>
                  <h3 className="serif text-3xl mb-2">Teşekkürler.</h3>
                  <p className="text-sm text-ash">Mesajın alındı, en kısa sürede sana döneceğim.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <Field name="name" label="Ad" required maxLength={100} />
                  <Field name="email" label="E-posta" type="email" required maxLength={255} />
                  <Field name="subject" label="Konu (opsiyonel)" maxLength={200} />
                  <Field name="message" label="Mesaj" required maxLength={2000} textarea />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-charcoal text-paper px-8 py-4 text-xs uppercase tracking-wider hover:bg-charcoal/90 transition-colors disabled:opacity-60"
                  >
                    {submitting ? "Gönderiliyor…" : "Mesajı Gönder"}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({
  name, label, type = "text", required, maxLength, textarea,
}: { name: string; label: string; type?: string; required?: boolean; maxLength?: number; textarea?: boolean }) {
  const common = "w-full bg-transparent border-b border-border focus:border-charcoal outline-none py-3 text-base transition-colors";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-ash mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} maxLength={maxLength} rows={5} className={common} />
      ) : (
        <input name={name} type={type} required={required} maxLength={maxLength} className={common} />
      )}
    </label>
  );
}
