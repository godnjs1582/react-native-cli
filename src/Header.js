import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const Header = (props) => {
    return (
        <View
            style={styles.view}>
            <Text
                style={styles.text}
            >
                React Native Tutorials
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight:'bold',
        fontSize: 25,
        color: '#ffffff'
    }
})




export default Header