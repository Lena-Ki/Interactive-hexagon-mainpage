import React from 'react'
import './headernav.css';

export const HeaderNav = () => {
  return (
    <div className="nav__container">
      <ul className="nav__list">
        <li className="nav__item"><a href="#">БИЛЕТЫ И АБОНЕМЕНТЫ</a></li>
        <li className="nav__item"><a href="#">Как купить?</a></li>
        <li className="nav__item"><a href="#">Правила</a></li>
        <li className="nav__item"><a href="#">Возврат билетов</a></li>
        <li className="nav__item"><a href="#">Войти</a></li>
        <li className="nav__item"><a href="#">Иконка</a></li>
      </ul>
    </div>
  )
}