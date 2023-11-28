import React from 'react';
import Graph2 from "../../images/other_images/graph2.png";

const NewFrontiers = () => {
  return (
    <div className='component-6'>
        <div className="new_frontiers">
            <div className="title-text">
                <h1 className="common-h1"><span className='common-span'>Unlock</span> New Frontiers.</h1>
                <p className="common-p">Are you a stock trader looking for new opportunities to make<br/>money? We got you covered!</p>
            </div>
            <div className="other-stats">
                <div className="stats-card">
                    <h1>Same</h1>
                    <h1>Strategies</h1>
                </div>
                <div className="stats-card">
                    <h1>Same</h1>
                    <h1>Indicators</h1>
                </div>
                <div className="stats-card">
                    <h1>Better</h1>
                    <h1>Leverage</h1>
                </div>
                <div className="stats-card">
                    <h1>24X7</h1>
                    <h1>Trading</h1>
                </div>
            </div>
            <div className="graph-div">
                <img src={Graph2} alt="graph-2" />
            </div>
        </div>
    </div>
  )
}

export default NewFrontiers