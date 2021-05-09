import React, { useEffect } from "react";
import { BackHeader, Headername, BackOfPage, MyLine } from "./PageElements";
import "./animations/index.css";

function Home() {

  useEffect(() => {
    const script = document.createElement('script');      
    script.src = "https://cdn.chatbot.com/widget/plugin.js";
    script.async = true;
    document.getElementById("chatbot").appendChild(script);
  }, []);

  return (
    <div>
      <MyLine />
      <BackHeader>
        <Headername> Home </Headername>
      </BackHeader>
      <div className="chatting" id="chatbot"> </div>
      <BackOfPage style={{ height: "100rem" }} />
    </div>
  );
}
export default Home;