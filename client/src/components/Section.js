import React from 'react';
import styled from 'styled-components/macro';
import SectionHeader from './SectionHeader';
import Images from './Images';

const DIV_FULL = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .screenshots {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export default function Section(props) {
  const DATA = {
    arkieva: {
      content: (
        <>
          <SectionHeader DATA='arkieva' />
          <Images DATA='arkieva' />
        </>
      ),
    },
    doyle: {
      content: (
        <>
          <SectionHeader DATA='doyle' />
          <Images DATA='doyle' />
        </>
      ),
    },
    wordtrail: {
      content: (
        <>
          <SectionHeader DATA='wordtrail' />
          <Images DATA='wordtrail' />
        </>
      ),
    },
    brendan: {
      content: (
        <>
          <SectionHeader DATA='brendan' />
          <Images DATA='brendan' />
        </>
      ),
    },
  };

  const { content } = DATA[props.DATA];

  return <DIV_FULL>{content}</DIV_FULL>;
}
