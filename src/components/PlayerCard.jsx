import { useState } from "react"
import { FaBasketballBall } from "react-icons/fa";

const PlayerCard = ({data}) => {

const [showimg,setShowImg]=useState(true)
const {img,name,statistics}=data
const handleShowImg=()=>{
  setShowImg(!showimg)
}
  return (
    <div onClick={handleShowImg} className='card-ctn'>
        <div  key={statistics[0]} className="card">
          {showimg ?(
            <div  className='img-ctn'>
            <img src={img} alt="imic"/>     
          </div>
          )
          :(
            <ul className="list">
              {data.statistics.map((e,index)=>{
                return <li key={index}>
                  <FaBasketballBall/>{e}
                </li>
              })
            }
            </ul>
          )
        }      
          <p>{name}</p>
        
        </div>
    </div>
  )
}

export default PlayerCard