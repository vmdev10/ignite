import React from 'react';
import {StatusBar, View} from 'react-native';

import {Home} from './screens/Home';

function App(): React.JSX.Element {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Home />
    </View>
  );
}

export default App;
