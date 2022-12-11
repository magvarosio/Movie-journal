import Carousel from 'react-bootstrap/Carousel'



const MovieCarousel = () => {
  return (
    <div className="movie-carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://savethecat.com/wp-content/uploads/2018/10/4-Apes-POV-768x358.png"
            alt="First slide"
          // width=""
          // height=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://savethecat.com/wp-content/uploads/2018/10/4-Apes-POV-768x358.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://savethecat.com/wp-content/uploads/2018/10/4-Apes-POV-768x358.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
