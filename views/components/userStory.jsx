import React from 'react';
import AppTitle from './common/appTitle.jsx';

const UserStory = () => {
  return (
    <div className="inner-container">
      
      <AppTitle title={<h1>Request Header Parser</h1>} />
      
      <div className="user-story" >
        <h2>User Story</h2>
        <ol>
          <li>I can get the IP address, preferred languages (from header Accept-Language) and system infos (from header User-Agent) for my device.</li>
        </ol>
      </div>      
      
    </div>
  );
}

export default UserStory;