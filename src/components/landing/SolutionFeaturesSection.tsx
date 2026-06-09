import { Users, CalendarCheck, TrendingUp, ShoppingBag, FileText, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Feature = {
  key: string;
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  Icon: LucideIcon;
  iconBg: string;
};

const MAIN_FEATURES: Feature[] = [
  {
    key: 'crm',
    eyebrow: 'CRM & Processos de Venda',
    title: 'Transforma contactos em clientes com um processo claro.',
    text: 'Regista contactos, acompanha cada oportunidade no funil de vendas e garante que nenhum cliente fica esquecido. Cada lead tem histórico, etapa, tarefas e próximos passos.',
    bullets: [
      'Contactos, empresas e oportunidades organizadas',
      'Funil de vendas com etapas personalizáveis',
      'Tarefas, notas e histórico por cliente',
      'Acompanhamento comercial com responsáveis e prazos',
      'Relatórios de conversão, previsão e velocidade de fecho',
    ],
    Icon: Users,
    iconBg: 'bg-[linear-gradient(135deg,#0a1d33_0%,#1A6FD4_100%)]',
  },
  {
    key: 'operations',
    eyebrow: 'Operação & Equipa',
    title: 'Dá ritmo à equipa e clareza à operação.',
    text: 'Organiza tarefas, acompanha responsáveis, cria rotinas de trabalho e mantém todos alinhados sobre o que precisa de ser feito para vender, entregar e acompanhar melhor.',
    bullets: [
      'Tarefas com responsáveis, prioridades e prazos',
      'Calendário para acompanhar atividades importantes',
      'Chat interno para comunicação da equipa',
      'Histórico de ações por contacto e por processo',
      'Permissões por utilizador e controlo por equipa',
      'Onboarding simples para novos membros',
    ],
    Icon: CalendarCheck,
    iconBg: 'bg-[linear-gradient(135deg,#312e81_0%,#4f46e5_100%)]',
  },
  {
    key: 'finance',
    eyebrow: 'Finanças & Decisão',
    title: 'Sabe onde o dinheiro entra, sai e cresce.',
    text: 'Acompanha entradas, saídas, saldo, lucro e rentabilidade por cliente. Em vez de gerir no escuro, toma decisões com base nos números reais do negócio.',
    bullets: [
      'Entradas e saídas organizadas por categoria',
      'Saldo consolidado e lucro mensal',
      'Rentabilidade por cliente',
      'Controlo de valores pendentes e pagos',
      'Visão financeira simples para tomada de decisão',
    ],
    Icon: TrendingUp,
    iconBg: 'bg-[linear-gradient(135deg,#065f46_0%,#059669_100%)]',
  },
  {
    key: 'commerce',
    eyebrow: 'Vendas & Operação',
    title: 'Controla as vendas do dia sem perder a visão do negócio.',
    text: 'Para negócios com operação diária, o KukuGest ajuda a acompanhar vendas, caixa, produtos, stock e desempenho comercial num só lugar.',
    bullets: [
      'Vendas rápidas com carrinho',
      'Caixa por sessão',
      'Gestão de produtos e stock',
      'Alertas de stock mínimo',
      'Top produtos e desempenho diário',
      'Relatórios simples de vendas',
    ],
    Icon: ShoppingBag,
    iconBg: 'bg-[linear-gradient(135deg,#7c2d12_0%,#F06A1A_100%)]',
  },
];

const BILLING_FEATURE = {
  eyebrow: 'Faturação integrada',
  title: 'Emite documentos quando precisares, sem sair do sistema.',
  text: 'Além de organizar clientes, vendas e finanças, o KukuGest também permite emitir documentos comerciais de forma simples, mantendo a operação ligada ao resto da gestão.',
  bullets: [
    'Faturas e documentos comerciais integrados',
    'Clientes e vendas ligados à gestão',
    'Documentos prontos para enviar',
    'Organização entre vendas, finanças e faturação',
  ],
};

function FeatureIconBlock({ feature }: { feature: Feature }) {
  return (
    <div
      className={cn(
        'relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[36px]',
        feature.iconBg
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)]"
        aria-hidden="true"
      />
      <feature.Icon className="relative h-20 w-20 text-white/70" aria-hidden="true" />
    </div>
  );
}

export default function SolutionFeaturesSection() {
  return (
    <section id="solution" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Solution intro */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7e9a]">
            A solução completa
          </div>
          <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-4xl lg:text-5xl">
            Tudo ligado. Menos confusão. Mais controlo.
          </h2>
          <p className="mt-5 text-balance text-base font-light leading-7 text-[#5f728e] md:text-lg">
            O KukuGest liga clientes, vendas, tarefas, finanças e operação diária para que a tua empresa trabalhe com mais organização, velocidade e clareza.
          </p>
        </div>

        {/* Main features — alternating layout */}
        <div className="mt-20 space-y-20">
          {MAIN_FEATURES.map((feature, idx) => (
            <div
              key={feature.key}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Content — always first in HTML (mobile: shows first) */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-[#f4f8fd] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5f728e]">
                  {feature.eyebrow}
                </div>
                <h3 className="mt-4 text-balance text-2xl font-black tracking-[-0.03em] text-[#0A2540] md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#5f728e]">{feature.text}</p>
                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-[#425466]">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1A6FD4]"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Icon block — always second in HTML (mobile: shows second) */}
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <FeatureIconBlock feature={feature} />
              </div>
            </div>
          ))}
        </div>

        {/* Billing feature — smaller, de-emphasized */}
        <div className="mt-16 rounded-[28px] border border-[#e5edf8] bg-[#f8fbff] p-8 md:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7e9a]">
                {BILLING_FEATURE.eyebrow}
              </div>
              <h3 className="mt-4 text-xl font-black tracking-[-0.03em] text-[#0A2540] md:text-2xl">
                {BILLING_FEATURE.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f728e]">{BILLING_FEATURE.text}</p>
            </div>
            <ul className="space-y-3 lg:pt-[60px]">
              {BILLING_FEATURE.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-[#425466]">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6b7e9a]"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <FileText className="h-4 w-4 text-[#6b7e9a]" aria-hidden="true" />
            <p className="text-xs text-[#6b7e9a]">
              A faturação está integrada na plataforma — não é o foco principal, mas está sempre disponível quando precisares.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
