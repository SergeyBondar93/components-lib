## Header Component


Компоненты
- Header = Компонент header. включает компонент Contacts при передаче контактов.

Содержит кастомный компонент dropdown, его поведение отличается тем что рендер происходит в `portal`. Это необходимо что бы избежать пересечения zIndex разных блоков. При исчезновении `Header` из зоны видимости, `dropdown` закрываются. 

Jss theme namespaces: 
- `HEADER_COMPONENT_NAMESPACE`
