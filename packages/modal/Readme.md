## Modal Component


Компоненты
- Modal = Модальное окно 

- ConnectedModal = компонент Modal управляемый из редакса.


Для работы `ConnectedModal` необходимо добавить reducer 

```js script
{ [MODAL_STATE_NAMESPACE]: modalReducer }
```

Управление состоянием ConnectedModal происходит через экшены modalActions.
При открытии модалки можно добавить data, необходимую для использования внутри модалки

Jss theme namespaces: 
- `MODAL_COMPONENT_NAMESPACE`
