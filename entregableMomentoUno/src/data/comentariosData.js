export const comentariosData = [
  {
    id: 1,
    receta: 'Galletas con chocolate Noel',
    imagen:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=85',
    imagenAlt: 'Galletas caseras con trozos de chocolate recién horneadas',
    autor: 'Carolina R.',
    calificacion: 5,
    fecha: '12 de noviembre de 2026',
    comentario:
      'Quedaron deliciosas y son muy fáciles de preparar. En casa todos quisieron repetir; ya están entre nuestras favoritas para compartir.',
  },
  {
    id: 2,
    receta: 'Pasabocas con galletas Ducales',
    imagen:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/ABasketOfCrackers.jpg/1280px-ABasketOfCrackers.jpg',
    imagenAlt: 'Variedad de galletas saladas y crackers servidos en una canasta',
    autor: 'Andrés M.',
    calificacion: 4,
    fecha: '9 de noviembre de 2026',
    comentario:
      'Una idea sencilla y rica para compartir. Las galletas quedan crujientes y combinan muy bien con los acompañamientos.',
  },
]

export async function obtenerComentarios() {
  return comentariosData
}
