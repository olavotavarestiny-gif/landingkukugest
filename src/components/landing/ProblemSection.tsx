import { Users, ClipboardList, BarChart2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const PROBLEM_CARDS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Users,
    title: 'Contactos sem acompanhamento',
    text: 'Leads chegam pelo WhatsApp, Instagram, telefone ou indicação, mas ficam esquecidos porque não existe um processo claro de seguimento.',
  },
  {
    icon: ClipboardList,
    title: 'Equipa sem rotina clara',
    text: 'Tarefas ficam soltas, ninguém sabe quem deve fazer o quê e oportunidades importantes perdem força por falta de responsabilidade.',
  },
  {
    icon: BarChart2,
    title: 'Decisões sem números',
    text: 'No fim do mês, é difícil saber o que entrou, o que saiu, quais clientes geram mais valor e onde estão os maiores problemas da operação.',
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7e9a]">
            O problema de muitas empresas
          </div>
          <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-4xl">
            Crescer sem organização custa caro.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5f728e] md:text-lg">
            Muitas empresas perdem clientes, esquecem seguimentos, trabalham com informação espalhada e tomam decisões sem saber exatamente o que está a acontecer no negócio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {PROBLEM_CARDS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col gap-5 rounded-[24px] border border-[#e5edf8] bg-white p-7 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0f4f9]">
                <Icon className="h-5 w-5 text-[#5f728e]" aria-hidden="true" />
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
