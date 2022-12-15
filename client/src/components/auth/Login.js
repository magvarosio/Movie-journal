import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'





import axios from 'axios'
import { setToken } from '../../helpers/auth'

import PageNavbar from '../common/PageNavbar'


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
    <div>
      < PageNavbar />
      <div className="w-full h-screen">
        <img
          src="https://bigpicturefilmclub.com/wp-content/uploads/2020/07/A-Space-Odyssey-2.png"
          alt="/"
          className="hidden sm:block absolute w-full h-full object-cover img-fluid"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className='p-3 bg-red-500 my-2'>{error}</p> : null}

              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">

                <input
                  onChange={handleChange}
                  className="p-3 my-2 bg-gray-700 rouded text-white"
                  type="email"
                  name="email"
                  value={formFields.email}
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
                <input
                  onChange={handleChange}
                  className="p-3 my-2 bg-gray-700 rouded text-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formFields.password}
                  autoComplete="current-password"
                  required
                  minLength="6"
                />
                <button
                  className="bg-white py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to Movie Journal?</span>{' '}
                  <Link to="/register">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}

export default Login


