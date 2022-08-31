import React, { useState } from "react";

const SimpleButton = () => {
  const [state, setState] = useState(false);
  const [add, varState] = useState(0);

  //   const toggle = () => {
  //     setState(!state);
  //   };
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <button
          onClick={() => setState(!state)}
          // onClick={() => setState(!state)}
          className={state ? "close" : "open"}
        >
          {state ? "true" : "false"}
        </button>
        <button className="add_btn ms-5" onClick={() => varState(add + 1)}>
          Add Button {add}{" "}
        </button>
      </div>
    </>
  );
};

export default SimpleButton;
