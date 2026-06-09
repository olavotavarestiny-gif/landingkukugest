import Link from 'next/link';
import KukuGestLogo from '@/components/KukuGestLogo';

const FOOTER_NAV = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#solution' },
      { label: 'Planos', href: '#pricing' },
      { label: 'Trial grátis', href: 'https://app.kukugest.ao/register' },
      { label: 'Atualizações', href: '#' },
    ],
  },
  {
    title: 'Modos',
    links: [
      { label: 'Modo Serviços', href: '#workspaces' },
      { label: 'Modo Comércio', href: '#workspaces' },
      { label: 'CRM & Vendas', href: '#solution' },
      { label: 'Finanças', href: '#solution' },
      { label: 'Operação Comercial', href: '#solution' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'WhatsApp', href: 'https://wa.me/244942277576' },
      { label: 'Email de suporte', href: 'mailto:suporte@kukugest.ao' },
      { label: 'Termos de serviço', href: '/terms' },
      { label: 'Política de privacidade', href: '/privacy' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a1d33] text-white/60">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-[280px]">
            <Link href="/" className="inline-flex items-center">
              <KukuGestLogo height={48} />
            </Link>
            <p className="mt-4 text-sm leading-6 text-white/50">
              Plataforma de gestão para empresas angolanas organizarem clientes, vendas, tarefas, finanças e operação num só lugar.
            </p>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-3 text-sm text-white/35 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} KukuGest. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:suporte@kukugest.ao" className="transition-colors hover:text-white/70">
                suporte@kukugest.ao
              </a>
              <a href="mailto:comercial@kukugest.ao" className="transition-colors hover:text-white/70">
                comercial@kukugest.ao
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
