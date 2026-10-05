# VANTRA landing page

Public marketing site for the VANTRA mobile app, with a direct Android APK download.
Next.js 16 (App Router) + Tailwind v4. Colors mirror `lib/core/theme/app_theme.dart`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Publishing a new APK

1. Build a signed release from the Flutter app: `flutter build apk --release`
2. Copy `build/app/outputs/flutter-apk/app-release.apk` to `landing/public/downloads/vantra.apk`
   (`*.apk` is git-ignored — upload it with your deploy, or host it elsewhere and change `apkPath`).
3. Update `version` in `src/content.ts` to match `pubspec.yaml`.

`next.config.ts` serves `/downloads/*.apk` with the Android package content type so browsers
offer to install it instead of saving a `.zip`.

## Editing copy

All text (features, steps, badges, install steps, contact email) lives in `src/content.ts`.
Theme tokens are in `src/app/globals.css` — components use Tailwind token classes
(`bg-accent`, `text-muted`, …), never raw hex values.

## Deploy

Any Node host or Vercel (set the project root to `landing/`). Note Vercel limits static file
size; for large APKs prefer Firebase Hosting, GitHub Releases or object storage and point
`app.apkPath` at that URL.
