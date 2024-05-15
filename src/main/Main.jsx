import { useState, useEffect, useContext } from "react";
import user from "../image/user-icon.jpg";
import "./main.css";
import compass from "../image/compass_icon.png";
import bulb from "../image/bulb_icon.png";
import msg from "../image/message_icon.png";
import code from "../image/code_icon.png";
import gallery from "../image/gallery_icon.png";
import mic from "../image/mic_icon.png";
import send from "../image/send_icon.png";
import icon from "../image/gemini_icon.png";

import axios from "axios";
import { Context } from "../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const getAiData = async () => {
    try {
      const { data } = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [
                {
                  text: inputValue,
                },
              ],
            },
          ],
        }
      );
      setData(data);
      console.log("AI DATA", data);
    } catch (error) {
      console.log("GEN AI ERROR", error);
    }
  };

  useEffect(() => {
    getAiData();
  }, []);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>
            AI generator <img src={icon} alt="" height={50} />
          </p>
          <img src={user} alt="" className="userIcon" />

        </div>
        <div className="main-container">
          {!showResult
          ?<>
               <div className="main-content">
            <p>
              <span>Hello,My Friend</span>
            </p>
            <p>I am here to Help you...</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautifui places to see on an upcoming road trip</p>
              <img src={compass} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this conpect : urban planning</p>
              <img src={bulb} alt="" />
            </div>
            <div className="card">
              <p>Brainstrom team bonding activities for our work</p>
              <img src={msg} alt="" />
            </div>
            <div className="card">
              <p>Improve the readability of the following code </p>
              <img src={code} alt="" />
            </div>
          </div>
          </>
          :
         <div className="result">
          <div className="result-title">
              <p>{recentPrompt}</p>
          </div>
              <div className="result-data">
                <img src={icon} alt="" />
              <p dangerouslySetInnerHTML={{__html: resultData}}></p>
              </div>
         </div>

          }
         
          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter your Questions"
                value={input}
                onChange={handleInputChange}
              />
              <div className="send">
                <img src={gallery} alt="" />
                <img src={mic} alt="" />
                <img src={send} alt="" onClick={() => onSent()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
