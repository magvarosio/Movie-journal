import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MDBCol, MDBIcon } from 'mdbreact'
import PageNavbar from '../common/PageNavbar'

const urlPosters = 'http://image.tmdb.org/t/p/original/'

const SearchMovie = () => {

  const navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  // filteredMovies


  useEffect(() => {
    const ourRequest = axios.CancelToken.source() // <-- 1st step
    const getMovies = async () => {
      try {
        const { data } = await axios.get(`/api/movies/${query}/`, {  // add the search (mango)
          cancelToken: ourRequest.token,
        })
        setMovies(data)
        // console.log(data)
      } catch (err) {
        console.log('REQ CANCELLED---')
        console.log(err.message)
      }
    }
    getMovies()
    return () => {
      ourRequest.cancel()
    }
  }, [query])

  // console.log('****movies***', movies)


  const handleChange = (e) => {
    console.log(e)
    setQuery(e.target.value)
  }

  const handleNavigation = (movie) => {
    navigate(`/movies/${movie.id}`)
  }

  return (
    <>
      <PageNavbar />

      <MDBCol md="6">
        <form className="form-inline mt-4 mb-4">
          <MDBIcon icon="search" />
          <input
            className="form-control form-control-sm ml-3 w-75"
            onChange={handleChange}
            type="text"
            placeholder="Search for a Movie"
            value={query}
            aria-label="Search" />
        </form>
      </MDBCol>

      {/* 
      <div className="search-movie">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search for a Movie"
          value={query}
        /> */}

      {/* {movies && movies.map(movie =>
          <p key={movie.id}>{movie.title}</p>
        )} */}

      {movies && movies.map(movie => {
        const { id, poster_path: posterPath, title } = movie
        return (
          <div key={id}>
            <p>{title}</p>
            <img
              className="poster"
              onClick={() => handleNavigation(movie)}
              src={`${urlPosters}${posterPath}`}
              alt={title} />
          </div>
        )
      })}
    </>
  )
}

export default SearchMovie