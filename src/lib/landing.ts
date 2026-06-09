export type WorkspaceMode = 'servicos' | 'comercio';

export type PricingSource =
  | 'hero'
  | 'video'
  | 'workspace-services'
  | 'workspace-commerce'
  | 'pricing'
  | 'final-cta';

export type PricingTier = {
  key: 'starter' | 'growth' | 'pro' | 'expansion';
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  badge?: string;
  highlight?: boolean;
  emphasize?: boolean;
};

const REGISTER_URL = 'https://app.kukugest.ao/register';

const PRICING_CATALOG: Record<WorkspaceMode, PricingTier[]> = {
  servicos: [
    {
      key: 'starter',
      name: 'Inicial',
      price: '14.999 Kz',
      description: 'Para começar a organizar contactos, tarefas e primeiros processos de venda.',
      features: [
        '1 utilizador',
        'Até 500 contactos',
        'Contactos',
        'Tarefas',
        'Pipeline simples',
        'Faturação completa',
        'Painel básico',
      ],
      buttonText: 'Criar conta',
    },
    {
      key: 'growth',
      name: 'Crescimento',
      price: '34.999 Kz',
      description: 'Para pequenas equipas que precisam de mais controlo sobre clientes, vendas e rotina.',
      features: [
        'Até 5 utilizadores',
        'Até 5.000 contactos',
        'Tudo do Inicial',
        'Formulários',
        'Finanças',
        'Relatórios básicos',
        'Automações básicas',
      ],
      buttonText: 'Criar conta',
      badge: 'Mais escolhido',
      highlight: true,
    },
    {
      key: 'pro',
      name: 'Estabilidade',
      price: '64.999 Kz',
      description: 'Para empresas em crescimento que precisam de processos, automações, formulários e relatórios.',
      features: [
        'Até 15 utilizadores',
        'Contactos ilimitados',
        'Tudo do Crescimento',
        'Relatórios avançados',
        'Automações completas',
        'Permissões avançadas',
        'Mensagens em massa',
      ],
      buttonText: 'Criar conta',
      emphasize: true,
    },
  ],
  comercio: [
    {
      key: 'starter',
      name: 'Inicial',
      price: '9.999 Kz',
      description: 'Para pequenas lojas venderem com simplicidade.',
      features: [
        '1 utilizador',
        'Clientes',
        'Produtos e stock',
        'Tarefas',
        'Caixa',
      ],
      buttonText: 'Criar conta',
    },
    {
      key: 'growth',
      name: 'Crescimento',
      price: '22.999 Kz',
      description: 'Para lojas em crescimento com mais movimento.',
      features: [
        'Até 5 utilizadores',
        'Tudo do Inicial',
        'Faturação',
        'Venda rápida',
        'Finanças',
      ],
      buttonText: 'Criar conta',
      badge: 'Mais escolhido',
      highlight: true,
    },
    {
      key: 'pro',
      name: 'Estabilidade',
      price: '44.999 Kz',
      description: 'Para operações estruturadas com escala.',
      features: [
        'Até 15 utilizadores',
        'Tudo do Crescimento',
        'Multi-estabelecimento',
        'Relatórios avançados',
      ],
      buttonText: 'Criar conta',
      emphasize: true,
    },
    {
      key: 'expansion',
      name: 'Expansão',
      price: 'Sob cotação',
      description: 'Para grandes operações com necessidades à medida.',
      features: [
        'Utilizadores ilimitados',
        'Tudo da Estabilidade',
        'Limites personalizados',
        'Suporte dedicado',
      ],
      buttonText: 'Falar connosco',
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
  void planLabel;
  void workspaceMode;
  void source;
  void note;

  return REGISTER_URL;
}
