import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { ThemeProvider } from "react-jss";

import { Select } from "../src";
import { OptionValue } from "../src/types";

import { customFilterFunction } from "./customFilterFunction";
import { options } from "./options";
import { theme } from "./theme";

export default {
  title: "Select",
  parameters: {
    backgrounds: {
      default: "lightblue",
      values: [{ name: "lightblue", value: "#E5ECF7" }],
    },
  },
} as Meta;

interface IStoryParams {
  isOpen: boolean;
  customFilterFunction: boolean;
  isCloseOnSelect: boolean;
  isCloseOnRemove: boolean;
  disabled: boolean;
  label: string;
  placeholder: string;
  noOptionsMessage: string;
  selectedHeader: string;
  unselectedHeader: string;
}

export const Base: Story<IStoryParams> = (args) => {
  const [multiValue, setMultiValue] = useState<OptionValue[]>([]);
  const [singleValue, setSingleValue] = useState<OptionValue>("");

  const filterFunction = args.customFilterFunction
    ? customFilterFunction
    : undefined;

  return (
    <ThemeProvider theme={theme}>
      <h2>Multi Value</h2>
      <Select
        value={multiValue}
        onChange={setMultiValue}
        options={options}
        filterFunction={filterFunction}
        isMulti
        {...args}
      />
      <h2>Single Value</h2>
      <Select
        value={singleValue}
        onChange={setSingleValue}
        options={options}
        isMulti={false}
        filterFunction={filterFunction}
        {...args}
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio error
        itaque reprehenderit eum neque deleniti et aliquam? Beatae recusandae
        dolore, quo autem voluptatem nisi quam. Repudiandae nisi nemo laboriosam
        maiores? Perspiciatis voluptates dolores similique deleniti, magni modi
        adipisci doloribus eos quisquam placeat, quas quasi voluptatibus?
        Consectetur dolorem a laudantium soluta quisquam quaerat minima
        architecto deserunt, quas, illo atque quibusdam veniam saepe. Nisi
        repellendus accusantium officia, enim corrupti quo iusto sunt reiciendis
        corporis incidunt quidem autem debitis modi necessitatibus quaerat ipsam
        beatae aliquid fugiat cupiditate culpa. Non ea ullam quibusdam,
        inventore nisi libero possimus! Dolor obcaecati tenetur officiis
        perferendis harum recusandae tempore quod est facere in ducimus,
        laudantium iure a tempora? Vel deserunt voluptas molestias consequuntur
        temporibus magnam, aut quidem et distinctio sunt ut, laboriosam nemo hic
        optio quas earum. Molestias magni doloremque dicta accusamus,
        perferendis qui aliquid aut repellat fugiat aspernatur, in nesciunt ab
        exercitationem debitis neque minima quo totam culpa cum fugit! Dolores
        saepe blanditiis sint sit placeat. Similique, nisi! Dolorem dicta
        architecto velit natus officiis. Asperiores minima molestias quia
        adipisci officiis esse accusantium qui nesciunt dicta neque nemo
        voluptatibus aliquid aspernatur error, eum fuga expedita reprehenderit
        vel nihil. Dignissimos earum suscipit dolore nostrum, assumenda unde
        autem dolores non itaque quis possimus! Quisquam corrupti recusandae,
        aliquam velit magnam nisi labore, amet non fugit vel perspiciatis modi
        voluptatibus magni eligendi deleniti. Non aperiam eos sapiente commodi
        eaque a exercitationem culpa alias deserunt consequatur omnis corrupti
        dolor ab libero id atque, quaerat autem. Quo, ab harum quam temporibus
        labore officiis quod molestiae nulla dolores dolorum libero! Totam
        consequatur quam debitis accusamus quod, saepe odio laudantium sapiente
        libero delectus aliquam illo enim possimus. Doloremque culpa, neque
        quisquam adipisci quo, sed distinctio maiores perspiciatis iure sint
        accusamus fugiat quidem non minima eligendi ea quae eius! Maxime saepe a
        vero similique quae quod suscipit quam, illo harum molestias! Voluptate,
        rem. Libero non dolor possimus, explicabo esse blanditiis? Corporis
        excepturi iste asperiores eius quas ullam illum eos laborum vitae, porro
        exercitationem reprehenderit quod non ea! Omnis temporibus qui rem minus
        eligendi accusantium, voluptatibus dignissimos, possimus eaque, corrupti
        obcaecati maiores molestias ea impedit at magni optio laboriosam
        delectus error recusandae quia velit ab quas! Pariatur et id officia
        architecto, reiciendis voluptatum, ea nisi non enim obcaecati ut
        cupiditate animi. Accusamus reprehenderit architecto illo corporis
        nostrum quo, vel porro ad, est sunt dicta aperiam, voluptas reiciendis!
        Ipsam perspiciatis, cumque accusantium dolore sed mollitia doloribus
        sunt beatae tempore placeat sapiente voluptatum provident officiis
        distinctio natus non saepe fugit! Hic, reprehenderit. Labore,
        consequatur aliquid. Consequatur minus voluptas saepe dolor blanditiis
        commodi autem corrupti provident at aut. Dignissimos excepturi culpa
        ducimus quae. Consequatur itaque architecto sunt eveniet mollitia qui
        tempora, veniam error! A ipsam est labore sequi in iusto harum porro
        suscipit mollitia autem, corporis magni consequuntur voluptate dolorem
        architecto? Facere, facilis error. Nostrum molestiae recusandae officiis
        qui illo ab enim, architecto vitae laudantium doloremque placeat quis
        ipsam cumque dolorum laborum tempora inventore, nihil voluptate
        perspiciatis eos perferendis rerum quibusdam minima cum. Voluptate odio
        molestiae deleniti dolore quibusdam exercitationem similique?
      </p>
    </ThemeProvider>
  );
};

Base.args = {
  isOpen: false,
  customFilterFunction: false,
  isCloseOnSelect: true,
  isCloseOnRemove: true,
  disabled: false,
  label: "Выберите страну",
  placeholder: "Введите или выберите страну",
  noOptionsMessage: "Ничего не найдено",
  selectedHeader: "ВЫБРАННЫЕ",
  unselectedHeader: "ВСЕ СТРАНЫ",
};
