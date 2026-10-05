import { app, navLinks } from "@/content";
import { Container, Logo } from "./ui";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-surface/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" aria-label={`${app.name} home`}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#download"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-dark"
        >
          Get the app
        </a>
      </Container>
    </header>
  );
}
