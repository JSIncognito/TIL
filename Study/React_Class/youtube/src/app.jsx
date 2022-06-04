import React, { useEffect, useState } from 'react';
import './app.css';
// import React, { Component, useInsertionEffect } from 'react';
import Navbar from './components/navbar';
import VideoList from './components/vido_list/video_list';
import YoutubeList from './components/youtubeList';

function App() {
  const [videos, setVidios] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDcVF8gcqLHJVZUh1ltuGIihoT4R2l7vEU',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVidios(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
