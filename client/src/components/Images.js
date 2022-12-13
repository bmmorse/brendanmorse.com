import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ImageLoader from './ImageLoader';

const DIV_IMAGES = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function Images(props) {
  const DATA = {
    arkieva: {
      imageArray: [
        'https://brendanmorse.s3.amazonaws.com/arkieva_activity.png',
        'https://brendanmorse.s3.amazonaws.com/arkieva_capacity.png',
        'https://brendanmorse.s3.amazonaws.com/arkieva_ladder.png',
        'https://brendanmorse.s3.amazonaws.com/arkieva_visual.png',
      ],
    },
    doyle: {
      imageArray: [
        'https://brendanmorse.s3.amazonaws.com/doylepruitt.com_home.png',
        'https://brendanmorse.s3.amazonaws.com/doylepruitt.com_bio.png',
      ],
    },
    wordtrail: {
      imageArray: [
        'https://brendanmorse.s3.amazonaws.com/wordtrail.xyz.png',
        'https://brendanmorse.s3.amazonaws.com/wordtrail.xyz_list.png',
      ],
    },
    brendan: {
      imageArray: [
        'https://brendanmorse.s3.amazonaws.com/brendanmorse.com_intro.png',
        'https://brendanmorse.s3.amazonaws.com/brendanmorse.com_arkieva.png',
      ],
    },
  };

  const { imageArray } = DATA[props.DATA];

  return (
    <DIV_IMAGES>
      {imageArray.map((e) => {
        return <ImageLoader key={e} src={e} />;
      })}
    </DIV_IMAGES>
  );
}
