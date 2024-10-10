import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const ZegoCloud = () => {

    const {id} = useParams();

    const metting = (element)=>{
        const appID = 1511373295;
        const serverSecret = "725e53340da15d5eb96ff39cae00f51e";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Math.random().toString(),  'amir');


        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
          container: element,
          scenario: {
            mode: ZegoUIKitPrebuilt.LiveStreaming,
           
          },
          sharedLinks:[{name:"meeting link", url:`https://http://localhost:5173/room/${id}`}]
        });
    }
  return (
   <>
    <div ref={metting} className="container">

    </div>
   </>
  )
}


export default ZegoCloud


// https://console.zegocloud.com/projectMgr/webDownload?appId=1511373295&scene=3&platform=1&roomId=tIzgMv&fromPath=%2FprojectMgr%2FwebDemo&prevPath=