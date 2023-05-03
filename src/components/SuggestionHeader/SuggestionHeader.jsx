import React from 'react'

import './SuggestionHeader.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SuggestionHeader({slides}) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 3,
        variableWidth: true
      };

      const suggestions = [
        'All',
        'Music',
        'Gaming',
        'Comedy',
        'How-to & DIY',
        'Sports',
        'Cooking',
        'Travel',
        'News & Politics',
        'Science & Technology',
        'Fashion & Beauty',
        'Education',
        'Entertainment',
        'Fitness & Health',
        'Kids',
        'Pets & Animals',
        'Vlogs',
        'Auto & Vehicles'
      ];

      return (
        <>
            <div className="suggestion_container">
            <Slider {...settings}>
            {suggestions.map((suggestion)=>{
                return(
                    <div className='suggestion'>
                        <small>{suggestion}</small>
                    </div>
                )
            })}
            </Slider>
            </div>
        </>
      );
}
