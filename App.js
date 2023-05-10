import type {Node} from 'react';
import React from 'react';
import {WebView} from 'react-native-webview';

const App: () => Node = () => {
  return <WebView source={{uri: 'https://www.walmart.com/'}} />;
};

export default App;
