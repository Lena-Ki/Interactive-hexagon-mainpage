import React from 'react'
import './headernav.scss';

export const HeaderNav = () => {
  return (
    <div className="nav__container">
      <ul className="d_flex">
        <li className="nav__item"><a className="hover_left" href="/">БИЛЕТЫ И АБОНЕМЕНТЫ</a></li>
        <div className="d_flex flex_grow03">
          <li className="nav__item"><a className="hover_left" href="/">Как купить?</a></li>
          <li className="nav__item"><a className="hover_left" href="/">Правила</a></li>
          <li className="nav__item"><a className="hover_left" href="/">Возврат билетов</a></li>
        </div>
        <div className="d_flex flex_grow01">
          <li className="nav__item"><a className="hover_left" href="/">[ ] Войти</a></li>
          <li className="nav__item"><a href="/">==</a></li>
        </div>
      </ul>
    </div>
  )
}