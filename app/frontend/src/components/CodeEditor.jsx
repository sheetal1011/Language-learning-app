// import React, { useState } from "react";
// import { Controlled as CodeMirror } from '@uiw/react-codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/dracula.css';

// function CodeEditor(){
//     const[code ,setCode]=useState('helloo');
//     return(
//         <div style={{ width: "100%", padding: "20px", background: "#282c34", color: "white" }}>
//       <h3 style={{ textAlign: "center" }}>Live Code Editor</h3>
//       <CodeMirror
//         value={code}
//         options={{
//           mode: "javascript",
//           theme: "dracula",
//           lineNumbers: true,
//           indentWithTabs: true,
//         }}
//         onBeforeChange={(editor, data, value) => {
//           setCode(value);
//         }}
//       />
//       <h4>Output:</h4>
//       <pre style={{ background: "#222", padding: "10px", color: "#fff" }}>{code}</pre>
//     </div>
//     )
// }

// export default CodeEditor;