// React Components
import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '../../../helpers/auth'



//  ********
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography
} from 'mdb-react-ui-kit'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// *******

// import '../../styles/components/moviesrow.scss'

import PageNavbar from '../../common/PageNavbar'


import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

const urlPosters = 'http://image.tmdb.org/t/p/original/'


const MovieSingle = () => {

  const currentDate = new Date()

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

      {movie ?


        <main className='movie_page'>


          {/* <Col md="2">
              <Card style={{ width: '80rem' }}>
                <Card.Img variant="top" src={`${urlPosters}${movie.backdrop_path}`} />
              </Card>
            </Col> */}

          <div className="card banner-card">
            <img
              src={`${urlPosters}${movie.backdrop_path}`}
              alt="/"
              className="hidden sm:block absolute w-full h-full object-cover img-fluid"
            />
            <h1 className="card-title banner-title det-text">{movie.title}</h1>
          </div>

          <hr />

          <Row>


            <Col md="2">
              < img className="poster"
                src={`${urlPosters}${movie.poster_path}`}
                key={`${movieId}`}
                alt={movie.title} />
            </Col>


            {/* <Col md="6">
              <div >
                <p className="det-text bg-gradient-danger" id="title">Original title: {movie.original_title}</p>
              </div>
            </Col> */}

            <Col md="6">
              <div >
                <p className="det-subtitle">POPULARITY</p>
                <p className="det-text">{movie.popularity}</p>
              </div>

              <div >
                <div className="col">
                  <p className="det-subtitle">VOTE AVERAGE</p>
                  <ReactStars vote_average={movie.vote_average} />
                </div>
              </div>


              <div >
                <p className="det-subtitle">OVERVIEW</p>
                <p className="overview">{movie.overview}</p>
              </div>
              <br />
              <br />
            </Col>


          </Row>


          {/* Comments */}


          <button
            type="button"
            onClick={() => handleNavigation(movie)}
            className="btn btn-outline-danger btn-lg"
          >WRITE YOUR THOUGHTS ON IT
          </button>
          <br />
          <br />
          <br />

          <MDBCardBody className="p-4">
            <div className="d-flex flex-start">
              <MDBCardImage
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                alt="avatar"
                width="60"
                height="60"
              />
              <div>
                <MDBTypography tag="h6" className="fw-bold mb-1 text-white">
                  Lara Stewart
                </MDBTypography>
                <div className="d-flex align-items-center mb-3 text-white">
                  <p className="mb-0">
                    Thu Dec 14 2022
                  </p>

                </div>
                <p className="mb-0 text-white">
                  Contrary to popular belief, Lorem Ipsum is not simply
                  random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure
                  Latin words, consectetur, from a Lorem Ipsum passage, and
                  going through the cites.
                </p>
              </div>
            </div>
          </MDBCardBody>



          {/* Prova */}

          <div className="mt-3">

          </div>
          <div>
            {movie.comments.map(comment => {
              return (

                <div key={comment.id}>
                  {/* <h4>{comment.owner.username}</h4>
                  <p>{comment.text}</p> */}

                  <MDBCardBody className="p-4">
                    <div className="d-flex flex-start">
                      <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://previews.123rf.com/images/asmati/asmati1610/asmati161000233/63831576-user-sign-illustration-white-icon-on-red-circle-.jpg"
                        alt="avatar"
                        width="60"
                        height="60"
                      />
                      <div>
                        <MDBTypography tag="h6" className="fw-bold mb-1 text-white">
                          {comment.owner.username}
                        </MDBTypography>
                        <div className="d-flex align-items-center mb-3 text-white">
                          <p className="mb-0">
                            {currentDate.toString(comment.created_at)}
                          </p>

                        </div>
                        <p className="mb-0 text-white">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>


                  <div>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteComment(comment.id)}>Delete</button>
                  </div>
                </div>
              )
            })}
          </div>


        </main > : <p> loading</p>
      }
      {/* page loader? */}

    </>
  )
}

export default MovieSingle
