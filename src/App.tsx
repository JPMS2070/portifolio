import './App.css'
function App() {

  return (
      <>
      <main className='grid sm:grid-cols-3 h-screen'>
        <article className='sm:border-r-4 border-with-100 p-4'>
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
          
          <div className=''>
            <h2 className='w-full flex justify-center'>Habilidades</h2>
            <h2 className='w-full flex justify-center font-'>Tecnologias</h2>
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
      </main>
      </>
  )
}

export default App
