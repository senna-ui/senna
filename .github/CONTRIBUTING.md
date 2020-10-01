# Contributing

Thanks for your interest in contributing to Senna UI :tada:

- [Contributing Etiquette](#contributing-etiquette)
- [Creating an Issue](#creating-an-issue)
  * [Creating a Good Code Reproduction](#creating-a-good-code-reproduction)
- [Creating a Pull Request](#creating-a-pull-request)
  * [Setup](#setup)
  * [Core](#core)
    + [Modifying Components](#modifying-components)
    + [Preview Changes](#preview-changes)
    + [Lint Changes](#lint-changes)
    + [Modifying Documentation](#modifying-documentation)
    + [Modifying Tests](#modifying-tests)
      - [Screenshot Tests](#screenshot-tests)
    + [Building Changes](#building-changes)
  * [Submit Pull Request](#submit-pull-request)
- [Commit Message Guidelines](#commit-message-guidelines)
  * [Commit Message Format](#commit-message-format)
  * [Revert](#revert)
  * [Type](#type)
  * [Scope](#scope)
  * [Subject](#subject)
  * [Body](#body)
  * [Footer](#footer)
  * [Examples](#examples)
- [License](#license)


## Contributing Etiquette

Please see our [Contributor Code of Conduct](https://github.com/senna-ui/senna/blob/master/CODE_OF_CONDUCT.md) for information on our rules of conduct.


## Creating an Issue

* It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Although we would love to help our users as much as possible, diagnosing issues without clear reproduction steps is extremely time-consuming and simply not sustainable.

* The issue list of this repository is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.

* Issues with no clear steps to reproduce will not be triaged. If an issue is labeled with "needs: reply" and receives no further replies from the author of the issue for more than 14 days, it will be closed.

* If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported](https://github.com/senna-ui/senna/issues?utf8=%E2%9C%93&q=is%3Aissue). You can search through existing issues to see if there is a similar one reported. Include closed issues as it may have been closed with a solution.

* Next, [create a new issue](https://github.com/senna-ui/senna/issues/new/choose) that thoroughly explains the problem. Please fill out the populated issue form before submitting the issue.


## Creating a Good Code Reproduction

### What is a Code Reproduction?

A code reproduction is a small application that is built to demonstrate a particular issue. The code reproduction should contain the minimum amount of code needed to recreate the issue and should focus on a single issue.

### Why Should You Create a Reproduction?

A code reproduction of the issue you are experiencing helps us better isolate the cause of the problem. This is an important first step to getting any bug fixed! 

Without a reliable code reproduction, it is unlikely we will be able to resolve the issue, leading to it being closed. In other words, creating a code reproduction of the issue helps us help you.

## Creating a Pull Request

* We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please [create an issue](#creating-an-issue) that explains the bug or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.

* Looking for an issue to fix? Make sure to look through our issues with the [help wanted](https://github.com/senna-ui/senna/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) label!


### Setup

1. [Download the installer](https://nodejs.org/) for the LTS version of Node.js. This is the best way to also [install npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_).
2. Fork this repository.
3. Clone your fork.
4. Create a new branch from master for your change.
5. Navigate into the directory of the package you wish to modify (core, angular, etc.).
6. Run `npm install` to install dependencies for this package.
7. Follow the steps for the specific package below.


### Core

#### Modifying Components

1. Locate the component(s) to modify inside `/core/src/components/`.
2. Take a look at the [Stencil Documentation](https://stenciljs.com/docs/introduction/) and other components to understand the implementation of these components.
3. Make your changes to the component. If the change is overly complex or out of the ordinary, add comments so we can understand the changes.
4. [Preview your changes](#preview-changes) locally.
5. [Modify the documentation](#modifying-documentation) if needed.
6. [Run lint](#lint-changes) on the directory and make sure there are no errors.
7. [Build the project](#building-changes).
8. After the build is finished, commit the changes. Please follow the [commit message format](#commit-message-format) for every commit.
9. [Submit a Pull Request](#submit-pull-request) of your changes.


#### Preview Changes

1. Run `npm start` from within the `core` directory.
2. A browser should open at `http://localhost:3333/`.
4. Run `npm storybook` to view your changes in storybook


#### Modifying Documentation

1. Locate the `readme.md` file in the component's directory.
2. Modify the documentation **above** the line that says `<!-- Auto Generated Below -->` in this file.
3. To update any of the auto generated documentation below that line, make the relevant changes in the following places:
  - `Usage`: update the component's usage examples in the component's `usage/` directory
  - `Properties`, `Events`, or `Methods`: update the component's TypeScript file (`*.tsx`)
  - `CSS Custom Properties`: update the component's main Sass file (`*.scss`)


#### Building Changes

1. Once all changes have been made and the documentation has been updated, run `npm run build` inside of the `core` directory. This will add your changes to any auto-generated files, if necessary.
2. Review the changes and, if everything looks correct, [commit](#commit-message-format) the changes.
3. Make sure the build has finished before committing. If you made changes to the documentation, properties, methods, or anything else that requires an update to a generate file, this needs to be committed.
4. After the changes have been pushed, publish the branch and [create a pull request](#creating-a-pull-request).


### Submit Pull Request

1. [Create a new pull request](https://github.com/senna-ui/senna/compare) with the `master` branch as the `base`. You may need to click on `compare across forks` to find your changes.
2. See the [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) GitHub help article for more information.
3. Please fill out the provided Pull Request template to the best of your ability and include any issues that are related.


## Commit Message Guidelines

We have very precise rules over how our git commit messages should be formatted. This leads to readable messages that are easy to follow when looking through the project history. We also use the git commit messages to generate our [changelog](https://github.com/senna-ui/senna/blob/master/CHANGELOG.md). Our format closely resembles Angular's [commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

### Commit Message Format

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/). A commit message consists of a **header**, **body** and **footer**.  The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope

The scope can be anything specifying place of the commit change. Usually it will refer to a component but it can also refer to a utility. For example `action-sheet`, `button`, `css`, `menu`, `nav`, etc. If you make multiple commits for the same component, please keep the naming of this component consistent. For example, if you make a change to navigation and the first commit is `fix(nav)`, you should continue to use `nav` for any more commits related to navigation. As a general rule, if you're modifying a component use the name of the folder.

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize first letter
* do not place a period `.` at the end
* entire length of the commit message must not go over 50 characters
* describe what the commit does, not what issue it relates to or fixes
* **be brief, yet descriptive** - we should have a good understanding of what the commit does by reading the subject

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Examples

Does not appear in the generated changelog:

```
docs(changelog): update steps to update
```

Appears under "Features" header, toast subheader:

```
feat(toast): add 'buttons' property
```

Appears under "Bug Fixes" header, skeleton-text subheader, with a link to issue #28:

```
fix(skeleton-text): use proper color when animated

closes #28
```

Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:

```
perf(css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

Appears under "Breaking Changes" with the breaking change explanation:

```
refactor(animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Senna animations.
```

The following commit and commit `667ecc1` do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.

```
revert: feat(skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```


## License

TODO