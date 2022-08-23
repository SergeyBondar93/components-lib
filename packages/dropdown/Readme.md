## Dropdown Component

Компоненты
- Dropdown = Компонент dropdown построенный на основе `accordion`.

При передаче prop `passSetIsOpenToChildren`, функция и состояние открытости дропдауна ( `setIsOpen`, `isOpen`) передаётся в `children`.  

При передаче prop `passSetIsOpenToTitle`, функция и состояние открытости дропдауна ( `setIsOpen`, `isOpen`) передаётся в `title` компонент кнопки. Так как у аккордиона title явзяется кнопкой из пакета `button`, то в `titleButtonPropsFromProps.component` может быть передан любой компонент, и ему могут быть необходимы эти свойства.

Jss theme namespaces: 
- `DROPDOWN_COMPONENT_NAMESPACE`
- `DEFAULT_DROPDOWN_TITLE_BUTTON_APPEARANCE` - аппиранс по умолчанию для кнопки-title дропдауна для стилизации из приложения 
