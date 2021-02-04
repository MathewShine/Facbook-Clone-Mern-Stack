import React from 'react'
import Story from '../Story/Story'
import '../StoryReel/StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093"  
                profileSrc={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`} 
                title='Ronaldo JR'
            />
              <Story
                image="https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/89336/Sachin-Tendulkar-HD--iphone-x-wallpaper-ilikewallpaper_com.jpg"    
                profileSrc={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`} 
                title='Sachin Tendulakr'
            />
              <Story
                image="https://media-exp1.licdn.com/dms/image/C5103AQEmzFWolWjdsw/profile-displayphoto-shrink_400_400/0/1557816783948?e=1617840000&v=beta&t=SPxkFAvvh6L9qLV2AcgX_YRvdxsgbV4WQZyoyO321zA"    
                profileSrc={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`} 
                title='Shine Mathew'
            />
        </div>
    )
}

export default StoryReel
