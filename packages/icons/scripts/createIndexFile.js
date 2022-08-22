// const fs = require('fs');
// const path = require('path');

// const files = fs.readdirSync('src');

// const icons = files.filter(fileName => fileName.endsWith('.tsx')).map(fileName => fileName.replace('.tsx', ''));

// const disableEslint = '/* eslint-disable  */ \n'

// const fileContent = icons.reduce((acc, fileName) => `${acc}export * from "./${fileName}";\n`  , '')
// const content = disableEslint + fileContent

// fs.writeFileSync(
//     path.join('src', 'index.ts'),
//     content,
//     'utf-8'
// )

// // TODO сделать что бы каждая иконка импортилась из файла и не тянула остальные
// // вот так @che/icons/AlertIcon
// // после этого поправить импорты в файле создания историй (шаблон и при копировании на кнопку)