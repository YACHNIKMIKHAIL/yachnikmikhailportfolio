import React, {useCallback, useEffect, useRef} from 'react'
import s from './menu.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

function Menu({header, items, active, setActive}) {

    const modalRef = useRef(null)

    const onClickOutsideHandler = useCallback(
        (event) => {
            if (
                active &&
                !(
                    modalRef.current && modalRef.current.contains(event.target)
                )
            ) {
                setActive(false);
            }
        },
        [active, modalRef,setActive]
    );

    useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler);
        return () => {
            window.removeEventListener('click', onClickOutsideHandler);
        };
    }, [onClickOutsideHandler]);

    return (<div className={`${active ? s.menuActive : s.menu}`}>
            <div className={s.menuContent}>
                <div className={s.closeMenu} onClick={() => {
                    setActive(false)
                }}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </div>
                <div className={s.menuHeader}>
                    {header}
                </div>
                <div className={s.items}>
                    {items.map((item, index) =>
                        <div key={index} className={s.oneItem}>
                            <Link

                                className={s.link}
                                activeClass={s.active}
                                to={item}
                                spy={true}
                                smooth={true}
                                offset={-99}
                                duration={500}
                            >{item}</Link>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default Menu;