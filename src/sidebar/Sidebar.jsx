import React, { useState } from "react";
import "../sidebar/Sidebar.css";
import menu from "../image/menu_icon.png";
import plus from "../image/plus_icon.png";
import msg from "../image/message_icon.png";
import help from "../image/question_icon.png";
import act from "../image/history_icon.png";
import set from "../image/setting_icon.png";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <div className="menu">
            <img src={menu} alt="" className="menuIcon" onClick={()=>setExtended(prev=>!prev)} />
          </div>
          <div className="chat">
            <img src={plus} alt="" className="plusIcon" />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended ? (
            <div className="recent">
              <p>Recent</p>
              <div className="recent-entry">
                <img src={msg} alt="" className="msgIcon" />
                <p>What is React?</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="help">
            <img src={help} alt="" className="helpIcon" />
           {extended?<p>Help</p>:null} 
          </div>
          <div className="activity">
            <img src={act} alt="" className="actIcon" />
            {extended?<p>Activity</p>:null}
          </div>
          <div className="setting">
            <img src={set} alt="" className="settingIcon" />
           {extended?<p>Settings</p>:null} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
