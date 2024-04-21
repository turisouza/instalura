import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Post from './src/componentes/Post';

function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <Post />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
