// React Components
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styles/components/moviesrow.scss'



const urlPosters = 'http://image.tmdb.org/t/p/original/'
const numMovies = 20

const MoviesRow = () => {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('/api/movies')
        setMovies(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getMovies()
  }, [])



  return (


    <main className='posters-container'>
      <div className="posters">
        {movies.slice(0, numMovies).map(movie => {
          const { id, poster_path: posterPath, title } = movie
          return (
            < img className="poster"
              src={`${urlPosters}${posterPath}`}
              key={`${id}`}
              alt={title} />
          )
        })}
      </div>
    </main >
  )
}

export default MoviesRow