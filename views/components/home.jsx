import React, {useState} from 'react';

import Whoami from './whoami.jsx';
import Output from './output.jsx';
import AppTitle from './common/appTitle.jsx';

const Home = () => {
  
  const [result, setResult] = useState('');
  
  return (
    <div className="inner-container">
      <AppTitle title={<h1>Request Header Parser</h1>} />
      <Whoami setResult={setResult}/>
      <Output result={result}/>
    </div>
  );
  
}

export default Home;