'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type WorkspaceKey = 'servicos' | 'comercio';

const WORKSPACE_CONTENT: Record<
  WorkspaceKey,
  {
    tabLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    benefits: string[];
    imageSrc: string;
    imageAlt: string;
    cta: string;
    accent: string;
    panelTint: string;
  }
> = {
  servicos: {
    tabLabel: 'Serviços',
    eyebrow: 'Área de trabalho para serviços',
    title: 'Perfeito para negócios que vendem com acompanhamento, relação e organização comercial.',
    description:
      'Esta área foi desenhada para equipas que precisam gerir clientes, acompanhar processos de venda, distribuir tarefas e faturar sem perder visibilidade.',
    benefits: [
      'Acompanhe clientes e negociações num pipeline claro.',
      'Organize tarefas, follow-up e prioridades da equipa.',
      'Emita faturação completa sem sair do fluxo comercial.',
      'Tenha relatórios para perceber produtividade e receita.',
      'Centralize o trabalho diário num painel simples e acionável.',
    ],
    imageSrc: '/landing/painel-servicos.png',
    imageAlt: 'Área de trabalho de serviços do KukuGest com painel comercial, receita mensal e organização diária.',
    cta: 'Falar sobre Serviços',
    accent: 'bg-[#0A2540] text-white',
    panelTint: 'from-[#0A2540] via-[#1A6FD4] to-[#5EB0F5]',
  },
  comercio: {
    tabLabel: 'Comércio',
    eyebrow: 'Área de trabalho para comércio',
    title: 'Pensado para operações com caixa, venda rápida, stock e movimento constante ao longo do dia.',
    description:
      'Esta área ajuda lojas e equipas comerciais a responder com rapidez, controlar produtos, acompanhar o caixa e manter a operação organizada num só painel.',
    benefits: [
      'Veja o estado do caixa e da operação logo na primeira vista.',
      'Acelere vendas com fluxo de venda rápida.',
      'Acompanhe produtos, stock e alertas operacionais.',
      'Controle clientes, equipa e faturação no mesmo ambiente.',
      'Ganhe ritmo diário sem perder controlo da gestão.',
    ],
    imageSrc: '/landing/painel-comercio.png',
    imageAlt: 'Área de trabalho de comércio do KukuGest com resumo diário, caixa, stock e ações rápidas.',
    cta: 'Falar sobre Comércio',
    accent: 'bg-[#F06A1A] text-white',
    panelTint: 'from-[#F06A1A] via-[#FF9D4D] to-[#FFD0A2]',
  },
};

export default function WorkspaceShowcase({
  serviceHref,
  commerceHref,
}: {
  serviceHref: string;
  commerceHref: string;
}) {
  const [activeWorkspace, setActiveWorkspace] = useState<WorkspaceKey>('servicos');

  const workspace = useMemo(() => WORKSPACE_CONTENT[activeWorkspace], [activeWorkspace]);
  const href = activeWorkspace === 'servicos' ? serviceHref : commerceHref;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6b7e9a]">Áreas de trabalho</p>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-5xl">
            Escolha a área que melhor representa a forma como o seu negócio funciona.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5f728e] md:text-lg">
            O KukuGest adapta a operação consoante o tipo de negócio, com duas áreas de trabalho pensadas para rotinas diferentes.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex w-full max-w-2xl gap-2 overflow-x-auto rounded-full border border-[#dce7f4] bg-[#f7fbff] p-2 shadow-sm">
            {(['servicos', 'comercio'] as const).map((key) => {
              const active = activeWorkspace === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveWorkspace(key)}
                  className={`min-w-[180px] rounded-full px-5 py-3 text-sm font-semibold transition-colors md:flex-1 ${
                    active
                      ? workspace.accent
                      : 'bg-white text-[#6b7e9a] hover:bg-[#eef5fc] hover:text-[#0A2540]'
                  }`}
                  aria-pressed={active}
                >
                  {WORKSPACE_CONTENT[key].tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-10 rounded-[36px] border border-[#e5edf8] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-8 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.45)] md:px-8 md:py-10 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-14">
          <div>
            <div className={`inline-flex rounded-full bg-gradient-to-r px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white ${workspace.panelTint}`}>
              {workspace.eyebrow}
            </div>
            <h3 className="mt-5 max-w-[14ch] text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-5xl">
              {workspace.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#5f728e]">{workspace.description}</p>

            <ul className="mt-6 space-y-3">
              {workspace.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#e8eef7] bg-white px-4 py-3 text-sm text-[#425466]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--workspace-primary)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className={activeWorkspace === 'servicos' ? 'bg-[#0A2540] text-white hover:bg-[#15365a]' : 'bg-[#F06A1A] text-white hover:bg-[#d45f18]'}
              >
                {workspace.cta}
              </Button>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#dde7f4] bg-white p-3 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.5)] md:p-4">
              <div className={`absolute inset-x-8 top-0 h-24 rounded-full bg-gradient-to-r opacity-20 blur-3xl ${workspace.panelTint}`} aria-hidden="true" />
              <Image
                src={workspace.imageSrc}
                alt={workspace.imageAlt}
                width={2940}
                height={activeWorkspace === 'servicos' ? 1606 : 1602}
                sizes="(max-width: 1024px) 92vw, 52vw"
                loading="lazy"
                className="relative h-auto w-full rounded-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
