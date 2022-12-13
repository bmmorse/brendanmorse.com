import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const DIV_FULL = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  flex-direction: column;
  color: white;
  gap: 40px;
  padding: 0 40px;

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    h2 {
      text-align: center;
    }
    .tiny {
      text-align: center;
      opacity: 40%;
    }
  }
`;

export default function Footer(props) {
  const DATA = {
    home: {
      url: '/contact',
      buttonText: <>Let's Talk</>,
    },
    contact: {
      url: '/',
      buttonText: <>Back to Home</>,
    },
  };

  const { url, buttonText } = DATA[props.DATA];

  return (
    <DIV_FULL>
      <div className='message'>
        <h2>"Brendan, you're hired."</h2>
        <p className='tiny'>— future employer (you?)</p>
      </div>
      <Link to={url} className='btn'>
        {buttonText}
      </Link>
    </DIV_FULL>
  );
}
