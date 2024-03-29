import { Meta } from "@storybook/react";
import { useCallback, useState } from "react";

import { DoubleSliderCallbackValue, DoubleSlider, Slider } from "../src";

export default {
  title: "Slider",
} as Meta;

const step1 = 50 * 10000; // 1-50 10k
const step2 = step1 + 50 * 50000; // 50-100 50k
const step3 = step2 + 50 * 100000; // 100-150 100k
const step4 = step3 + 22 * 1000000; // 150-172  1m
// const step5 = step4 + 27 * 10000000; // 172-200 10m
// 199 steps

const formatAmount = (carPrice) => {
  if (carPrice < 50) {
    return carPrice * 10000;
  }

  if (carPrice < 100) {
    return step1 + (carPrice - 50) * 50000;
  }

  if (carPrice < 150) {
    return step2 + (carPrice - 100) * 100000;
  }

  if (carPrice < 172) {
    return step3 + (carPrice - 150) * 1000000;
  }

  return step4 + (carPrice - 172) * 10000000;
};

const formatterNumber = Intl.NumberFormat();

export const Base = () => {
  const [doubleValue, setDoubleValue] = useState({
    from: 60,
    to: 100,
  });
  const [doubleRawValue, setDoubleRawValue] = useState({
    from: 60,
    to: 100,
  });
  const [{ value, isSliding }, setValue] = useState({
    value: 300,
    isSliding: false,
  });
  const [rawValue, setRawValue] = useState(300);

  const [params, setParams] = useState({
    minValue: 100,
    maxValue: 400,
  });

  const [carPrice, setCarPrice] = useState(1);

  const handleChangeParams = (e: any) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: Number(value) });
  };

  const handleChange = useCallback((newRawValue, value, { isSliding }: any) => {
    setRawValue(newRawValue);
    setValue({ value, isSliding });
  }, []);

  const handleChangeDouble = (
    rawValue: DoubleSliderCallbackValue,
    value: DoubleSliderCallbackValue
  ) => {
    setDoubleRawValue(rawValue);
    setDoubleValue(value);
  };

  return (
    <div style={{ padding: "30px" }}>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <div style={{ width: "200px" }}>
          <span>Min: </span>
          <br></br>
          <label htmlFor="min100">100</label>
          <input
            onChange={handleChangeParams}
            checked={params.minValue === 100}
            value={100}
            name="minValue"
            type="radio"
            id="min100"
          />
          <br></br>
          <label htmlFor="min200">200</label>
          <input
            onChange={handleChangeParams}
            checked={params.minValue === 200}
            value={200}
            name="minValue"
            type="radio"
            id="min200"
          />
          <br></br>
          <label htmlFor="min300">300</label>
          <input
            onChange={handleChangeParams}
            checked={params.minValue === 300}
            value={300}
            name="minValue"
            type="radio"
            id="min300"
          />
          <br></br>
        </div>
        <div style={{ width: "200px" }}>
          <span>Max: </span>
          <br></br>
          <label htmlFor="max200">200</label>
          <input
            onChange={handleChangeParams}
            checked={params.maxValue === 200}
            value={200}
            name="maxValue"
            type="radio"
            id="max200"
          />
          <br></br>
          <label htmlFor="max300">300</label>
          <input
            onChange={handleChangeParams}
            checked={params.maxValue === 300}
            value={300}
            name="maxValue"
            type="radio"
            id="max300"
          />
          <br></br>
          <label htmlFor="max400">400</label>
          <input
            onChange={handleChangeParams}
            checked={params.maxValue === 400}
            value={400}
            name="maxValue"
            type="radio"
            id="max400"
          />
          <br></br>
        </div>
      </div>

      <span style={{ marginRight: "10px" }}>Current:</span>
      <input
        type="number"
        value={value}
        onChange={({ target: { value } }) =>
          setValue({ value: Number(value), isSliding: false })
        }
      />
      <p style={{ textAlign: "center", color: isSliding ? "red" : "green" }}>
        Raw: {rawValue}
      </p>
      <p style={{ textAlign: "center", color: isSliding ? "red" : "green" }}>
        Current: {value}
      </p>
      <Slider
        minValue={params.minValue}
        maxValue={params.maxValue}
        value={rawValue}
        onChange={handleChange}
      />

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h4>Dynamic value changes 10k - 300m</h4>

        <Slider
          minValue={1}
          maxValue={199}
          value={carPrice}
          onChange={setCarPrice}
          tooltipValue={formatterNumber.format(formatAmount(carPrice))}
        />

        <span>
          Current value: {formatterNumber.format(formatAmount(carPrice))}{" "}
        </span>
      </div>

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h4>Double value</h4>

        <DoubleSlider
          minValue={1}
          maxValue={201}
          from={doubleRawValue.from}
          to={doubleRawValue.to}
          tooltipValueFrom={formatterNumber.format(
            formatAmount(doubleRawValue.from)
          )}
          tooltipValueTo={formatterNumber.format(
            formatAmount(doubleRawValue.to)
          )}
          onChange={handleChangeDouble}
          difference={10}
        />

        <span>
          RAW value: {formatterNumber.format(formatAmount(doubleRawValue.from))}{" "}
          - {formatterNumber.format(formatAmount(doubleRawValue.to))}
        </span>
        <br></br>
        <span>
          Current value:{" "}
          {formatterNumber.format(formatAmount(doubleValue.from))} -{" "}
          {formatterNumber.format(formatAmount(doubleValue.to))}
        </span>
      </div>
    </div>
  );
};
