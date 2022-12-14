
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// bootstrap

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button' (remember to import Button later)

import PageNavbar from '../common/PageNavbar'

const Register = () => {

  const navigate = useNavigate()


  const [formFields, setFormFields] = useState({
    username: '',
    email: '',
    profile_image: '',
    password: '',
    password_confirmation: '',
  })

  const [error, setError] = useState('')

  // formFields updates (state) when input changes
  const handleChange = (e) => {
    const updatedFormFields = {
      ...formFields,
      [e.target.name]: e.target.value,
    }
    setFormFields(updatedFormFields)
  }


  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formFields)
    try {
      await axios.post('api/auth/register/', formFields)
      console.log('Register successful')
      navigate('/login')
    } catch (err) {
      setError(err.request.response)
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
                <h1> REGISTER </h1>
                {/* username */}
                <label htmlFor="username">Username <span>*</span></label>
                <input type="text" name="username" onChange={handleChange} value={formFields.username} placeholder="Username" />
                {/* email */}
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" name="email" onChange={handleChange} value={formFields.email} placeholder="Email" />
                {/* psw */}
                <label htmlFor="password">Password <span>*</span></label>
                <input type="password" name="password" onChange={handleChange} value={formFields.password} placeholder="Password" />
                {/* psw confirmation */}
                <label htmlFor="password_confirmation">Confirm Password <span>*</span></label>
                <input type="password" name="password_confirmation" onChange={handleChange} value={formFields.passwordConfirmation} placeholder="Password Confirmation" />
                {/* error */}
                {error && <small className='text-danger'>{error}</small>}
                {/* submit */}
                <button className="btn btn-main w-100">Register</button>
              </form>
            </div>
          </Row>
        </Container>
      </main >
    </>
  )
}
export default Register