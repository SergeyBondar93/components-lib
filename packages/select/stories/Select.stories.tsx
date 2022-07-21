import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { ThemeProvider } from "react-jss";
import { Checkbox } from "@cheaaa/checkbox";

import { Select } from "../src";
import { SelectOptionValue } from "../src/types";

import { customFilterFunction, isSomeOptionsDisabled } from "./utils";
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
  smoothScrollToTop: boolean;
  disabled: boolean;
  shouldFitContent: boolean;
  label: string;
  placeholder: string;
  noOptionsMessage: string;
  selectedHeader: string;
  unselectedHeader: string;
}

export const Base: Story<IStoryParams> = (args) => {
  const [multiValue, setMultiValue] = useState<SelectOptionValue[]>([]);
  const [singleValue, setSingleValue] = useState<SelectOptionValue>("");
  const [isSomeDisabled, setIsSomeDisabled] = useState(false);

  const filterFunction = args.customFilterFunction
    ? customFilterFunction
    : undefined;

  const isOptionDisabledFunction = isSomeDisabled
    ? isSomeOptionsDisabled
    : undefined;

  const onFocus: React.FocusEventHandler<HTMLElement> = (e) => {
    if (args.smoothScrollToTop) {
      const top = window.scrollY + e.target.getBoundingClientRect().top - 10;
      // TODO не работает на IOS, починить
      window.scroll({ top, behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Checkbox
        value={isSomeDisabled}
        onChange={setIsSomeDisabled}
        label="Disable options starts with А В Д З К"
      />
      <h2>Multi Value</h2>
      <Select
        value={multiValue}
        onChange={setMultiValue}
        options={options}
        filterFunction={filterFunction}
        isMulti
        isOptionDisabledFunction={isOptionDisabledFunction}
        inputProps={{
          onFocus,
        }}
        {...args}
      />
      <h2>Single Value</h2>
      <Select
        value={singleValue}
        onChange={setSingleValue}
        options={options}
        isMulti={false}
        filterFunction={filterFunction}
        isOptionDisabledFunction={isOptionDisabledFunction}
        inputProps={{
          onFocus,
        }}
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
      <h2>Multi Value</h2>
      <Select
        value={multiValue}
        onChange={setMultiValue}
        options={options}
        filterFunction={filterFunction}
        isMulti
        isOptionDisabledFunction={isOptionDisabledFunction}
        inputProps={{
          onFocus,
        }}
        {...args}
      />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quis
        doloribus, incidunt ab necessitatibus labore cumque molestias dolore
        illum adipisci iste eos laboriosam laudantium fuga odit suscipit saepe.
        Inventore magni sed iste pariatur? Voluptatibus dolorem alias quam
        reprehenderit dolor quia neque, qui illo, possimus et mollitia corrupti
        ut inventore distinctio non? Quod veniam saepe deleniti modi sunt vero
        nihil reprehenderit dolorem? Ullam asperiores perspiciatis ut aliquid
        unde. Sint dolore vero inventore quod repellendus recusandae error
        praesentium quisquam et rerum nisi officia, tempore harum deleniti
        repudiandae maiores sequi cum a hic laborum voluptatibus. Necessitatibus
        iure aliquam explicabo, amet dicta alias doloremque culpa eveniet
        similique iste, fugiat obcaecati debitis numquam perspiciatis beatae,
        velit vel odit ullam. Provident dolore qui in dicta vitae? A corporis
        eum ducimus ut consectetur laudantium, labore voluptatem officiis neque
        tempora, expedita vero, assumenda at? Obcaecati beatae vel quis
        aspernatur eaque, nam, unde neque vero corrupti mollitia aperiam omnis
        tempore repellat voluptas similique aliquid magnam, esse quam
        praesentium quae repudiandae. Nisi dignissimos voluptatem totam eligendi
        odit repellendus laborum similique esse officia veritatis laudantium,
        velit quo voluptate, amet impedit suscipit numquam temporibus. Nihil,
        molestiae iste ipsam modi nesciunt distinctio officiis sapiente, magnam
        velit at aliquid, aspernatur enim veritatis? Voluptatum pariatur tenetur
        voluptates eligendi neque architecto itaque inventore consequatur quo
        velit. Maxime quaerat temporibus modi inventore ipsum dignissimos cumque
        illo obcaecati nemo dolore! Soluta perferendis voluptas labore id, esse
        saepe eum. Dolorem doloribus, nesciunt eum ipsum adipisci tempora sed
        sequi eos iste accusantium alias voluptate hic, veniam omnis laboriosam,
        beatae expedita facere tenetur. Sit sed cumque, quod culpa, quasi
        recusandae, optio doloremque sapiente dignissimos sunt itaque explicabo
        minus. Eaque doloremque tempore quae id quidem nostrum suscipit, fugit
        laboriosam. Optio illo distinctio harum repellendus, veritatis esse
        commodi saepe molestiae amet odio assumenda quia tempore excepturi ipsum
        quasi nisi consectetur debitis vel officia iure velit ab illum? Suscipit
        repellat sed harum enim necessitatibus repellendus quis rerum porro
        eaque! Facere possimus maxime unde inventore nobis? Eum quibusdam amet
        ratione sapiente! Facilis, accusamus nisi. Odit autem dolore totam quos
        vero aut, necessitatibus dicta magnam soluta exercitationem suscipit
        voluptatem esse molestias fugiat placeat sapiente corrupti! Ad a,
        praesentium illo autem quos mollitia accusantium tempore minima eligendi
        ipsa eius aperiam unde ipsam ullam magnam corporis, tempora ducimus iure
        doloremque! Suscipit expedita, soluta ratione autem temporibus vero
        facilis quas pariatur sit quibusdam, veritatis laudantium! A possimus
        odit architecto soluta doloribus, vitae saepe autem quidem recusandae
        eum dolor ducimus illo assumenda quisquam magni nulla velit. Quis
        tempora repudiandae obcaecati quo hic dolorum excepturi quam adipisci
        qui ipsum aliquid quidem error nulla minus optio, ea ad accusamus a esse
        fuga. Illo inventore ea delectus esse corporis minima dolorem tempora
        nemo maxime repellat et perferendis debitis architecto aliquid
        consequuntur ut explicabo optio placeat recusandae numquam, expedita
        modi. Fugit odio hic impedit accusantium delectus ullam aspernatur sint
        corporis. Soluta dolor natus unde reiciendis quidem! Aliquam excepturi
        facilis reiciendis, quasi asperiores aliquid neque dignissimos fuga,
        voluptatibus reprehenderit enim animi architecto voluptates blanditiis
        necessitatibus nam voluptatem corrupti nesciunt mollitia commodi.
        Repellat facere nobis rerum.
      </p>
    </ThemeProvider>
  );
};

Base.args = {
  isOpen: false,
  smoothScrollToTop: false,
  customFilterFunction: false,
  isCloseOnSelect: true,
  isCloseOnRemove: false,
  disabled: false,
  shouldFitContent: false,
  label: "Выберите страну",
  placeholder: "Введите или выберите страну",
  noOptionsMessage: "Ничего не найдено",
  selectedHeader: "ВЫБРАННЫЕ",
  unselectedHeader: "ВСЕ СТРАНЫ",
};
