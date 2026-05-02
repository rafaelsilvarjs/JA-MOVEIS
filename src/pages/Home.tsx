import { useEffect, useState } from 'react';
import { videoPorAmbiente } from '../data/videos';

type ItemComVideo = {
  id: number;
  titulo: string;
  descricao: string;
  beneficios: string[];
  icone: string;
  imagem: string;
  imagens: string[];
  video: string;
};

type Destaque = {
  categoria: string;
  imagem: string;
  imagens: string[];
  titulo: string;
  legenda: string;
};

const whatsappBase =
  'https://wa.me/5511987654321?text=Ol%C3%A1%20J%C3%81%20M%C3%B3veis!%20Gostaria%20de%20um%20or%C3%A7amento.';

const servicos: ItemComVideo[] = [
  {
    id: 1,
    titulo: 'Armários Planejados',
    descricao:
      'Armários sob medida para aproveitar cada centímetro com organização e acabamento premium.',
    beneficios: ['Layout otimizado', 'Acabamento premium', 'Maximiza espaço', 'Design moderno'],
    icone: '🚪',
    imagem: '/servicos/armarios/foto-01.jpeg',
    imagens: [
      '/servicos/armarios/foto-01.jpeg',
      '/servicos/armarios/foto-02.jpeg',
      '/servicos/armarios/foto-03.jpeg',
      '/servicos/armarios/foto-04.jpeg',
      '/servicos/armarios/foto-05.jpeg',
      '/servicos/armarios/foto-06.jpeg',
      '/servicos/armarios/foto-07.jpeg',
    ],
    video: videoPorAmbiente.cozinha,
  },
  {
    id: 2,
    titulo: 'Balcões e Gabinetes',
    descricao:
      'Balcões, gabinetes e apoios planejados para cozinhas, banheiros e áreas funcionais.',
    beneficios: ['Resistência', 'Aproveitamento total', 'Fácil manutenção', 'Acabamento sob medida'],
    icone: '🧰',
    imagem: '/servicos/balcoes/foto-01.jpeg',
    imagens: [
      '/servicos/balcoes/foto-01.jpeg',
      '/servicos/balcoes/foto-02.jpeg',
      '/servicos/balcoes/foto-03.jpeg',
      '/servicos/balcoes/foto-04.jpeg',
      '/servicos/balcoes/foto-05.jpeg',
      '/servicos/balcoes/foto-06.jpeg',
      '/servicos/balcoes/foto-07.jpeg',
    ],
    video: videoPorAmbiente.banheiro,
  },
  {
    id: 3,
    titulo: 'Closets',
    descricao:
      'Closets personalizados para organizar roupas, acessórios e objetos com elegância.',
    beneficios: ['Máxima organização', 'Sistema modular', 'Acabamento impecável', 'Designs exclusivos'],
    icone: '👔',
    imagem: '/servicos/closets/foto-01.jpeg',
    imagens: ['/servicos/closets/foto-01.jpeg', '/servicos/closets/foto-02.jpeg'],
    video: videoPorAmbiente.closet,
  },
  {
    id: 4,
    titulo: 'Dormitórios Planejados',
    descricao:
      'Dormitórios completos com guarda-roupas, módulos e soluções para uma rotina mais prática.',
    beneficios: ['Organização perfeita', 'Conforto garantido', 'Estética elegante', 'Funcionalidade total'],
    icone: '🛏️',
    imagem: '/servicos/dormitorios/foto-01.jpeg',
    imagens: [
      '/servicos/dormitorios/foto-01.jpeg',
      '/servicos/dormitorios/foto-02.jpeg',
    ],
    video: videoPorAmbiente.dormitorio,
  },
  {
    id: 5,
    titulo: 'Nichos, Estantes e Home Office',
    descricao:
      'Nichos, estantes, painéis e home offices planejados para produtividade e decoração.',
    beneficios: ['Produtividade aumentada', 'Organização profissional', 'Design inspirador', 'Soluções criativas'],
    icone: '💻',
    imagem: '/servicos/nichos-home-office/foto-01.jpeg',
    imagens: [
      '/servicos/nichos-home-office/foto-01.jpeg',
      '/servicos/nichos-home-office/foto-02.jpeg',
      '/servicos/nichos-home-office/foto-03.jpeg',
      '/servicos/nichos-home-office/foto-04.jpeg',
      '/servicos/nichos-home-office/foto-05.jpeg',
      '/servicos/nichos-home-office/foto-06.jpeg',
      '/servicos/nichos-home-office/foto-07.jpeg',
    ],
    video: videoPorAmbiente.homeOffice,
  },
];

