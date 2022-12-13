
// import { Link } from 'react-router-dom'

import PageNavbar from '../common/PageNavbar'
import MoviesRow from '../common/MoviesRow'
import MovieCarousel from '../common/MovieCarousel'
// import SearchMovie from '../common/SearchMovie'



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