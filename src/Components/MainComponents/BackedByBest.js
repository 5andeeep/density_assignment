import React from 'react';
import orios_logo from "../../images/logos/orios_logo.png";
import inflection_logo from "../../images/logos/inflection_logo.png";
import iseedVenture_logo from "../../images/logos/iseedVenture_logo.png";
import perpetualValue_logo from "../../images/logos/perpetualValue_logo.png";
import rise1947_logo from "../../images/logos/rise1947_logo.png";
import tribeCapital_logo from "../../images/logos/tribeCapital_logo.png";
import polygonLabs_logo from "../../images/logos/polygonlab_logo.png";
import utsav_img from "../../images/other_images/utsav_img.png";
import aditya_img from "../../images/other_images/aditya_img.png";
import gokul_img from "../../images/other_images/gokul_img.png";
import sajid_img from "../../images/other_images/sajid_img.png";
import arjun_img from "../../images/other_images/ArjunSethi_img.png";
import kunal_img from "../../images/other_images/kunal_img.png";
import sandeep_img from "../../images/other_images/sandeep_img.png";
import karn_img from "../../images/other_images/karn_img.png";


const BackedByBest = () => {
  return (
    <div className='component-9'>
        <div className="backed_by_best">
            <h1 className="common-h1">Backed by the Best.</h1>
            <div className="companies-logos">
                <div className="comp-logo">
                    <img src={orios_logo} alt="" />
                </div>
                <div className="comp-logo">
                    <img src={inflection_logo} alt="" />
                </div>
                <div className="comp-logo">
                    <img src={iseedVenture_logo} alt="" />
                </div>
                <div className="comp-logo">
                    <img src={perpetualValue_logo} alt="" />
                </div>
                <div className="comp-logo">
                    <img src={rise1947_logo} alt="" />
                </div>
                <div className="comp-logo">
                    <img src={tribeCapital_logo} alt="" />
                </div>
                <div className="comp-logo">
                    <img src={polygonLabs_logo} alt="" />
                </div>

            </div>
            <div className="people-imgs">
                <div>
                    <img src={utsav_img} alt="" />
                    <p className='name'>Utsav Somani</p>
                </div>
                <div>
                    <img src={aditya_img} alt="" />
                    <p className='name'>Aditya Nagarsheth</p>
                    <p className='post'>Perpetual Value Partners</p>    
                </div>
                <div>
                    <img src={gokul_img} alt="gokul rajaram" />
                    <p className='name'>Gokul Rajaram</p>
                </div>
                <div>
                    <img src={sajid_img} alt="sajid rehman" />
                    <p className='name'>Sajid Rehman</p>
                    <p className='post'>MyAsia VC</p>
                </div>
                <div>
                    <img src={arjun_img} alt="arjun sethi" />
                    <p className='name'>Arjun Sethi</p>
                    <p className='post'>Tribe Capital</p>
                </div>
                <div>
                    <img src={kunal_img} alt="kunal shah" />
                    <p className='name'>Kunal Shah</p>
                </div>
                <div>
                    <img src={sandeep_img} alt="Sandeep Nailawal" />
                    <p className='name'>Sandeep Nailawal</p>
                    <p className='post'>Polygon Labs</p>
                </div>
                <div>
                    <img src={karn_img} alt="Karn Vivek Nagpal" />
                    <p className='name'>Karn Vivek Nagpal</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackedByBest