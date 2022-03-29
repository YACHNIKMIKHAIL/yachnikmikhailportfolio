import React, {useState} from 'react'
import st from './Vacansy.module.scss';
import Title from "../common/components/title/Title";
import HiringModal from "../common/components/ModalWindow/ModalWindox";
import Button from "../common/button/Button";
import {useFormik} from "formik";
import axios from "axios";


function Vacancy() {
    //for modal window
    const [activeModal, setActiveModal] = useState(false)

    const handlerModal = () => {
        setActiveModal(true)
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            projectTitle: '',
            message: '',
        },
        onSubmit: value => {
            console.log({
                name: value.name,
                email: value.email,
                projectTitle: value.projectTitle,
                message: value.message,
            })
            formik.resetForm()
            axios.post("https://ymndjs.herokuapp.com/sendMessage", {
                // axios.post("http://localhost:3010/sendMessage", {
                name: value.name,
                email: value.email,
                projectTitle: value.projectTitle,
                message: value.message,
            })
                .then(() => {
                    alert('ok!')
                })
        }
    })


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
                        <form className={st.form} onSubmit={formik.handleSubmit}>
                            <div className={st.inputBlock}>
                                {/*<input type="text" placeholder="Your Name"/>*/}
                                <input
                                    type={"text"}
                                    placeholder={"Your Name"}
                                    {...formik.getFieldProps('name')}
                                />

                                {/*<input type="text" placeholder="Your Project title"/>*/}
                                <input
                                    type={"text"}
                                    placeholder={"Your Project title"}
                                    {...formik.getFieldProps('projectTitle')}
                                />

                                {/*<input type="email" placeholder="Please enter Your Email"/>*/}
                                <input
                                    type={"email"}
                                    placeholder={"Please enter Your Email"}
                                    {...formik.getFieldProps('email')}
                                />

                            </div>
                            {/*<textarea placeholder="Your Message..."/>*/}
                            <textarea
                                placeholder={"Your message"}
                                {...formik.getFieldProps('message')}/>

                            <button className={st.btn} type={'submit'}>
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