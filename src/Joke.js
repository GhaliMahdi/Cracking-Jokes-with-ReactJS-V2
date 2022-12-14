import React from "react";

export default function Joke(props) {
  return (
    <div className="joke">
      {props.setup && <p>setup: {props.setup}</p>}
      <p>punchline: {props.punchline}</p>
      <hr />
    </div>
  );
}
