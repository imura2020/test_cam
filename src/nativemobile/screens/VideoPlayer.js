import React,{useState} from 'react';
import {View,Text, StyleSheet,TouchableOpacity} from 'react-native';


export default ({Player, FileHandlerCustom, videoUrl}) =>{
   
    return <View>
                <Text style={{padding:21}}>Tocando: {videoUrl}</Text>
                <Player 
                    source={{uri: videoUrl}}   
                    resizeMode="cover" 
                    style={styles.backgroundVideo} 
                />
                <TouchableOpacity style={styles.btbt} onPress={() => FileHandlerCustom()}><Text style={styles.textcol}>Escolher arquivo</Text></TouchableOpacity>
            </View>
}

var styles = StyleSheet.create({
    backgroundVideo: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: 300,
      margin:21
    },
    btbt:{
        padding:21,
        backgroundColor: '#3498db',
        margin:21,
        borderRadius: 13
    },
    textcol:{
        color: '#FFF'
    }
  });