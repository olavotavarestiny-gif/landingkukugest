'use client';

import { useMemo, useState } from 'react';
import PricingCard from '@/components/landing/PricingCard';
import { Badge } from '@/components/ui/badge';
import {
  buildWhatsAppPlanLink,
  getPricingCatalog,
  getWorkspaceLabel,
  type PricingSource,
  type WorkspaceMode,
} from '@/lib/landing';

export default function PricingSection({
  initialWorkspaceMode = 'servicos',
  title = 'Planos simples para cada tipo de negócio',
  subtitle = 'Escolha o plano ideal para a fase do seu negócio e comece a gerir melhor com o KukuGest.',
  source = 'pricing',
  showFooter = true,
}: {
  initialWorkspaceMode?: WorkspaceMode;
  title?: string;
  subtitle?: string;
  source?: PricingSource;
  showFooter?: boolean;
}) {
  const [workspaceMode, setWorkspaceMode] = useState<WorkspaceMode>(initialWorkspaceMode);
  const plans = useMemo(() => getPricingCatalog(workspaceMode), [workspaceMode]);
  const workspaceClass = workspaceMode === 'comercio' ? 'workspace-comercio' : 'workspace-servicos';

  return (
    <section id="pricing" className={`${workspaceClass} scroll-mt-24 bg-white py-20 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-[#e5edf8] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-10 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)] md:px-8 md:py-12">
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(26,111,212,0.18),transparent_70%)] blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(240,106,26,0.18),transparent_70%)] blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-3xl text-center">
            <Badge className="border-[var(--workspace-primary-border)] bg-[var(--workspace-primary-soft)] text-[var(--workspace-primary)]">
              Planos KukuGest
            </Badge>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-[#0A2540] md:text-5xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-[#6b7e9a] md:text-lg">{subtitle}</p>
          </div>

          <div className="relative mt-8 flex justify-center">
            <div className="inline-flex rounded-full border border-[var(--workspace-primary-border)] bg-white p-1.5 shadow-sm">
              {(['servicos', 'comercio'] as const).map((mode) => {
                const active = workspaceMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setWorkspaceMode(mode)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                      active
                        ? 'bg-[var(--workspace-primary)] text-[var(--workspace-on-primary)]'
                        : 'text-[#6b7e9a] hover:bg-[var(--workspace-primary-soft)] hover:text-[var(--workspace-primary)]'
                    }`}
                  >
                    {getWorkspaceLabel(mode)}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`relative mt-10 grid gap-5 md:grid-cols-2 ${
              plans.length >= 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-3'
            }`}
          >
            {plans.map((plan) => (
              <PricingCard
                key={`${workspaceMode}-${plan.key}`}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlight={plan.highlight}
                badge={plan.badge}
                emphasize={plan.emphasize}
                buttonText={plan.buttonText}
                buttonHref={buildWhatsAppPlanLink({
                  planLabel: plan.name,
                  workspaceMode,
                  source,
                })}
              />
            ))}
          </div>

          {showFooter ? (
            <div className="relative mt-10 rounded-[28px] border border-[var(--workspace-primary-border)] bg-white/90 px-6 py-6 text-center shadow-sm">
              <p className="text-sm font-medium text-[var(--workspace-primary)]">
                Todos os planos incluem faturação completa. Mensagens em massa chegam em breve no plano Estabilidade.
              </p>
              <p className="mt-2 text-sm text-[#425466]">Precisa de algo personalizado? Crie a sua conta e fale connosco.</p>
              <div className="mt-5 flex justify-center">
                <a
                  href={buildWhatsAppPlanLink({
                    planLabel: 'Personalizado',
                    workspaceMode,
                    source: 'pricing',
                    note: 'Preciso de uma proposta personalizada.',
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#0A2540] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#15365a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540] focus-visible:ring-offset-2"
                >
                  Criar conta
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
