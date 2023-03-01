import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

// does this work

const DIV_FULL = styled.div`
  .header {
    width: 100%;
    background: #f6f6f6;
    border-bottom: solid 1px #eaeaea;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #1a0dab;
    }
  }

  .container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 16px;
    gap: 16px;
    img {
      width: calc((100% - (4 * 16px)) / 5);
    }

    .empty {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 80px 0 0 0;
    }
  }
`;

export default function Lingo() {
  const [data, setData] = useState([]);

  function getAssets(json) {
    const urls = [];

    const items = json.result.section.items;
    items.map((item) => {
      if (item.type === 'asset') {
        urls.push(item.asset.thumbnails['1232']);
      }
    });
    return urls;
  }

  function displayImages() {
    if (data.length === 0) {
      return (
        <div className='empty'>
          <h3>There are no images in the Kit</h3>
        </div>
      );
    }
    return data.map((img) => {
      return <img key={img} src={img}></img>;
    });
  }

  useEffect(() => {
    async function getData() {
      const promise = await fetch('/api');
      const json = await promise.json();
      const urls = getAssets(json);
      setData(urls);
    }
    getData();
  }, []);

  return (
    <DIV_FULL>
      <div className='header'>
        <a href='https://www.lingoapp.com/109576/s/PgqAx2/?v=0'>
          Link to Lingo Kit
        </a>
      </div>
      <div className='container'>{displayImages()}</div>
    </DIV_FULL>
  );
}
