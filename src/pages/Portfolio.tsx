import { useState } from 'react';
import { videoPorAmbiente } from '../data/videos';

const whatsappUrl =
  'https://wa.me/5511987654321?text=Ol%C3%A1%20J%C3%81%20M%C3%B3veis!%20Gostaria%20de%20ver%20mais%20projetos%20e%20solicitar%20um%20or%C3%A7amento.';

const projetos = [
  {
    id: 1,
    titulo: 'Cozinha Moderna',
    categoria: 'cozinha',
    descricao: 'Cozinha planejada com tons neutros e design minimalista.',
    imagem:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb',
    video: videoPorAmbiente.cozinha,
  },
  {
    id: 2,
    titulo: 'Dormitório Elegante',
    categoria: 'dormitorio',
    descricao: 'Dormitório com guarda-roupa, nichos e acabamento sob medida.',
    imagem:
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb',
    video: videoPorAmbiente.dormitorio,
  },
  {
    id: 3,
    titulo: 'Closet Luxuoso',
    categoria: 'closet',
    descricao: 'Closet com divisões inteligentes e iluminação planejada.',
    imagem:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb',
    video: videoPorAmbiente.closet,
  },
  {
    id: 4,
    titulo: 'Banheiro Planejado',
    categoria: 'banheiro',
    descricao: 'Gabinete suspenso e soluções resistentes à umidade.',
    imagem:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb',
    video: videoPorAmbiente.banheiro,
  },
  {
    id: 5,
    titulo: 'Home Office Produtivo',
    categoria: 'homeoffice',
    descricao: 'Mesa, prateleiras e armazenamento para uma rotina mais eficiente.',
    imagem:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb',
    video: videoPorAmbiente.homeOffice,
  },
  {
    id: 6,
    titulo: 'Painel de TV e Estante',
    categoria: 'outras',
    descricao: 'Painel com rack integrado, nichos e composição decorativa.',
    imagem:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb',
    video: videoPorAmbiente.sala,
  },
];

const filtros = [
  ['todos', 'Todos os Projetos'],
  ['cozinha', 'Cozinhas'],
  ['dormitorio', 'Dormitórios'],
  ['closet', 'Closets'],
  ['banheiro', 'Banheiros'],
  ['homeoffice', 'Home Offices'],
  ['outras', 'Outros'],
];

export default function Portfolio() {
  const [filtro, setFiltro] = useState('todos');
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const projetosFiltrados =
    filtro === 'todos' ? projetos : projetos.filter((projeto) => projeto.categoria === filtro);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-primary to-green-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Nosso Portfólio</h1>
          <p className="text-lg text-green-50">
            Confira alguns projetos realizados e inspire-se para o seu.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            ['500+', 'Projetos Entregues'],
            ['300+', 'Clientes Satisfeitos'],
            ['100%', 'Satisfação Garantida'],
            ['50+', 'Bairros Atendidos'],
          ].map(([valor, label]) => (
            <div key={label} className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                {valor}
              </h3>
              <p className="font-semibold text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {filtros.map(([valor, label]) => (
              <button
                key={valor}
                onClick={() => setFiltro(valor)}
                className={`rounded-full px-6 py-2 font-semibold transition ${
                  filtro === valor
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projetosFiltrados.map((projeto) => (
              <article
                key={projeto.id}
                className="overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="group relative">
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="h-56 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all group-hover:bg-opacity-50">
                    <button
                      onClick={() => setVideoModal(projeto.video)}
                      className="rounded-lg bg-white px-4 py-2 font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      ▶️ Ver Vídeo
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {projeto.titulo}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">{projeto.descricao}</p>
                  <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-primary">
                    {projeto.categoria}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Clientes Satisfeitos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              ['Juliana Rocha', 'Cozinha completa', 'Adorei o resultado! A equipe foi profissional, cuidadosa e pontual.'],
              ['Roberto Silva', 'Dormitório + Closet', 'Qualidade excepcional. Cada detalhe foi pensado com muito cuidado.'],
              ['Camila Oliveira', 'Home Office', 'Meu espaço de trabalho ficou lindo, organizado e funcional.'],
            ].map(([nome, projeto, depoimento]) => (
              <article key={nome} className="rounded-lg border-l-4 border-primary bg-white p-8">
                <div className="mb-4 flex gap-1 text-2xl">⭐⭐⭐⭐⭐</div>
                <p className="mb-4 italic text-gray-700">"{depoimento}"</p>
                <p className="font-bold text-gray-900">{nome}</p>
                <p className="text-sm text-gray-600">{projeto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Seu Projeto Pode Estar Aqui</h2>
          <p className="mb-8 text-lg text-green-50">
            Transforme seu espaço com a JA Móveis. Solicite um orçamento gratuito agora.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-primary transition hover:bg-green-50"
          >
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </section>

      {videoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="text-xl font-bold text-gray-900">Vídeo do Projeto</h3>
              <button
                onClick={() => setVideoModal(null)}
                className="text-2xl text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onCanPlay={(event) => {
                  event.currentTarget.play().catch(() => undefined);
                }}
                className="max-h-[70vh] w-full rounded"
                src={videoModal}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
