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
}
```
