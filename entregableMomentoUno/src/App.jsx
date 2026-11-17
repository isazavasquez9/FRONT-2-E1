
import { useEffect, useState } from 'react'
import ComentarioCard from './components/ComentarioCard'
import { obtenerComentarios } from './data/comentariosData'
import './App.css'

function App() {
  const [comentarios, setComentarios] = useState([])

  useEffect(() => {
    obtenerComentarios().then(setComentarios)
  }, [])

  return (
    <main className="app">
      <header className="app__barra">
        <a className="app__marca" href="/" aria-label="Sazón, inicio">
          saz<span>ó</span>n
        </a>
        <span className="app__lema">El gusto de compartir</span>
      </header>

      <section className="app__contenido" aria-label="Reseñas de la comunidad">
        <section className="lista-comentarios" aria-labelledby="comentarios-titulo">
          <div className="lista-comentarios__encabezado">
            <div>
              <span className="lista-comentarios__sobrelinea">De nuestra comunidad</span>
              <h2 id="comentarios-titulo">Lo que dicen quienes ya la probaron</h2>
            </div>
            <span className="lista-comentarios__cantidad">
              {comentarios.length} reseñas
            </span>
          </div>

          <div className="lista-comentarios__rejilla">
            {comentarios.map((comentario) => (
              <ComentarioCard comentario={comentario} key={comentario.id} />
            ))}
          </div>
        </section>
      </section>

      <footer className="app__pie">
        Hecho para disfrutar cada momento alrededor de la mesa.
      </footer>
    </main>
  )
}

export default App
