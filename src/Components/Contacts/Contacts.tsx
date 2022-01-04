import React from 'react';
import styled from "styled-components";
import img from './../Images/MRC1786.jpg'

const Contacts = () => {
    return (
        <MainCase>
            <ContainerCase>
                My contacts
                <ContactsCase>
                    {/*<form action="submit">*/}
                        <>
                            <input type="text"/>
                        </>
                        <>
                            <input type="text"/>
                        </>
                        <>
                        <textarea name="" id="">
                        </textarea>
                        </>
                    {/*</form>*/}
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

`
const ContainerCase = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border: yellow 2px solid;
`
const ContactsCase = styled.div`
  width: 60vh;
  height: 40vh;
  background-color: rgba(34, 39, 94, 0.7);
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: sandybrown;
  border: solid 2px red;
`
const ButtonCase = styled.div`
  width: 60vh;
  height: 20%;
  background-color: rgba(34, 39, 94, 0.7);
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2em;
`
