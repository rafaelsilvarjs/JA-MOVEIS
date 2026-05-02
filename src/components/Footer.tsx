export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 text-lg font-bold text-primary">JÁ Móveis</h4>
            <p className="text-sm text-gray-400">
              Especialistas em móveis planejados com qualidade, design e acabamento impecável.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#sobre" className="transition hover:text-primary">Sobre Nós</a></li>
              <li><a href="#servicos" className="transition hover:text-primary">Serviços</a></li>
              <li><a href="#portfolio" className="transition hover:text-primary">Portfólio</a></li>
              <li><a href="#contato" className="transition hover:text-primary">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 (11) 98765-4321</li>
              <li>📧 contato@jamoveis.com.br</li>
              <li>📍 São Paulo, SP</li>
              <li>⏰ Seg-Sex: 9h às 19h</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_japlanejados/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
                aria-label="Instagram JÁ Planejados"
                title="@_japlanejados"
              >
                <span className="text-2xl">📸</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
                aria-label="Facebook"
              >
                <span className="text-2xl">f</span>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
                aria-label="Pinterest"
              >
                <span className="text-2xl">📌</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
                aria-label="YouTube"
              >
                <span className="text-2xl">▶️</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} JÁ Móveis Planejados. Todos os direitos reservados.</p>
          <p className="mt-2">
            <a href="#" className="transition hover:text-white">Política de Privacidade</a>
            {' '} | {' '}
            <a href="#" className="transition hover:text-white">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
