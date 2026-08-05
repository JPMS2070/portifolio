import './App.css'
function App() {

  return (
      <>
      <main className='grid sm:grid-cols-2'>
        <article>
          <img src="/img/profile.png" alt="" height="20px"/>
          <p>Desenvolvedor RPA/FullStack</p>
          Trabalho atualmente com Python, FastAPI, React, JavaScript, HTML5 e CSS3, construindo soluções que unem backend, automação e frontend. Tenho paixão por transformar ideias em projetos reais e úteis — uso a tecnologia para agilizar e automatizar processos que, no dia a dia, tomariam muito mais tempo manual. Sou movido por curiosidade: gosto de aprender rápido, testar na prática e acompanhar cada projeto até o resultado final, vendo a ideia ganhar forma.
        </article>
        <section>
          <div><h2>Habilidades tecnologias</h2></div>
          <ul>
          <li><img src="/img/react.png" alt="" /></li>
          <li><img src="/img/python.png" alt="" /></li>
          <li><img src="/img/html.png" alt="" /></li>
          <li><img src="/img/css-3.png" alt="" /></li>
          <li><img src="/img/js.png" alt="" /></li>
          <li><img src="/img/post.png" alt=""/></li>
          </ul>
        </section>
      </main>
      </>
  )
}

export default App
