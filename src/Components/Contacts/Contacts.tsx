import React from 'react';
import styled from "styled-components";
import img from './../Images/MRC1786.jpg'

const Contacts = () => {
    return (
        <MainCase>
            <ContainerCase>
                <span style={{margin:'20px',color:'azure'}}>My contacts</span>
                <ContactsCase>
                    <form action=""
                          style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        #1
                        <input type="text"/>
                        #2
                        <input type="text"/>
                        #3
                        <textarea name="" id="">
                        </textarea>

                    </form>
                </ContactsCase>
                <ButtonCase>
                    <button>Send</button>
                </ButtonCase>
            </ContainerCase>
        </MainCase>
    );
};

export default Contacts;

const MainCase = styled.div`
  height: 100vh;
  //background-color: rgba(61, 203, 215, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 39, 94, 0.3);
`
const ContainerCase = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border: solid 4px sandybrown;
  border-radius: 10px;
  background-color: rgba(34, 39, 94, 0.6);
`
const ContactsCase = styled.div`
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: sandybrown;
  
`
const ButtonCase = styled.div`
  height: 20%;
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2em;
`