const diferenciais = [
  {
    titulo: 'Medição Pós-Obra',
    descricao: 'Medidas finais com piso e revestimentos 100% prontos. Fim dos ajustes forçados.',
    icone: '📏',
  },
  {
    titulo: 'Qualidade Inegociável',
    descricao: 'Projetos 100% sob medida com MDF de primeira linha e ferragens duráveis.',
    icone: '⭐',
  },
  {
    titulo: 'Atendimento Consultivo',
    descricao: 'Orçamentos construídos com entendimento completo e projetos 3D presenciais.',
    icone: '👥',
  },
  {
    titulo: 'Montagem Profissional',
    descricao: 'Equipe própria ágil, educada e que deixa seu ambiente limpo e perfeito.',
    icone: '🔨',
  },
];

const depoimentos = [
  {
    nome: 'Carolina Silva',
    projeto: 'Cozinha + Dormitório',
    texto:
      'Excelente qualidade, acabamento impecável e equipe muito atenciosa. Voltaria a fazer com a JA sem dúvida!',
    rating: 5,
  },
  {
    nome: 'Marco Antônio',
    projeto: 'Closet Planejado',
    texto: 'Desde o primeiro contato até a finalização, tudo foi perfeito. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    nome: 'Fernanda Costa',
    projeto: 'Home Office',
    texto: 'Projeto exatamente como imaginava. Profissionais que se importam com cada detalhe.',
    rating: 5,
  },
];

const destaques: Destaque[] = [
  {
    categoria: 'Armários',
    imagem: '/servicos/armarios/foto-01.jpeg',
    imagens: [
      '/servicos/armarios/foto-01.jpeg',
      '/servicos/armarios/foto-02.jpeg',
      '/servicos/armarios/foto-03.jpeg',
      '/servicos/armarios/foto-04.jpeg',
      '/servicos/armarios/foto-05.jpeg',
      '/servicos/armarios/foto-06.jpeg',
      '/servicos/armarios/foto-07.jpeg',
    ],
    titulo: 'Armários de Cozinha',
    legenda: 'Aéreos, torres e bancadas com acabamento moderno e funcional.',
  },
  {
    categoria: 'Balcões',
    imagem: '/servicos/balcoes/foto-01.jpeg',
    imagens: [
      '/servicos/balcoes/foto-01.jpeg',
      '/servicos/balcoes/foto-02.jpeg',
      '/servicos/balcoes/foto-03.jpeg',
      '/servicos/balcoes/foto-04.jpeg',
      '/servicos/balcoes/foto-05.jpeg',
      '/servicos/balcoes/foto-06.jpeg',
      '/servicos/balcoes/foto-07.jpeg',
    ],
    titulo: 'Balcões e Gabinetes',
    legenda: 'Soluções para banheiros, lavabos e áreas de apoio com excelente aproveitamento.',
  },
  {
    categoria: 'Closets',
    imagem: '/servicos/closets/foto-01.jpeg',
    imagens: ['/servicos/closets/foto-01.jpeg', '/servicos/closets/foto-02.jpeg'],
    titulo: 'Closets Planejados',
    legenda: 'Divisórias inteligentes e acabamento refinado para organizar tudo com estilo.',
  },
  {
    categoria: 'Home Office',
    imagem: '/servicos/nichos-home-office/foto-01.jpeg',
    imagens: [
      '/servicos/nichos-home-office/foto-01.jpeg',
      '/servicos/nichos-home-office/foto-02.jpeg',
      '/servicos/nichos-home-office/foto-03.jpeg',
      '/servicos/nichos-home-office/foto-04.jpeg',
      '/servicos/nichos-home-office/foto-05.jpeg',
      '/servicos/nichos-home-office/foto-06.jpeg',
      '/servicos/nichos-home-office/foto-07.jpeg',
    ],
    titulo: 'Nichos, Estantes e Home Office',
    legenda: 'Móveis planejados para produtividade, decoração e organização do dia a dia.',
  },
];

