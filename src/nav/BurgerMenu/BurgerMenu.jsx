import React, {useState} from 'react'
import Menu from "./menu/menu";
import s from './Burger.module.scss'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function BurgerMenu({items}) {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div>
            <div className={s.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <Menu items={items} header={'menu'} active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}

export default BurgerMenu;