import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './VideoCard.css'

import { formatTimeAgo } from '../../helpers/FormatTimeAgo';

export default function VideoCard({video, suggestedVideos}) {

    function displayVideo(){
        console.log('gg');
    }

  return (
    <>
       <Link to={`/video/${video.id.videoId}`} state={{ video: video, suggestedVideos: suggestedVideos }}>
        <div className="card_container" onClick={displayVideo}>
            <img src={video.snippet.thumbnails.high.url} alt="Video Thumbnail" id='thumbnail_image' />
            <div className='video_label'>
                <img src="https://yt3.ggpht.com/urNLBJGryDamao5r0jmlTg84mIBOoaeJd6XR67j4nuRd0iRvv5g-MUgaowsWKCs8V_t4KwST=s68-c-k-c0x00ffffff-no-rj" alt="Channel small picture" />
                <div className='video_label__text'>
                   <p>{video.snippet.title}</p>
                    <div>
                        <p className='channel_name'>{video.snippet.channelTitle} <i className='fa-solid fa-circle-check fa-xs'></i></p>
                        <div className="about">
                            <span>1.2M Views</span>  
                            <i className="fa-solid fa-circle fa-2xs"></i>
                            <span>{formatTimeAgo(new Date(video.snippet.publishedAt))}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    </>
  )
}
