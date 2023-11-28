import React from 'react';
import phone1 from "../../images/other_images/phone1_img.png";
import phone2 from "../../images/other_images/phone2_img.png";
import phone3 from "../../images/other_images/phone3_img.png";

const EndlessPossibility = () => {
  return (
    <div className='component-3'>
        <div className="endless-possibility">
            <div className="phone-1">
                <img src={phone1} alt="feature-1" />
            </div>
            <div className="phone-2">
                <img src={phone2} alt="feature-2" />
            </div>
            <div className="phone-3">
                <img src={phone3} alt="feature-3" />
            </div>
        </div>
    </div>
  )
}

export default EndlessPossibility