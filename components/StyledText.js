import * as React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export function SplashHeaderTitleText(props){
  return <Text {...props} style={
    [props.style, { fontSize:120}]}/>
}



export function SplashAllText(props){
  return <Text {...props} style={
    [props.style, { 
      color:"blue",
      textAlign:"center",
        }
  ]} />;
}
export function SplashHeaderText(props){
  return <Text {...props} style={
    [props.style, { 
      fontFamily: 'pacifico' , 
      color:"blue",
      fontSize:70,
      fontWeight:"bold",
      textShadowOffset:{width:3,height:3},
      textShadowColor:"white",
        }
  ]} />;
}

export function SplashContentText(props){
  return <Text {...props} style={
    [props.style,{
      fontFamily:"bitter",
      fontSize:40,
    }]
  }/>
}