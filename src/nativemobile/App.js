
import React,{useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {View,Text} from 'react-native';
import VideoPlayer from './screens/VideoPlayer';
import Video from 'react-native-video';
export default App = () =>{
  const [video,setVideo] = useState('https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4');
  const selectFileUrl = async()=>{
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      })
        setVideo(res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err
      }
    }
  }
  return (<View>
            <VideoPlayer  Player={Video} FileHandlerCustom={selectFileUrl} videoUrl={video}/>
          </View>);
};
