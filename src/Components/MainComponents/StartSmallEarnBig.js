import React from 'react';
import frame from "../../images/other_images/Frame2.png";
import logo_25 from "../../images/logos/logo_25.png";
import manager_1 from "../../images/logos/manager_1.png";

const StartSmallEarnBig = () => {
  return (
    <div className='component-7'>
        <div className="start_small">
            <div className="start_small-text">
                <h1>Start Small. Earn Big.</h1>
                <p>Deposity a minimum of 1000 and get a Deposit bonus +<br/>dedicated relationship manager</p>
            </div>
            <div className="start_small-cards">
                <div className="card">
                    <div className="behind-frame">
                        <img src={frame} alt="behind-frame" />
                    </div>
                    <div className="main-content">
                        <div className="logo-25">
                            <img src={logo_25} alt="logo-25" />
                        </div>
                        <div className="content">
                            <h1>Deposit<br/>Bonus.</h1>
                            <p>Our assests' liquidity is unmutched in the market, with a<br/>small bid-ask spread and a well-balanced order book.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="behind-frame">
                        <img src={frame} alt="behind-frame" />
                    </div>
                    <div className="main-content">
                        <div className="manager_1">
                            <img src={manager_1} alt="manager-1" />
                        </div>
                        <div className="content">
                            <h1>Dedicated<br/>Relationship Manager.</h1>
                            <p>Our assests' liquidity is unmutched in the market, with a small<br/> bid-ask spread and a well-balanced order book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartSmallEarnBig