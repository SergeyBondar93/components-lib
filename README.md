Demo: https://6601e959d5ef904f66758afc--cherehap.netlify.app

### Start reading individual package READMEs from the theme package

### All component usage and styling should be viewed in stories.

# README #


Component Library

Locally available at [http://localhost:9009/](http://localhost:9009/)

## Tech Stack

- React [React](https://www.reactjs.org/)
- Uses [monorepo](https://monorepo.tools/). [Lerna](https://github.com/lerna/lerna) is used for command processing and working with the monorepo
- Package manager [Yarn](https://yarnpkg.com/)
- Development language is [Typescript](https://www.typescriptlang.org/)
- Builders - TSDX / TSC [TSDX](https://github.com/jaredpalmer/tsdx) / [TSC](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- State [Redux](https://redux.js.org/)
- Code style control [Eslint](https://eslint.org/)
- Commit description [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Commit description control [Commitlint](https://github.com/conventional-changelog/commitlint)


### Pipeline
Before each commit, git hooks husky are run locally to control commit descriptions and check code linting. If there is a strong need to push without these checks, this can be done by adding the --no-verify flag when pushing. But it's better to fix all errors first.

Commits should be formatted according to Conventional Commits, and consist of a prefix, scope (if present), and commit description,
for example: `feat(input): Add some important prop`
In case of critical API changes and lack of compatibility with the previous version, to maintain semVer and raise the `MAJOR` version of the component, it is necessary to add a commit footer `BREAKING CHANGE: {some description}`. There should be an empty line between the footer and header, for example:  
```
feat(input): remove some props, change critical api

BREAKING CHANGE: update input api
```

Each commit goes through a pipeline on [TeamCity](http://tc.aws.che.lo/), where jobs are configured
to check for successful test runs and absence of linter errors.

If any of the jobs fail, merging the pull request is not allowed. All errors should be fixed first
to ensure that the changes do not violate the project's accepted standards.

Successful completion of the entire pipeline is a mandatory criterion for merging a branch into master.


### Pull Request Formatting

Any branch name should consist of the author's first name/last name/nickname, project name (in this case, `che-ui-kit`)
and a brief description of the essence of the change. For ease of perception, it is optimal for the branch name not to exceed five or six words,
including necessary prefixes.

Pull description is optional.

### Getting Started

```
    git clone git clone git@gitlab.com:cheins/che-ui-kit.git

    yarn

    yarn build

    yarn storybook

```

## Tooling

### Code Formatting

Code writing style is controlled using [ESLint](https://eslint.org/). The full list of configured rules can be
seen in the config files `.eslintrc.js`.

Although the linter module itself works as an executable module on Node, for convenience it is recommended
to install the corresponding IDE extension so that all errors and warnings are displayed visually in files.

You can check all code for the absence of stylistic errors using the command
```
yarn run lint
```

The absence of linter errors is one of the mandatory criteria for successful pipeline completion.
Therefore, before committing, you must run
```
yarn lint:fix
```
