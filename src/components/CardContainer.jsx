import PlayerCard from './PlayerCard';
import {data} from '../helper/data';
import Search from '../components/Search';
import { useState } from 'react';
const CardContainer = ({name,img,statistics,index}) => {
  const [search, setSearch] = useState("")
  const [state, setState] = useState({
    search: '',
      list: []
    })
    
  return (
    <div className='all'>
      <Search data={data} setState={setState} state={state} search={search} setSearch={setSearch} />
      <div className='player-ctn'>
      
    
       {(state.search === "" ? "" : state.list.map(({name,img,statistics,index}) => {
        
        return <PlayerCard  key={index} name={name} img={img} statistics={statistics} />
        }))}

      </div> 
    </div>
  )
}

export default CardContainer
