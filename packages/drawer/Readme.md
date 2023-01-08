## Modal Component


Компоненты
- Drawer = Компонент бокового выезжающего блока 

- ConnectedDrawer = компонент Drawer управляемый из редакса.


Для работы `ConnectedDrawer` необходимо добавить reducer 

```js script
{ [DRAWER_STATE_NAMESPACE]: drawerReducer }
```

Управление состоянием ConnectedDrawer происходит через экшены drawerActions.
При открытии модалки можно добавить data, необходимую для использования внутри модалки

Jss theme namespaces: 
- `DRAWER_COMPONENT_NAMESPACE`
