import { useEffect, useState } from 'react'
import axios from 'axios'



const SearchMovie = () => {

  const [movies, setMovies] = useState([])
  const [updatedMovies, setUpdatedMovies] = useState([])
  const [query, setQuery] = useState('')
  const [titleSearch, setTitleSearch] = useState('')
  // filteredMovies



  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('/api/movies')
        setMovies(data)
        setUpdatedMovies(data)
        // console.log(data)
      } catch (err) {
        console.log(err.message)
      }
    }
    getMovies()
  }, [])

  console.log('****movies***', movies)

  const handleChange = (e) => {
    const regxsearch = new RegExp(e.target.value, 'i')
    console.log(regxsearch)
    const filteredMovies = movies.filter((movie) => {
      return (
        regxsearch.test(movie.title) ||
        movie.titles.some((title) => regxsearch.test(title.title))
      )
    })
    console.log('***FILTEREDMOVIES***', filteredMovies)
    setUpdatedMovies(filteredMovies)
  }







  return (
    <>
      <div className="search-movie">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search for a Movie"
          value={(e) => {
            setTitleSearch(e.target.value)
          }}
        />
      </div>

    </>
  )
}

export default SearchMovie