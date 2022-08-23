## Input Component

Компоненты 
- Input 
- CodeInpit (для ввода числовых кодов)

Пропс `onChange` принимает callback, который первым параметром принимает новый value, вторым сам `event`

Для эмулирования состояния focused из приложения, можно передать `isActive` свойство. 
Сама передача его вне зависимости от значения меняет стили компонента.


Jss theme namespaces: 
- `INPUT_COMPONENT_NAMESPACE`
- `CODE_INPUT_COMPONENT_NAMESPACE`


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

### Использование: 

```JSX
<Input
  value={value}
  onChange={setValue}
  baseAppearance="appearanceName"
  appearance="appearanceName"
/>
```