"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Loading from './components/Loading/Loading'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
        expiresInMins: 30, // optional, defaults to 60
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log(response.data)
      // Здесь вы можете сохранить токен в localStorage или выполнить другие действия по авторизации
      // После этого выполнить переход на основную страницу
      router.push('/posts')
    } catch (error) {
      setError('Login failed. Please check your username and password and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 font-mono">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-lg ">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-black ">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600">
              Enter your username and password to access your account.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 ">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-gray-500 focus:ring-gray-500 "
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-gray-500 focus:ring-gray-500 "
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
          <div className="text-center text-sm text-gray-600 ">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
