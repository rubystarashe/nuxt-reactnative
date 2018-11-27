import React, {Component} from 'react';
import {Platform, StyleSheet, WebView, Text, View} from 'react-native'

const uri = Platform.select({
  ios: './index.html',
  android: 'file:///android_asset/nuxt/index.html'
})

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <WebView
        source={{uri}}
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
})
