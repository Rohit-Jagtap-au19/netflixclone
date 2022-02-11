import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listitem.scss"

export default function Listitem({ index , item }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(item);
  return (
    <div className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.img}
        alt=""
      />
      {isHovered && (
        <>
          <video src={item.trailer} autoPlay={true} loop ></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>{item.duration}</span>
              <span className="limit">+{item.limit}</span>
              <span>{item.year}</span>
            </div>
            <div className="desc">
              {item.desc}
            </div>
            <div className="genre">{item.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}
