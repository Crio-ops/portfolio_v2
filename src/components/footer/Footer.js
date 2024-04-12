import React from 'react';
import Love from '../../assets/img/decoration/heart.svg';

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <p className="footer_text">Made with</p>
        </li>
        <li>
          <img src={Love} alt="Logo" />
        </li>
        <li>
          <p className="footer_text">by Kevin</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;