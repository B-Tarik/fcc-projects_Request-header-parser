import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import AppTitle from './common/appTitle.jsx';

const CodeSolution = () => {
  
  const q1 = `function getMyInfos(req, res) {
  
  res.json({
    ipaddress: (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',')[0],
    language: req.headers["accept-language"],
    software: req.headers['user-agent']
  });
  
}`
  
  
  return (
    <div className="inner-container">
      
      <AppTitle title={<h1>Request Header Parser</h1>} />
      <div className="code-solution">
        <h2>Code Solution</h2>
        <ol>
          <li>I can get the IP address, preferred languages (from header Accept-Language) and system infos (from header User-Agent) for my device.</li>
        
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {q1}
          </SyntaxHighlighter>
          
          
        </ol>
      </div>   
      
    </div>
  );
}

export default CodeSolution;