import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// Não possui estilização própria.
// Todos componentes possuem por padrão display flex.
// Não possui herança.

// View = div, footer, header, main, aside, section
// Text = p, span, strong, h1, h2, h3..

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" background-color="#7159c1" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello Renan</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  }
});