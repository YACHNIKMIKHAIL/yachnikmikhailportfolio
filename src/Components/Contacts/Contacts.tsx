import React from 'react';
import styled from "styled-components";
import img from './../Images/MRC1786.jpg'

const Contacts = () => {
    return (
        <MainCase id={'contacts'}>
            <ContainerCase>
                <span style={{margin: '10px', color: 'azure'}}>My contacts</span>
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
                    <button type="submit"
                            style={{
                                backgroundColor: 'hotpink',
                                border: 'none',
                                color: 'white',
                                height: '40px',
                                borderRadius: '10px',
                                fontFamily: 'Indie Flower',
                                fontWeight: 'bold'
                            }}
                    >Send
                    </button>
                </ButtonCase>
            </ContainerCase>
        </MainCase>
    );
};

export default Contacts;

const MainCase = styled.div`
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(34, 39, 94, 0.3);
`
const ContainerCase = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-radius: 10px;
`
const ContactsCase = styled.div`
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: sandybrown;
  //border: solid 4px sandybrown;
  height: 80%;
  max-width: 95%;
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
