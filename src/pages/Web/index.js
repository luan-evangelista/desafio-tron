import React from 'react';
import {WebView} from 'react-native-webview';

export default function Web({route}) {
  const link = route.params.hero.urls[0].url;
  return <WebView source={{uri: link}} style={{flex: 1}} startInLoadingState />;
}
