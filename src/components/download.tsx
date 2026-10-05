import Image from "next/image";
import { app, installSteps } from "@/content";
import { Container, DownloadButton } from "./ui";

export function Download() {
  return (
    <section id="download" className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-dark via-accent to-accent-light px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your next trial could start here.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/85">
                Download {app.name} for Android and start building your profile today.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <DownloadButton href={app.apkPath} inverted />
                <p className="text-sm text-white/80">
                  Version {app.version} · {app.minAndroid} · APK
                </p>
              </div>
            </div>
            <Image
              src="/brand/logo.jpeg"
              alt={`${app.name} logo`}
              width={176}
              height={176}
              className="hidden rounded-2xl shadow-2xl shadow-ink/30 ring-4 ring-white/30 lg:block"
            />
          </div>

          <div className="mt-12 rounded-xl bg-white/10 p-6 backdrop-blur">
            <h3 className="font-semibold">How to install</h3>
            <ol className="mt-4 grid gap-4 md:grid-cols-3">
              {installSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-white/90">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-surface text-xs font-bold text-accent-dark">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
