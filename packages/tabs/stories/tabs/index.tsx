// @ts-ignore
import catsImg from "./cats.jpg";
// @ts-ignore
import carsImg from "./cars.jpeg";
// @ts-ignore
import dogsImg from "./dogs.jpg";
// @ts-ignore
import ducksImg from "./ducks.jpg";

const imgStyles = {
  width: "100%",
};

const CatsTab = () => {
  return <img style={imgStyles} src={catsImg} alt="" />;
};
const DogsTab = () => {
  return <img style={imgStyles} src={dogsImg} alt="" />;
};
const DucksTab = () => {
  return <img style={imgStyles} src={ducksImg} alt="" />;
};
const CarsTab = () => {
  return <img style={imgStyles} src={carsImg} alt="" />;
};

export const TABS = [
  {
    panelName: "Cats",
    label: "Коты",
    Component: CatsTab,
  },
  {
    panelName: "Dogs",
    label: "Собаки",
    Component: DogsTab,
  },
  {
    panelName: "Ducks",
    label: "Утки",
    Component: DucksTab,
  },
  {
    panelName: "Cars",
    label: "Машинки",
    Component: CarsTab,
  },
] as const;
