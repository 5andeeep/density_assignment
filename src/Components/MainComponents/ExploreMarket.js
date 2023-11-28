import React from 'react';
import GraphImg from "../../images/other_images/graph1.png";

const ExploreMarket = () => {
  return (
    <div className='component-5'>
        <div className="explore_market">
            <div className="explore_market-text">
                <h1 className='common-h1'>Explore the Markets<br/>like it is your <span className='common-span'>Playground.</span></h1>
                <p>Search for your favorite coins and stay ahead of the market</p>
            </div>
            <div className="explore_market-graph-img">
                <img src={GraphImg} alt="graph-img" />
                <div>
                    <button className="common-btn">EXPLORE MARKETS</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ExploreMarket