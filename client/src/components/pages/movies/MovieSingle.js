// React Components
import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import '../../styles/components/moviesrow.scss'
import MovieCarousel from '../../common/MovieCarousel'

import AddComment from '../AddComment'


import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const urlPosters = 'http://image.tmdb.org/t/p/original/'


const MovieSingle = () => {

  const [movie, setMovie] = useState()

  const { movieId } = useParams()
  const navigate = useNavigate()
  console.log(movieId)


  const getMovie = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/movies/${movieId}/`)
      console.log(data)
      setMovie(data)
    } catch (err) {
      console.log(err)
    }
  }, [movieId])

  useEffect(() => {

    getMovie()
  }, [getMovie])


  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/movies/${movieId}/comments/${commentId}`)
      // , {
      //   headers: {
      //     Authorization: `Bearer ${getToken()}`, 
      //   },
      // })
      getMovie()
    } catch (error) {
      console.log(error)
    }
  }



  console.log('****movie!**** -->', movie)


  return (
    <>
      {movie ? <main className='movie-container'>
        {/* <Card /> */}
        <Card style={{ width: '80rem' }}>
          <Card.Img variant="top" src={`${urlPosters}${movie.backdrop_path}`} />
          <Card.Body>
            {/* <Card.Title>A product name</Card.Title>
          <Card.Text>
            Some main content text can go here, a product description for example
          </Card.Text> */}
            {/* <Button variant="primary">Review</Button> */}
          </Card.Body>
        </Card>

        <Button variant="danger">Watched</Button>
        <Button variant="danger">Add to Watchlist</Button>
        <h1>{`${movie.title}`}</h1>
        <h4>{`Popularity: ${movie.popularity}`}</h4>
        <p>{`Overview: ${movie.overview}`}</p>
        < img className="poster"
          src={`${urlPosters}${movie.poster_path}`}
          key={`${movieId}`}
          alt={movie.title} />


        {/* Comments */}
        <h2><span>💬</span> Comments </h2>


        <div>
          {movie.comments.map(comment => {
            return (
              <div key={comment.id}>
                <p>{comment.text}</p>
                <div>
                  {/* <Link to={`/movies/${movieId}/comments/${comment.id}/edit`}>Edit</Link> */}
                  <button onClick={() => deleteComment(comment.id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>

        <Link to={`/movies/${movieId}/comments`}>Add comment</Link>
        <hr />
        <Link to="/" className='btn btn-main'>Back to home</Link>

      </main > : <p> loading</p>}
      {/* page loader? */}


      <AddComment />
    </>
  )
}

export default MovieSingle
