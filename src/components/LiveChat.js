import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

  const[livemessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i =  setInterval(() => {
    // console.log("API Polling");

    dispatch(addMessage({
      name: generateRandomName(),
      message: makeRandomMessage(20) + "🚀",
      })
    );
  }, 500);

  return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className='ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div >
      
          {
            chatMessage.map((c,i) => (
            <ChatMessage 
            key={i} name={c.name} message={c.message}/>
            ))
          } 
      
        </div>
      </div>

      <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) =>{
        e.preventDefault();
        console.log("on form submit",livemessage);
        dispatch(addMessage({
          name:"Muskan sahu",
          message:livemessage,
        }
      ));
      setLiveMessage("");
      }}>

        <input className='w-[350px] px-2' type='text' value={livemessage} onChange={(e) =>{
          setLiveMessage(e.target.value)
        }}/>
        <button className='px-2 mx-2 bg-green-100 place-content-center'>Send</button>

      </form>
    </>
  )
}

export default LiveChat
