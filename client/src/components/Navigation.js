import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ReactComponent as Github } from '../Globals/svg/github.svg';
import { ReactComponent as Linkedin } from '../Globals/svg/linkedin.svg';
import { ReactComponent as Mail } from '../Globals/svg/mail.svg';
import brendan from '../Globals/svg/brendan.jpeg';

const DIV_FULL = styled.div`
  background: var(--white);
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  .homeLink {
    display: flex;
    align-items: center;
    gap: 12px;

    .profile {
      background: url(${brendan}) no-repeat;
      background-size: cover;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      /* background: black; */
    }
    .name {
      display: flex;
      flex-direction: column;
      /* gap: 2px; */
      align-items: flex-start;
      span {
        position: relative;
        text-transform: capitalize;
        &:nth-child(1) {
          right: 0px;
          transition: right 300ms ease;
        }
        &:nth-child(2) {
          left: 0px;
          transition: left 300ms ease;
        }
      }

      &:hover {
        span:nth-child(1) {
          right: 8px;
        }
        span:nth-child(2) {
          left: 8px;
        }
      }
    }
  }

  .links {
    display: flex;
    margin: -20px -20px -20px 0;
    a {
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 20px;

      svg {
        width: 22px;
        height: auto;
        path {
          transition: fill 200ms ease;
        }
      }
      &:hover {
        svg path {
          fill: #eeeeee;
        }
      }
    }
  }

  @media (max-width: 640px) {
    .links {
      margin-right: -12px;
      a {
        padding: 12px;
      }
    }
  }
`;

export default function Navigation(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    root: null,
    rootMargin: '0% 0% 8% 0%',
  });

  return (
    <DIV_FULL>
      <Link to='/' className='homeLink'>
        <div className='name'>
          <span className='name'>Brendan Morse</span>
          <span className='role'>Designer/Developer</span>
        </div>
      </Link>
      <div className='links'>
        <a href='https://www.linkedin.com/in/brendan-morse/' target='_blank'>
          <Linkedin />
        </a>
        <a href='https://github.com/bmmorse/' target='_blank'>
          <Github />
        </a>
        <Link to='/contact'>
          <Mail />
        </Link>
      </div>
    </DIV_FULL>
  );
}
