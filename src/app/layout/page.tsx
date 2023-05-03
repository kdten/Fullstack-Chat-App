"use client"
import ServerSidebar from './serverSidebar'
import ChannelSidebar from './channelSidebar'
import AddServerPopup from './addServerPopup';
import ChannelHeader from './channelHeader'
import MessageArea from './messageArea'
import MessageInputBar from './messageInputBar'
import { useState } from 'react'

const Layout = () => {
  const [selectedServer, setSelectedServer] = useState('');
  const [isAddServerPopupVisible, setIsAddServerPopupVisible] = useState(false);

  const handleServerClick = (text) => {
    if (text === 'Add Server') {
      setIsAddServerPopupVisible(true);
    } else {
      setSelectedServer(text);
    }
  };

  return (
    <div>
        <ServerSidebar onServerClick={handleServerClick} />
        <ChannelSidebar selectedServer={selectedServer} />
        {isAddServerPopupVisible && <AddServerPopup onClose={() => setIsAddServerPopupVisible(false)} />}
        {/* <ChannelHeader />
        <MessageArea />
        <MessageInputBar /> */}
    </div>
  )
}

export default Layout