import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const DIV_WRAPPER = styled.div`
  background: var(--white);
  display: flex;
  align-items: flex-start;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;

  div {
    display: flex;

    span {
      opacity: 0;
      animation: fade 1000ms ease-out forwards;
      transform: translate3d(0, 0, 0);
      transform-origin: 0;
      position: relative;
      transition: bottom ease 200ms;
      bottom: 0px;

      &:hover {
        bottom: 10px;
      }
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
      /* top: 10px; */
      transform: scale(1.2);
    }

    100% {
      opacity: 1;
      /* top: 0px; */
      transform: scale(1);
    }
  }
`;

export default function AnimateText({ children }) {
  let string = children;
  let wordArray = string.split(' ');
  let letterIndex = 0; // sets animation delay for each letter

  wordArray = wordArray.map((word) => {
    let compiledWord = [];

    // for each word, wrap each letter in a <span>
    // push all <span> wrapped letters into array compiledWord
    for (let index in word) {
      compiledWord.push(
        <span
          style={{ animationDelay: `${letterIndex * 40}ms` }}
          key={uuidv4()}
        >
          {word[index]}
        </span>
      );
      letterIndex++;
    }
    // add a <span> wrapped &nbsp; to the end of compiledWord
    compiledWord.push(<span key={uuidv4()}>&nbsp;</span>);

    return <div key={uuidv4()}>{compiledWord}</div>;
  });

  return <DIV_WRAPPER>{wordArray}</DIV_WRAPPER>;
}
