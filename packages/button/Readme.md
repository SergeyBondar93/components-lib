## Button Component

Компоненты
- BaseButton = Компонент кнопки без стилей, обязательно принимает объект classes с описанными компонентами. Используется для создания новых компонентов кнопки в других компонентах. ```Не для приложений.```

- Button = Кнопка, в зависимости от пропсов может становиться ссылкой или чем то другим.

- ButtonGroup = Обёртка над группой кнопок, является компонентом ввода, обязательно принимает onChange + value, в children обязательна передача кнопок с аттрибутами value

- IconButton = Кнопка с видом иконки

Jss theme namespaces: 
- `BUTTON_COMPONENT_NAMESPACE`
- `ICON_BUTTON_COMPONENT_NAMESPACE`
- `BUTTON_GROUP_COMPONENT_NAMESPACE`

При передаче href становится тегом `<a>{children}</a>`;

Возможна передача кастомного компонента через props

```jsx
<Button component={CustomComponent}>text</Button>
```

Если не надо передавать appearance в кастомный компонент, следует передать passAppearancesToComponent={false};
