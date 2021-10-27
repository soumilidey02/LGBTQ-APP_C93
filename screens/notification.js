import React,{Component} from 'react';
import{
View, 
Text,
StyleSheet
} from "react-native";

export default class NotificationScreen extends Component{
render(){
    return(
        <View
        style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
        <Text>Get Notified Here</Text>
        </View>

    )
}    
}