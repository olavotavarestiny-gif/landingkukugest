import { CheckCircle2 } from 'lucide-react';
import LandingHero from '@/components/landing/LandingHero';
import LandingVideoSection from '@/components/landing/LandingVideoSection';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionFeaturesSection from '@/components/landing/SolutionFeaturesSection';
import WorkspaceShowcase from '@/components/landing/WorkspaceShowcase';
import BenefitsSection from '@/components/landing/BenefitsSection';
import UseCasesSection from '@/components/landing/UseCasesSection';
import ComparisonSection from '@/components/landing/ComparisonSection';
import PricingSection from '@/components/landing/PricingSection';
import LandingFinalCta from '@/components/landing/LandingFinalCta';
import SiteFooter from '@/components/landing/SiteFooter';

const REGISTER_URL = 'https://app.kukugest.ao/register';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A2540] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar para o conteúdo
      </a>

      <LandingHero primaryCtaHref={REGISTER_URL} />

      <main id="main-content">
        <LandingVideoSection whatsappHref={REGISTER_URL} />

        <ProblemSection />

        <SolutionFeaturesSection />

        <WorkspaceShowcase serviceHref={REGISTER_URL} commerceHref={REGISTER_URL} />

        <BenefitsSection />

        <UseCasesSection />

        <ComparisonSection />

        <section className="bg-white pb-8 pt-20 md:pt-24">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7e9a]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#1A6FD4]" aria-hidden="true" />
              Planos e preços
            </div>
          </div>
        </section>

        <div id="pricing">
          <PricingSection
            initialWorkspaceMode="servicos"
            title="Começa simples. Evolui quando precisares."
            subtitle="Testa o KukuGest durante 14 dias e vê como a tua empresa pode organizar clientes, vendas, tarefas e finanças num só lugar."
            source="pricing"
            showFooter={false}
          />
        </div>

        <LandingFinalCta href={REGISTER_URL} />
      </main>

      <SiteFooter />
    </div>
  );
}
