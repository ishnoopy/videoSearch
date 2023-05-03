import React, {useRef,useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import './Header.css'
import youtube_logo from '../../assets/images/yt_logo_rgb_light.svg'

import Homepage from '../../pages/HomePage/Homepage';
import VideoPage from '../../pages/VideoPage/VideoPage';

import YoutubeVideos from '../../api/YoutubeVideos'

export default function Header() {
    const [videos, setVideos] = useState()
    const [query, setQuery] = useState('League of Legends Music')
    const navigate = useNavigate();
    const searchRef = useRef()

    const ACCESS_KEY = "AIzaSyA00xmJeknrk79SIaMtbb3C0V6NzioN11c";
  
    async function getVideos() {
      try {
        const response = await YoutubeVideos.get(`?part=snippet&q=${query}&maxResults=5&key=${ACCESS_KEY}&type=video`)
        setVideos(response.data.items)
        console.log(videos)
      } catch (error) {
        console.error(error)
      }
    }
  
    useEffect(() => {
      getVideos()
    }, [query])
  

    function handleSearch(e){
        e.preventDefault();
        setQuery(searchRef.current.value);
        navigate("/"); // navigate to the homepage after updating the query state
    }

  return (
    <>
        
            <div className="navbar">
            <div>
                <i className='fa-solid fa-bars'></i>
                <div className="youtube_logo">
                    <Link to="/"><img src={youtube_logo} alt="Youtube Logo"/></Link>
                </div>
            </div>
                
            <div className='search_bar'>
                <form onSubmit={handleSearch}>
                    <input type="text" ref={searchRef} placeholder='Search'/>
                    <button type='submit'><i className="fa-solid fa-search"></i></button>
                </form>
            </div>
               
                <div className="profile_shortcuts">
                    <i className="fa-solid fa-video"></i>
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>

            <Routes>
                <Route exact path='/' element={< Homepage videos={videos} />}></Route>
                <Route exact path='/video/:id' element={< VideoPage />}></Route>
            </Routes>
        
    </>
  )
}
