import React from 'react'
import "./SidebarOption.css";


function SidebarOption({active,text,Icon}) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon/>
      <span>{text}</span>
    </div>
  );
}

export default SidebarOption