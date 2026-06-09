import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MICRO_BENEFITS = [
  'Sem cartão de crédito',
  '14 dias grátis',
  'CRM, vendas e finanças',
  'Suporte em português',
];

export default function LandingFinalCta({ href }: { href: string }) {
  return (
    <section className="bg-white pb-20 pt-4 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#081524_0%,#0c2847_38%,#164f90_68%,#f06a1a_140%)] px-6 py-12 text-white shadow-[0_40px_120px_-60px_rgba(8,21,36,0.8)] md:px-10 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,160,64,0.32),transparent_24%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Pronto para avançar
              </p>
              <h2 className="mt-4 max-w-[20ch] text-balance text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                A tua empresa não precisa de mais confusão. Precisa de um sistema.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
                Começa a organizar clientes, vendas, tarefas e finanças com uma plataforma simples, criada para empresas angolanas que querem crescer com controlo.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Button
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="min-w-[240px] border border-white/30 bg-white text-[#0A2540] hover:bg-[#f2f5fb] hover:text-[#0A2540] focus-visible:ring-white"
              >
                Criar conta grátis
              </Button>
              <Button
                href="mailto:comercial@kukugest.ao"
                variant="outline"
                size="lg"
                className="min-w-[240px] border-white/20 bg-white/[0.07] text-white backdrop-blur-md hover:bg-white/15"
              >
                Falar com a equipa
              </Button>
              <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
                {MICRO_BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs font-medium text-white/60">
                    <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
