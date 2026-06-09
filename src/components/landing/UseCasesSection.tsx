import { TrendingUp, LayoutDashboard, ShoppingBag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const USE_CASES: { icon: LucideIcon; eyebrow: string; title: string; text: string; iconBg: string }[] = [
  {
    icon: TrendingUp,
    eyebrow: 'Para',
    title: 'Equipas comerciais',
    text: 'Organiza leads, acompanha propostas e garante que cada oportunidade tem um próximo passo claro.',
    iconBg: 'bg-[linear-gradient(135deg,#0a1d33,#1A6FD4)]',
  },
  {
    icon: LayoutDashboard,
    eyebrow: 'Para',
    title: 'Gestores e fundadores',
    text: 'Vê tarefas, vendas, finanças e desempenho sem depender de folhas soltas ou mensagens perdidas.',
    iconBg: 'bg-[linear-gradient(135deg,#312e81,#4f46e5)]',
  },
  {
    icon: ShoppingBag,
    eyebrow: 'Para',
    title: 'Comércio e operação',
    text: 'Controla vendas rápidas, caixa, produtos e stock com uma rotina mais simples e organizada.',
    iconBg: 'bg-[linear-gradient(135deg,#7c2d12,#F06A1A)]',
  },
];

export default function UseCasesSection() {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7e9a]">
            Feito para problemas reais
          </div>
          <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-4xl">
            Para empresas que querem sair da gestão improvisada.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {USE_CASES.map(({ icon: Icon, eyebrow, title, text, iconBg }) => (
            <div
              key={title}
              className="flex flex-col gap-5 rounded-[24px] border border-[#e5edf8] bg-white p-7 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.2)]"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7e9a]">
                  {eyebrow}
                </p>
                <h3 className="mt-1 text-lg font-black tracking-[-0.02em] text-[#0A2540]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f728e]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
