// React Components
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../styles/components/moviesrow.scss'

// import Card from 'react-bootstrap/Card'

const urlPosters = 'http://image.tmdb.org/t/p/original/'
// const numMovies = 20

const MoviesRow = () => {

  const navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')


  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('/api/movies/')
        setMovies(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getMovies()
  }, [])



  const handleNavigation = (movie) => {
    navigate(`/movies/${movie.id}`)
  }


  return (


    <main className='posters-container'>

      <div className="posters image-container d-flex justify-content-start m-3">
        {movies.map(movie => {
          const { id, poster_path: posterPath, title } = movie
          return (
            <>
              < img
                key={`${id}`}
                className="poster"
                onClick={() => handleNavigation(movie)}
                src={`${urlPosters}${posterPath}`}
                alt={title}
              />
              {/* <div className="overlay d-flex align-items-center justify-content-center"></div> */}
            </>
          )
        })}
      </div >



    </main >
  )
}

export default MoviesRow


// {/* <Card className="poster">
//     <Link to={`/movies/${movieId}`} id="movie_link">
//    <Card.Img variant="top" src={`${urlPosters}${posterPath}`} />
//   </Link> */}
// {/* </Card> */ }




