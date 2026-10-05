// Editable copy for the landing page. Keep app facts in sync with pubspec.yaml and context/project-overview.md.

export const app = {
  name: "VANTRA",
  tagline: "Talent Discovery for Athletes",
  version: "1.0.0",
  minAndroid: "Android 7.0+",
  apkPath: "/downloads/vantra.apk",
  // Set to a real support address to show a Contact link in the footer.
  contactEmail: "",
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "For Athletes", href: "#athletes" },
  { label: "For Scouts", href: "#scouts" },
  { label: "Download", href: "#download" },
];

export const steps = [
  {
    title: "Build your profile",
    body: "Add your sport, position, team, location and availability in minutes. Your profile is your digital trial card.",
  },
  {
    title: "Post your highlights",
    body: "Upload match clips, training reels and photos, tagged with moments like Goal, Assist, Sprint, Tackle or Save.",
  },
  {
    title: "Get noticed and connect",
    body: "Scouts and clubs find you through the feed and search. You decide who can message you.",
  },
];

export type FeatureIcon =
  | "play"
  | "search"
  | "shield"
  | "chat"
  | "trophy"
  | "signal";

export const features: { icon: FeatureIcon; title: string; body: string }[] = [
  {
    icon: "play",
    title: "Highlight video feed",
    body: "A full-screen feed of real athletes in action, built for quick scrolling and instant discovery.",
  },
  {
    icon: "search",
    title: "Smart search and filters",
    body: "Filter by sport, position, age, location, availability and trust level to find the right fit fast.",
  },
  {
    icon: "shield",
    title: "Trust badges",
    body: "Achievements earn credibility when coaches endorse them or clubs confirm them. Never self-assigned.",
  },
  {
    icon: "chat",
    title: "Athlete-controlled messaging",
    body: "No conversation starts until the athlete accepts the request. Contact on your terms.",
  },
  {
    icon: "trophy",
    title: "Trials and opportunities",
    body: "Clubs post trials, open days and scholarships. Athletes apply directly from the app.",
  },
  {
    icon: "signal",
    title: "Made for mobile data",
    body: "Videos are compressed on upload so highlights play smoothly on everyday connections.",
  },
];

export const badges = [
  {
    label: "Self-Reported",
    tone: "self",
    body: "Every achievement starts here: added by the athlete in their own words.",
  },
  {
    label: "Coach-Endorsed",
    tone: "coach",
    body: "A verified coach or scout has vouched for the achievement.",
  },
  {
    label: "Club-Verified",
    tone: "club",
    body: "A verified club has confirmed the athlete on its roster. The strongest signal on VANTRA.",
  },
] as const;

export const audiences = {
  athletes: {
    title: "For athletes",
    lead: "A professional presence, wherever you play.",
    points: [
      "Showcase highlights, stats and achievements in one profile",
      "Get seen by scouts and clubs beyond your local pitch",
      "Apply for trials, open days and scholarships",
      "Stay in control of who can contact you",
    ],
  },
  scouts: {
    title: "For scouts and clubs",
    lead: "Find the next standout before anyone else.",
    points: [
      "Search and filter athletes by sport, position, age and region",
      "Watch real match footage before you travel",
      "Use trust badges to judge credibility at a glance",
      "Post trials and manage applications in one place",
    ],
  },
};

export const safety = [
  {
    title: "Consent first",
    body: "Athletes accept or decline every message request. No unsolicited conversations.",
  },
  {
    title: "Protections for under-18s",
    body: "Extra contact restrictions keep younger athletes safe on the platform.",
  },
  {
    title: "Privacy controls",
    body: "Hide your location and choose who can see your content.",
  },
];

export const footer = {
  blurb:
    "VANTRA connects grassroots athletes with scouts, coaches and clubs through highlight videos, trust badges and athlete-controlled messaging.",
  // Matches the sport list in lib/profiles/screens/athlete_setup_screen.dart.
  sports: [
    "Football", "Basketball", "Netball", "Athletics", "Rugby",
    "Swimming", "Boxing", "Volleyball", "Cricket", "Tennis",
  ],
  columns: [
    {
      title: "Product",
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "Features", href: "#features" },
        { label: "Trust badges", href: "#trust" },
        { label: "Download", href: "#download" },
      ],
    },
    {
      title: "Who it's for",
      links: [
        { label: "Athletes", href: "#athletes" },
        { label: "Scouts", href: "#scouts" },
        { label: "Clubs", href: "#scouts" },
        { label: "Coaches", href: "#trust" },
      ],
    },
    {
      title: "Trust & safety",
      links: [
        { label: "Safety", href: "#safety" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
  ],
};

export const installSteps = [
  "Tap Download and open the vantra.apk file when it finishes.",
  "If asked, allow your browser to “Install unknown apps” in Settings.",
  "Tap Install. If Play Protect warns you, choose More details → Install anyway.",
];
