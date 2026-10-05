import type { FeatureIcon } from "@/content";

/** The VANTRA "V with a head" mark, drawn to match lib/assets/images/logo.jpeg. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 70" className={className} aria-hidden="true">
      <path d="M0 0h19l31 44L81 0h19L50 70z" fill="currentColor" />
      <circle cx="50" cy="12" r="9.5" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid size-9 place-items-center rounded-md bg-accent-light text-ink">
        <LogoMark className="w-6" />
      </span>
      <span className="text-lg font-semibold tracking-[0.3em]">VANTRA</span>
    </span>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg text-muted">{lead}</p>}
    </div>
  );
}

const badgeTones = {
  self: "border-badge-self bg-badge-self/15 text-badge-self",
  coach: "border-badge-coach bg-badge-coach/15 text-badge-coach",
  club: "border-badge-club bg-badge-club/15 text-badge-club",
} as const;

/** Mirrors TrustBadge in lib/shared/widgets/trust_badge.dart. */
export function TrustBadge({
  tone,
  label,
}: {
  tone: keyof typeof badgeTones;
  label: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${badgeTones[tone]}`}
    >
      <Icon name="verified" className="size-4" />
      {label}
    </span>
  );
}

export function DownloadButton({
  href,
  label = "Download for Android",
  inverted = false,
}: {
  href: string;
  label?: string;
  inverted?: boolean;
}) {
  const colors = inverted
    ? "bg-surface text-accent-dark shadow-ink/20 hover:bg-surface-alt"
    : "bg-accent text-white shadow-accent/30 hover:bg-accent-dark";
  return (
    <a
      href={href}
      download={href.endsWith(".apk") || undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold shadow-lg transition ${colors}`}
    >
      <Icon name="android" className="size-5" />
      {label}
    </a>
  );
}

type IconName = FeatureIcon | "verified" | "android" | "check" | "lock" | "eye" | "user";

const paths: Record<IconName, React.ReactNode> = {
  play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  chat: (
    <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4a4 4 0 0 0 4 4M16 6h4a4 4 0 0 1-4 4" />
      <path d="M12 13v4M8 20h8M10 17h4v3h-4z" />
    </>
  ),
  signal: <path d="M5 20v-3M9.5 20v-7M14 20v-11M18.5 20V4" />,
  verified: (
    <>
      <path d="m12 2 2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 22l-2.4-1.8-3 .2-.9-2.9L3.2 15.8l1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2z" fill="currentColor" stroke="none" />
      <path d="m8.5 12 2.5 2.5 4.5-5" stroke="white" />
    </>
  ),
  android: (
    <path
      d="M6 9h12v8a1 1 0 0 1-1 1h-1v3h-2v-3h-4v3H8v-3H7a1 1 0 0 1-1-1zM6 8a6 6 0 0 1 12 0zM3.5 9.5v6M20.5 9.5v6M8 3l1.5 2M16 3l-1.5 2"
    />
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
