import React from "react";
import "./Rows.css";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
import PropTypes from "prop-types";
import Details from "../details/Details";

function Rows(props) {
  const [movies, setMovies] = useState();
  const [modal, setModal] = useState(false)
  const [modalitem, setmodalitem] = useState()

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);

    });
  }, []);
  function handleModal(id){
    setmodalitem(id)
    setModal(true)
    
  }
  function cancelModal(){
    setModal(false)
  }
  function KeepModal(id){
    setModal(true)
    
  }

  return (
    <div className="containers">
      <div className="row m-12">
        <div className="row-heading">
          <h1 className="font-bold text-lg mb-2">{props.heading}</h1>
        </div>
        <div className="movies flex gap-2">
          {movies
            ? movies.map((item, index) => (
                <img
                  key={index}
                  className="small-mov h-40"
                  src={item ? imageUrl + item.backdrop_path : ""}
                  alt=""
                  onClick={()=> handleModal(item.id)}
                />
              ))
            : ""}
        </div>
      </div>
      {
        modal ? <Details movie={modalitem} cancel={cancelModal}/> : ""
      }
      
    </div>
  );
}
Rows.defaultProps = {
  heading: "New",
};

Rows.propTypes = {
  heading: PropTypes.string,
};

export const a = 10;

export default Rows;
