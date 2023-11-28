import React from 'react';
import frame from "../../images/other_images/Frame2.png";
import prakash_img from "../../images/other_images/prakash_img.png";
import shambhavi_img from "../../images/other_images/shambhavi_img.png";
import arjun_img from "../../images/other_images/arjun_img.png";


const PeopleReview = () => {
  return (
    <div className='component-10'>
        <div className="people_review">
            <div className="people_review-text">
                <h1 className="common-h1">Don't take our word for it.</h1>
                <p className="common-p">Hear if from our expert community of traders who have made<br/>insane amounts in a short amount of time</p>
            </div>
            <div className="review-cards">
                <div className="review-card">
                    <div className="behind-frame">
                        <img src={frame} alt="behind-frame" className='frame'/>
                        <img src={prakash_img} alt="prakash-image" className='pro-img'/>
                    </div>
                    <div className="main-content">
                        <div className="review">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam quas magni placeat laudantium, quaerat facere. Sint quasi, animi cum debitis sunt necessitatibus incidunt maiores! Hic impedit laborum molestiae quibusdam consequuntur, ipsum itaque voluptatibus perspiciatis consectetur</p>
                        </div>
                        <div className="reviewer-details">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PeopleReview