import { useState } from "react";

import { Calendar } from "../src";

export default {
  title: "Calendar",
};

const min = new Date();
min.setDate(20);

const max = new Date();
max.setDate(28);

const Instance = ({ title, ...props }: any) => {
  const [value, setValue] = useState<Date>();

  return (
    <div
      style={{
        display: "inline-block",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          margin: "0px",
        }}
      >
        {title}
      </h3>
      <Calendar value={value} onChange={setValue} {...props} />
    </div>
  );
};

const octoberValue = new Date(2022, 9, 10);
const aug10 = new Date(2022, 7, 10);
const aug20 = new Date(2022, 7, 20);

export const Base = () => {
  return (
    <>
      <Instance title={"Base"} />
      <Instance title={"With value 10.10.2022"} value={octoberValue} />
      <Instance
        title={"Available only from 10.08.2022 to 20.08.2022 "}
        minDate={aug10}
        maxDate={aug20}
      />
    </>
  );
};
