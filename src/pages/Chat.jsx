
import { addDoc,collection ,onSnapshot,serverTimestamp,query,where,orderBy} from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import { useEffect, useState } from 'react';
import Message from '../components/Message';

const Chat = ({ room,setRoom }) => {
    const [messages,setMesaages]=useState([])
    // kolleksiyonun referansını alma
    const messagesCol=collection(db,"messages");
    // mesaj gönderme
const handleSubmit=(e)=>{
e.preventDefault();
if(e.target[0].value=== "") return;
// belirttiğimiz koleksiyona yeni eleman ekler
addDoc(messagesCol,{
    text:e.target[0].value,
    user:auth.currentUser.displayName,
    room,
    createdAt:serverTimestamp(),
})
e.target[0].value= "";
}
// gönderilen mesajları almak
useEffect(()=>{
    // filtereleme ayarları
  const queryOptions=  query(messagesCol,where("room","==",room),orderBy("createdAt","asc"))
    // koleksiyonun değişimini izler
    onSnapshot(queryOptions,(snapshot)=>{
        let comingMsg=[]
        snapshot.forEach((doc)=>{
         comingMsg.push(doc.data())
        });
        setMesaages(comingMsg)
    })
},[])

    return (

        <div className='chat'>
            <header className='chat-info'>
                <p className='user'>{auth.currentUser.displayName}</p>
                <p>{room} </p>
                <a onClick={()=>setRoom(null)}>Farklı Odaya Geç</a>
            </header>
            <main>
                {messages.map((msg)=>(<Message msg={msg} user={auth.currentUser.displayName} />))}
            </main>
            <form  onSubmit={handleSubmit} >
                <input type="text"  placeholder='Mesajınızı yazınız...'/>
                <button>Gönder</button>
            </form>

        </div>
    )
}

export default Chat