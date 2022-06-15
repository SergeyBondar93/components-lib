module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor']],
    'subject-case': [0],
    'header-max-length': [0],
    'subject-full-stop': [0],
  },
};
