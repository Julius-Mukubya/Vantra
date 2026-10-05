import { app, footer } from "@/content";
import { Container, Icon, LogoMark } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <LogoMark className="pointer-events-none absolute -right-16 -bottom-20 w-96 text-white/[0.03]" />

      <Container className="relative">
        {/* Brand and link columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2 text-white">
              <span className="grid size-9 place-items-center rounded-md bg-accent-light text-ink">
                <LogoMark className="w-6" />
              </span>
              <span className="text-lg font-semibold tracking-[0.3em]">{app.name}</span>
            </a>
            <p className="mt-2 text-sm font-semibold text-accent-light">{app.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{footer.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {footer.sports.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80"
                >
                  {s}
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
            >
              <Icon name="android" className="size-4" />
              Android app · v{app.version} · {app.minAndroid}
            </a>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
                {col.title === "Trust & safety" && app.contactEmail && (
                  <li>
                    <a href={`mailto:${app.contactEmail}`} className="transition hover:text-white">
                      Contact
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {app.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Icon name="shield" className="size-4 text-badge-coach" />
            Athletes decide who can message them.
          </p>
          <a href="#top" className="inline-flex items-center gap-1 transition hover:text-white">
            Back to top
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
}
