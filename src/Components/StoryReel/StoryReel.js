import React from 'react'
import Story from '../Story/Story'
import '../StoryReel/StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`}    
                profileSrc={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`} 
                title='Shine Mathew'
            />
              <Story
                image={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`}    
                profileSrc={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`} 
                title='Shine Mathew'
            />
              <Story
                image={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`}    
                profileSrc={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`} 
                title='Shine Mathew'
            />
        </div>
    )
}

export default StoryReel
