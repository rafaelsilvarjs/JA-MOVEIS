import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    servico: 'geral',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    console.log('Formulário enviado:', formData);
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        servico: 'geral',
      });
    }, 3000);
  };

  const contatoInfo = [
    {
      titulo: 'WhatsApp',
      valor: '(11) 98765-4321',
      icone: '💬',
      link: 'https://wa.me/5511987654321',
    },
    {
      titulo: 'Email',
      valor: 'contato@jamoveis.com.br',
      icone: '📧',
      link: 'mailto:contato@jamoveis.com.br',
    },
    {
      titulo: 'Endereço',
      valor: 'São Paulo, SP',
      icone: '📍',
      link: '#',
    },
    {
      titulo: 'Horário',
      valor: 'Seg-Sex: 9h às 19h | Sáb: 9h às 17h',
      icone: '⏰',
      link: '#',
    },
  ];

  const faq = [
    {
      pergunta: 'Quanto tempo leva para entregar um projeto?',
      resposta: 'O prazo varia conforme a complexidade do projeto. Em média, entre 30 a 60 dias. Trabalhamos sempre com datas claras e comunicação constante.',
    },
    {
      pergunta: 'Posso pedir orçamento apenas com as medidas?',
      resposta: 'Sim! Voc× pode mandar as medidas e fotos do ambiente. Nossa equipe analisará e retornará com um orçamento preliminar.',
    },
    {
      pergunta: 'É necessário agendar para visitar?',
      resposta: 'Recomendamos agendar para garantir um atendimento personalizado, mas você também pode passar sem agendamento.',
    },
    {
      pergunta: 'Qual é a garantia dos móveis?',
      resposta: 'Todos os projetos possuem garantia de 02 anos em materiais e mão de obra, assegurando total tranquilidade.',
    },
    {
      pergunta: 'Vocàs fazem projetos residenciais e comerciais?',
      resposta: 'Sim! Trabalhamos com ambos. Possuímos experi×ncia em residências, lojas, consultórios e outros espaços comerciais.',
    },
    {
      pergunta: 'Como é o processo de pagamento?',
      resposta: '50% na assinatura do contrato e 50% na entrega. Aceitamos diversas formas de pagamento para sua comodidade.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
          <p className="text-lg text-green-50">
            Entre em contato conosco e comece seu projeto hoje mesmo
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {contatoInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-5xl mb-4">{info.icone}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {info.titulo}
                </h3>
                <p className="text-gray-600 text-sm">{info.valor}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
            Envie uma Mensagem
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Preencha o formulário abaixo que nossa equipe retornará em breve
          </p>

          {enviado && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-center">
              ? Mensagem enviada com sucesso! Retornaremos em breve.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="(11) 98765-4321"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Tipo de Servi×o
                </label>
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="geral">Selecione um servi×o</option>
                  <option value="cozinha">Cozinha Planejada</option>
                  <option value="dormitorio">Dormitório</option>
                  <option value="closet">Closet</option>
                  <option value="banheiro">Banheiro</option>
                  <option value="homeoffice">Home Office</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">
                Mensagem *
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                placeholder="Conte-nos sobre seu projeto..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Dêvidas Frequentes
          </h2>

          <div className="space-y-4">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition"
              >
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  {item.pergunta}
                  <span>▼</span>
                </summary>
                <p className="text-gray-600 mt-4">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-lg mb-8 text-green-50">
            Entre em contato conosco pelo WhatsApp e receba um atendimento personalizado
          </p>
          <a
            href="https://wa.me/5511987654321?text=Ol%C3%A1%20J%C3%81%20Móveis!%20Gostaria%20de%20um%20orçamento%20para%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
