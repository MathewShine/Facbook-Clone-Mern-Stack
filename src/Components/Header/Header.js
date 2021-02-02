import React from 'react';
import { Avatar,IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header_left">
                <img 
                 src={`${process.env.PUBLIC_URL}/fb_logo.png`}
                 alt="Facebook logo"></img>
            </div>
            
            <div className="header_input">
                <SearchIcon />
                <input 
                 placeholder="Serach Facebook"
                 type="text"
                />
            </div>

            <div className="header_center">
                <div className="header_option--active">
                    <HomeIcon 
                    fontSize="large"
                    />
                </div>
                <div className="header_option">
                    <FlagIcon
                     fontSize="large"
                    />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon 
                    fontSize="large"
                    />
                </div>
                <div className="header_option">
                    <StorefrontIcon
                    fontSize="large"
                    />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon
                    fontSize="large"
                    />
                </div>
            </div>

            <div className='header_right'>
                <div className="header_info">
                    <Avatar  src={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`} />
                    <h4>
                        Shine Mathew
                    </h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>   

                <IconButton>
                    <ForumIcon />
                </IconButton>  

                <IconButton>
                     <NotificationsActiveIcon />
                </IconButton>
                
                <IconButton>
                     <ExpandMoreIcon />
                </IconButton>
               
            </div>

        </div>
    )
}

export default Header
