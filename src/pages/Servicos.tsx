import { videoPorAmbiente } from '../data/videos';

const whatsappUrl =
  'https://wa.me/5511987654321?text=Ol%C3%A1%20J%C3%81%20M%C3%B3veis!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.';

const servicos = [
  {
    titulo: 'Cozinhas Planejadas',
    descricao:
      'Cozinhas funcionais e elegantes, projetadas sob medida para otimizar cada centímetro do seu espaço.',
    beneficios: ['Layout otimizado', 'Acabamento premium', 'Maximiza espaço', 'Design moderno'],
    icone: '🍳',
  },
  {
    titulo: 'Dormitórios Planejados',
    descricao:
      'Ambientes para descanso renovados com criatividade, elegância e praticidade.',
    beneficios: ['Organização perfeita', 'Conforto garantido', 'Estética elegante', 'Funcionalidade total'],
    icone: '🛏️',
  },
  {
    titulo: 'Closets & Guarda-Roupas',
    descricao:
      'Closets personalizados que combinam sofisticação, praticidade e excelente aproveitamento.',
    beneficios: ['Máxima organização', 'Sistema modular', 'Acabamento impecável', 'Designs exclusivos'],
    icone: '👗',
  },
  {
    titulo: 'Banheiros Planejados',
    descricao:
      'Gabinetes e armários com acabamento impecável e materiais resistentes à umidade.',
    beneficios: ['Resistência à umidade', 'Acabamento premium', 'Organização completa', 'Estilo sofisticado'],
    icone: '🚿',
  },
  {
    titulo: 'Home Offices',
    descricao:
      'Espaços produtivos sob medida para trabalhar com conforto, ergonomia e eficiência.',
    beneficios: ['Produtividade aumentada', 'Ergonomia perfeita', 'Organização profissional', 'Design inspirador'],
    icone: '💼',
  },
  {
    titulo: 'Móveis Sob Medida',
    descricao:
      'Painéis de TV, estantes, nichos e peças exclusivas para cada ambiente.',
    beneficios: ['Personalização total', 'Aproveitamento otimizado', 'Soluções criativas', 'Qualidade garantida'],
    icone: '📺',
  },
];

const processo = [
  ['01', 'Consultoria Inicial', 'Entendemos suas necessidades, preferências e orçamento em uma conversa objetiva.'],
  ['02', 'Medição Precisa', 'Nossa equipe técnica realiza medições detalhadas do espaço.'],
  ['03', 'Projeto 3D', 'Apresentamos o projeto em 3D para visualização antes da execução.'],
  ['04', 'Orçamento Claro', 'Você recebe valores, materiais e prazos bem definidos.'],
  ['05', 'Fabricação Qualificada', 'Produzimos com materiais premium e técnicas avançadas.'],
  ['06', 'Montagem Profissional', 'Instalamos com precisão, cuidado e limpeza no local.'],
];

export default function Servicos() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-primary to-green-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Nossos Serviços</h1>
          <p className="text-lg text-green-50">
            Soluções personalizadas em marcenaria para todos os seus ambientes
          </p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => (
            <article
              key={servico.titulo}
              className="rounded-lg border border-gray-200 bg-white p-8 transition hover:shadow-lg"
            >
              <div className="mb-4 text-6xl">{servico.icone}</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{servico.titulo}</h3>
              <p className="mb-6 text-gray-600">{servico.descricao}</p>
              <p className="mb-2 text-sm font-semibold text-gray-900">Benefícios:</p>
              <ul className="space-y-2">
                {servico.beneficios.map((beneficio) => (
                  <li key={beneficio} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-primary">✓</span>
                    {beneficio}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Nosso Processo
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processo.map(([numero, titulo, descricao]) => (
              <article key={numero} className="rounded-lg border-l-4 border-primary bg-white p-8">
                <div className="mb-4 text-5xl font-bold text-primary opacity-50">
                  {numero}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{titulo}</h3>
                <p className="text-gray-600">{descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Veja Nosso Processo em Ação
            </h2>
            <p className="text-lg text-gray-600">
              Do planejamento à entrega, cada etapa é feita com cuidado e precisão.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg bg-black shadow-2xl">
            <video
              controls
              autoPlay
              muted
              loop
              className="h-auto w-full"
              poster="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=450&fit=crop"
              src={videoPorAmbiente.processo}
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Comece Seu Projeto Agora Mesmo</h2>
          <p className="mb-8 text-lg text-green-50">
            Solicite um orçamento sem compromisso. Nossa equipe retorna em breve.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-primary transition hover:bg-green-50"
          >
            Inicie Seu Projeto
          </a>
        </div>
      </section>
    </div>
  );
}
