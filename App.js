import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
    render(){
        return (

            <AppContainer />

        );
    }
}

const TabNavigator = createBottomTabNavigator({
    WriteStory: {screen: WriteStoryScreen},
    ReadStory: {screen: ReadStoryScreen},
},
{
    defaultNavigationOptions: ({navigation})=>({
        tabBarIcon: ()=>{
            const routeName = navigation.state.routeName;

            if(routeName === "WriteStory"){
                return(
                    <Image 
                    source={require("./assests/write.png")}
                    style={{width: 40, height:50}}>
                    </Image>
                )

            }
            else if(routeName === "ReadStory"){
                return(
                    <Image 
                    source={require("./assets/read.png")}
                    style={{width:40, height:50}}>
                    </Image>)

            }
        }
    })
}
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
})