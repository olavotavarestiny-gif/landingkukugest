import { FileText, Users, Calendar, Bell, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: FileText, label: 'Emitir faturas e recibos certificados pela AGT' },
  { icon: Users,    label: 'Gerir clientes e pipeline de vendas' },
  { icon: Calendar, label: 'Agendar tarefas e reuniões sincronizadas com o Google Calendar' },
  { icon: Bell,     label: 'Receber notificações automáticas de eventos e prazos' },
  { icon: Shield,   label: 'Gerir a sua equipa com permissões por nível de acesso' },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7e9a]">
            Funcionalidades
          </div>
          <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-4xl">
            O que pode fazer com o KukuGest
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(5)]:col-start-2">
          {FEATURES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col gap-4 rounded-[24px] border border-[#e5edf8] bg-white p-7 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.25)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a2540]">
                <Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <p className="text-base font-semibold leading-6 text-[#0a2540]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
