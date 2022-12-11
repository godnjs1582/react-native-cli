import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert} from 'react-native';
// https://stackoverflow.com/questions/34977588/input-text-doesnt-show-keyboard-on-ios-simulator (키보드 안 나타나는 현상 )
//numeric, phone-pad,default,...
const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      Alert.alert(
        'Warning',
        'The name must be longer than 3 characters',
        [
          {
            text: 'Do not Show Again',
            onPress: () => console.warn('Do Not Show Again Pressed!'),
            style: 'destructive',
          },
          {
            text: 'Cancle',
            onPress: () => console.warn('Cancle Pressed!'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => console.warn('OK Pressed!'),
            style: 'default',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => console.warn('Alert dismissed!') 
        });
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name</Text>
      <TextInput
        keyboardType="default"
        multiLine
        style={styles.input}
        placeholder="haewon"
        onChangeText={value => setName(value)} 
        // maxLength={2}
        editable={true}
        // secureTextEntry
      />
      {/* <Button title={submitted ? 'Clear' : 'Submit'} onPress={onPressHandler} disabled={false} /> */}
      {/* toughableOpacity , touchableghighlight, touchablewidthoutfeedback, Pressable, */}
      {/* <TouchableWithoutFeedback
        style={styles.button}
        onPress={onPressHandler}
      > */}
      <Pressable
        onPress={onPressHandler}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        disabled={false}
        android_ripple={{color: '#00f'}}
        // delayLongPress={1000}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
        ]}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>      
      {/* </TouchableWithoutFeedback> */}
      {submitted ?
        <Text style={styles.text}>You are registered as {name}</Text>
        : null}
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
  button: {
    backgroundColor: '#00ff00',
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default App;
