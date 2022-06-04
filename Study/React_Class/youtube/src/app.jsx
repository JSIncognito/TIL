import React, { useEffect, useState } from 'react';
import './app.css';
// import React, { Component, useInsertionEffect } from 'react';
import Navbar from './components/navbar';
import YoutubeList from './components/youtubeList';
import VideoList from './components/vido_list/video_list';

function App() {
  const [videos, setVidios] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=%REACT_APP_API_KEY%',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVidios(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
