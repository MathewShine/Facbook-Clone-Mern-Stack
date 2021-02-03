import React, { useState } from 'react'
import { Avatar, Input } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

import './MessageSender.css'

const MessageSender = () => {
    const [input,setInput] = useState('');
    const [image,setImage] = useState(null);
    
    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const handleSubmit = () => {
        console.log('Submitting')
    }
        return (
        <div className='messageSender'>
          <div className="messageSender_top">
            <Avatar src={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`} />
            <form>
                <input 
                    type="text" 
                    className="message_Sender_Input" 
                    placeholder="What's on your mind?"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)} />
                <Input 
                    type="file" 
                    className="messageSender_fileSelector" 
                    onChange={handleChange}/>
                <button
                    onClick={handleSubmit}
                    type="submit"
                > Hidden Submit</button>
            </form>
          </div>
          <div className="messageSender_bottom"> 
            <div className="messageSender_option">
                <VideocamIcon  style={{color: 'red'}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender_option">
                <PhotoLibraryIcon  style={{color: 'green'}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
                <InsertEmoticonIcon  style={{color: 'orange'}} />
                <h3>Feeling/Activity</h3>
            </div>
          </div>
        </div>
    )
}

export default MessageSender
