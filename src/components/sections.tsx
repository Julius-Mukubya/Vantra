import { audiences, badges, features, safety, steps } from "@/content";
import { Container, Icon, SectionHeading, TrustBadge } from "./ui";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From the pitch to the shortlist"
          lead="Three steps between you and the scouts who are looking for talent like yours."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-line bg-surface p-6">
              <span className="grid size-10 place-items-center rounded-full bg-accent text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything talent needs to be seen"
          lead="Built for athletes, scouts and clubs, and designed for the way people use their phones across the region."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-line bg-base p-6 transition hover:-translate-y-0.5 hover:border-accent-light hover:shadow-lg hover:shadow-accent/10"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-surface-alt text-accent">
                <Icon name={f.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TrustBadges() {
  return (
    <section id="trust" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Trust model"
          title="Credibility you can see"
          lead="Formal verification isn't practical at grassroots level, so VANTRA uses trust badges. Each level needs a real coach or club to confirm it."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {badges.map((b, i) => (
            <div key={b.label} className="relative rounded-xl border border-line bg-surface p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Level {i + 1}
              </span>
              <div className="mt-3">
                <TrustBadge tone={b.tone} label={b.label} />
              </div>
              <p className="mt-4 text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Audiences() {
  const cards = [
    { id: "athletes", ...audiences.athletes, dark: false },
    { id: "scouts", ...audiences.scouts, dark: true },
  ];
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container className="grid gap-6 lg:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.id}
            id={c.id}
            className={`rounded-2xl p-8 sm:p-10 ${
              c.dark ? "bg-ink text-white" : "bg-surface-alt"
            }`}
          >
            <p className={`text-sm font-semibold uppercase tracking-widest ${c.dark ? "text-accent-light" : "text-accent"}`}>
              {c.title}
            </p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{c.lead}</h3>
            <ul className="mt-6 space-y-3">
              {c.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-white">
                    <Icon name="check" className="size-4" />
                  </span>
                  <span className={c.dark ? "text-white/85" : "text-ink"}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}

const safetyIcons = ["chat", "shield", "eye"] as const;

export function Safety() {
  return (
    <section id="safety" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Safety"
          title="Athletes stay in control"
          lead="Being discoverable shouldn't mean being exposed."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {safety.map((s, i) => (
            <div key={s.title} className="flex gap-4 rounded-xl border border-line bg-surface p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-surface-alt text-accent-dark">
                <Icon name={safetyIcons[i]} className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-muted">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
