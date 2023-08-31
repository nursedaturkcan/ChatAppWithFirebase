import React from 'react'

const Message = ({msg,user}) => {
    // mesajı gönderen hesap oturumu açık olan hesap ise
    if(user === msg.user){
        return <p className='msg-user'>{msg.text}</p>
    }
    // mesajı fakrlı kullanıcı göndermişse
  return (
    <p className='msg-other'>
        <span className='first-letter'>{msg.user[0]}</span><span>{msg.user}:</span> <span>{msg.text}</span>
    </p>
  )
  
}

export default Message