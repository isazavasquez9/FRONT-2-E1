function ComentarioCard({ comentario }) {
  const {
    receta,
    imagen,
    imagenAlt,
    autor,
    calificacion,
    fecha,
    comentario: texto,
  } = comentario

  return (
    <article className="comentario-card">
      <div className="comentario-card__foto">
        <img src={imagen} alt={imagenAlt} loading="lazy" decoding="async" />
        <span className="comentario-card__etiqueta">Receta de la comunidad</span>
      </div>

      <div className="comentario-card__contenido">
        <h3 className="comentario-card__receta">{receta}</h3>

        <div className="comentario-card__top">
          <div className="comentario-card__autor">
            <span className="comentario-card__avatar" aria-hidden="true">
              {autor
                .split(' ')
                .map((parte) => parte[0])
                .join('')}
            </span>
            <div>
              <p className="comentario-card__nombre">{autor}</p>
              <time className="comentario-card__fecha">{fecha}</time>
            </div>
          </div>
        </div>

        <div className="comentario-card__valoracion">
          <div
            className="comentario-card__estrellas"
            role="img"
            aria-label={`Calificación: ${calificacion} de 5 estrellas`}
          >
            {Array.from({ length: 5 }, (_, indice) => (
              <span
                className={indice < calificacion ? 'estrella estrella--activa' : 'estrella'}
                key={indice}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
          </div>
          <span className="comentario-card__puntaje">{calificacion}.0</span>
        </div>

        <p className="comentario-card__texto">{texto}</p>
      </div>
    </article>
  )
}

export default ComentarioCard
