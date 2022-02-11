import { Add, AssistantTwoTone, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import "./listitem.scss"

export default function Listitem({ index , item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});


useEffect(()=>{
  const getMovie = async ()=>{
    try{
      const res = await axios.get("/movies/find/" + item, {
        headers: {
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDNmMDdjODAyNWE5MzllOGJmZmNiZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDQ5NTg3MSwiZXhwIjoxNjQ0OTI3ODcxfQ.whUR5feQexlORrc0uFenk8euPn20tKx6l9EL8IHKcPw"
        },
      })
      setMovie(res.data)
    }catch(err){
      console.log(err)
    }
  }
  getMovie()
},[item])

  return (
    <div className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop ></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}
