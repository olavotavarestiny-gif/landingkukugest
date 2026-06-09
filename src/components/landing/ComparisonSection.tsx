import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const REGISTER_URL = 'https://app.kukugest.ao/register';

const FEATURE_ROWS = [
  'CRM para gerir contactos e leads',
  'Pipeline / processos de venda',
  'Tarefas para equipa comercial',
  'Faturação adaptada ao mercado angolano',
  'Gestão financeira interna',
  'Vendas rápidas / POS',
  'Caixa por sessão',
  'Formulários para captar leads',
  'Automações comerciais',
  'Templates por tipo de negócio',
  'Experiência simples para pequenas empresas',
  'Foco em vender todos os dias',
];

const COMPETITORS: { name: string; values: string[] }[] = [
  {
    name: 'Primavera / Cegid',
    values: [
      'Foco ERP', 'Não é o foco', 'Não é o foco', 'Depende',
      'Foco ERP', 'Foco ERP', 'Depende', 'Não é o foco',
      'Não é o foco', 'Não é o foco', 'Limitado', 'Não é o foco',
    ],
  },
  {
    name: 'Vendus',
    values: [
      'Não é o foco', 'Não é o foco', 'Não é o foco', 'Foco faturação',
      'Parcial', 'Parcial', 'Parcial', 'Não é o foco',
      'Não é o foco', 'Não é o foco', 'Parcial', 'Foco faturação',
    ],
  },
  {
    name: 'KeyInvoice',
    values: [
      'Não é o foco', 'Não é o foco', 'Não é o foco', 'Foco faturação',
      'Limitado', 'Não é o foco', 'Não é o foco', 'Não é o foco',
      'Não é o foco', 'Não é o foco', 'Parcial', 'Foco faturação',
    ],
  },
  {
    name: 'AfroGest',
    values: [
      'Parcial', 'Não é o foco', 'Não é o foco', 'Parcial',
      'Parcial', 'Parcial', 'Parcial', 'Não é o foco',
      'Não é o foco', 'Não é o foco', 'Parcial', 'Parcial',
    ],
  },
  {
    name: 'Kwanzar',
    values: [
      'Limitado', 'Não é o foco', 'Não é o foco', 'Depende',
      'Não é o foco', 'Não é o foco', 'Não é o foco', 'Não é o foco',
      'Não é o foco', 'Não é o foco', 'Parcial', 'Não é o foco',
    ],
  },
];

function CompetitorValue({ value }: { value: string }) {
  const isPartial = value === 'Parcial' || value === 'Depende';
  return (
    <span
      className={cn(
        'text-xs font-medium',
        isPartial ? 'text-white/50' : 'text-white/40'
      )}
    >
      {value}
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[linear-gradient(135deg,#0a1d33_0%,#123f73_42%,#0e2b4d_72%,#081524_100%)] text-white">
      {/* Depth layers */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(94,176,245,0.14) 0%, transparent 55%), radial-gradient(circle at bottom right, rgba(26,111,212,0.18) 0%, transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="border-white/20 bg-white/10 text-white/80 uppercase tracking-[0.22em]">
            A escolha mais completa
          </Badge>
          <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">
            Porquê escolher o KukuGest?
          </h2>
          <p className="mt-5 text-balance text-base font-light leading-7 text-white/70 md:text-lg">
            Enquanto muitas soluções se concentram apenas em faturação ou gestão tradicional,
            o KukuGest une CRM, faturação, finanças, vendas, tarefas e operação numa única
            plataforma simples para empresas angolanas.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-14 hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[900px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-[220px] pb-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-white/40" scope="col">
                  Funcionalidade
                </th>
                {/* KukuGest header */}
                <th
                  className="w-[130px] rounded-t-2xl bg-[#1A6FD4] px-4 pb-5 pt-4 text-center text-sm font-black text-white"
                  scope="col"
                >
                  KukuGest
                </th>
                {COMPETITORS.map((c) => (
                  <th
                    key={c.name}
                    className="w-[110px] pb-4 pt-1 text-center text-xs font-semibold text-white/40"
                    scope="col"
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURE_ROWS.map((feature, rowIdx) => {
                const isLast = rowIdx === FEATURE_ROWS.length - 1;
                return (
                  <tr
                    key={feature}
                    className="border-t border-white/[0.07] transition-colors hover:bg-white/[0.03]"
                  >
                    <td className="py-3.5 pr-4 text-sm font-medium text-white/75">
                      {feature}
                    </td>
                    {/* KukuGest cell */}
                    <td
                      className={cn(
                        'border-x border-[#1A6FD4]/30 bg-[#1A6FD4]/10 px-4 py-3.5 text-center',
                        isLast && 'rounded-b-2xl'
                      )}
                    >
                      <CheckCircle2
                        className="mx-auto h-5 w-5 text-emerald-400"
                        aria-label="Disponível"
                      />
                    </td>
                    {/* Competitor cells */}
                    {COMPETITORS.map((c) => (
                      <td key={c.name} className="px-2 py-3.5 text-center">
                        <CompetitorValue value={c.values[rowIdx]} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-12 space-y-3 lg:hidden">
          {FEATURE_ROWS.map((feature) => (
            <div
              key={feature}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-5 py-4"
            >
              <span className="text-sm font-medium text-white/80">{feature}</span>
              <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span className="text-xs font-semibold text-emerald-300">KukuGest</span>
              </div>
            </div>
          ))}
          <p className="pt-2 text-center text-xs text-white/40">
            Concorrentes cobrem apenas parte destas funcionalidades
          </p>
        </div>

        {/* Closing quote */}
        <p className="mx-auto mt-14 max-w-2xl text-balance text-center text-base font-light italic leading-7 text-white/70 md:text-lg">
          "O KukuGest não foi criado apenas para emitir faturas. Foi criado para ajudar empresas
          a vender, organizar clientes, controlar a equipa e tomar decisões melhores todos os dias."
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="min-w-[200px] justify-center rounded-[20px] bg-[#F06A1A] text-white shadow-[0_24px_56px_-24px_rgba(240,106,26,0.8)] hover:bg-[#db5f16]"
          >
            Começar agora
          </Button>
          <Button
            href="#video"
            size="lg"
            variant="outline"
            className="min-w-[200px] justify-center rounded-[20px] border-white/20 bg-white/[0.07] font-medium text-white backdrop-blur-md hover:border-white/40 hover:bg-white/15"
          >
            Ver demonstração
          </Button>
        </div>
      </div>
    </section>
  );
}
