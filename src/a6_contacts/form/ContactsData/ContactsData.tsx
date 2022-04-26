import React from 'react'
import styles from './ContactsData.module.scss';
import { faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons";
import DataBlock from "./DataBlock/DataBlock";



function ContactsData() {
    return (
            <div className={styles.data}>
                <DataBlock iconTitle={faTelegramPlane} contactTitle={'Phone'} data={'+48-500-105-229'} a={"tel:+48-500-105-229"}/>
                <DataBlock iconTitle={faEnvelope} contactTitle={'Email'} data={'yachnikmikhail@gmail.com'} a={""}/>
                <DataBlock iconTitle={faHome} contactTitle={'My Location'} data={'Warsaw, Poland'} a={""}/>
            </div>
    );
}

export default ContactsData;