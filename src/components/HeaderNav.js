import React from 'react'
import {RiMenu3Fill, RiLoginBoxLine} from 'react-icons/ri'
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
          <li className="nav__item">
            <a className="hover_left" href="/"><RiLoginBoxLine size="1.25em"/>
              <span style={{verticalAlign: 'top'}}>Войти</span>
            </a>
          </li>
          <li className="nav__item"><a href="/"><RiMenu3Fill size="1.3em"/></a></li>
        </div>
      </ul>
    </div>
  )
}