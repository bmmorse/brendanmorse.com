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
  align-items: flex-start;
  gap: 40px;
  position: relative;
  h1 {
    max-width: 1400px;
    width: 100%;
    div {
      div {
        &:nth-child(3) {
          font-weight: 600;
        }
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default function ContactIntro(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    root: null,
    rootMargin: '0% 0% 8% 0%',
  });

  return (
    <DIV_FULL>
      <h1>
        <AnimateText>If you’re hiring, let’s talk!</AnimateText>
      </h1>
      <Form />
    </DIV_FULL>
  );
}
