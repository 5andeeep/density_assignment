import React from 'react';
import coinDCX_logo from "../../images/logos/coinDCX_logo.png";
import deltaExchange_logo from "../../images/logos/deltaExchange_logo.png";
import density_logo from "../../images/logos/density_logo.png";
import Frame2 from "../../images/other_images/Frame2.png";

const TradeMorePayLess = () => {
  return (
    <div className='component-4'>
        <div className="tradeMore-payLess">
            <div className="tradeMore-text">
                <h1 className='common-h1'>Trade More. <span className='common-span'>Pay Less.</span></h1>
                <p>Our low Fees Supercharge Your Profits</p>
            </div>
            <div className="all-cards-tradeMore">
                <div className="tradeMore-cards">
                    <div className="coinDCX-card">
                        <div className="logo-img">
                            <img src={coinDCX_logo} alt="coinDCX_logo" />
                        </div>
                        <div className="div-1">
                            <h1>0.025</h1>
                            <p>Maker Fees</p>
                        </div>
                        <div className="div-1">
                            <h1>0.07</h1>
                            <p>Taker Fees</p>
                        </div>
                    </div>
                    <div className="frame">
                        <img src={Frame2} alt="background" />
                    </div>
                </div>
                <div className="tradeMore-cards">
                    <div className="density-card">
                        <div className="logo-img">
                            <img src={density_logo} alt="density_logo" />
                        </div>
                        <div className="div-1">
                            <h1>0.02</h1>
                            <p>Maker Fees</p>
                        </div>
                        <div className="div-1">
                            <h1>0.04</h1>
                            <p>Taker Fees</p>
                        </div>
                    </div>
                    <div className="frame">
                        <img src={Frame2} alt="background" />
                    </div>
                </div>
                <div className="tradeMore-cards">
                    <div className="deltaExchange-card">
                        <div className="logo-img">
                            <img src={deltaExchange_logo} alt="deltaExchange_logo" />
                        </div>
                        <div className="div-1">
                            <h1>0.02</h1>
                            <p>Maker Fees</p>
                        </div>
                        <div className="div-1">
                            <h1>0.05</h1>
                            <p>Taker Fees</p>
                        </div>
                    </div>
                    <div className="frame">
                        <img src={Frame2} alt="background" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TradeMorePayLess