const numeros = [
  { valor: '500+', label: 'Projetos Entregues' },
  { valor: '300+', label: 'Clientes Satisfeitos' },
  { valor: '10+', label: 'Anos de Experiência' },
  { valor: '50+', label: 'Bairros Atendidos' },
];

const fotosPortfolio = servicos.flatMap((servico) =>
  servico.imagens.map((imagem) => ({
    imagem,
    titulo: servico.titulo,
  }))
);

function ImagemCard({ item, slide }: { item: Destaque; slide: number }) {
  const [erro, setErro] = useState(false);
  const imagemAtual = item.imagens[slide % item.imagens.length] ?? item.imagem;

  return (
    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/15 via-white to-secondary/15">
      {!erro && (
        <img
          src={imagemAtual}
          alt={item.titulo}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={() => setErro(true)}
          onLoad={() => setErro(false)}
        />
      )}
      {erro && (
        <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm font-semibold text-primary">
          {item.titulo}
        </div>
      )}
      <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
        {item.categoria}
      </span>
    </div>
  );
}

export default function Home() {
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [portfolioAberto, setPortfolioAberto] = useState(false);
  const [fotoSlide, setFotoSlide] = useState(0);
  const [portfolioSlide, setPortfolioSlide] = useState(0);
  const heroVideoUrl =
    'https://cdn.coverr.co/videos/coverr-small-electric-oven-8125/1080p.mp4';

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFotoSlide((slideAtual) => slideAtual + 1);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!portfolioAberto) return undefined;

    const timer = window.setInterval(() => {
      setPortfolioSlide((slideAtual) => (slideAtual + 1) % fotosPortfolio.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [portfolioAberto]);

  const abrirPortfolio = () => {
    setPortfolioSlide(0);
    setPortfolioAberto(true);
  };

  return (
    <div className="pt-20">
      <section className="relative h-[calc(100vh-5rem)] min-h-[560px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideoUrl}
          poster="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&crop=entropy&cs=tinysrgb"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={(event) => {
            event.currentTarget.play().catch(() => undefined);
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <span className="mb-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Móveis Planejados Premium
            </span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Móveis Planejados com Qualidade e Acabamento Impecável
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-200 md:text-xl">
              Transforme seus ambientes com móveis sob medida, design exclusivo e acabamento milimétrico. Do projeto à instalação, presença real em cada etapa.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-8 py-4 font-bold text-primary shadow-lg transition hover:bg-green-50"
              >
                Solicitar Orçamento
              </a>
              <button
                type="button"
                onClick={abrirPortfolio}
                className="inline-block rounded-lg border border-white/40 px-8 py-4 text-white transition hover:bg-white/10"
              >
                Ver Portfólio
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-4 py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {destaques.map((item) => (
                <article
                  key={item.titulo}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl"
                >
                  <ImagemCard item={item} slide={fotoSlide} />
                  <div className="p-5">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {item.titulo}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.legenda}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-100 px-6 py-8 shadow-sm sm:px-10">
              <span className="mb-4 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                Planejados
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Vários Tipos de Móveis Planejados
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                Destaque diferentes soluções sob medida, como armários, guarda-roupas, balcões, gabinetes, nichos e composições planejadas para cada ambiente.
              </p>
              <div className="flex flex-wrap gap-3">
                {destaques.map((item) => (
                  <span
                    key={item.titulo}
                    className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-gray-700"
                  >
                    {item.categoria}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Conheça Nossa História
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Há mais de 10 anos transformando ambientes com qualidade e dedicação
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-lg bg-black shadow-2xl">
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
                className="h-auto w-full"
                poster="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=450&fit=crop"
                src={videoPorAmbiente.institucional}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="p-8 text-white">
                  <h3 className="mb-2 text-2xl font-bold">JA Móveis Planejados</h3>
                  <p className="text-lg opacity-90">Transformando sonhos em realidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {numeros.map((num) => (
              <div key={num.label} className="text-center">
                <h3 className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                  {num.valor}
                </h3>
                <p className="font-semibold text-gray-600">{num.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Nossos Trabalhos
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Veja alguns dos projetos que transformaram ambientes em experiências únicas
          </p>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {servicos.slice(0, 3).map((servico, index) => (
              <div
                key={servico.titulo}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={servico.imagem}
                  alt={servico.titulo}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all group-hover:bg-opacity-50">
                  <button
                    onClick={() => setVideoModal(servico.video)}
                    className="rounded-lg bg-white px-4 py-2 font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    ▶️ Ver Vídeo
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="font-bold text-white">
                    {index === 0 ? 'Cozinha Moderna' : servico.titulo}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {index === 0 ? 'Design contemporâneo' : index === 1 ? 'Conforto e elegância' : 'Organização perfeita'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={abrirPortfolio}
              className="inline-block rounded-lg bg-primary px-8 py-3 font-bold text-white transition hover:bg-green-700"
            >
              Ver Todos os Projetos
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Soluções personalizadas em marcenaria para atender todas as suas necessidades com excelência e criatividade.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {servicos.map((servico) => {
              const imagemAtual =
                servico.imagens[fotoSlide % servico.imagens.length] ?? servico.imagem;

              return (
              <div
                key={servico.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={imagemAtual}
                    alt={servico.titulo}
                    className="h-full w-full object-cover transition duration-500"
                  />
                  <button
                    onClick={() => setVideoModal(servico.video)}
                    className="absolute right-4 top-4 rounded-full bg-white bg-opacity-90 p-2 text-primary transition hover:bg-opacity-100"
                    title="Ver vídeo do projeto"
                  >
                    ▶️
                  </button>
                </div>
                <div className="p-6">
                  <div className="mb-3 text-4xl">{servico.icone}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {servico.titulo}
                  </h3>
                  <p className="mb-4 text-gray-600">{servico.descricao}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Benefícios:</p>
                    <ul className="space-y-1">
                      {servico.beneficios.map((beneficio) => (
                        <li
                          key={beneficio}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="text-primary">✓</span>
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {servicos.map((servico) => (
              <span
                key={servico.id}
                className="h-2.5 w-2.5 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Por Que Escolher a JA Móveis
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {diferenciais.map((dif) => (
              <div key={dif.titulo} className="flex gap-4">
                <div className="flex-shrink-0 text-4xl">{dif.icone}</div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {dif.titulo}
                  </h3>
                  <p className="text-gray-600">{dif.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Confira as experiências de quem já transformou seus ambientes com a JA Móveis
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {depoimentos.map((dep) => (
              <div key={dep.nome} className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(dep.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">"{dep.texto}"</p>
                <div>
                  <p className="font-bold text-gray-900">{dep.nome}</p>
                  <p className="text-sm text-gray-600">{dep.projeto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Seu Projeto Merece Excelência
          </h2>
          <p className="mb-8 text-lg text-green-50">
            Dê o primeiro passo para ter móveis planejados de qualidade superior, com a tranquilidade que você exige.
          </p>
          <a
            href={whatsappBase}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-primary transition hover:bg-green-50"
          >
            Falar com um Especialista
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

      {portfolioAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-lg bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setPortfolioAberto(false)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-gray-900 transition hover:bg-white"
              aria-label="Fechar portfólio"
            >
              ×
            </button>
            <div className="relative aspect-video bg-black">
              <img
                src={fotosPortfolio[portfolioSlide].imagem}
                alt={fotosPortfolio[portfolioSlide].titulo}
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  Portfólio
                </p>
                <h3 className="text-2xl font-bold">
                  {fotosPortfolio[portfolioSlide].titulo}
                </h3>
                <p className="mt-2 text-sm text-white/75">
                  Foto {portfolioSlide + 1} de {fotosPortfolio.length}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 bg-gray-950 px-4 py-3">
              <button
                type="button"
                onClick={() =>
                  setPortfolioSlide((slideAtual) =>
                    slideAtual === 0 ? fotosPortfolio.length - 1 : slideAtual - 1
                  )
                }
                className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Anterior
              </button>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full bg-primary transition-all"
                  style={{
                    width: `${((portfolioSlide + 1) / fotosPortfolio.length) * 100}%`,
                  }}
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setPortfolioSlide((slideAtual) => (slideAtual + 1) % fotosPortfolio.length)
                }
                className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Próxima
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
