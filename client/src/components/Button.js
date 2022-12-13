import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export default function Button({ src, children }) {
  return (
    <Link to={src} className='btn'>
      {children}
    </Link>
  );
}
