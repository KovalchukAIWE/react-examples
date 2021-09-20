import React from 'react';
import ReactDOM from 'react-dom';
// import Toggle from './components/state';
// import Basic from './components/validation';
// import NumberList from './components/keys';
// import MouseTracker from './components/mouseTracker';
import Example from './components/hooks/useState';
import Ref from './components/hooks/useRef';

ReactDOM.render(
  <React.StrictMode>
    {/* <Toggle />,
    <Basic />, */}
    {/* <NumberList numbers = {[2,4,6,8,4]} /> */}
    {/* <MouseTracker /> */}
    <Example />
    <Ref />
  </React.StrictMode>,
  document.getElementById('root')
);

