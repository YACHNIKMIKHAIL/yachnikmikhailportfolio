import React from 'react';
import s from './ModalWindow.module.scss'

type HiringModalType={
    active:boolean
    setActive:(value:boolean)=>void
    children:any
}
const HiringModal = ({active, setActive, children}:HiringModalType) => {
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