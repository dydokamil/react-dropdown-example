import React, { useState } from "react";
import CodeIcon from "./CodeIcon";

function Card({ children, code }) {
  const [isCodeShown, setIsCodeShown] = useState(false);

  return (
    <div className="card">
      {children}
      {code && (
        <div className="code-button-wrapper">
          <button
            className="code-toggle-button"
            onClick={() => setIsCodeShown(curr => !curr)}
          >
            <CodeIcon width="20px" height="20px" />
          </button>
        </div>
      )}
      {isCodeShown && (
        <div className="code-big-wrapper">
          <div className="code">
            {code.map(line => (
              <p className="code-line">{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

