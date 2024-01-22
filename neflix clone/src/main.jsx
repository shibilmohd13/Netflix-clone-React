import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar.jsx'
import Banner from './components/Banner/Banner.jsx'
import Rows from './components/Rows/Rows.jsx'
import { API_KEY,baseUrl } from './constants/constants.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <Banner/>
      <Rows heading="Trending Now" url={`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`} />
      <Rows heading="Originals" url={`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213` } />
      <Rows heading="Action" url={`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`} />
      <Rows heading="Documentaries" url={`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99` } />
      <Rows heading="Romance Movies" url={`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749` } />
  </React.StrictMode>,
)
