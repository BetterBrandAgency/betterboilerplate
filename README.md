# BetterBoilerplate
A frontend framework geared towards agencies using WordPress.

For in-depth documentation see the [BetterBoilerplate Documentation Git Hub Page](https://betterbrandagency.github.io/better-boilerplate-documentation/). The BetterBoilerplate has been a labour of love for [Better Brand Agency](https://www.betterbrandagency.com/), and in particular [Steven Roberts](https://twitter.com/matchboxhero10), the lead developer and author on the project.


## Introduction
The boilerplate is made up of many different modules and will manage much of the frontend build process; containing the entire directory structure for your project.

The BetterBoilerplate carries very little "style" and consists mainly of file and directory structure and theme-able objects, components and widgets. This allows us to create the styles needed based on each design individually.

The boilerplate also includes an HTML pattern library for referencing, copying and pasting commonly used elements and optional modules, this helps speed up our workflow as everything you need is included in the files contained in the boilerplate.

We build a lot of websites at Better, most of them in WordPress, this boilerplate allows us to jump start the frontend build of projects and build websites quickly while still assuring code quality and complete control over the file sizes of the files in our projects. 

We hope you can use this framework for the same purpose, if you find it useful hit the star button and feel free to fork the project and use what you need. Any issues/questions or feedback should be reported in the repo.


- - - -


## How to use the BetterBoilerplate
The BetterBoilerplate can be used in anyway you would like, it has been designed to be edited, changed, updated and bastardised to fit the project at hand. 

This is not a going to create a "pretty" website out of the box, we work with awesomely talented designers, and it seems a shame for so many websites to look and feel the same.

**This is not a file you include in your page and hack on top of with another stylesheet.** 


- - - -


## Getting Started
Using the BetterBoilerplate has a few prerequisites and assumes a working knowledge of HTML, CSS, SCSS/SASS, BEM (Block, Element, Modifier) and Javascript.


### Prerequisites
The BetterBoilerplate includes a build process powered by gulp and so requires some software to be installed.

#### NPM
NPM (Node Package Manager) is required to be able to run gulp tasks and compile the SCSS. Install: 
[npm](https://www.npmjs.com/)

#### SASS/SCSS
The BetterBoilerplate is written in SCSS which is part of SASS (Syntactically Awesome Style Sheets) – SASS gives us access to features which are not readily available in vanilla CSS. Install: 
[Sass: Install Sass](http://sass-lang.com/install)

#### Gulp
The BetterBoilerplate makes use of Gulp as a task runner to help streamline some of the build process. Install: 
[gulp/getting-started.md at master · gulpjs/gulp · GitHub](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)


### Installing
Once you have downloaded the BetterBoilerplate and included it in your project files you will need to install the required npm modules, to do this; navigate to the root directory of you project and run the following commands in terminal;

```
npm install
npm update
```


- - - -


### File Structure
The boilerplate contains the entire directory structure needed for a frontend project and can be easily integrated into any project type. 

The top level of the directory structure includes the files needed for the build process (`gulpfile.js`, `package.json` and `package-lock.json`) as well as two other files; the `README.md` file used to provide a description to the repository and the `.gitignore` file used to tell git which files not to push to the server.

* Install NPM, SASS and gulp.
* Run `npm install` and `npm update` in the root of the project.
* Run the `gulp` command to compile the project and listen for changes or additions to any of the files and directories.
* The entire directory structure of the project is already laid out for you, along with optional modules and pre-made patterns.


- - - -


## The SASS Framework
Inside the styles source directory (`src/styles`) the sub-directories are named starting with a number. These numbers are used to keep the specificity and ITCSS layers in the correct order inside of an IDE or text-editor. From here we'll take a look through the directories and their contents, the documentation is somewhat detailed in parts so you can fully understand how it all works and fits together.


- - - -


### 00-functions
The framework carries a few simple functions inside the `src/styles/00-functions` directory, mostly for calculations;

The functions layer contains a number of useful mathematical functions;

```
letterspacing($adobe-letter-spacing, $font-size);
modular-scale($base-font-size, $ratio, $exponent);
ratio($width, $height);
strip-unit($number);
px-to-rem($number);
rem-to-px($number);
px-to-em($number);
```


- - - -


### 01-settings
All of the editable settings can be found in the `src/styles/01-settings` directory broken down into multiple files.

This layer contains all of the variables needed to turn settings on and off as well as setting global values for commonly used properties.


- - - -


### 02-tools
The tools directory contains all of the mixins and other tools included in the BetterBoilerplate. New mixins and tools can be added by creating new files inside the `src/styles/02-tools` directory. Since mixins don't output any code until they're used there is no harm in them being there and not being utilised, the other tools included are turned on and off using boolean variables in the settings directory.

The tools layer contains a number of mixins and other tools to help with a multitude of CSS requirements on any given project. 


- - - -


### 03-generic
The generic layer of the framework contains a CSS reset used to normalise the default CSS in all browsers. The BetterBoilerplate uses `sanitize.css` (https://jonathantneal.github.io/sanitize.css/) for this reset layer.


- - - -


### 04-base
The base layer of the framework is for the styling of common elements without the use of classnames, these are very generic and far reaching styles affecting all instances of any given element. The files contained in `src/styles/04-base` can be added to and should be edited to fit the styles of the project at hand.

* The base layer contains the styles for all of your elements in their unclassed state.
* Additional unclassed elements should be added to this layer.


- - - -


### 05-objects
The objects layer of the framework contains a number of classed elements. Along with the components layer most of your time will be spent here. This is where you will add new files for the objects in your project.

The objects layer contains a number of pre-defined objects which can be turned on and off from the settings layer. You will write the majority of your code into this and the components layer.


- - - -


### 06-components
The components layer of the framework includes a number of pre-built components ready to use, these styles should be changed for each project but provide a good base. In this layer you will create new files for the components required for your project and edit the included components to fit the project at hand.


* The components layer contains pre-built components which can be output using variables in the settings layer, any accompanying HTML and/or JS needed can found in the pattern library or the optional scripts directory. 
* Additional components should be built into this layer.


- - - -


### 07-widgets
The widgets layer of the framework carries styles from external sources usually to support a plugin of some kind.


- - - -


### 08-overrides
The overrides layer of the framework contains the helper classes broken down into multiple files for different property types and the shame file used for quick and dirty fixes.


- - - -


### 09-animations
The animations layer of the framework is used to hold any CSS animations used in the project. 


- - - -


### 10-wordpress
The WordPress layer of the framework is used for housing the WordPress specific styles for the project, since we often use a parent theme for WordPress the only styles that change from project to project is the login screen.


- - - -


### main.scss
The main.scss file is where the entire project is stitched together. Consisting only of `@import` rules it is responsible for the order in which the code is output into the single main stylesheet when compiled.


- - - -


### File Sizes
The file size of the CSS framework when compiled, minified and gzipped is ~`3kb` with none of the settings turned on and only ~`7kb` with them all turned on.


- - - -


## Browser Polyfills
The BetterBoilerplate makes use of HTML5 elements and some of the newer CSS3 elements available to designers and developers, to offer the best support we can for older browsers. The following files are included in the `src/scripts/single-scripts/` directory and will need including in the header of your website.


- - - -


## Browser Support
Officially the BetterBoilerplate supports IE10+ and all of the other modern browsers. Support for IE8+ could be provided with some work providing fallbacks for SVG's. There are some tools included in the CSS framework for providing flexbox and grid fallbacks to earlier versions of IE and for the modern browsers yet to support CSS Grid (soon to be none, yey!).


- - - -

## License
[MIT](https://github.com/BetterBrandAgency/betterboilerplate/blob/master/license.txt)
