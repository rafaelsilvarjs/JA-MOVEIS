import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import Contato from './pages/Contato';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'sobre':
        return <Sobre />;
      case 'servicos':
        return <Servicos />;
      case 'portfolio':
        return <Portfolio />;
      case 'contato':
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />

      {/* Botao WhatsApp Flutuante */}
      <a
        href="https://wa.me/5511987654321?text=Ol%C3%A1%20J%C3%81%20M%C3%B3veis!%20Gostaria%20de%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.35)] ring-4 ring-white/20 transition duration-300 hover:scale-105 hover:bg-[#20ba5a]"
        title="Clique para abrir WhatsApp"
        aria-label="Abrir conversa no WhatsApp"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-current"
        >
          <path d="M19.11 17.2c-.27-.14-1.58-.78-1.82-.87-.24-.09-.41-.14-.58.14-.17.27-.67.87-.82 1.05-.15.18-.31.21-.58.07-.27-.14-1.12-.41-2.13-1.32-.79-.7-1.32-1.57-1.47-1.84-.15-.27-.02-.41.11-.54.12-.12.27-.31.41-.46.14-.15.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.58-1.4-.79-1.92-.21-.5-.43-.43-.58-.44h-.5c-.18 0-.46.07-.7.34-.24.27-.92.9-.92 2.19 0 1.29.94 2.54 1.07 2.72.14.18 1.85 2.83 4.49 3.97.63.27 1.12.43 1.5.55.63.2 1.21.17 1.66.1.51-.08 1.58-.65 1.81-1.28.22-.63.22-1.17.15-1.28-.07-.11-.24-.18-.51-.32Z" />
          <path d="M16.01 3.2c-7.07 0-12.8 5.72-12.8 12.79 0 2.26.59 4.47 1.72 6.41L3.1 28.8l6.56-1.72a12.8 12.8 0 0 0 6.35 1.63h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.43-1.33-6.65-3.76-9.07A12.7 12.7 0 0 0 16.01 3.2Zm0 23.35h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.57 10.57 0 0 1-1.62-5.67c0-5.86 4.76-10.62 10.62-10.62 2.83 0 5.49 1.1 7.49 3.1a10.53 10.53 0 0 1 3.11 7.51c0 5.86-4.77 10.61-10.7 10.55Z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
