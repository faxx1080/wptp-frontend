import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  },
  startup: {
    typeset: false
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Authenticator.Provider>
        <MathJaxContext version={3} config={config}>
          <App />
        </MathJaxContext>
      </Authenticator.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
