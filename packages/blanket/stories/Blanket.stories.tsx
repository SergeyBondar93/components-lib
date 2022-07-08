import { useState } from "react";

import { Blanket } from "../src";

export default {
  title: "Blanket",
};

const BlanketTemplate = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visible</button>
      {isVisible && (
        <Blanket
          isVisible={isVisible}
          onClick={() => setIsVisible(!isVisible)}
        />
      )}
    </>
  );
};

export const Base = BlanketTemplate.bind({});
