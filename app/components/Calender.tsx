import React, { useEffect } from "react";


export default function Calender() {
  return(
    <h1> Simple info </h1> 

  )
}

// const Calender = ({ url }) => {

//   useEffect(() => {
//     const head = document.querySelector("head");
//     const script = document.createElement("script");
//     script.setAttribute(
//       "src",
//       "https://assets.calendly.com/assets/external/widget.js"
//     );
//     head.appendChild(script);
//   }, []);

//   return (
//     <div
//       className="calendly-inline-widget"
//       data-url={url}
//       style={{ minHeight: "800px", width: "100%" }}
//     ></div>
//   );
// };

// export default Calender;