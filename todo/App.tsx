import React from 'react';
import { ScrollView, View } from 'react-native';
import Container from './components/Container';
import Style from './components/Style';

function App() {

  return (
  <View style={Style.mainScrolview}>
        <Container></Container>
  </View>
  );
}

export default App;
