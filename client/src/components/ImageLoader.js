import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';

const DIV_WRAPPER = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 1440 / 768;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;

  box-shadow: 0px 4px 78px rgba(0, 0, 0, 0.04),
    0px 1.54074px 24.8444px rgba(0, 0, 0, 0.0242963),
    0px 0.325926px 6.35556px rgba(0, 0, 0, 0.0157037);

  img {
    width: 100%;
    display: block;
    &.hidden {
      display: none;
    }
  }

  .loader {
    display: flex;
    gap: 16px;

    &.hidden {
      display: none;
    }

    span {
      &.spinner {
        width: 40px;
        height: 40px;
        border: 2px solid #c3c3c3;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 2s linear infinite;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export default function ImageLoader({ src }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <DIV_WRAPPER>
      <img
        src={src}
        onLoad={() => setImageLoaded(true)}
        className={imageLoaded ? '' : 'hidden'}
        alt=''
      />
      <div className={imageLoaded ? 'hidden' : 'loader'}>
        <span className='spinner'></span>
      </div>
    </DIV_WRAPPER>
  );
}
