// React Components
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../../styles/components/moviesrow.scss'
// import requests from '../../helpers/requests'

// import Card from 'react-bootstrap/Card'

const urlPosters = 'http://image.tmdb.org/t/p/original/'





const MoviesGenres = ({ genreId, genreName }) => {

  const navigate = useNavigate()

  const [movies, setMovies] = useState([])



  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(`/api/movies/genre/${genreId}/`)
        setMovies(data)
        // console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getMovies()
  }, [genreId])



  const handleNavigation = (movie) => {
    navigate(`/movies/${movie.id}`)
  }


  return (


    <main className='posters-container'>
      <h2>{genreName}</h2>
      <div className="posters image-container d-flex justify-content-start m-3">
        {movies && movies.map(movie => {
          const { id, poster_path: posterPath, title } = movie
          return (
            < img
              key={`${id}`}
              className="poster"
              onClick={() => handleNavigation(movie)}
              src={`${urlPosters}${posterPath}`}
              alt={title}
            />
          )
        })}
      </div >



    </main >
  )
}

export default MoviesGenres


// {/* <Card className="poster">
//     <Link to={`/movies/${movieId}`} id="movie_link">
//    <Card.Img variant="top" src={`${urlPosters}${posterPath}`} />
//   </Link> */}
// {/* </Card> */ }




