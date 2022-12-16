
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

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

    <div>
      < PageNavbar />
      <div>
        <div className="w-full h-screen">
          <img
            src="https://res.cloudinary.com/ddy4ifl5i/image/upload/v1671137829/ksdjvdslhvsljhgsdg_gyuawu.png"
            alt="/"
            className="hidden sm:block absolute w-full h-full object-cover img-fluid"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16">

                {/* Registrer */}
                <h1 className="text-3xl font-bold">Register</h1>
                {/* submit */}


                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-4"
                >

                  <input
                    className="p-3 my-2 bg-gray-700 rouded text-white"
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="username"
                    onChange={handleChange}
                    value={formFields.username}
                    required
                  />

                  <input
                    className="p-3 my-2 bg-gray-700 rouded text-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    onChange={handleChange}
                    value={formFields.email}
                    required
                  />

                  <input
                    className="p-3 my-2 bg-gray-700 rouded text-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    required
                    minLength="6"
                  />

                  <input
                    className="p-3 my-2 bg-gray-700 rouded text-white"
                    type="password"
                    name="password_confirmation"
                    placeholder="Password Confirmation"
                    autoComplete="current-password"
                    value={formFields.passwordConfirmation}
                    onChange={handleChange}
                    required
                    minLength="6"
                  />

                  <button className="btn btn-outline-danger py-3 my-6 rounded font-bold">
                    Sign Up
                  </button>
                  <div className="flex justify-between items-center text-sm text-gray-600 ">
                  </div>
                  <p className="py-8">
                    <span className="text-gray-600">
                      Already subscribed to Movie Journal?
                    </span>{' '}
                    <Link to="/login">Sign In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Register

