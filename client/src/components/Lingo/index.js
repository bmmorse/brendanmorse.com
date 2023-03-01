import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

// does this work

const DIV_FULL = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
  img {
    width: calc((100% - (4 * 16px)) / 5);
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
      return <h1>There are no images in the Kit</h1>;
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

  return <DIV_FULL>{displayImages()}</DIV_FULL>;
}
