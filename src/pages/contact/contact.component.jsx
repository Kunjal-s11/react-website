import React from 'react';

import './contact.component.scss';
import Kunjal from '../../assets/kunjal.jpg';
import Payal from '../../assets/payal.jpg';

const ContactPage = () => (
  <div className='contact'>
    <span className="Kunjal">
        <div className="overlay"><img src={Kunjal} alt="Kunjal" height={400} width={300}/></div>
        <div>Kunjal Sheth - 1705321</div>
    </span>
    
    <span>
        <div><img src={Payal} alt="Payal" height={400} width={300}/></div>
        <div>Payal Priyadarshani - 1705805</div>
    </span>
  </div>
);

export default ContactPage;
