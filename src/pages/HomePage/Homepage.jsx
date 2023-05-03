import React, { useState, useEffect } from 'react'

import './Homepage.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import VideoCard from '../../components/VideoCard/VideoCard'
import SuggestionHeader from '../../components/SuggestionHeader/SuggestionHeader'

import YoutubeVideos from '../../api/YoutubeVideos'

export default function Homepage({videos}) {
  

  return (
    <div className="homepage_container">
      <Sidebar />
      <div>
        <SuggestionHeader slides={5} />
        <div className="video_container">
          {videos && videos.map((video) => {
            return (
              <VideoCard video={video} suggestedVideos={videos}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}
