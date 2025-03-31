import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from'../../assets/back_arrow_icon.png'

const Player = () => {

  const [apiData, setApidata] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDZhOThiYjllMjI3MTZiMGE2ZmQwYzI3NzExN2E4NyIsIm5iZiI6MTc0MzMzMDQwNy4xMDgsInN1YiI6IjY3ZTkxYzY3YWY3NTJhM2IyNGY2ZTdjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eTBJONK3_6SJdu38yH3cgUtclm9MBM4Gavog5ojHcb4'
    }
  };
  
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/1165067/videos?language=en-US', options)
    .then(res => res.json())
    .then(res => setApidata(res.results[0]))
    .catch(err => console.error(err));

  },[])
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='tralier' frameBorder='0' allowFullScreen></iframe>
      <div className="player_info">
        <p>apidata.published_at</p>
        <p>apiData.name</p>
        <p>apiData.type</p>
      </div>
    </div>
  )
}

export default Player
