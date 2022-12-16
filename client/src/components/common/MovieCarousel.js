import Carousel from 'react-bootstrap/Carousel'



const MovieCarousel = () => {
  return (
    <div className="movie-carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://image.tmdb.org/t/p/original//kCEXA22ASuq7Y29jnngyaisyA0X.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Your Movie Journal</h3>
            <p>Pick a movie and start your diary!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="	http://image.tmdb.org/t/p/original//rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Your Movie Journal</h3>
            <p>Pick a movie and start your diary!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="	http://image.tmdb.org/t/p/original//yrdAamkeqXHm0UYukk8xgoCvc7G.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Your Movie Journal</h3>
            <p>
              Pick a movie and start your diary!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default MovieCarousel



//  build random function select one pic from the db ?


// const urlPosters = 'http://image.tmdb.org/t/p/original/'
//   const [randomMovie, setRandomMovie] = useState([])


//   useEffect(() => {
//     const getMovies = async () => {
//       try {
//         const { data } = await axios.get('/api/movies')
//         randomMovie(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getMovies()
//   }, [])
