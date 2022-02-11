import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import Listitem from "../listitem/Listitem"
import { useRef, useState } from "react"
export default function List({ list }) {
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef()

    const handelClick = (direction) => {
        setIsMoved((true))
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 2) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }

    }
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handelClick("left")} style={{ display: !isMoved && "none" }} />
                <div className="container" ref={listRef}>
                    {list.content.map((item,i) => (
                        <Listitem index={i} item={item} />
                    ))}


                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handelClick("right")} />
            </div>
        </div>
    )
}
