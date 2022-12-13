import React from 'react';
import styled from 'styled-components/macro';
import Button from './Button';

const DIV_FULL = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  h1 {
    display: flex;
    flex-wrap: wrap;

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
      &:nth-child(1) {
        font-weight: 600;
      }
      &:nth-child(2) {
        font-weight: 600;
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
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
    max-width: 640px;

    div {
      width: calc(50% - 8px);
      display: flex;
      flex-direction: column;
      gap: 2px;

      &:nth-last-child(1) {
        width: 100%;
      }

      label {
        font-weight: 500;
      }

      input,
      textarea {
        width: 100%;
        padding: 8px 16px;
        border-radius: 2px;
        border: solid 1px #e0e0e0;
        &:focus {
          border: solid 1px black;
          outline: none;
        }
      }
    }
  }

  button {
    align-self: flex-start;
  }
`;

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <DIV_FULL>
      <form action='https://submit-form.com/fTHbNCPd' method='get' id='contact'>
        <input
          type='hidden'
          name='_redirect'
          value='https://brendanmorse.com'
        />
        <div>
          <label htmlFor='name'>Name: </label>
          <input required minLength='2' type='text' id='name' name='name' />
        </div>

        <div>
          <label htmlFor='email'>Email: </label>
          <input required minLength='5' type='email' id='email' name='email' />
        </div>

        <div>
          <label htmlFor='message'>Message: </label>
          <textarea
            rows='2'
            required
            minLength='10'
            type='text'
            id='message'
            name='message'
          />
        </div>
      </form>

      <button
        onSubmit={handleSubmit}
        type='submit'
        form='contact'
        value='Submit'
        className='btn'
      >
        Submit
      </button>
    </DIV_FULL>
  );
}
