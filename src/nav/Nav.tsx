import React from 'react'
import s from './Nav.module.scss';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import {Link} from "react-scroll";

function Nav() {
    const items = ['home', 'skills', 'portfolio', 'contacts']
    return (
        <div className={s.navigation}>
            <div className={s.container}>
                {items.map((item, index) =>
                    <Link
                        key={index}
                        className={s.link}
                        activeClass={s.active}
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-99}
                        duration={500}
                    >{item}</Link>
                )}
                <BurgerMenu items={items}/>
            </div>
        </div>
    );
}

export default Nav;