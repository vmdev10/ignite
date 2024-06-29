import React from 'react';
import {StatusBar} from 'react-native';

import {Home} from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}

export default App;
