import React, { useEffect, useState } from "react";
import "./Banner.css";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";

function Banner() {
  const [movie, setMovie] = useState();
  const [detail, setDetail] = useState(null);

  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        const randomElement = getRandomElement(response.data.results);
        setMovie(randomElement);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div>
        <div className="content">
          <h1 className="title font-black text-5xl mb-3">
            {movie ? movie.title : "The Movie Title"}
          </h1>
          <div className="description ">{movie ? movie.overview : ""}</div>
          <div className="buttons flex gap-4">
            <button className="bg-white text-black font-semibold rounded px-8 py-2 flex justify-center hover:bg-slate-300">
              <FaPlay size={20} className="mr-2 mt-1" />
              <span className="mt-1 text-lg">Play</span>
            </button>
            <button className="bg-gray-500 text-white font-semibold rounded px-8 py-2 flex justify-center hover:bg-opacity-30 bg-opacity-80">
              <IoIosInformationCircleOutline size={30} className="mr-2" />
              <span className="more text-lg">More info</span>
            </button>
          </div>
        </div>
        <div className="lower-gradient"></div>
      </div>
    </div>
  );
}

export default Banner;
