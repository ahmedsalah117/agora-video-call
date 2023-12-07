import { useState } from "react";
import "./App.css";
import AgoraUIKit from "agora-react-uikit";

function App() {

const [videoCall, setVideoCall] = useState(true);

const rtcProps = {
  appId: "ee11ffc3e5f14e999617cd9f6f767d53",
  channel: "main",
  token:
    "007eJxTYDA3u/LzQnnQc32jnNSAgF03mGonxB5/8lb505Hvc1Oe9zxXYEhNNTRMS0s2TjVNMzRJtbS0NDM0T06xTDNLMzczTzE1FvhXmNoQyMjw3HwSIyMDBIL4LAy5iZl5DAwAKL8ihw==",
};
  
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

 
      return videoCall ? (
        <div style={{
          display: "flex", width: "100vw", height: "100vh"}}>
          <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </div>
      ) : (
        <h3 onClick={() => setVideoCall(true)}>
          <button>Join</button>
        </h3>
      );

}

export default App
