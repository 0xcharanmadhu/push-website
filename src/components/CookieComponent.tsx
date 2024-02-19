// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React, { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import {
  A,
  Button,
  H2,
  Image,
  ItemH,
  ItemV,
  Section,
} from "@site/src/css/SharedStyling";
import useMediaQuery from "@site/src/hooks/useMediaQuery";
import GLOBALS, { device } from '@site/src/config/globals';




const CookieComponent = () => {
  const isMobile = useMediaQuery(device.mobileL);

  const [cookies, setCookie] = useCookies(['myCookieConsent']);
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => {
    setCookie('myCookieConsent', true, { path: '/' });
    setShowModal(false);
  };

  const handleReject = () => {
    // Add your logic for rejecting cookies here
    // setCookie('myCookieConsent', false, { path: '/' });
    setShowModal(false);
  };

  return (
    <>
    {!cookies.myCookieConsent && showModal && (
    <CookieContainer>
      <H2 
        color="#000"
        fontWeight="400"
        letterSpacing="0.02em"
        lineHeight="120%"
        fontSize={"13px"}
        fontFamily="FK Grotesk Neue"
        lineHeight="130%"
        textAlign="left">
          We use cookies to personalize your experience. 
          Learn more in our <a href='https://push.org' target='_blank'>Privacy Policy</a>.
          </H2>

        <ButtonContainer>
          <AcceptButton onClick={handleAccept}>Accept</AcceptButton>
          <RejectButton onClick={handleReject}>Opt-out</RejectButton>
        </ButtonContainer>
    </CookieContainer>)}
    </>
  );
};

const CookieContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 344px;
  height: 144px;
  z-index: 999999;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {

  a {
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
}

  @media ${device.mobileL} {
      width: calc(100% - 32px);
      left: 16px
      bottom: 16px;
      right: 16px;
  }
`;


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AcceptButton = styled(Button)`
  color: #ffffff;
  border: none;
  padding: 12px 28px;
  border-radius: 4px;
  cursor: pointer;
  border-radius: 8px;
  background: #D548EC;
  font-size: 14px;
  font-weight: 500;
  font-family: FK Grotesk Neue;
`;

const RejectButton = styled(Button)`
  background-color: transparent;
  color: #000;
  border: none;
  padding: 12px 28px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: FK Grotesk Neue;


  &:hover {
    background-color: transparent !important;
    text-decoration: underline;
  }
`;
export default CookieComponent;
