export type WorkspaceMode = 'servicos' | 'comercio';

export type PricingSource =
  | 'hero'
  | 'video'
  | 'workspace-services'
  | 'workspace-commerce'
  | 'pricing'
  | 'final-cta';

export type PricingTier = {
  key: 'starter' | 'growth' | 'pro';
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  badge?: string;
  highlight?: boolean;
  emphasize?: boolean;
};

const WHATSAPP_NUMBER = '244942277576';

const PRICING_CATALOG: Record<WorkspaceMode, PricingTier[]> = {
  servicos: [
    {
      key: 'starter',
      name: 'Inicial',
      price: '9.999 Kz',
      description: 'Para quem está a começar a organizar o negócio',
      features: [
        '1 utilizador',
        'Até 500 contactos',
        'Contactos',
        'Tarefas',
        'Pipeline simples',
        'Faturação completa',
        'Painel básico',
      ],
      buttonText: 'Escolher plano no WhatsApp',
    },
    {
      key: 'growth',
      name: 'Crescimento',
      price: '29.999 Kz',
      description: 'Para empresas em crescimento que precisam de mais controlo',
      features: [
        'Até 5 utilizadores',
        'Até 5.000 contactos',
        'Tudo do Inicial',
        'Formulários',
        'Finanças',
        'Relatórios básicos',
        'Automações básicas',
      ],
      buttonText: 'Escolher plano no WhatsApp',
      badge: 'Mais escolhido',
      highlight: true,
    },
    {
      key: 'pro',
      name: 'Estabilidade',
      price: '54.999 Kz',
      description: 'Para empresas estruturadas que querem crescer com mais inteligência',
      features: [
        'Utilizadores ilimitados',
        'Contactos ilimitados',
        'Tudo do Crescimento',
        'Relatórios avançados',
        'Automações completas',
        'Permissões avançadas',
        'Mensagens em massa (Em breve)',
      ],
      buttonText: 'Escolher plano no WhatsApp',
      emphasize: true,
    },
  ],
  comercio: [
    {
      key: 'starter',
      name: 'Inicial',
      price: '9.999 Kz',
      description: 'Para pequenas lojas que precisam de vender com simplicidade',
      features: [
        '1 utilizador',
        'Até 300 clientes',
        'Vendas rápidas',
        'Produtos',
        'Clientes',
        'Faturação completa',
      ],
      buttonText: 'Escolher plano no WhatsApp',
    },
    {
      key: 'growth',
      name: 'Crescimento',
      price: '29.999 Kz',
      description: 'Para lojas em crescimento com mais movimento',
      features: [
        'Até 5 utilizadores',
        'Até 3.000 clientes',
        'Tudo do Inicial',
        'Caixa',
        'Stock',
        'Relatórios básicos',
      ],
      buttonText: 'Escolher plano no WhatsApp',
      badge: 'Mais escolhido',
      highlight: true,
    },
    {
      key: 'pro',
      name: 'Estabilidade',
      price: '54.999 Kz',
      description: 'Para operações estruturadas com controlo total',
      features: [
        'Utilizadores ilimitados',
        'Clientes ilimitados',
        'Tudo do Crescimento',
        'Multi-estabelecimento',
        'Gestão de equipa',
        'Relatórios avançados',
        'Mensagens em massa (Em breve)',
      ],
      buttonText: 'Escolher plano no WhatsApp',
      emphasize: true,
    },
  ],
};

export function getWorkspaceLabel(mode: WorkspaceMode) {
  return mode === 'comercio' ? 'Comércio' : 'Serviços';
}

export function getPricingCatalog(mode: WorkspaceMode) {
  return PRICING_CATALOG[mode];
}

export function buildWhatsAppPlanLink({
  planLabel,
  workspaceMode,
  source,
  note,
}: {
  planLabel?: string;
  workspaceMode?: WorkspaceMode;
  source?: PricingSource;
  note?: string;
}) {
  const planText = planLabel ? ` Quero saber mais sobre o plano ${planLabel}.` : '';
  const workspaceText = workspaceMode ? ` Workspace: ${getWorkspaceLabel(workspaceMode)}.` : '';
  const sourceText = source ? ` Origem: ${source}.` : '';
  const noteText = note ? ` ${note}` : '';
  const message = `Olá, quero conhecer o KukuGest.${planText}${workspaceText}${sourceText}${noteText}`.trim();

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
