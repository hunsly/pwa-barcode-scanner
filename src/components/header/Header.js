import React from 'react';
import localization from '../localization';

import styles from './header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">{localization.header__title}</h1>
  </header>
);

export default Header;
