import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Modal, Pressable, Image, ImageBackground } from 'react-native';
import MashButton from './CustomButton';
import Header from './Header';
// https://stackoverflow.com/questions/34977588/input-text-doesnt-show-keyboard-on-ios-simulator (키보드 안 나타나는 현상 )
//numeric, phone-pad,default,...
const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarining] = useState(false);
  //toastAndroid의 경우 안드로이드에서만 지원되는 기능, iso 에서 toast 사용시 별도의 라이브러리 설치 혹은 직접 구현(actionsheet를 이용해 toast구현 가능)
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarining(true);
    }
  };
  return (
    <ImageBackground style={styles.body}
      source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/13/48/bricks-147309_1280.png' }}>
        <Header/>
      <Modal
        transparent
        visible={showWarning}
        onRequestClose={() =>
          setShowWarining(false)
        }
        animationType="slide"
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warnng_body}>
              <Text style={styles.text}>The name must be linger than 3 characters</Text>
            </View>
            <Pressable
              onPress={() => setShowWarining(false)}
              style={styles.warning_button}
              android_ripple={{ color: '#fff' }}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
      <MashButton
        onPressFunction={onPressHandler}
        title={submitted ? 'Clear' : 'Submit'}
        color={'#00ff00'}
      />
      <MashButton
        onPressFunction={() => { }}
        title={'Text'}
        color={'#ff00ff'}
        style={{margin:10}}
      />
      
      {submitted ?
        <View style={styles.body}>
          <Text style={styles.text}>
            You are registered as {name}
          </Text>
          <Image
            resizeMode='stretch'
            style={styles.image}
            source={require('../assets/done.png')}
            blurRadius={3}
          />
        </View>
        :
        <Image
          resizeMode='stretch'
          style={styles.image}
          source={require('../assets/error.png')} />
      }
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#ffffff',
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
    textAlign: 'center',
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
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  }

});

export default App;
