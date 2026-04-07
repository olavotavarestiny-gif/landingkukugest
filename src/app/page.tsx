import { CheckCircle2 } from 'lucide-react';
import LandingFinalCta from '@/components/landing/LandingFinalCta';
import LandingHero from '@/components/landing/LandingHero';
import LandingVideoSection from '@/components/landing/LandingVideoSection';
import PricingSection from '@/components/landing/PricingSection';
import WorkspaceShowcase from '@/components/landing/WorkspaceShowcase';
import { buildWhatsAppPlanLink } from '@/lib/landing';

export default function HomePage() {
  const heroHref = buildWhatsAppPlanLink({
    source: 'hero',
    note: 'Quero conhecer a landing e perceber qual workspace faz mais sentido para o meu negócio.',
  });
  const demoHref = buildWhatsAppPlanLink({
    source: 'hero',
    note: 'Quero pedir uma demonstração do KukuGest.',
  });
  const serviceHref = buildWhatsAppPlanLink({
    source: 'workspace-services',
    workspaceMode: 'servicos',
    note: 'Quero falar sobre o workspace de serviços.',
  });
  const commerceHref = buildWhatsAppPlanLink({
    source: 'workspace-commerce',
    workspaceMode: 'comercio',
    note: 'Quero falar sobre o workspace de comércio.',
  });
  const videoHref = buildWhatsAppPlanLink({
    source: 'video',
    note: 'Quero ver uma apresentação guiada do CRM KukuGest.',
  });
  const finalHref = buildWhatsAppPlanLink({
    source: 'final-cta',
    note: 'Quero avançar com o KukuGest.',
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A2540] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar para o conteúdo
      </a>

      <LandingHero primaryCtaHref={heroHref} secondaryCtaHref={demoHref} />

      <main id="main-content">
        <LandingVideoSection whatsappHref={videoHref} />

        <WorkspaceShowcase serviceHref={serviceHref} commerceHref={commerceHref} />

        <section className="bg-white pb-8">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7e9a]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#1A6FD4]" aria-hidden="true" />
              Pricing claro para começar com confiança
            </div>
          </div>
        </section>

        <PricingSection
          initialWorkspaceMode="servicos"
          title="Planos pensados para o ritmo real do seu negócio"
          subtitle="Compare os workspaces, escolha o plano certo e fale connosco no WhatsApp para ativação guiada."
          source="pricing"
          showFooter={false}
        />

        <LandingFinalCta href={finalHref} />
      </main>
    </div>
  );
}
