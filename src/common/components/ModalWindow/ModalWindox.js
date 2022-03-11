import React from 'react';
import s from './ModalWindow.module.scss'

const HiringModal = ({active, setActive, children}) => {
    return (
        <div className={`${active ? s.modal + ' ' + s.active : s.modal}`} onClick={() => setActive(false)}>
            <div className={`${active ? s.modalContent + ' ' + s.activeContent : s.modalContent}`}
                 onClick={e => e.stopPropagation()}>
                {/* //place for form*/}
                {children}
            </div>
        </div>
    )

}

export default HiringModal;