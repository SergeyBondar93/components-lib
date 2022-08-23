## Tooltip Component

Создан на основе `react-tooltip`

Компоненты
- Tooltip = компонент подсказки. обязательно приимает id и children, Срабатывает при навелении на блок с `data-` аттрибутами: `data-tip` и `data-for={id}`. где id = переданный в tooltip. 

Из за особенностей либы стилизация возможна только с !important как описано в документации в `react-tooltip`

Jss theme namespaces: 
- `TOOLTIP_COMPONENT_NAMESPACE`
