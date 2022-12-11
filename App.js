import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
// https://stackoverflow.com/questions/34977588/input-text-doesnt-show-keyboard-on-ios-simulator (키보드 안 나타나는 현상 )
//numeric, phone-pad,default,...
const App = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name</Text>
      <TextInput
        keyboardType="numeric"
        multiLine
        style={styles.input}
        placeholder="haewon"
        onChangeText={value => setName(value)} 
        maxLength={2}
        editable={true}
        secureTextEntry
        />
      <Text style={styles.text}>Your name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: '#555555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
