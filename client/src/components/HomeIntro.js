import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useInView } from 'react-intersection-observer';
import AnimateText from './AnimateText';
import { Link } from 'react-router-dom';
import Form from './Form';
import Button from './Button';

const DIV_FULL = styled.div`
  background: var(--white);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  h1 {
    max-width: 1400px;
    div {
      div {
        &:nth-child(3) {
          font-weight: 600;
        }
        &:nth-child(4) {
          font-weight: 600;
        }
      }
    }
  }
`;

export default function HomeIntro(props) {
  return (
    <DIV_FULL>
      <h1>
        <AnimateText>
          Hello! I’m Brendan Morse, part UX/UI designer, part frontend
          developer.
        </AnimateText>
      </h1>
      <Button src='/contact'>Let's Talk</Button>
    </DIV_FULL>
  );
}
