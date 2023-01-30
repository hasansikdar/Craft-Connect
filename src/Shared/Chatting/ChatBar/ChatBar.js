import React, { useContext } from 'react'
import { Authcontext } from '../../../Context/UserContext'

const ChatBar = () => {
  const {user} = useContext(Authcontext)

  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={user.photoURL} alt="" />
        <span>{user.displayName}</span>
      </div>
    </div>
  )
}

export default ChatBar