import fetch from 'isomorphic-unfetch'

export async function getMovies(movie) {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${movie}`)
  return res.json()
}

export async function getMovieById(id) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  return res.json()
}


