import { useState } from "react";
import { ThemeProvider } from "react-jss";
import { CloseIcon } from "@cheaaa/icons";
import { Input } from "@cheaaa/input";
import { Button, IconButton } from "@cheaaa/button";

import { Dropdown, IDropdownChildrenProps } from "../src";

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

export const Base = () => {
  return (
    <>
      <Dropdown title="Open text">
        <div style={{ padding: "10px", color: "#3926e6" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eum
          quasi quas quod ducimus, distinctio, laboriosam rem tempora vitae
          quidem perferendis odit deleniti sed ea incidunt? Voluptatem, vel
          mollitia reiciendis eligendi veniam cupiditate quae error inventore
          alias sed eos corrupti qui impedit fuga repellendus quam officia rerum
          dicta ab laboriosam esse vitae aperiam veritatis sit. Voluptatibus
          ipsum obcaecati dolorem, doloremque non natus id molestiae dolore,
          officiis deleniti, unde eligendi amet omnis consequuntur sint ab nam
          explicabo in neque eaque fugit debitis autem porro placeat.
          Voluptatibus eaque, aperiam odit molestias laboriosam nesciunt, qui
          deleniti natus sint perferendis autem voluptas. Dolore, ad?
          <Dropdown title="Iternal dropdown">
            <div style={{ padding: "10px", color: "#20df12" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              non velit a exercitationem expedita, ab placeat. Possimus nulla
              commodi incidunt sit eius expedita quasi eos modi harum facilis
              unde odit, voluptates ea fugiat ut ducimus quae sed suscipit
              numquam inventore. Ullam quod, reprehenderit molestias tenetur
              nobis dicta consectetur eligendi aperiam asperiores deleniti quis
              porro ducimus nostrum consequuntur quos perspiciatis. Animi aut
              ducimus laboriosam tenetur deleniti ratione autem sint veniam quae
              molestiae, quisquam distinctio tempora itaque sed! Fugit, non
              nihil tempore consectetur quis porro incidunt praesentium,
              temporibus cupiditate corrupti omnis aspernatur, expedita
              similique animi accusantium eum numquam odio. Atque, nulla
              voluptatum!
              <Dropdown title="Super Iternal dropdown">
                <div style={{ padding: "10px", color: "#d013d0cc" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat non velit a exercitationem expedita, ab placeat.
                  Possimus nulla commodi incidunt sit eius expedita quasi eos
                  modi harum facilis unde odit, voluptates ea fugiat ut ducimus
                  quae sed suscipit numquam inventore. Ullam quod, reprehenderit
                  molestias tenetur nobis dicta consectetur eligendi aperiam
                  asperiores deleniti quis porro ducimus nostrum consequuntur
                  quos perspiciatis. Animi aut ducimus laboriosam tenetur
                  deleniti ratione autem sint veniam quae molestiae, quisquam
                  distinctio tempora itaque sed! Fugit, non nihil tempore
                  consectetur quis porro incidunt praesentium, temporibus
                  cupiditate corrupti omnis aspernatur, expedita similique animi
                  accusantium eum numquam odio. Atque, nulla voluptatum!
                </div>
              </Dropdown>
            </div>
          </Dropdown>
        </div>
      </Dropdown>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam
        magnam vel tenetur! Repellat sit tempora, dolorum amet autem eaque natus
        libero mollitia voluptatibus expedita at laudantium facere nisi placeat
        voluptates porro! Inventore laborum praesentium harum autem nam
        doloribus. Quas inventore iusto ipsa, corporis, quos voluptatibus neque
        repudiandae enim nam facilis nemo ratione ullam cumque fuga! Inventore,
        at distinctio. Iste quisquam quis eaque nihil ipsam nesciunt in suscipit
        earum facilis iusto totam quas vitae tempore, consequatur quaerat sequi
        quasi. Nihil ad autem quod, delectus dolores voluptas eaque ratione fuga
        ipsam, officia repellendus excepturi dolorem aperiam consequuntur quae
        deserunt modi quos. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Vero provident, quae eligendi est corrupti error reiciendis! Porro
        provident vero nobis odit nihil a error atque totam, exercitationem
        voluptatum rem in. Explicabo quos sed placeat tempora perferendis
        consequatur repellat ipsum nostrum quam soluta dolore, vero cupiditate
        eius. Quis tenetur possimus culpa minus, maiores exercitationem
        accusamus aliquam dolorem veniam cupiditate mollitia porro velit dolore
        ad architecto nobis, assumenda molestiae! Tenetur consequatur rerum
        maiores ea iusto incidunt omnis quod eaque enim aspernatur facilis totam
        quo perferendis repudiandae, assumenda neque ipsam voluptatem voluptates
        quis. At eius, aliquam asperiores reprehenderit, eos sit numquam facere
        alias fuga veritatis sed. Laudantium dolorum perspiciatis repellat, quis
        consequuntur quidem sequi id earum, ipsum ullam eveniet veritatis quo.
        Et nesciunt facere repellat asperiores totam, non commodi laudantium
        officiis, eius repudiandae dolorum consequuntur quia reiciendis quasi,
        ipsum molestiae cupiditate voluptate aliquid! Porro neque cumque
        veritatis nam possimus doloremque libero, fuga placeat nostrum itaque
        nesciunt distinctio ullam molestiae magnam exercitationem laboriosam
        perferendis quibusdam sunt aspernatur corporis quia sapiente. Error
        dolorum pariatur, a iste eveniet, sit magnam deserunt fugiat voluptates
        illo aliquid voluptatibus. Laudantium, delectus dignissimos? Nam facere
        eos officia et ab voluptates magni culpa dicta, ipsa id? Porro doloribus
        cupiditate dicta ab!
      </p>
    </>
  );
};

interface IAgesProps extends IDropdownChildrenProps {
  onClick: (age: number) => void;
  selectedAge?: number;
}

const Ages = ({ onClick, setIsOpen, selectedAge }: IAgesProps) => {
  const handleClick = (age: number) => {
    onClick(age);
    setIsOpen?.(false);
  };

  return (
    <div style={{ padding: "3px" }}>
      {options.map(({ value, label }, index) => {
        return (
          <Button
            key={index}
            shouldFitContent
            onClick={() => handleClick(value)}
            appearance={"age"}
            isSelected={selectedAge === value}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};

interface ITouristButtonTitleProps {
  age: number;
  isRemovable: boolean;
  onRemove: (e: any) => void;
}
const TouristButtonTitle = ({
  age,
  isRemovable,
  onRemove,
}: ITouristButtonTitleProps) => {
  return (
    <>
      Турист: {age} лет{" "}
      {isRemovable && (
        <IconButton
          appearance="inButton"
          icon={<CloseIcon fill="#636AFF" />}
          onClick={onRemove}
        />
      )}
    </>
  );
};

const TouristsSelector = ({ tourisus, setTourisus }) => {
  const handleChangeTourist = (index: number) => (age: number) => {
    const newTourists = [...tourisus];
    newTourists[index] = age;
    setTourisus(newTourists);
  };

  const handleAddTourist = (age) => {
    setTourisus([...tourisus, age]);
  };

  const handleRemove = (index: number) => (e: any) => {
    e.stopPropagation();
    const newTourists = [...tourisus];
    newTourists.splice(index, 1);
    setTourisus(newTourists);
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: "5px",
          flexDirection: "column",
        }}
      >
        {tourisus.map((age, index) => {
          return (
            <Dropdown
              appearance="tourists-age"
              key={index}
              passSetIsOpenToChildren
              title={
                <TouristButtonTitle
                  age={age}
                  isRemovable={tourisus.length > 1}
                  onRemove={handleRemove(index)}
                />
              }
              titleButtonProps={{
                baseAppearance: "withIconButton",
                appearance: "secondary",
              }}
            >
              <Ages selectedAge={age} onClick={handleChangeTourist(index)} />
            </Dropdown>
          );
        })}
        <Dropdown
          passSetIsOpenToChildren
          appearance="tourists-age"
          baseAppearance="new-tourist"
          title={`Добавить туриста`}
        >
          <Ages onClick={handleAddTourist} />
        </Dropdown>
      </div>
    </>
  );
};

interface ITouristsSelectorInputProps {
  tourisus: number[];
  onClick: () => void;
}

const TouristsSelectorInput = ({
  tourisus,
  onClick,
}: ITouristsSelectorInputProps) => {
  return (
    <Input
      onChange={() => {}}
      value={tourisus.join(", ")}
      type="button"
      onClick={onClick}
      label="Туристы"
    />
  );
};

export const Themed = () => {
  const [tourisus, setTourisus] = useState<number[]>([30]);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "175px",
        }}
      >
        <Dropdown
          appearance="tourists"
          titleButtonProps={{
            component: TouristsSelectorInput,
            tourisus,
          }}
        >
          <TouristsSelector tourisus={tourisus} setTourisus={setTourisus} />
        </Dropdown>
      </div>
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
      voluptate officia voluptatum excepturi? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Aperiam quam veritatis voluptatem quia eum
      expedita corrupti at, nisi odio, reiciendis deserunt hic ipsum deleniti
      quisquam maxime ipsam ratione sit labore suscipit doloribus dignissimos
      atque molestiae et! Explicabo hic fugit cum possimus aliquam iste deserunt
      quasi nisi distinctio ullam! Reiciendis deleniti nobis consequatur
      praesentium quibusdam ipsum minus recusandae ullam voluptatum! Natus culpa
      ipsa non? Natus qui eos quas impedit atque voluptatum animi ipsum ex!
      Explicabo tempore dicta recusandae amet rerum labore nihil, sunt inventore
      excepturi earum reiciendis, id perferendis illum voluptate doloremque?
      Beatae iure aperiam repudiandae distinctio delectus debitis, dolores qui.
    </ThemeProvider>
  );
};
