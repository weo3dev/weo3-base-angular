# WEO3 Development and Design
### core build for [weo3.com](http://www.weo3.com)

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installing](#installing)
- [Running](#running)
- [Running tests](#running-tests)
- [Roadmap](#roadmap)
- [License](#license)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and is up-to-date@latest


## Introduction

`weo3-base` is the codebase for the current version of weo3.com. Using the premise, "put yo monay where yo mouth is", it has been re-tooled using angular-cli to generate a progressive angular single page app. Neat!

Public version 1 is the basics: four sections, "Work", "About", "Contact", and "Experience" with the standard links to LinkedIn, GitHub, etc, and with a concise list of work examples which are at this point static in their existence, i.e. they are not being served using a service.

## Requirements

Familiarity with using angular-cli

Node >=v6.5.0 and npm >=3.10.3

npm-check-updates for optional below

Typescript 2.6.2 or later, but may necessitate manual dependency management

## Installing

```bash
$ git clone --depth 1 https://github.com/metavurt/weo3-base.git [your-new-choice-of-name-goes-here]
$ cd [your-new-choice-of-name-goes-here]

# install dependencies
$ npm install

# optional, but suggested
# check how current dependencies and dev dependencies are, just in case
$ npm outdated
# based on feedback and your personal knowledge, either update all or single modules
# if you have npm-check-updates installed, run it and see what it says as well
$ ncu
# if the feedback looks too unstable, then update with
$ ncu -u
# afterward, re-run npm install and re-confirm with npm outdated
# disregard obvious misalignments (such as pinned modules based on necessary previous testing) unless large errors are discovered
# then please alert me at https://github.com/metavurt/weo3-base/issues
```

## Running
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### What is not included:
+ php mailer script
+ (future) portfolio experience service


## Build
Run `ng build -prod` to build the project. The build artifacts will be stored in the `dist/` directory. You need only specify `-prod` for production build, as AOT is a default attribute of production builds in angular-cli.


## Running Tests
Use `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Use `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

(Before running the tests make sure you are serving the app via `ng serve`.)


# Roadmap
View the Roadmap [here](https://github.com/metavurt/weo3-base/wiki), for glimpse into any future features or additions that may be built.



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# License

MIT
