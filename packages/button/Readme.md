## Button Component

Стилизация через ThemeProvider от "react-jss"

Namespaces: BUTTON_COMPONENT_NAMESPACE

Содержит компоненты для стилизации через тему

wrapper

Пример стилизации: 

```js script
const theme = {
  components: {
    [BUTTON_COMPONENT_NAMESPACE]: {
      base: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {}
      },
      small: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          padding: "5px",
          fontWeight: 600,
          fontSize: "10px",
        },
      },
      
      primary: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          background: "#636AFF",
          color: "#FFF",
          "&:hover": {
            background: color("#636AFF").darken(0.1).toString(),
          },
        },
      },
      secondary: {
        [BUTTON_COMPONENTS_NAMES.wrapper]: {
          background: "#EDF4FE",
          color: "#636AFF",
          "&:hover": {
            background: color("#EDF4FE").darken(0.1).toString(),
            color: color("#636AFF").darken(0.1).toString(),
          },
        },
      },
    },
  },
}
```

### Использование: 
```JSX
<Button
  onClick={handleClick}
  baseAppearance="appearanceName"
  appearance="appearanceName"
/>
```