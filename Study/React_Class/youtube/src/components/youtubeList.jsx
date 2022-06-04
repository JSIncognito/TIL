import React, { Component } from 'react';

class YoutubeList extends Component {
  render() {
    return (
      <li>
        <div className="vidio-box">
          <div className="vidio">영상</div>
          <div>
            <span className="vidio-title">Title</span>
            <span className="desciption">desciption</span>
          </div>
        </div>
      </li>
    );
  }
}

export default YoutubeList;
