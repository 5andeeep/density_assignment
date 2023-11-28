import React from 'react'
import threePhone from "../../images/other_images/three_phone_img.png";

const TradeTheFuture = () => {
  return (
    <div className='component-1'>
        <div className="text-content">
            <h1 className="title">It's time to trade,<br/>the <span>future.</span></h1>
            <p>Trade BTC, ETH Futures With 125x Leverage And Earn Rewards.</p>
        </div>
        <div className="image-div">
            <div className="img-div">
                <img src={threePhone} alt="three-phone" />
            </div>
        </div>
    </div>
  )
}

export default TradeTheFuture