## Input Component

Содержит 2 компонента - Input | CodeInpit (для ввода числовых кодов)

Стилизация через ThemeProvider от "react-jss"

Namespaces: INPUT_COMPONENT_NAMESPACE, CODE_INPUT_COMPONENT_NAMESPACE

Содержит компоненты для стилизации через тему

wrapper
input
prefixWrapper
postfixWrapper
clearIcon
label

Пример стилизации: 

```js script
const theme = {
  components: {
    [INPUT_COMPONENT_NAMESPACE]: {
      base: {
      // Меняем глобальные стили для всех инпутов
        [INPUT_COMPONENTS_NAMES.wrapper]: {},
        [INPUT_COMPONENTS_NAMES.input]: {},
        [INPUT_COMPONENTS_NAMES.prefixWrapper]: {},
        [INPUT_COMPONENTS_NAMES.postfixWrapper]: {},
        [INPUT_COMPONENTS_NAMES.clearIcon]: {},
        [INPUT_COMPONENTS_NAMES.label]: {},
      },

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
}
```


```JSX
<Input
  value={value}
  onChange={setValue}
  baseAppearance="appearanceName"
  appearance="appearanceName"
/>
```