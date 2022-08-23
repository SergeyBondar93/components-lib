## Theme

Стилизация через ThemeProvider от "react-jss"

для стилизации компонентов необходимо передать тему в провайдер вида

```js script
const theme = {
  components: {
    [INPUT_COMPONENT_NAMESPACE]: {
      // component theme
    },
    [BUTTON_COMPONENT_NAMESPACE]: {
      // component theme
    },
  },
};
```

Внутри каждого компонента можно описать несколько видов стилей (далее - appearance) для каждого используемого компонента, например.

```js script
const theme = {
  components: {
    [INPUT_COMPONENT_NAMESPACE]: {
      // base - стили на всё приложение для всех компонентов этого типа
      base: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          fontSize: "12px",
          // во всех аппирансах возможно добавление медиазапросов
          [theme.breakpoints.up("md")]: {
            fontSize: "14px",
          },
        },
      },
      big: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          padding: "20px",
          [theme.breakpoints.up("md")]: {
            fontSize: "25px",
          },
          }
      },
      red: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          background: 'red'
        }
        [INPUT_COMPONENTS_NAMES.input]: {
          color: "red",
        }
      },

      // пример стилизации кастомного аппиранса и состояний инпута по модификаторам
      appearanceName: {
        [INPUT_COMPONENTS_NAMES.wrapper]: {
          '&[data-focused="true"]': {
            alignItems: "center",
          },
          '&[data-hasvalue="true"]': {
            alignItems: "center",
          },
        },
        [INPUT_COMPONENTS_NAMES.input]: {
          padding: "12px",
          '&[data-focused="true"]': {
            padding: "12px",
          },
          '&[data-hasvalue="true"]': {
            padding: "12px",
          },
          "&:not(:focus)::placeholder": {
            opacity: 1,
          },
        },
      },
    },
  },
};
```

Каждый аппиранс стоит воспринимать как отдельный класс, который применится при передаче параметра в компонент. Пример использования компонента:

Обычный инпут (принимает стили только base):

```jsx
<Input value={value} onChange={onChange} />
```

Big инпут (принимает стили base + big):

```jsx
<Input value={value} onChange={onChange} appearance="big" />
```

Red инпут (принимает стили base + red):

```jsx
<Input value={value} onChange={onChange} appearance="red" />
```

Big Red инпут (принимает стили base + big + red):

```jsx
<Input
  value={value}
  onChange={onChange}
  baseAppearance="big"
  appearance="red"
/>
```

Как и в обычном css, приоритет отдаётся свойствам описанным в css ниже, а не в порядке добавления классов. По этому разделение на base / appearance не всегда может работать как ожидаем. Если свойства пересекаются, то следует передвинуть baseAppearance в описании выше чем appearance, проверив нигде ли не используется такое же сочетание baseAppearance + appearance в этом типе компонентов. Кейс очень редкий.

Так же у каждого компонента есть модификаторы, которые начинаются на ```data-```. Полный список модификаторов для каждого блока конкретного компонента и их блоков можно посмотреть в исходниках компонента.

По итогу тема генерирует максимум 4 класса, это сознательное ограничение для того что бы избежать их большого количества. Классы генерируются по следующему принципу: 

classNamePrefix - сам компонент
blockName - описаны в объектах с константами вида ```INPUT_COMPONENTS_NAMES.wrapper```. Все изменения в теме делаем только с использованием констант.
appearance - то что мы передаём как appearance / baseAppearance

```js script
{classNamePrefix}-{blockName}
{classNamePrefix}-{blockName}-base
{classNamePrefix}-{blockName}-{baseAppearance}
{classNamePrefix}-{blockName}-{appearance}
```
При отсутствии чего либо описанного в приложении класс с модификатором класс будет отсутствовать из за ненадобности.

