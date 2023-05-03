import React from 'react'
import { useLocation } from 'react-router-dom'

import './VideoPage.css'

import SuggestVideoCard from '../../components/SuggestVideoCard/SuggestVideoCard';
import SuggestionHeader from '../../components/SuggestionHeader/SuggestionHeader';

export default function VideoPage() {
    const location = useLocation()
    const { video, suggestedVideos } = location.state
    console.log(suggestedVideos)

    return (
       <>
        <div className="videopage_container">
            <div className="video_container">
                <iframe
                width="100%"
                height="70%"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
                <h3>{video.snippet.title}</h3>
                
            </div>

            <div className="suggestedvideos_container">
                <SuggestionHeader slides={2}/>
                 {suggestedVideos.map((video)=>{
                    return(
                        <SuggestVideoCard video={video} suggestedVideos={suggestedVideos}/>
                    )
                 })}

            </div>

      </div>
       </>
    );
  }