import React, { useContext } from 'react'
import { Authcontext } from '../../../Context/UserContext'

const ChatBar = () => {
  const {currentUser} = useContext(Authcontext)

  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
      </div>
    </div>
  )
}

export default ChatBar