import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';


// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default function WebViewEx() {
  return (
      <WebView source={{ uri: 'https://auth0.auth0.com/login?state=g6Fo2SBHQkg0WkRqdXk3Y1R2cmQ4bndSVnNyTTUxV3RoVllsSaN0aWTZIDkyeDgwbHJQazZvQ0NqQ0VXVWZGa1NnaHd6b1hJbHZYo2NpZNkgU0IzME9XMVMxVmxyWmdqWVdxWkc2NEFRNU5qRm8xd20&client=SB30OW1S1VlrZgjYWqZG64AQ5NjFo1wm&protocol=oauth2&audience=https%3A%2F%2Fauth0.auth0.com%2Fuserinfo&response_type=code&redirect_uri=https%3A%2F%2Fauth0.com%2Fdocs%2Fauth%2Fcallback&scope=openid%20profile%20email' }} />
  );
}