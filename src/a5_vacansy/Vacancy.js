import React, {useState} from 'react'
import st from './Vacansy.module.scss';
import Title from "../common/components/title/Title";
import HiringModal from "../common/components/ModalWindow/ModalWindox";
import Button from "../common/button/Button";



function Vacancy() {
    //for modal window
    const [activeModal, setActiveModal] = useState(false)

    const handlerModal = () => {
        setActiveModal(true)
    }
    return (
        <div className={st.vacancyBlock}>
            <div className={st.vacancyContainer}>
                <Title title={'I Am Available For Freelance'}/>
                <Button title={" HIRE ME"} click={handlerModal}/>
                <HiringModal active={activeModal} setActive={setActiveModal}>
                    <div>
                        <div className={st.header}>
                            <h4>HAVE A PROJECT?</h4>
                            <p>I’m ready to help you. You just type details below,and/or send us a file.</p>
                        </div>
                        <form className={st.form}>
                            <div className={st.inputBlock}>
                                <input type="text" placeholder="Your Name"/>
                                <input type="text" placeholder="Your Project title"/>
                                <input type="email" placeholder="Please enter Your Email"/>
                            </div>
                            <textarea placeholder="Your Message..."/>
                            <button className={st.btn}>
                                Send Offer
                            </button>
                        </form>
                    </div>
                </HiringModal>

            </div>
        </div>
    );
}

export default Vacancy;