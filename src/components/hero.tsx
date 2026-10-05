import { app } from "@/content";
import { Container, DownloadButton, Icon, LogoMark, TrustBadge } from "./ui";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-accent-light/40 via-base to-base"
    >
      <LogoMark className="pointer-events-none absolute -right-24 -top-10 w-[34rem] text-accent-light/25" />
      <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-accent-dark">
            <span className="size-2 rounded-full bg-success" />
            Now available on Android
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Get discovered.
            <br />
            <span className="text-accent">Get recruited.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            {app.name} gives grassroots athletes across Uganda and the region a
            professional stage. Post your highlights, build a trusted profile,
            and get noticed by verified scouts and clubs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <DownloadButton href="#download" label="Download for Android" />
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-line bg-surface px-6 py-3.5 font-semibold transition hover:border-accent hover:text-accent"
            >
              How it works
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Free for athletes · v{app.version} · {app.minAndroid}
          </p>
        </div>

        <PhoneMockup />
      </Container>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[18rem]">
      <div className="rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-2xl shadow-accent-dark/30">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-accent-dark via-accent to-accent-light">
          {/* fake video frame */}
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-full bg-white/25 text-white backdrop-blur">
              <Icon name="play" className="ml-1 size-8" />
            </span>
          </div>
          <div className="absolute inset-x-0 top-0 flex justify-center gap-5 pt-5 text-xs font-semibold text-white/70">
            <span>Following</span>
            <span className="text-white underline decoration-2 underline-offset-8">For you</span>
          </div>
          <div className="absolute right-3 bottom-28 flex flex-col items-center gap-4 text-white">
            {["♥", "💬", "↗"].map((g) => (
              <span key={g} className="grid size-9 place-items-center rounded-full bg-white/20 text-sm">
                {g}
              </span>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-16 text-white">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-surface text-accent">
                <Icon name="user" className="size-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">Brian K.</p>
                <p className="text-[11px] text-white/80">Striker · Kampala</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-white/90">Late winner in the regional final ⚽ #Goal</p>
            <div className="mt-2 rounded-full bg-surface/95 p-0.5 w-fit">
              <TrustBadge tone="club" label="Club-Verified" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
