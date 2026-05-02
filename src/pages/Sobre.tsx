import { videoPorAmbiente } from '../data/videos';

export default function Sobre() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a JA Móveis</h1>
          <p className="text-lg text-green-50">
            Transformando sonhos em realidade h× mais de 10 anos
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Nossa História
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A JA Móveis nasceu de uma convicção simples: <strong>um ambiente bem planejado transforma a forma como você vive</strong>.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Especializados em móveis sob medida para residências e comerciais, desde o primeiro projeto mantemos uma forma de trabalhar que poucos se dispõem a ter: <strong>presença real, do projeto à instalação</strong>.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cada detalhe é pensado a partir do seu espaço, da sua rotina e do seu estilo de vida. Não terceirizamos a atenção. Nossa equipe acompanha cada etapa, garantindo que o que foi projetado seja exatamente o que será entregue dentro do prazo, com acabamento impecável.
              </p>
              <p className="text-gray-700 font-bold">
                Qualidade não × um diferencial para nós. É o ponto de partida.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-green-600 rounded-lg h-96 flex items-center justify-center text-white text-6xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
                alt="Nossa oficina e equipe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Processos */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Nosso Processo de Criação
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conheça como transformamos ideias em móveis perfeitos para seu espaço
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=entropy&cs=tinysrgb"
                  alt="Planejamento e Design"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold">
                    ▶️ Ver Processo
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">1. Planejamento</h3>
                <p className="text-sm text-gray-600">Análise detalhada e design personalizado</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop&crop=entropy&cs=tinysrgb"
                  alt="Corte e Preparação"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold">
                    ▶️ Ver Processo
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">2. Produção</h3>
                <p className="text-sm text-gray-600">Corte preciso e montagem artesanal</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop&crop=entropy&cs=tinysrgb"
                  alt="Acabamento e Pintura"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold">
                    ▶️ Ver Processo
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">3. Acabamento</h3>
                <p className="text-sm text-gray-600">Pintura e tratamento final de qualidade</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=250&fit=crop&crop=entropy&cs=tinysrgb"
                  alt="Instalação e Entrega"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold">
                    ▶️ Ver Processo
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">4. Instalação</h3>
                <p className="text-sm text-gray-600">Montagem profissional no local</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo Institucional */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Conheça Nosso Trabalho
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Assista ao vídeo institucional e veja como transformamos ideias em móveis perfeitos
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-lg overflow-hidden">
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
                className="w-full h-auto"
                poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop&crop=entropy&cs=tinysrgb"
                src={videoPorAmbiente.institucional}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">JA Móveis Planejados</h3>
                <p className="text-sm opacity-90">Excelência em móveis sob medida</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Excelência</h3>
              <p className="text-gray-600">
                Buscamos a perfeição em cada detalhe, utilizando os melhores materiais e técnicas do mercado.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Confiança</h3>
              <p className="text-gray-600">
                Transparência e honestidade em cada etapa, deixando você sempre seguro de suas escolhas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Inovação</h3>
              <p className="text-gray-600">
                Soluções criativas e modernas que transformam seus ambientes em espaços únicos e personalizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Nossa Equipe
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Profissionais qualificados e apaixonados por marcenaria, sempre com foco em sua satisfação.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                nome: 'João Silva',
                cargo: 'Fundador & Designer',
                imagem: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
              },
              {
                nome: 'Maria Santos',
                cargo: 'Gerente de Projetos',
                imagem: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face'
              },
              {
                nome: 'Carlos Oliveira',
                cargo: 'Supervisor de Montagem',
                imagem: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
              },
              {
                nome: 'Ana Costa',
                cargo: 'Consultora de Vendas',
                imagem: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
              },
            ].map((membro, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition">
                <img
                  src={membro.imagem}
                  alt={membro.nome}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {membro.nome}
                </h3>
                <p className="text-sm text-gray-600">{membro.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Nossos Diferenciais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">📋</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Projetos 3D Avançados
                </h3>
                <p className="text-gray-600">
                  Visualize seu projeto antes da execução com tecnologia 3D de ponta.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🛡️</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Garantia Completa
                </h3>
                <p className="text-gray-600">
                  Todos os projetos possuem garantia, assegurando durabilidade.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">⏱️</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Pontualidade Garantida
                </h3>
                <p className="text-gray-600">
                  Cumprimos rigorosamente os prazos estabelecidos em contrato.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🌟</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Materiais Premium
                </h3>
                <p className="text-gray-600">
                  Utilizamos apenas os melhores materiais do mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para Transformar Seu Espa×o?
          </h2>
          <a
            href="https://wa.me/5575983494179?text=Ol%C3%A1%20JA%20M%C3%B3veis!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  );
}

