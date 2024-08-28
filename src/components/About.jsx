import React, {useState} from "react";

export default function About(props) {
    // const [myStyle, setMyStyle]=useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    // const[btntext, setBtnText]=useState('Enable light mode')

    // const togglecase=()=>{
    //     if(myStyle.color=='white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //     })
    //     setBtnText('Enable dark mode')
    // }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText('Enable  mode')
    //     }
    // }

    let myStyle={
      color: props.mode==='dark'?'white':'#042743',
      backgroundColor: props.mode==='dark'?'#042743 ':'white'
    }
  return (
    <div className="container" style={myStyle}>
        <h2 className="my-3">About us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Text analysis generally involves examining and interpreting the content, structure, and context of a text to extract meaningful insights. This can include understanding the text's main ideas, tone, and mood, identifying key themes and patterns, and assessing its impact or implications. The goal is to gain a deeper understanding of the text's message, effectiveness, and relevance.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Text Analyzer is a free tool designed to help users examine and interpret written content. It provides insights into the meaning, themes, and structure of texts, allowing users to understand main ideas, emotional tone, and overall significance. With its user-friendly interface, Text Analyzer makes it easy to break down and assess text components, helping users gain a deeper understanding of their content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Text Analyzer is a browser-compatible, free tool that helps users examine and interpret written content directly from their web browser. It provides insights into the meaning, themes, and structure of texts, allowing users to understand key ideas, emotional tone, and overall significance. With its easy-to-use interface, Text Analyzer works seamlessly across various browsers, making it accessible and convenient for users to analyze text without needing additional software.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-4">
      <button type="button" onClick={togglecase} class="btn btn-primary">{btntext}</button>
      </div> */}
    </div>
  );
}
