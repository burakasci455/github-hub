import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/eserler", label: "Eserler" },
  { to: "/kurslar", label: "Kurslar" },
  { to: "/hakkinda", label: "Hakkında" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="serif text-lg md:text-xl tracking-tight lowercase hover:text-ash transition-colors">
          ahmet faruk <span className="italic text-ash">art</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-sm tracking-wide uppercase text-charcoal/80 hover:text-charcoal transition-colors"
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-charcoal"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Menü"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border/60 bg-paper"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="serif text-2xl text-charcoal hover:text-ash transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
