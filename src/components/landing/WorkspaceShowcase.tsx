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
    eyebrow: 'Modo Serviços',
    title: 'Para empresas de serviços.',
    description:
      'Agências, consultoras, escritórios, prestadores de serviço e fornecedores B2B. Ideal para captar leads, acompanhar propostas, fechar contratos e manter a equipa focada no próximo passo.',
    benefits: [
      'Dashboard com funil, receita e tarefas',
      'Processos de venda com etapas personalizáveis',
      'Contactos, empresas e oportunidades B2B',
      'Tarefas de acompanhamento comercial',
      'Relatórios de conversão e desempenho',
      'Receita recorrente e clientes ativos',
    ],
    imageSrc: '/landing/painel-servicos.png',
    imageAlt: 'Painel KukuGest modo serviços com CRM, funil de vendas e operação comercial.',
    cta: 'Criar conta',
    accent: 'bg-[#0A2540] text-white',
    panelTint: 'from-[#0A2540] via-[#1A6FD4] to-[#5EB0F5]',
  },
  comercio: {
    tabLabel: 'Comércio',
    eyebrow: 'Modo Comércio',
    title: 'Para comércio e operação diária.',
    description:
      'Lojas, distribuidores e negócios com vendas frequentes. Ideal para controlar vendas, produtos, caixa, stock e desempenho diário.',
    benefits: [
      'Dashboard com vendas do dia',
      'Vendas rápidas com carrinho',
      'Gestão de stock e produtos',
      'Sessão de caixa por estabelecimento',
      'Top produtos e desempenho comercial',
      'Relatórios de vendas e operação',
    ],
    imageSrc: '/landing/painel-comercio.png',
    imageAlt: 'Painel KukuGest modo comércio com vendas diárias, caixa e gestão de stock.',
    cta: 'Criar conta',
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
    <section id="workspaces" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6b7e9a]">
            Dois modos de trabalho
          </p>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-5xl">
            O KukuGest adapta-se ao teu negócio.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5f728e] md:text-lg">
            Escolhe o modo que melhor representa a tua operação. O sistema organiza a experiência para serviços, comércio ou equipas que precisam de controlar clientes, vendas e rotina.
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
            <h3 className="mt-5 max-w-[16ch] text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-5xl">
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
