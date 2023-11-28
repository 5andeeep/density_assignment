import React from 'react';
import step_1 from "../../images/other_images/phone5_img.png";
import step_2 from "../../images/other_images/phone6_img.png";
import step_3 from "../../images/other_images/phone7_img.png";
import user_logo from "../../images/logos/manager_2.png";
import rupee_coin from "../../images/logos/rupee_coin_img.png";
import graph_line from "../../images/logos/graph_line_img.png";

const Easy3Steps = () => {
  return (
    <div className='component-8'>
        <div className="easy_steps">
            <div className="easy_steps-text">
                <h1 className="common-h1">Derivates made simple<br/> in <span className='common-span'>3 Easy </span>Steps</h1>
            </div>
            <div className="three-steps">
                <div className="step">
                    <div className="step-img">
                        <img src={step_1} alt="step1" />
                    </div>
                    <div className="step-details">
                        <img src={user_logo} alt="user_logo" />
                        <h1>Create an Account</h1>
                        <p>Register & Complete your<br/>Verification in less than 2 minuts</p>
                        <button className="common-btn">TRADE NOW</button>
                    </div>
                </div>
                <div className="step">
                    <div className="step-img">
                        <img src={step_2} alt="step1" />
                    </div>
                    <div className="step-details">
                        <img src={rupee_coin} alt="user_logo" />
                        <h1>Deposit Funds</h1>
                        <p>Add funds quickly using a variety<br/>of payment methods</p>
                        <button className="common-btn">TRADE NOW</button>
                    </div>
                </div>
                <div className="step">
                    <div className="step-img">
                        <img src={step_3} alt="step1" />
                    </div>
                    <div className="step-details">
                        <img src={graph_line} alt="user_logo" />
                        <h1>Become a Trader</h1>
                        <p>Choose Your Trading Pair & Trade<br/>Seamlessly</p>
                        <button className="common-btn">TRADE NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Easy3Steps