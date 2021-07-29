import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';


export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
    }



    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 30, backgroundColor: 'lightgreen' }}>StoryHub(1)</Text>
                </View>
                <View style={style.inputView}>
                    <TextInput
                        style={styles.inputView}
                        placeholder="Title of Story" />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Author of Story" />
                </View>
                <TextInput
                    style={styles.storyBox}
                    placeholder="Write your story here" />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'lightgreen'
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton:{
        backgroundColor: '#2196f3',
        padding: 10,
        margin: 10
    },
    buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
    },
    inputBox:{
        width:200,
        height:40,
        borderWidth: 1.5,
        borderRightWidth:1.5,
        fontSize: 20,
        backgroundColor: 'white'
    },
    storyBox:{
        width: 200,
        height: 200,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor: 'white'
    },
    scanButton:{
        backgroundColor: '#66bb6a',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    }
})