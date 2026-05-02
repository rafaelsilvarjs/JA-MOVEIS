export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = 'https://www.instagram.com/_japlanejados/';

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 text-lg font-bold text-primary">JA Móveis</h4>
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
              <li>Telefone: (75) 98349-4179</li>
              <li>Email: contato@jamoveis.com.br</li>
              <li>São Paulo, SP</li>
              <li>Seg-Sex: 9h às 19h</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Redes Sociais</h4>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-gray-400 transition hover:text-white"
              aria-label="Abrir Instagram @_japlanejados"
              title="@_japlanejados"
            >
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
              </svg>
              <span className="text-sm font-medium">@_japlanejados</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} JA Móveis Planejados. Todos os direitos reservados.</p>
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

