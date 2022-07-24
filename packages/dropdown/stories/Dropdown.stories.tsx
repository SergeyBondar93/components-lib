import { Button } from "@cheaaa/button";
import { useState } from "react";
import { ThemeProvider } from "react-jss";

import { Dropdown, IDropdownChildrenProps } from "../src/Dropdown";

import { options } from "./options";
import { theme } from "./theme";

export default {
  title: "Dropdown",
  parameters: {
    backgrounds: {
      default: "lightblue",
      values: [{ name: "lightblue", value: "#E5ECF7" }],
    },
  },
};

interface IAgesProps extends IDropdownChildrenProps {
  onClick: (age: number) => void;
}

const Ages = ({ onClick, setIsOpen }: IAgesProps) => {
  const handleClick = (age: number) => {
    onClick(age);
    setIsOpen?.(false);
  };

  return (
    <>
      {options.map(({ value, label }, index) => {
        return (
          <Button
            key={index}
            shouldFitContent
            onClick={() => handleClick(value)}
            appearance={"age"}
          >
            {label}
          </Button>
        );
      })}
    </>
  );
};

export const Base = () => {
  const [tourisus, setTourisus] = useState<number[]>([]);

  const handleChangeTourist = (index: number) => (age: number) => {
    const newTourists = [...tourisus];
    newTourists[index] = age;
    setTourisus(newTourists);
  };

  const handleAddTourist = (age) => {
    setTourisus([...tourisus, age]);
  };

  return (
    <ThemeProvider theme={theme}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste porro
      ipsam, vel tempore aspernatur rerum minus! Expedita corporis repellat
      magnam quae vitae tempora et, deserunt recusandae ex cupiditate blanditiis
      nam neque suscipit temporibus molestiae. Amet quos possimus cum sint nisi
      ducimus sapiente qui a totam quod. Ullam esse sit ad, architecto
      repudiandae eveniet iusto ab quaerat laborum ipsa nostrum placeat error
      quod consectetur veritatis consequatur impedit distinctio. Illum nulla
      aspernatur dolore nisi voluptatibus repellat suscipit, atque voluptatum
      libero! Aperiam quidem expedita possimus veniam sint maxime earum vero
      voluptatibus odit quis? Incidunt distinctio veniam ipsam placeat amet odit
      blanditiis quas commodi quos vel minus magni, neque sed saepe quam illum,
      velit sunt delectus, est libero. Quidem consectetur aut similique.
      Necessitatibus assumenda labore nam voluptas laudantium doloribus
      temporibus ipsum vero nisi adipisci molestias atque accusamus architecto
      repudiandae enim nulla quam, tenetur maxime, voluptates porro iusto
      placeat? Obcaecati, nemo consectetur hic magnam corrupti maxime architecto
      ducimus nisi quas. Doloremque blanditiis hic voluptate. Reiciendis nemo
      blanditiis voluptatum tempore repellendus sapiente veniam dolores cumque
      facere nisi doloribus debitis ducimus ipsa modi illum optio mollitia,
      aperiam exercitationem quae beatae culpa porro voluptatibus, aliquid
      commodi. Nulla incidunt dignissimos facere doloribus fugiat. Labore quo
      voluptate officia voluptatum excepturi?
      <div
        style={{
          width: "240px",
        }}
      >
        {tourisus.map((age, index) => {
          return (
            <Dropdown animationDuration="0.0s" title={`Турист: ${age} лет`}>
              <Ages onClick={handleChangeTourist(index)} />
            </Dropdown>
          );
        })}
        <Dropdown
          animationDuration="0.0s"
          appearance="header-add-tourist"
          titleButtonProps={{ appearance: "header-add-tourist" }}
          title={`Добавить туриста`}
        >
          <Ages onClick={handleAddTourist} />
        </Dropdown>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam
      veritatis voluptatem quia eum expedita corrupti at, nisi odio, reiciendis
      deserunt hic ipsum deleniti quisquam maxime ipsam ratione sit labore
      suscipit doloribus dignissimos atque molestiae et! Explicabo hic fugit cum
      possimus aliquam iste deserunt quasi nisi distinctio ullam! Reiciendis
      deleniti nobis consequatur praesentium quibusdam ipsum minus recusandae
      ullam voluptatum! Natus culpa ipsa non? Natus qui eos quas impedit atque
      voluptatum animi ipsum ex! Explicabo tempore dicta recusandae amet rerum
      labore nihil, sunt inventore excepturi earum reiciendis, id perferendis
      illum voluptate doloremque? Beatae iure aperiam repudiandae distinctio
      delectus debitis, dolores qui.
    </ThemeProvider>
  );
};
