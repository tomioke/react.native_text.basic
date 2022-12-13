import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const App = ({ params }) => (
  <View>
    <Text style={{ color: '#332FD0', fontSize: 18 }}>Hello world!</Text>

    <Text style={{
      color: '#FF6D28',
      fontSize: 25,
      fontWeight: '700'
    }}>
      Hello world!
    </Text>

    <Text style={{
      color: '#0096FF',
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold'
    }}>
      Hello world!
    </Text>

    <Text style={{
      color: '#D61C4E',
      fontSize: 28,
      textAlign: 'right',
      fontWeight: 'bold',
      fontStyle: 'italic'
    }}>
      Hello world!
    </Text>

    <Text style={{
      color: '#14C38E',
      fontSize: 25,
      textAlign: 'left',
      fontWeight: '200',
      fontStyle: 'normal'
    }}>
      Hello world!
    </Text>

    <Text style={{
      color: '#FBB454',
      fontSize: 28,
      textAlign: 'center',
      fontWeight: 'bold',
      fontStyle: 'normal',
      textDecorationLine: 'line-through'
    }}>
      Hello world!
    </Text>

    <Text style={{
      color: '#2E0249',
      fontSize: 28,
      textAlign: 'right',
      fontWeight: 'bold',
      fontStyle: 'normal',
      textDecorationLine: 'underline',
      letterSpacing: 5
    }}>
      Hello world!
    </Text>
  </View>


);

export default App;
