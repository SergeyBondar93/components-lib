## Form Component

Компоненты 
- Form 
- FormField

Для работы необходимо добавить reducer 

```js script
{ [FORMS_STATE_NAMESPACE]: formsReducer }
```

Form принимает formName, и в redux работает с объектом 

```jsx
<Form formName={BASE_FORM_NAME}>
    {form}
</Form>
```

В большинстве случаев для использования компонентов ввода необходимо использовать HOC 

Пропсы `component` и `field` обязательны, все остальные передаются к компоненту который передали

- `component` - компонент
- `field` - путь до изменяемого поля в модели

Компонент всегда должен первым аргументом в функцию `onChange` передавать новое значение

```jsx
<FormField
  component={Input}
  field={'firstname'}
  placeholder="Ivan"
  label="Firstname"
/>
```

`field` во всех actons и selectors - пусть в строковом представлении до поля через точку, 

```js script
prop.prop1.prop2[arrayIndex][arrayIndex2].prop3 = 'some value'
```


Ошибки показываются только полей на которых что либо вводили, т.н. toched, для того что бы избежать показа ошибок незаполненных полей на всей форме когда её только начали заполнять

Для переопределения этого поведения для конкретного поля необходимо сделать это поле touched в необходимый момент

```js script
dispatch(
  formActions.setFieldTouched({
    formName: formName,
    field: fieldName,
    isTouched: true,
  })
)
```

Для показа всех ошибок на форме существует флаг isShowAllErrors. Его простановка необходима вручную. 

```js script
dispatch(
  formActions.setIsShowAllErrors({
    formName: formName,
    isShow: true,
  })
)
```

Основной кейс использования - перед отправкой на сервер включить показ всех ошибок на форме setIsShowAllErrors и отвалидировать её, показав все ошибки