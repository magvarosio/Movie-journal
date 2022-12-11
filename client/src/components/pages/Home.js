
// import { Link } from 'react-router-dom'

import PageNavbar from '../common/PageNavbar'
import MoviesRow from './moviesComponents/MoviesRow'
import MovieCarousel from './moviesComponents/MovieCarousel'



const Home = () => {


  return (
    <>
      <PageNavbar />
      <MovieCarousel />
      <MoviesRow />
      {/* <MoviesRow /> */}

    </>
  )
}

export default Home