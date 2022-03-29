import React from 'react'
import styles from './Form.module.scss';
import {useFormik} from "formik";
import axios from "axios";


function Form() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: value => {
            console.log({
                name: value.name,
                email: value.email,
                message: value.message,
            })
            formik.resetForm()
            axios.post("https://ymndjs.herokuapp.com/sendMessage", {
            // axios.post("http://localhost:3010/sendMessage", {
                name: value.name,
                email: value.email,
                message: value.message,
            })
                .then(() => {
                    alert('ok!')
                })
        }
    })


    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.inputBlock}>
                <input
                    type={"text"}
                    placeholder={"Name"}
                    {...formik.getFieldProps('name')}
                />
                <input
                    type={"text"}
                    placeholder={"Email"}
                    {...formik.getFieldProps('email')}
                />
            </div>
            <textarea
                placeholder={"Your message"}
                {...formik.getFieldProps('message')}/>

            <button className={styles.btn} type={'submit'}>
                Send Message
            </button>
        </form>
    );
}

export default Form;