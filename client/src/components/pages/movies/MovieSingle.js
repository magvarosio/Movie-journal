// React Components
import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '../../../helpers/auth'

// import '../../styles/components/moviesrow.scss'

import PageNavbar from '../../common/PageNavbar'


import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

const urlPosters = 'http://image.tmdb.org/t/p/original/'


const MovieSingle = () => {

  const [movie, setMovie] = useState()

  const { movieId } = useParams()
  const navigate = useNavigate()
  // console.log(movieId)


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
      await axios.delete(`/api/comments/${commentId}/`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      getMovie()
    } catch (error) {
      console.log(error)
    }
  }


  const handleNavigation = (movie) => {
    navigate(`/movies/comments/${movie.id}/`)
  }



  return (
    <>
      <PageNavbar />

      {movie ? <main className='movie_page'>
        {/* <Card /> */}
        <Card style={{ width: '80rem' }}>
          <Card.Img variant="top" src={`${urlPosters}${movie.backdrop_path}`} />
        </Card>

        {/* <Button variant="danger">Watched</Button>
        <Button variant="danger">Add to Watchlist</Button> */}

        <Link to={`/movies/comments/${movieId}`} className="link">WRITE YOUR THOUGHTS ON IT</Link>
        <hr />

        <button
          type="button"
          onClick={() => handleNavigation(movie)}
          className="btn btn-outline-danger btn-lg"
        >WRITE YOUR THOUGHTS ON IT

        </button>


        {/* <h1>{`${movie.title}`}</h1>
        <h4>{`Popularity: ${movie.popularity}`}</h4>
        <p>{`Overview: ${movie.overview}`}</p> */}
        < img className="poster"
          src={`${urlPosters}${movie.poster_path}`}
          key={`${movieId}`}
          alt={movie.title} />


        {/* ? NON FUNZIONA  

        <Modal
          // show={isOpen}
          // onHide={() => setIsOpen(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <ModalHeader closeButton>
            <ModalTitle
              id="contained-modal-title-vcenter"
              style={{ color: '#000', fontWeight: 700 }}
            >
              {movie.title}
            </ModalTitle>
          </ModalHeader>
          <ModalBody style={{ backgroundColor: '#000' }}>
            < img className="poster"
              src={`${urlPosters}${movie.poster_path}`}
              key={`${movieId}`}
              alt={movie.title} />
          </ModalBody>
        </Modal> */}




        <div className="col-md-3">
          <p className="det-text bg-gradient-danger" id="title">{movie.title}</p>
        </div>

        <div className="col-md-3">
          <p className="det-subtitle">Popularity</p>
          <p className="det-text">{movie.popularity}</p>
        </div>

        <div className="col-md-3">
          <div className="col">
            <p className="det-subtitle">VOTE AVERAGE</p>
            <ReactStars vote_average={movie.vote_average} />
          </div>
        </div>

        <div className="mt-3">
          <p className="det-subtitle">OVERVIEW</p>
          <p className="overview">{movie.overview}</p>
        </div>


        {/* Comments */}
        <div className="mt-3">
          <p className="det-subtitle">THOUGHTS ON FILM</p>
        </div>
        <div>
          {movie.comments.map(comment => {
            return (
              <div key={comment.id}>
                <h4>{comment.owner.username}</h4>
                <p>{comment.text}</p>
                <div>
                  {/* <Link to={`/movies/${movieId}/comments/${comment.id}/edit`}>Edit</Link> */}
                  <button onClick={() => deleteComment(comment.id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>


      </main > : <p> loading</p>}
      {/* page loader? */}

    </>
  )
}

export default MovieSingle
