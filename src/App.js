import React,{useEffect,useState,useRef} from "react";
import { Button, Image, StyleSheet, Text, View , Platform} from "react-native";
import VideoPlayer from './nativemobile/screens/VideoPlayer';


const Video = (props)=>{
  const thisPlayer = useRef(null);
  useEffect(() => {
    thisPlayer.current.load();
  }, [props.source.uri])
    return <video ref={thisPlayer} style={{height:300, width:300}} style={{...props.style}} controls={true}>
      
           <source src={props.source.uri} type="video/mp4" /> 
      </video>;
}
function App() {
  const [video,setVideo] = useState('https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4');
  const playerFile = useRef(null);
  const selectFileUrl = ()=>{
    playerFile.current.click();
  }
  return (
    <View style={styles.app}>
      <VideoPlayer  Player={Video} FileHandlerCustom={selectFileUrl} videoUrl={video} />
      <input type='file' id='file' ref={playerFile} style={{position: 'fixed', top: -10000}} accept="video/mp4,video/x-m4v,video/*" 
         onChange={(event)=> { 
           if(playerFile.current.files[0]){
            setVideo( window.URL.createObjectURL(playerFile.current.files[0]))
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
