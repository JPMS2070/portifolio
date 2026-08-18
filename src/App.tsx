import './App.css'
import { useState } from 'react';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
      <main className='grid sm:grid-cols-3 h-screen'>
        <article className='sm:border-r-4 border-with-100 p-10'>
          <div className='flex justify-center'>
            <img className='rounded-full w-40 flex items-center ' src="/img/profile.png" alt=""/></div>
            <h1 className='flex justify-center text-[1.25rem]'>João Pedro Martins dos Santos</h1>
            <h1 className='flex justify-center text-[1.25rem]'>Desenvolvedor RPA/FullStack</h1>
          
          <div className=' text-[1.25rem] text-justify'>Trabalho atualmente com Python, FastAPI, React, JavaScript, HTML5 e CSS3, construindo soluções que unem backend, automação e frontend. Tenho paixão por transformar ideias em projetos reais e úteis — uso a tecnologia para agilizar e automatizar processos que, no dia a dia, tomariam muito mais tempo manual. Sou movido por curiosidade: gosto de aprender rápido,    testar na prática e acompanhar cada projeto até o resultado final, vendo a ideia ganhar forma.
          </div>
        </article>
        <section className="col-span-2">
          <div className='flex justify-center text-[2rem]'>
            <h1>Projetos</h1>
          </div>
          <ul className='flex justify-between p-2'>
          <li>
            <div className='w-70 bg-red-500'>
              <img src="sistema.png" onClick={() => setIsOpen(true)}/>
              <h4 className='text-[1.5rem] text-center'>Sistema</h4>
              <p className='text-justify p-1'>Sistema desenvolvido para a João Filho Advocacia que sincroniza dados de gestantes a partir da API da ADVBox, identifica quem está próxima do parto e dispara mensagens automáticas via WhatsApp.</p>
            </div>
          </li>
          <li><img className='w-30 m-4'src="/img/python.png" alt="" /></li>
          <li><img className='w-30 m-4'src="/img/html5.png" alt="" /></li>
          <li><img className='w-30 m-4'src="/img/css-3.png" alt="" /></li>
          <li><img className='w-30 m-4'src="/img/js.png" alt="" /></li>
          <li><img className='w-30 m-4'src="/img/Post.svg" alt=""/></li>
          </ul>
          <div className=''>
            <h2 className='w-full flex justify-center'>Habilidades</h2>
          </div>
          <ul className='flex justify-between'>
          <li><img className='w-30 m-4'src="/img/react.png" alt="" /></li>
          <li><img className='w-30 m-4'src="/img/python.png" alt="" /></li>
          <li><img className='w-30 m-4'src="/img/html5.png" alt="" /></li>
          <li><img className='w-30 m-4'src="/img/css-3.png" alt="" /></li>
          <li><img className='w-30 m-4'src="/img/js.png" alt="" /></li>
          <li><img className='w-30 m-4'src="/img/Post.svg" alt=""/></li>
          </ul>
        </section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Imagem clicável */}
      <img
        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af"
        alt="Exemplo"
        onClick={() => setIsOpen(true)}
        className="w-80 h-48 object-cover rounded-lg cursor-pointer shadow-md hover:opacity-95 transition"
      />

      {/* Tela (Modal) condicional */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          {/* Caixa de conteúdo da nova tela */}
          <div className="relative w-11/12 max-w-lg p-6 bg-white rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Nova Tela Aberta!</h2>
            <p className="text-gray-600 mb-6">
              Este conteúdo aparece por cima da página quando você clica na imagem.
            </p>

            {/* Botão para fechar a tela */}
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
      </main>
      </>
  )
}

export default App
