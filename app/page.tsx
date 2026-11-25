import Image from "next/image";
import aguasAbiertas from "@/public/logos/aguas-abiertas.png";
import clavados from "@/public/logos/clavados.png";
import natacionArtistica from "@/public/logos/natacion-artistica.png";
import waterpolo from "@/public/logos/waterpolo.png";
import { LogoMark } from "./logo-mark";

const federations = [
  {
    name: "Aguas abiertas",
    fullName:
      "Asociación Deportiva de Natación y Natación en Aguas Abiertas de México",
    href: "https://natacion.aquaticsmex.com/",
    logo: aguasAbiertas,
  },
  {
    name: "Waterpolo",
    fullName: "Federación Mexicana de Waterpolo",
    href: "https://waterpolo.aquaticsmex.com/",
    logo: waterpolo,
  },
  {
    name: "Clavados",
    fullName: "Federación Mexicana de Clavados y Clavados de Altura",
    href: "https://clavados.aquaticsmex.com/",
    logo: clavados,
  },
  {
    name: "Natación artística",
    fullName: "Asociación Deportiva Nacional de Natación Artística A.C.",
    href: "https://natacionartistica.aquaticsmex.com/",
    logo: natacionArtistica,
  },
];

export default function Home() {
  return (
    <div className="relative isolate flex flex-1 flex-col overflow-hidden bg-[radial-gradient(120%_80%_at_80%_0%,var(--color-brand-light),var(--color-brand)_45%,var(--color-brand-deep))]">
      <LogoMark className="pointer-events-none absolute -top-40 -right-56 -z-10 size-[44rem] text-white/15 motion-safe:animate-drift sm:-right-40 lg:size-[56rem]" />

      <header className="mx-auto flex w-full max-w-6xl items-center gap-3 px-6 pt-8 sm:px-10">
        <LogoMark className="size-11" />
        <span className="text-lg font-semibold tracking-tight">AquaticsMex</span>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 sm:px-10 sm:py-24">
        <p className="font-mono text-xs tracking-[0.2em] text-white/70 uppercase">
          Afiliación
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
          Elige la federación a la que quieres afiliarte
        </h1>
        <p className="mt-6 max-w-xl text-lg text-pretty text-white/80">
          Cada disciplina tiene su propio portal de afiliación. Selecciona la
          tuya para continuar.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {federations.map((federation) => (
            <li key={federation.href}>
              <a
                href={federation.href}
                className="group flex h-full flex-col rounded-2xl bg-white p-4 text-brand-deep shadow-lg shadow-brand-deep/30 transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-deep/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:hover:translate-y-0"
              >
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={federation.logo}
                    alt=""
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 70vw, 140vw"
                    className="absolute top-0 left-1/2 h-[133%] w-auto max-w-none -translate-x-1/2"
                  />
                </span>
                <span className="mt-2 flex flex-1 items-start justify-between gap-3 border-t border-brand-deep/10 px-2 pt-4 pb-1">
                  <span>
                    <span className="block font-mono text-xs tracking-[0.15em] text-brand uppercase">
                      {federation.name}
                    </span>
                    <span className="mt-1.5 block text-lg leading-snug font-semibold tracking-tight text-pretty">
                      {federation.fullName}
                    </span>
                  </span>
                  <span className="grid size-9 shrink-0 place-items-center self-end rounded-full bg-brand text-white transition-colors duration-200 group-hover:bg-brand-deep">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="size-4"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 pb-8 text-sm text-white/70 sm:px-10">
        <span>AquaticsMex</span>
        <a
          href="https://www.instagram.com/aquatics.mex/"
          target="_blank"
          rel="noopener noreferrer"
          className="-m-2 flex items-center gap-2 rounded-lg p-2 text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-5"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <path d="M17.5 6.5h.01" />
          </svg>
          <span>
            <span className="sr-only">Instagram: </span>@aquatics.mex
          </span>
        </a>
      </footer>
    </div>
  );
}
