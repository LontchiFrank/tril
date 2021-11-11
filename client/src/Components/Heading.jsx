import React, { useState } from "react";
import { useTransition, animated, config } from "react-spring";

function Heading() {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!toggle),
  });
  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        style={{
          position: "absolute",
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
        className="row smr1 d-flex justify-content-center align-items-center"
      >
        <h1 className="hero d-flex justify-content-center align-items-center">
          Do you have something to sell ?😄
        </h1>
      </animated.div>
    ) : (
      <animated.div
        style={{
          position: "fixed",
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
        className="row smr1 d-flex justify-content-center align-items-center"
      >
        <h1 className="hero d-flex justify-content-center align-items-center">
          Whatsapp Status Seller is here For you🤪
        </h1>
      </animated.div>
    )
  );
}

export default Heading;
