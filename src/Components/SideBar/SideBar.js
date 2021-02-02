import './SideBar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow  src={`${process.env.PUBLIC_URL}/shine_mathew_dp.jpg`} title= "Shine Mathew" />
            <SidebarRow  Icon={LocalHospitalIcon} title='C0VID-19 Information Center' />
            <SidebarRow  Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow  Icon={PeopleIcon} title='Frineds' />
            <SidebarRow  Icon={ChatIcon} title='Messenger' />
            <SidebarRow  Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow  Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow  Icon={ExpandMoreTwoToneIcon} title='More' />
        </div>
    )
}
export default Sidebar