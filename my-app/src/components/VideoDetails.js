import React from 'react';
import Player from './Player';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import styled from 'styled-components';

function VideoDetails() {
  const DIV = styled.div`
    padding-left: 40%;
    padding-top: 20px;
    width: 600px;
  `;
  let { videoId } = useParams();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    ` https://youtube.thorsteinsson.is/api/videos/${videoId}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <DIV>
        <h1>{data.title}</h1>
        <Player url={data.url} />
      </DIV>
    </>
  );
}

export default VideoDetails;
