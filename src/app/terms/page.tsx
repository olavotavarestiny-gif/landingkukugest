'use client';

import { useState } from 'react';
import Link from 'next/link';
import KukuGestLogo from '@/components/KukuGestLogo';
import SiteFooter from '@/components/landing/SiteFooter';

type Lang = 'pt' | 'en';

interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalContent {
  title: string;
  updated: string;
  sections: LegalSection[];
}

const TERMS: Record<Lang, LegalContent> = {
  pt: {
    title: 'Termos de Uso',
    updated: 'Última atualização: Abril de 2025',
    sections: [
      {
        heading: '1. Aceitação dos Termos',
        body: [
          'Ao aceder e utilizar o KukuGest, o utilizador aceita ficar vinculado a estes Termos de Uso. Caso não concorde com algum dos termos aqui estabelecidos, deverá cessar imediatamente a utilização do serviço.',
        ],
      },
      {
        heading: '2. Descrição do Serviço',
        body: [
          'O KukuGest é uma plataforma de gestão empresarial (CRM) com faturação certificada pela AGT (Autoridade Geral Tributária de Angola), criada para empresas angolanas. O serviço inclui:',
          '– Emissão de faturas e recibos certificados pela AGT;',
          '– Gestão de clientes e pipeline de vendas;',
          '– Agendamento de tarefas e reuniões com sincronização bidirecional com o Google Calendar;',
          '– Notificações automáticas de eventos e prazos;',
          '– Gestão de equipa com permissões por nível de acesso.',
        ],
      },
      {
        heading: '3. Responsabilidades do Utilizador',
        body: [
          'O utilizador é responsável por:',
          '– Manter a confidencialidade das credenciais de acesso à sua conta;',
          '– Utilizar o serviço em conformidade com a legislação angolana aplicável;',
          '– Garantir que os dados introduzidos na plataforma são corretos e atualizados;',
          '– Não utilizar o serviço para fins ilegais, fraudulentos ou não autorizados;',
          '– Não tentar aceder a sistemas, dados ou funcionalidades sem autorização.',
        ],
      },
      {
        heading: '4. Limitação de Responsabilidade',
        body: [
          'O KukuGest é fornecido "tal como está", sem garantias expressas ou implícitas de qualquer tipo. Na máxima extensão permitida pela lei, a KukuGest não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes da utilização ou incapacidade de utilização do serviço.',
          'A KukuGest não garante a disponibilidade ininterrupta do serviço e reserva-se o direito de realizar manutenções ou atualizações que possam resultar em indisponibilidade temporária.',
        ],
      },
      {
        heading: '5. Lei Aplicável',
        body: [
          'Estes Termos de Uso são regidos pelas leis da República de Angola. Qualquer litígio decorrente da utilização do serviço será submetido à jurisdição exclusiva dos tribunais competentes de Angola.',
        ],
      },
      {
        heading: '6. Contacto',
        body: ['support@kukugest.ao'],
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    updated: 'Last updated: April 2025',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: [
          'By accessing and using KukuGest, you agree to be bound by these Terms of Use. If you do not agree with any of the terms set forth herein, you must immediately cease using the service.',
        ],
      },
      {
        heading: '2. Description of Service',
        body: [
          'KukuGest is a business management platform (CRM) with invoicing certified by the AGT (Autoridade Geral Tributária de Angola — Angola General Tax Authority), built for Angolan businesses. The service includes:',
          '– Issuing AGT-certified invoices and receipts;',
          '– Managing clients and sales pipeline;',
          '– Scheduling tasks and meetings with bidirectional Google Calendar synchronization;',
          '– Automatic notifications for events and deadlines;',
          '– Team management with role-based access control.',
        ],
      },
      {
        heading: '3. User Responsibilities',
        body: [
          'The user is responsible for:',
          '– Maintaining the confidentiality of their account credentials;',
          '– Using the service in compliance with applicable Angolan legislation;',
          '– Ensuring that data entered into the platform is accurate and up to date;',
          '– Not using the service for illegal, fraudulent, or unauthorized purposes;',
          '– Not attempting to access systems, data, or features without authorization.',
        ],
      },
      {
        heading: '4. Limitation of Liability',
        body: [
          'KukuGest is provided "as is", without warranties of any kind, express or implied. To the maximum extent permitted by law, KukuGest shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the service.',
          'KukuGest does not guarantee uninterrupted availability of the service and reserves the right to carry out maintenance or updates that may result in temporary unavailability.',
        ],
      },
      {
        heading: '5. Governing Law',
        body: [
          'These Terms of Use are governed by the laws of the Republic of Angola. Any dispute arising from the use of the service shall be submitted to the exclusive jurisdiction of the competent courts of Angola.',
        ],
      },
      {
        heading: '6. Contact',
        body: ['support@kukugest.ao'],
      },
    ],
  },
};

const toggleBase = 'rounded-full px-4 py-1.5 text-sm font-semibold transition-colors';
const activeClass = `${toggleBase} bg-[#0a2540] text-white`;
const inactiveClass = `${toggleBase} text-[#6b7e9a] hover:bg-[#eef5fc] hover:text-[#0a2540]`;

export default function TermsPage() {
  const [lang, setLang] = useState<Lang>('pt');
  const content = TERMS[lang];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#e5edf8] bg-white px-4 py-5 md:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <KukuGestLogo height={48} />
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

        <div className="mt-10 space-y-8">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-black tracking-[-0.02em] text-[#0a2540]">
                {section.heading}
              </h2>
              {section.body.map((para, j) => (
                <p key={j} className="mt-3 text-base leading-7 text-[#425466]">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
