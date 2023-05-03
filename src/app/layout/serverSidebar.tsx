import { BsPlus, BsGlobe, BsGearFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
// import { Link } from 'next/link'

const ServerSidebar = ({ onServerClick }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <ServerSidebarIcon 
          icon={<FaFire size="28" />} 
          text="Direct Messages"
          onClick={() => onServerClick('Direct Messages')}
        />
        <Divider />
        <ServerSidebarIcon 
          icon={<BsGlobe size="20" />} 
          text="Global Chat"
          onClick={() => onServerClick('Global Chat')}
        />
        <Divider />
        <ServerSidebarIcon 
          icon={<BsPlus size="32" />} 
          text="Add Server"
          onClick={() => onServerClick('Add Server')}
        />
        <ServerSidebarIcon 
          icon={<BsGearFill size="22" />} 
          text="Settings"
          onClick={() => onServerClick('Settings')}
        />
    </div>
  );
};

const ServerSidebarIcon = ({ icon, text, onClick }) => {
  return (
    <div className="sidebar-icon group" onClick={onClick}>
      <span className="sidebar-icon-pill"></span>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr" />;

export default ServerSidebar