import React from 'react';
import localization from '../localization';

import { Link } from 'react-router-dom';

import Camera from 'react-feather/dist/icons/camera';
import Clock from 'react-feather/dist/icons/clock';

import styles from './footer.css';

const Footer = () => (
  <div className="footer">
    <Link className="footer__link" to="/" >
      <Camera />
      {localization.footer__link_camera}
    </Link>
    <Link className="footer__link" to="/history">
      <Clock />
      {localization.footer__link_history}
    </Link>
  </div>
);

export default Footer;
