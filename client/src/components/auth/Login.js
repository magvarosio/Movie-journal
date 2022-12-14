import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import axios from 'axios'
import { setToken } from '../../helpers/auth'

import PageNavbar from '../common/PageNavbar'

//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Login = () => {

  const navigate = useNavigate() // go to home - add later in handleSubmit


  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')


  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formFields)
      const { data } = await axios.post('api/auth/login/', formFields)
      console.log(data.token)
      setToken(data.token)
      navigate('/')
    } catch (err) {
      console.log(err.response.data.detail)
      setError(err.response.data.detail)
    }
  }





  return (
    <>
      < PageNavbar />
      <main className="form-page">
        <Container className='mt-4'>
          <Row>
            <div className='col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
              <form onSubmit={handleSubmit} className="mt-4">
                <h1> LOGIN </h1>

                {/* email */}
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" name="email" onChange={handleChange} value={formFields.email} placeholder="Email" />

                {/* psw */}
                <label htmlFor="password">Password <span>*</span></label>
                <input type="password" name="password" onChange={handleChange} value={formFields.password} placeholder="Password" />

                {/* error */}
                {error && <small className='text-danger'>{error}</small>}
                {/* submit */}
                <button className="btn btn-main w-100">Login</button>
              </form>
            </div>
          </Row>
        </Container>
      </main >
    </>
  )
}

export default Login