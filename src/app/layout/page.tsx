"use client"
import ServerSidebar from './serverSidebar'
import ChannelSidebar from './channelSidebar'
import ChannelHeader from './channelHeader'
import MessageArea from './messageArea'
import MessageInputBar from './messageInputBar'
import { useState } from 'react'

const Layout = () => {
  const [selectedServer, setSelectedServer] = useState('');

  const handleServerClick = (text) => {
    setSelectedServer(text);
  };

  return (
    <div>
        <ServerSidebar onServerClick={handleServerClick} />
        <ChannelSidebar selectedServer={selectedServer} />
        {/* <ChannelHeader />
        <MessageArea />
        <MessageInputBar /> */}
    </div>
  )
}

export default Layout