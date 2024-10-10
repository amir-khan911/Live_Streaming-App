import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Join = () => {
 const [roomId,setRoomId] = useState();

 const navigate = useNavigate();

 const joinMeet = ()=>{
    navigate(`/room/${roomId}`)
 }
  return (
  <>
    <div className="main">
   <input type="text" value={roomId} onChange={(e)=>setRoomId(e.target.value)} placeholder='Enter Your Name Join Meeting 🔔'/>
   <button onClick={joinMeet}>Join 🔊</button>
    </div>
  </>
  )
}

export default Join