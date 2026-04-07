import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { MessageCircleMore, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VIDEO_RELATIVE_PATH = 'public/landing/crm-apresentacao.mp4';
const VIDEO_PUBLIC_PATH = '/landing/crm-apresentacao.mp4';
const VIDEO_POSTER_PATH = '/landing/painel-servicos.png';

function hasLandingVideo() {
  const absolutePath = path.join(process.cwd(), VIDEO_RELATIVE_PATH);
  return fs.existsSync(absolutePath);
}

export default function LandingVideoSection({
  whatsappHref,
}: {
  whatsappHref: string;
}) {
  const videoAvailable = hasLandingVideo();

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6b7e9a]">Vídeo de apresentação</p>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-[-0.04em] text-[#0A2540] md:text-5xl">
            Veja como funciona o KukuGest.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5f728e] md:text-lg">
            Uma vista simples do produto antes de entrar nos detalhes das áreas de trabalho.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[34px] border border-[#e5edf8] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-4 shadow-[0_32px_90px_-58px_rgba(15,23,42,0.45)] md:p-5">
          <div className="relative overflow-hidden rounded-[26px] border border-[#dce6f3] bg-[#081524]">
            {videoAvailable ? (
              <video
                className="block aspect-[16/9] h-auto w-full"
                controls
                preload="metadata"
                playsInline
                poster={VIDEO_POSTER_PATH}
              >
                <source src={VIDEO_PUBLIC_PATH} type="video/mp4" />
                O seu navegador não suporta vídeo HTML5.
              </video>
            ) : (
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/landing/landing3example.webp"
                  alt="Pré-visualização estilizada da apresentação do CRM KukuGest."
                  width={640}
                  height={3444}
                  sizes="100vw"
                  className="h-full w-full object-cover object-top opacity-75"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,21,36,0.15)_0%,rgba(8,21,36,0.72)_100%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/12 backdrop-blur">
                    <PlayCircle className="h-10 w-10 text-white" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                    Vídeo de apresentação do CRM
                  </p>
                  <h3 className="mt-3 max-w-[14ch] text-balance text-2xl font-black tracking-[-0.03em] text-white md:text-4xl">
                    A área de vídeo já está preparada para receber o ficheiro final.
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/78 md:text-base">
                    Assim que o ficheiro `crm-apresentacao.mp4` for colocado em `public/landing`, esta secção passa a mostrar o vídeo real automaticamente.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-[24px] border border-[#e8eef7] bg-white px-5 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#0A2540]">
                Comece hoje a organizar o seu negócio
              </p>
              <p className="mt-1 text-sm text-[#5f728e]">
                Teste grátis por 30 dias e veja a diferença no seu dia a dia
              </p>
            </div>
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="bg-[#0A2540] text-white hover:bg-[#15365a]"
            >
              <MessageCircleMore className="mr-2 h-4 w-4" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
