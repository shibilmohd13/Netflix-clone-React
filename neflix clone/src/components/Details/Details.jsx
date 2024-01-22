import React, { useEffect , useState } from 'react'
import "./Details.css"
import { FaPlay } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BiLike } from "react-icons/bi";
import axios from '../../axios';
import Youtube from "react-youtube"
import { IoMdClose } from "react-icons/io";



function Details(props) {
    const [video, setVideo] = useState('')
    const [movie, setMovie] = useState('')

    const opts = {
        height: "460px", // 460px
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${props.movie}/videos?api_key=27ad9b7cc676817eed5b95ea2f938211`).then(response=>(
            setVideo(response.data.results[1].key)
        ));
    }, [])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${props.movie}?language=en-US&api_key=27ad9b7cc676817eed5b95ea2f938211`).then(response=>(
            setMovie(response.data)
        ));
        
    }, [])
    
    
  return (
    <div className='popup'>
        <div className='card' >
            <div className='video-container'>
            <Youtube videoId={video} opts={opts} />
            </div>
            <div className='card-content'>
                <div className="buttons-container flex justify-between">
                    <div className='card-buttons flex'>
                        <button className='bg-white hover:bg-slate-300 px-10 pt-3 pb-2 mb-4 rounded flex align-middle'><FaPlay style={{color:"black"}}/><span className=' ml-2  text-black font-semibold' > Play</span></button>
                        <button className=' button-like bg-transparent border-2 px-2 border-slate-400 hover:border-white'><TiTick size={28}/></button>
                        <button className=' button-like bg-transparent border-2 px-2 border-slate-400 hover:border-white'><BiLike size={28}/></button>
                    </div>
                    <button onClick={props.cancel} className=' button-like bg-transparent border-2 px-2 border-slate-400 hover:border-white'><IoMdClose size={28}/></button>
                </div>
                
                <div className="card-title font-black text-4xl mt-2">
                    <h1>{movie?movie.title:""}</h1>
                </div>
                <div className="card-des text-sm mt-2">
                    <p>{movie?movie.overview:""}</p>

                </div>

            </div>
        </div>

    </div>

  )
}

export default Details