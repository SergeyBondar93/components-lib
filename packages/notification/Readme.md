## Notification Component

За основу взят компонент react-toastify

Для использования необходимо куда либо в приложение (можно на верхний уровень) добавить

```jsx
<Notification />
```

В нём будут находиться нотификации

Вызов нотификации: notify.{type}({ title, message? })

Стилизация отличается от всех остальных компонентов из за своей сложности и совместимости с библиотекой, по этому тут отсутствуют appearance и baseAppearance. Стилизуется только один раз и настраиваются цвета для разных типов

Компоненты { closeButton titleWrapper title message } стилизуются на верхнем уровне

Компоненты { toast progressBar } стилизуются в зависимости от типа нотификации `{TypeOptions} from react-toastify`

Пример темы:

```js script
export const theme = {
  components: {
    [NOTIFICATION_COMPONENT_NAMESPACE]: {
      [NOTIFICATION_COMPONENT_NAMES.closeButton]: {},
      [NOTIFICATION_COMPONENT_NAMES.titleWrapper]: {
        fontSize: "18px",
      },
      [NOTIFICATION_COMPONENT_NAMES.message]: {
        fontSize: "13px",
      },
      [NOTIFICATION_COMPONENT_NAMES.title]: {
        marginLeft: '20px',
      },
      info: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#636AFF",
        },
        [NOTIFICATION_COMPONENT_NAMES.progressBar]: {
          background: "blue",
        },
      },
      success: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#41CC78",
        },
        [NOTIFICATION_COMPONENT_NAMES.progressBar]: {
          background: "green",
        },
      },
      warning: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#FB751C",
        },
        [NOTIFICATION_COMPONENT_NAMES.progressBar]: {
          background: "orange",
        },
      },
      error: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#FF6666",
        },
        [NOTIFICATION_COMPONENT_NAMES.progressBar]: {
          background: "red",
        },
      },
      default: {
        [NOTIFICATION_COMPONENT_NAMES.toast]: {
          background: "#636AFF",
        },
        [NOTIFICATION_COMPONENT_NAMES.progressBar]: {
          background: "blue",
        },
      },
    },
  },
};
```
