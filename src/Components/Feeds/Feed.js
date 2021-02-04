import React from 'react'
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post
                profilePic={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`}
                message='Hi there code_SM here'
                timestamp='time'
                imgName='imgName'
                username='Shine Mathew'
            />

            {/* {
                postsData.map(entry => (
                    <Post 
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            } */}
        </div>
    )
}

export default Feed
