
// import { Link } from 'react-router-dom'

import PageNavbar from '../common/PageNavbar'
import MoviesRow from '../common/MoviesRow'
import MovieCarousel from '../common/MovieCarousel'
import MovieGenres from '../pages/movies/MovieGenres'
import { useEffect, useState } from 'react'
import axios from 'axios'



const Home = () => {


  const [genres, setGenres] = useState([])

  useEffect(() => {
    const getGenres = async () => {
      try {
        const { data } = await axios.get('/api/genres/')
        console.log('GENREEEEES---->', data)
        setGenres(data)
      } catch (err) {
        console.log(err)
      }
    }
    getGenres()
  }, [])


  return (
    <>
      <PageNavbar />
      <MovieCarousel />
      {genres.map(genre =>
        <MovieGenres key={genre.id} genreName={genre.name} genreId={genre.id} />)}

    </>
  )
}

export default Home