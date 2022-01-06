import React from 'react';
import styled from "styled-components";
import img from './../Images/MRC1786.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <FooterCase>
            <ContainerCase>

                <span>YACHNIK MIKHAIL  </span>

                <IconsCase>
                    <a href="https://t.me/krblnj">
                        <TelegramIcon style={{width: '30px', height: '30px', color: 'whitesmoke'}}/>
                    </a>
                    <a href="https://www.instagram.com/krblnj/">
                        <InstagramIcon style={{width: '30px', height: '30px', color: 'whitesmoke'}}/>
                    </a>
                    <a href="#">
                        <LinkedInIcon style={{width: '30px', height: '30px', color: 'whitesmoke'}}/>
                    </a>
                    <a href="https://github.com/YACHNIKMIKHAIL">
                        <GitHubIcon style={{width: '30px', height: '30px', color: 'whitesmoke'}}/>
                    </a>


                </IconsCase>
            </ContainerCase>
        </FooterCase>
    );
};

export default Footer;

const FooterCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(239, 85, 13, 0.1);
`
const ContainerCase = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: sandybrown;
`
const IconsCase = styled.div`
  width: 67vh;
  height: 40%;
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2em;
`
