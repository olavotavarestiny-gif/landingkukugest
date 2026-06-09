'use client';

import { useState } from 'react';
import Link from 'next/link';
import KukuGestLogo from '@/components/KukuGestLogo';
import SiteFooter from '@/components/landing/SiteFooter';

type Lang = 'pt' | 'en';

interface LegalSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

interface LegalContent {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const PRIVACY: Record<Lang, LegalContent> = {
  pt: {
    title: 'Política de Privacidade',
    updated: 'Última atualização: Abril de 2025',
    intro:
      'A KukuGest respeita a privacidade dos seus utilizadores. Esta política descreve como recolhemos, usamos e protegemos os seus dados pessoais, incluindo os dados obtidos através de APIs do Google.',
    sections: [
      {
        heading: 'Dados que recolhemos',
        body: [
          'Recolhemos o seu endereço de email Google, tokens de autenticação OAuth2, e dados de eventos do Google Calendar que o utilizador autoriza expressamente durante o processo de ligação da conta.',
        ],
      },
      {
        heading: 'Como usamos os dados do Google Calendar',
        body: [
          'Utilizamos o scope calendar.events exclusivamente para:',
        ],
        bullets: [
          'Criar, editar e eliminar eventos no seu Google Calendar quando realiza essas ações no KukuGest',
          'Ler eventos do seu Google Calendar para manter a sincronização bidirecional com o KukuGest',
        ],
      },
      {
        heading: '',
        body: [
          'Não vendemos, partilhamos, nem utilizamos os dados do Google Calendar para fins de publicidade ou qualquer outro propósito que não seja a funcionalidade descrita acima.',
        ],
      },
      {
        heading: 'Armazenamento e segurança',
        body: [
          'Os tokens OAuth2 são armazenados de forma encriptada (AES-256-GCM) nos nossos servidores. Não armazenamos o conteúdo dos seus eventos para além do necessário para a sincronização em tempo real.',
        ],
      },
      {
        heading: 'Revogação de acesso',
        body: [
          'Pode desligar a integração com o Google Calendar a qualquer momento nas definições da sua conta KukuGest. Também pode revogar o acesso diretamente em https://myaccount.google.com/permissions.',
        ],
      },
      {
        heading: 'Contacto',
        body: ['privacy@kukugest.ao'],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: April 2025',
    intro:
      'KukuGest is committed to protecting the privacy of our users. This policy describes how we collect, use, and protect your personal data, including data obtained through Google APIs.',
    sections: [
      {
        heading: 'Data we collect',
        body: [
          'We collect your Google email address, OAuth2 authentication tokens, and Google Calendar event data that you explicitly authorize during the account connection process.',
        ],
      },
      {
        heading: 'How we use Google Calendar data',
        body: [
          'We use the calendar.events scope exclusively to:',
        ],
        bullets: [
          'Create, edit, and delete events in your Google Calendar when you perform those actions in KukuGest',
          'Read events from your Google Calendar to maintain bidirectional sync with KukuGest',
        ],
      },
      {
        heading: '',
        body: [
          'We do not sell, share, or use Google Calendar data for advertising purposes or any purpose other than the functionality described above.',
        ],
      },
      {
        heading: 'Storage and security',
        body: [
          'OAuth2 tokens are stored encrypted (AES-256-GCM) on our servers. We do not store the content of your calendar events beyond what is required for real-time synchronization.',
        ],
      },
      {
        heading: 'Revoking access',
        body: [
          'You can disconnect the Google Calendar integration at any time in your KukuGest account settings. You may also revoke access directly at https://myaccount.google.com/permissions.',
        ],
      },
      {
        heading: 'Contact',
        body: ['privacy@kukugest.ao'],
      },
    ],
  },
};

const toggleBase = 'rounded-full px-4 py-1.5 text-sm font-semibold transition-colors';
const activeClass = `${toggleBase} bg-[#0a2540] text-white`;
const inactiveClass = `${toggleBase} text-[#6b7e9a] hover:bg-[#eef5fc] hover:text-[#0a2540]`;

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>('pt');
  const content = PRIVACY[lang];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#e5edf8] bg-white px-4 py-5 md:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <KukuGestLogo height={32} />
          </Link>
          <div className="inline-flex rounded-full border border-[#dce7f4] bg-[#f7fbff] p-1">
            <button onClick={() => setLang('pt')} className={lang === 'pt' ? activeClass : inactiveClass}>
              PT
            </button>
            <button onClick={() => setLang('en')} className={lang === 'en' ? activeClass : inactiveClass}>
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="text-3xl font-black tracking-[-0.04em] text-[#0a2540] md:text-4xl">
          {content.title}
        </h1>
        <p className="mt-2 text-sm text-[#6b7e9a]">{content.updated}</p>

        <p className="mt-8 text-base leading-7 text-[#425466]">{content.intro}</p>

        <div className="mt-10 space-y-8">
          {content.sections.map((section, i) => (
            <div key={i}>
              {section.heading ? (
                <h2 className="text-xl font-black tracking-[-0.02em] text-[#0a2540]">
                  {section.heading}
                </h2>
              ) : null}
              {section.body.map((para, j) => (
                <p key={j} className="mt-3 text-base leading-7 text-[#425466]">
                  {para}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 space-y-2 pl-4">
                  {section.bullets.map((bullet, k) => (
                    <li key={k} className="flex items-start gap-2 text-base leading-7 text-[#425466]">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f06a1a]" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
