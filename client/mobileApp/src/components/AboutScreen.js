import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './TabNav';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AboutScreen extends Component {
    static navigationOptions = {
        title: "About",
    };

    constructor(){
        super();
    }

    render(){
        return (
            <View>
                <Text>This is about screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});