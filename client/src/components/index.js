import React from 'react';
import Section from './Section';
import Navigation from './Navigation';
import styled from 'styled-components/macro';
import HomeIntro from './HomeIntro';
import ContactIntro from './ContactIntro';

import Footer from './Footer';

const DIV_FULL = styled.div`
  display: flex;
  flex-direction: column;
  gap: 240px;
  padding: 80px;

  @media (max-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export function Home() {
  return (
    <DIV_FULL>
      <Navigation />
      <HomeIntro />
      <Section DATA='arkieva' />
      <Section DATA='doyle' />
      <Section DATA='wordtrail' />
      <Section DATA='brendan' />

      <Footer DATA='home' />
    </DIV_FULL>
  );
}

export function Contact() {
  return (
    <DIV_FULL>
      <Navigation />
      <ContactIntro />
      <Footer DATA='contact' />
    </DIV_FULL>
  );
}
