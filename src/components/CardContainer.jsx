import PlayerCard from './PlayerCard';
import {data} from '../helper/data';

const CardContainer = () => {
  return (
    <div className='all'>
      <form className='form'>
        <input type="text" name="text" id="text" placeholder='Search Player' />
      </form>
      <div className='player-ctn'>
      {data.map((item,index)=>{
          return <PlayerCard data={item} key={index}/>
          
        })}
      </div> 
    </div>
  )
}

export default CardContainer