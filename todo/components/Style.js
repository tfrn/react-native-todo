import React from 'react';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
        mainScrolview:{
            backgroundColor:"#181818",
            height:"100%",
        },
        headerMain:{
            marginTop:30,
            marginLeft:10,
            marginRight:10,
            flexDirection: 'row',
            borderBottomWidth: 1, 
            borderBottomColor: 'gray',
        },
        headerLeft:{
            flex: 1, 
            textAlign: 'left', 
            color:"#ffa500",
            fontSize:30,
        },
        headerRight:{
            flex: 1, 
            textAlign: 'right', 
            color:"#ff4500",
            fontSize:30,
        },
        cardMain:{
            backgroundColor:"#32CD32",
            flex:1,
            marginLeft:10,
            marginRight:10,
            marginBottom:10,
            padding:20,
            borderRadius:10,
        },
        ciziliCardMain:{
            backgroundColor:"silver",
            flex:1,
            marginLeft:10,
            marginRight:10,
            marginBottom:10,
            padding:20,
            borderRadius:10,
        },
        addView:{
            position: 'absolute',
            bottom: 0,
            width:"100%",
            padding:30,
            backgroundColor:"#181812",
        },
        input: {
          width: '100%',
          height: 60,
          borderWidth: 1,
          borderColor: '#ccc',
          paddingHorizontal: 8,
          marginBottom: 16,
          fontSize:20,
          borderRadius:5,
          color:"white",
        },
        addButton:{
            backgroundColor: '#4D9EFF', 
            height: 50, 
            justifyContent: 'center', 
            alignItems: 'center',
        },
        ciziliText: {
            textDecorationLine: 'line-through',
            textDecorationColor: 'red',
            color: '#ffffff',
            fontSize:25,
        },
        cardText:{
            color:"#ffffff",
            fontSize:25,
        },
      });