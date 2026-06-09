import { Target, Users, TrendingUp, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const BENEFITS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Target,
    title: 'Nunca mais percas oportunidades',
    text: 'Cada contacto fica registado, acompanhado e ligado a uma próxima ação.',
  },
  {
    icon: Users,
    title: 'A tua equipa sabe o que fazer',
    text: 'Distribui tarefas, define responsáveis e acompanha o progresso da operação.',
  },
  {
    icon: TrendingUp,
    title: 'Os números ficam mais claros',
    text: 'Acompanha entradas, saídas, lucro, clientes mais rentáveis e desempenho comercial.',
  },
  {
    icon: Layers,
    title: 'Tudo no mesmo lugar',
    text: 'Clientes, vendas, tarefas, finanças, equipa e operação trabalham ligados numa única plataforma.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7e9a]">
            Porque escolher o KukuGest
          </div>
          <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-4xl">
            Mais organização para vender melhor e decidir com clareza.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col gap-5 rounded-[24px] border border-[#e5edf8] bg-white p-7 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a2540]">
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-black tracking-[-0.02em] text-[#0A2540]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f728e]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
