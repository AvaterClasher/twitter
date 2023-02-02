import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from '../SidebarOption/SidebarOption.jsx';
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/Notifications';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import { Button } from '@mui/material';


const Sidebar =() =>{
  return (
    <div className="sidebar">
      <div className='twitter-icon'><TwitterIcon/></div>
      <SidebarOption active Icon={HomeIcon}text="Home"/>
      <SidebarOption Icon={SearchIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages"/>
      <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmark"/>
      <SidebarOption Icon={ListAltIcon} text="Lists"/>
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>

      <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>

  )
}

export default Sidebar