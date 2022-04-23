import React, { useContext } from 'react';
import { AppContext } from '../App';
import useSWR from 'swr';
import { Link } from 'react-router-dom';


function VideoList() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { searchTerm } = useContext(AppContext);

  console.log(searchTerm);

  const { data, error } = useSWR(
    searchTerm && `https://youtube.thorsteinsson.is/api/search?q=${searchTerm}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  return (
    <div>
      {data?.map((video, index) => (
        <div classname="leftt">
          <Link to={`videos/${video.id.videoId}`}>
            <li key={index}>
              <img src={video.snippet.thumbnails.url} alt="" />
              {video.title}
            </li>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
