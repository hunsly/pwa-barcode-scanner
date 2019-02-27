import React from 'react';
import localization from '../localization';

import styles from './header.css';


const languageChange = (ev) => {
  var lang = ev.currentTarget.dataset.lang;
  if (('localStorage' in window) && window['localStorage'] !== null) {
   localStorage.setItem("language", lang);
   window.location.reload();
  }
}

var langArr = [];
for (var i in localization._props) {
  langArr.push(i);
}
var langTxt = langArr.map((x, i) =>
<span key={i}><a href="#"  onClick={languageChange.bind(x)} data-lang={x}>{x}</a>
{(langArr.length > i+1) ? " | " : ""}
</span>);


const Header = () => (
  <header className="header">
    <h1 className="header__title">{localization.header__title} {langTxt}</h1>
  </header>
);

export default Header;
