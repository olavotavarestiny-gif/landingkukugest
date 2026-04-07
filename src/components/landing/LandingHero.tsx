import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import KukuGestLogo from '@/components/KukuGestLogo';
import { Button } from '@/components/ui/button';

const HERO_BULLETS = [
  'Para serviços e lojas',
  'Faturação pronta',
  'Suporte no WhatsApp',
];

export default function LandingHero({
  primaryCtaHref,
  secondaryCtaHref,
}: {
  primaryCtaHref: string;
  secondaryCtaHref: string;
}) {
  return (
    <section className="workspace-servicos relative overflow-hidden bg-[linear-gradient(135deg,#0a1d33_0%,#123f73_42%,#0e2b4d_72%,#081524_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,176,245,0.22),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(240,106,26,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(45,155,255,0.14),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-4 pb-2 pt-6 md:px-6 md:pt-8">
          <Link href="/" className="inline-flex items-center">
            <KukuGestLogo height={38} className="drop-shadow-[0_10px_30px_rgba(8,21,36,0.35)]" />
          </Link>

          <Button
            href={primaryCtaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] border border-[#ffb477]/30 bg-[#F06A1A] px-5 text-sm text-white shadow-[0_18px_42px_-20px_rgba(240,106,26,0.75)] hover:bg-[#db5f16] focus-visible:ring-white md:min-h-[48px] md:px-6 md:text-base"
          >
            Falar no WhatsApp
          </Button>
        </header>

        <div className="mx-auto grid min-h-[calc(100svh-84px)] max-w-7xl items-center gap-12 px-4 pb-16 pt-10 md:px-6 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16 lg:pb-24 lg:pt-8">
          <div className="max-w-[34rem]">
            <p className="text-[15px] font-light uppercase tracking-[0.32em] text-white/60 md:text-base">
              KukuGest
            </p>

            <h1 className="mt-5 max-w-[11ch] text-balance text-4xl leading-[0.94] tracking-[-0.05em] text-white md:text-6xl lg:text-[4.6rem]">
              <span className="block font-light text-white/88">Controle o seu</span>
              <span className="block font-black">negócio</span>
              <span className="block font-medium text-white/92">todos os dias.</span>
            </h1>

            <p className="mt-6 max-w-[31rem] text-base font-light leading-7 text-white/78 md:text-lg">
              Tudo num só lugar. Simples mesmo.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="min-w-[252px] justify-center gap-2 rounded-[20px] border border-[#ffb477]/30 bg-[#F06A1A] text-white shadow-[0_26px_62px_-26px_rgba(240,106,26,0.9)] hover:bg-[#db5f16]"
              >
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="outline"
                className="min-w-[252px] rounded-[20px] border border-white/16 bg-white/[0.08] font-medium text-white backdrop-blur-md hover:border-white/40 hover:bg-white hover:text-[#0A2540]"
              >
                Teste gratuitamente
              </Button>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-white/82 md:max-w-[34rem]">
              {HERO_BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ffa040]" aria-hidden="true" />
                  <span className="font-medium text-white/82">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-4xl lg:mx-0">
            <div className="relative mx-auto aspect-[1.24/1] w-full max-w-4xl">
              <div className="absolute inset-x-[4%] top-[8%] h-[78%] rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)] blur-2xl" aria-hidden="true" />

              <div className="absolute left-0 top-0 w-[88%] overflow-hidden rounded-[28px] border border-white/15 bg-white/95 p-3 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.75)] backdrop-blur-md md:p-4">
                <Image
                  src="/landing/painel-servicos.png"
                  alt="Painel KukuGest para empresas de serviços com métricas, receita mensal e gestão comercial."
                  width={2940}
                  height={1606}
                  priority
                  sizes="(max-width: 1024px) 88vw, 44vw"
                  className="h-auto w-full rounded-[20px]"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[64%] overflow-hidden rounded-[26px] border border-white/15 bg-white/96 p-3 shadow-[0_40px_120px_-52px_rgba(0,0,0,0.75)] backdrop-blur-md md:p-4">
                <Image
                  src="/landing/painel-comercio.png"
                  alt="Painel KukuGest para comércio com resumo de caixa, ações rápidas e operação diária."
                  width={2940}
                  height={1602}
                  priority
                  sizes="(max-width: 1024px) 64vw, 30vw"
                  className="h-auto w-full rounded-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
