# Better Boilerplate Documentation

The Better Boilerplate can be used in anyway you would like, it has been designed to be edited, changed, updated and bastardised to fit the project at hand.

This is not a going to create a "pretty" website out of the box, we work with awesomely talented designers, and it seems a shame for so many websites to look and feel the same.


---


## Getting Started
Using the Better Boilerplate has a few prerequisites and assumes a working knowledge of HTML, CSS, SCSS/SASS, BEM (Block, Element, Modifier) and Javascript.


### Prerequisites
The Better Boilerplate includes a build process powered by gulp and so requires some software to be installed.

#### NPM
NPM (Node Package Manager) is required to be able to run gulp tasks and compile the SCSS. Install: https://www.npmjs.com/

#### SASS/SCSS
The Better Boilerplate is written in SCSS which is part of SASS (Syntactically Awesome Style Sheets) – SASS gives us access to features which are not readily available in vanilla CSS. Install: http://sass-lang.com/install

#### Gulp
The Better Boilerplate makes use of Gulp as a task runner to help streamline some of the build process. Install: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md


### Installing
Once you have downloaded the Better Boilerplate and included it in your project files you will need to install the required npm modules, to do this; navigate to the root directory of you project and run the following commands in terminal;

```
npm install
npm update
```

The first command will install the packages from npm and the second will make sure those packages are up-to-date.


### Gulp Tasks
The Better Boilerplate is making use of Gulp to automate much of the build process. You may wish to alter some of the settings in the gulpfile before beginning your project, such as the public or `/dist` directory or to add additional postCSS modules or tasks. To do this open the `gulpfile.js` found in the root directory of the Better Boilerplate and edit where necessary.

The gulpfile is broken down into multiple tasks which can be run individually or all at once, all commands are run from the root directory of the Better Boilerplate in terminal:

#### gulp
Running the `gulp` command will run through most of the tasks in the gulp file and will continually listen for changes in any of the source files while automatically compiling them into the `/dist` directory and producing SASS maps for use in devtools.

This task can run in the background while you are working and will automatically recompile the code as you make changes.

All of the other gulp tasks will only run once and then stop.

#### gulp rebuild
Running the `gulp rebuild` command will rebuild the entire project, it will start by emptying the `/dist` directories created by the boilerplate and then running through all of the build commands.

#### gulp styles
Running the `gulp styles` command will compile all of the css found in the src/styles directory into a single CSS file `main.css` found in `dist/css`. The gulp styles during compilation will also auto-vendor-prefix many CSS3 elements, adding automatic support without the need for prefixes within your code.

#### gulp minify-styles
Running the `gulp minify-styles` command will do the same as the gulp styles command but will also rename and minify the compiled file (`main.min.css`) into the `dist/css` directory.

#### gulp purify-styles (experimental)
The `gulp purify-styles` command will read from your compiled and minified CSS file (`dist/css/main.min.css`) then look for all js, php and html files for the selectors found in CSS file the unused selectors will be removed. This new style sheet will then be compiled into the `/dist` directory with the filename `main.purified.css`.

This is marked as experimental as it can sometimes remove styles that are needed but it also has the ability to offer huge reductions in some CSS files.

#### gulp scripts-linter
Running the `gulp scripts-linter` command will analyse JS files in the project for potential errors.

#### gulp scripts
Running the `gulp scripts` command will compile the JS files from `src/js/bundled-scripts` and `main.js` to `dist/js` into a single minified and concatenated file `main.min.js`. The scripts command will also transpile ES6 should you need this.

#### gulp minify-scripts
Running the `gulp minify-scripts ` command will do the same as the gulp scripts command but will also rename and minify the compiled file (`main.min.js`) into the `dist/js` directory.

#### gulp single-scripts
Running the `gulp single-scripts` command will copy any files inside the `src/scripts/single-scripts` directory to `dist/js`. These files will be minified and moved but their filenames will remain the same.

#### gulp images
Running the `gulp images` command will copy and optimise all image inside the `src/images` directory into the `dist/images` directory. The compression settings used for the images can be adjusted inside the gulpfile.

#### gulp svg-images
Running the `gulp svg-images` command will optimise and SVG images found in the `src/images` directory to the `dist/images` directory.

#### gulp svg-sprite
Running the `gulp svg-sprite` command will read all of the SVG's from the `src/svgs` directory and compile them into a single SVG file (`sprite.svg`) in the `dist/images` directory. During compilation the SVGs will be optimised while removing all inline styles and comments.

#### gulp fonts
Running the gulp fonts command will copy any custom fonts placed inside the `src/fonts` directory to the `dist/fonts` directory.

#### gulp favicons
Running the gulp favicons command will copy any custom favicons placed inside the `src/favicons` directory to the `dist/favicons` directory.

#### gulp clean
Running the `gulp clean` command will remove the contents of the css and js directories inside of the `/dist` directory.

#### gulp clean-all
Running the `gulp clean-all` command will remove the entire contents of the `/dist` directory.


---


### File Structure
The boilerplate contains the entire directory structure needed for a frontend project and can be easily integrated into any project type.

The top level of the directory structure includes the files needed for the build process (`gulpfile.js`, `package.json` and `package-lock.json`) as well as two other files; the `README.md` file used to provide a description to the repository and the `.gitignore` file used to tell git which files not to push to the server.

The top level of the directory structure also includes a number of other directories;

#### gulp-images
This directory contains the icons used to provide notifications from gulp when the build passes or fails.

#### optional-scripts
The optional-scripts directory contains a number of useful scripts for creating elements like carousels, modals and select menus.

**These scripts should be copied into the bundled-scripts directory inside of the src/js/ when you want to include them.**

#### pattern-library
The pattern library contains two sub-directories;

* **html-patterns**
Many of the optional scripts require specific HTML in order to function correctly this directory contains those HTML patterns among many other common elements that you can copy and paste into your project. These files will tell you in the comment at the top if any settings or additional code is required for these modules to function correctly;

```
<!--

	Basic Skeleton HTML for creating an accordion
	- Requires the accompanying Javascript Pattern
	- Requires the $use-accordions setting to be set to true inside of src/styles/01-settings/_modules-and-widgets.scss

-->
```

* **javascript-patterns**
The Javascript patterns included in the project are simple re-usable components such as accordions, carousels and select menus. These files contain the basic javascript needed to function.

The Javascript patterns are written in jQuery as most of the time our projects are in WordPress and many WordPress plugins require jQuery to run anyway.

The patterns included in the Better Boilerplate should be copied and pasted into the `main.js` file inside the `src/js` directory.

#### src
The `/src` directory is where you will edit all of your CSS, Javascript, fonts, favicons and images. The directory structure inside the src directory is simple and fairly self explanatory;

* **favicons**
Favicons should be placed in the `src/favicons` directory.

* **fonts**
Any custom fonts should be placed in the `src/fonts` directory.

* **images**
Images should be placed in the /src/images directory. Images placed into this directory are automatically optimised for the web and are, therefore, reduced in size. The compression settings used for the images can be adjusted from the `gulpfile.js` found in the root directory of the Better Boilerplate.

* **scripts**
The scripts directory contains a main.js file and two directories. The files contained in the `src/scripts/bundled-scripts` directory and, also, the main.js file will be minified and then compiled into `dist/js/main.min.js`. Files inside the second directory (`src/scripts/single-scripts`) will be moved into the same directory (`dist/js`) but each as a separate file, this directory should be used for scripts which will not be needed on all pages.

* **styles**
The styles directory is broken down into multiple layers, this directory structure is influenced by the ITCSS architecture. The IT stands for Inverted Triangle at the base of the triangle global settings and styles are placed and each layer on top of this increases in specificity until the point of the triangle; where the utility and helper (the most specific) styles are. This when combined with BEM helps to tame CSS and provides simple naming conventions.

We will be looking at this directory structure in more detail when we're getting into using the SASS framework.

* **svgs**
Any SVG images placed inside of this directory will be optimised and compiled into a single SVG (`sprite.svg`) and placed inside the `dist/images` directory.


### TL;DR
* Install NPM, SASS and gulp.
* Run `npm install` and `npm update` in the root of the project.
* Run the `gulp` command to compile the project and listen for changes or additions to any of the files and directories.
* The entire directory structure of the project is already laid out for you, along with optional modules and pre-made patterns.


---


## The SASS Framework
Inside the styles source directory (`src/styles`) the sub-directories are named starting with a number. These numbers are used to keep the specificity and ITCSS layers in the correct order inside of an IDE or text-editor. From here we'll take a look through the directories and their contents, the documentation is somewhat detailed in parts so you can fully understand how it all works and fits together.


---


### 00-functions
The framework carries a few simple functions inside the `src/styles/00-functions` directory, mostly for calculations;

#### _adobe-letter-spacing.scss
This function will covert an adobe letter spacing value (between 0 - 1000) to a web usable value. The function requires you enter the letter spacing and the font-size and will return the letter spacing value in px.

```
letterspacing($adobe-letter-spacing, $font-size);

.my-class {
	letter-spacing: letterspacing(396, 48px);
}
```

#### _modular-scale.scss
The modular scale function will take a number, ratio and exponent to generate a new number. You can use a modular scale to generate many of the values used across a project, such as padding, margins and font-sizes.

```
modular-scale($base-font-size, $ratio, $exponent);

.my-class {
	font-size: modular-scale(16px, 1.618, 1);
}
```

The example given above would generate a font-size of `25.888px`. This is calculated by taking the font-size and multiplying it by the ratio and then by the exponent. If we were to change the exponent to 2 the calculation would work like this; `((16 * 1.618) * 1.618) = 41.886784px`.

* **Font Size Scales**
For big typography using the golden ratio for calculating font-sizes (1.618) using a base font-size of 16px the next few sizes up would be;
```
$font-size * $modular-scale ^ $exponent;

16 * 1.618 = 25.888px = 1.618em
25.888 * 1.618 = 41.887px = 2.618em
```

For smaller typography using the major-second ratio (1.125) again using a base font-size of 16px - the next few sizes up would be;
```
16 * 1.125 = 18px = 1.125em
18 * 1.125 = 20.25px = 1.266em
```

These scales can be used to create an harmonious hierarchy between all of the elements on the page.

More information about modular scale and how to apply it to web design can be found here;
http://www.modularscale.com/
https://alistapart.com/article/more-meaningful-typography
https://webdesign.tutsplus.com/articles/how-to-establish-a-modular-typographic-scale--webdesign-14927

#### _ratio.scss
The ratio function takes in a width and height and returns the ratio as a percentage.

```
ratio($width, $height);

.my-class {
	padding-bottom: ratio(16, 9);
}
```

The example above would give the `padding-bottom` a value of `56.25%` this can be used along with a `0` height to create elements which are responsive and kept in ratio.

#### _unit-calculations.scss
The unit calculations file holds a number of different functions all used for calculating units, converting from one unit to another.

```
strip-unit($number);
px-to-rem($number);
rem-to-px($number);
px-to-em($number);

.my-class {
	padding: px-to-rem(16);
}
```

These unit calculations are utilised later in some of the more complex mixins.

#### TL;DR
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


---


### 01-settings
All of the editable settings can be found in the `src/styles/01-settings` directory broken down into multiple files;

#### _base-options.scss
The base options includes a number of boolean variables all of which control which parts of the CSS Framework are compiled into the main.css and main.min.css allowing you to control the output depending on the requirements of the project. The following options are available in the file;

* **$use-breakpoint-identifier**
The breakpoint identifier is used to display the current viewport size on the screen supported by javascript. This is a really useful tool for responsive design, allowing you to quickly and easily identify the current size of the viewport. This requires a single line of code to be placed in the website;

```
<div class="breakpoint-identifier"></div>
```

* **$use-font-smoothing**
Using this variable will output CSS used font smoothing. This should be determined based on the fonts being used on the project.

* **$use-colour-classes**
Setting this variable to true; will generate a number of classes for setting the colour and background colour of elements. The list contained in `src/styles/05-objects/_colour-classes.scss` file contains a list of colours to generate these classes.

```
.color--alpha { color: #E2007C; }
.background--alpha { background-color: #E2007C; }
```

* **$use-wordpress-login-styles**
As previously mentioned most of the websites we build are written in WordPress. Setting this variable to true will output code to re-style the WordPress login page. The style of this page can be controlled from the `src/styles/10-wordpress/_wordpress-login.scss` file.

* **$use-html-validator**
The HTML validator can perform very simple validation by visually highlighting a number of simple mistakes such as; faulty and missing links, missing alt text, missing form elements and empty buttons and links.

* **$use-helper-*-styles**
There are a number of other variables inside this file, they're all used to turn on various helper styles. These will generate standard classes for visibility, display, position, text, padding and margin.

#### _colours.scss
There are a number of colour based variables found in the `src/styles/01-settings/_colours.scss` file which can be edited and added to where appropriate.

* **Phonetic Colours**
Using the phonetic alphabet avoids naming a colour such as color–pink as this could change as a website or app develops (or clients change their minds).

* **Common Colours**
The common colours section includes a few variables which are often used such as; `$color–warning` (yellow), `$color–error` (red) and `$color–success` (green). These colours can be utilised in notifications, warnings and errors if needed.

* **Social Colours**
The social colours section of the file has a small collection of brand colours belonging to the most popular social networks.

* **Reference Colours**
The reference colours section of the file contains a few variables for controlling basic elements in the project.

#### _fonts-and-text.scss
The fonts and text file contains all variables relating to font size, spacing and face.

* **$font-family-alpha**
The font-family alpha variable is used to set the main font-family for the website and accepts a full font stack as a value;

```
$font-family-alpha: 'Open Sans', sans-serif;
```

* **$font-family-bravo**
The font-family bravo variable is used to set the secondary font-family for the website and accepts a full font stack as a value;

```
$font-family-bravo: 'Libre Baskerville', serif;
```

* **$modular-scale and $modular-scale-two**
These ratios can be used to generate padding, margins, font-sizes and any other numeric calculation if desired to create a rhythm that carries through out the entire app or website.

* **$base-font-size**
The base font-size is used as the default font size on the body and is used to calculate other values used in the site.

* **$base-line-height**
 The base line-height is used as the default line-height though out the site but it is also used to calculate other variables such as the spacing units used for margin and padding values.

* **$base-spacing-unit and $half-spacing-unit**
These two variables are used to generate consistent values to be used for padding and spacing throughout the entire app or website. By default these are calculated using the value of the modular scale and base font-size variables.

#### _global-properties.scss
The global properties file contains a few variables for properties which should be consistent throughout the app or website such as border-radius and shadows. These variables should be changed for each project and can be added to with any other properties to be set globally.

#### _modules-and-widgets.scss
The modules and widgets file contains a number of boolean variables for turning on and off the optional modules and widgets found in the pattern library and more. For more information about how to use these modules see the optional modules documentation below.

#### TL;DR
This layer contains all of the variables needed to turn settings on and off as well as setting global values for commonly used properties.


---


### 02-tools
The tools directory contains all of the mixins and other tools included in the Better Boilerplate. New mixins and tools can be added by creating new files inside the `src/styles/02-tools` directory. Since mixins don't output any code until they're used there is no harm in them being there and not being utilised, the other tools included are turned on and off using boolean variables in the settings directory. The tools and mixins included are;

#### _animated-background-gradient.scss
The animated background gradient mixin takes a number of values all of which are optional. The default settings for the animation are set to apply a shimmer effect using semi-transparent whites animating the gradient over 30 seconds and repeating the animation indefinitely.

```
// Default Settings
background-gradient-animation(
	$colour-one: rgba(255,255,255,0.2),
	$colour-two: rgba(255,255,255,0.8),
	$colour-three: rgba(255,255,255,0.2),
	$angle: 135deg,
	$length: 30s,
	$iteration: infinite
);

// Useage
.my-class {
	@include background-gradient-animation(#E2007C, #11A0AF, #E7CA00);
}
```

#### _clearfix.scss
The clear fix is a silent class used to fix floated layouts. The class should be extended where needed.

```
.my-class {
	@extend %clearfix;
}
```

#### _flex-fallback.scss
The flex fallback mixin utilises the CSS `@supports` property to provide layouts using inline-block progressively enhanced with flexbox where supported. The mixin takes in the same values as the CSS flex property; flex-grow, flex-shrink and flex-basis.

```
.my-class {
	@include flex(1, 0, 25%);
}
```

#### _fluid-type.scss
The fluid type mixin is used to create responsive typography using just CSS. The mixin will also provide a floor and ceiling for the font-size allowing us control the font-size at any viewport size. The mixin uses a linear equation, to calculate slope-intercept form; **y = mx + b**. Using this equation along with CSS `calc()` and viewport units we can have the browser calculate the font-size based on the viewports width.

The mixin takes four value the minimum and maximum font-size and the start and end breakpoint sizes.

```
fluid-type($min-font-size, $max-font-size, $break-start, $break-end);

// usage
.my-class {
	@include fluid-type(24px, 96px, 720px, 1680px);
}

```

The equation will only be used inside the breakpoints specified when using the mixin allowing us to provide a floor and a ceiling. So for the example above the font-size will be `24px` when the viewport is below `720px` in width then grow linearly to `96px` until the viewport width is `1680px` where the font-size will be capped at `96px`.

#### _font-size.scss
The font-size mixin produces a font-size in rem, with a pixel fallback but also calculates the line-height. The mixin takes three values two of which are optional;

```
font-size($font-size, $line-height: bool, $important: bool)

//useage
.my-class {
	@include font-size(18px, false, true); // apply the important flag but not the line-height
}
```

#### _headings.scss
The heading mixin can be used to style all 6 heading in one go, this mixin is already utilised in the `src/styles/04-base/_headings.scss`. This mixin should be used sparingly.

```
@include headings(1, 6) {
	font-family: $font-family-bravo;
}
```

#### _html-validator.scss
This tool – when turned on via the settings – will provide basic validation by visually highlighting potentially problematic elements.

#### _ie-media-query.scss
The IE mixin provides an Internet Explorer only mixin by checking for properties only supported by Internet Explorer.

```
@include ie {...}
```

#### _min-width-media.scss
The minimum width media query mixin provides a simple way to generate the syntax needed to create a mid-width media query;

```
.my-class {
	width: 100%;

	@include min-width(1200px) {
		width: 65%;
	}

}
```

#### _retina-images.scss
The retina images mix can be used to produce the CSS needed to target screens with higher pixel ratios and provide the correct image. The mixin requires you create two versions of each image or icon.

The variables inside the file allow you to change the; image-path, fallback-extension and retina-suffix.

Using the default values the following files will be required in a folder
named images located one folder up (`../images`) from the compiled css in the file tree;

```
@include background-retina-image('logo');
```

#### _visually-hidden.scss
The visually hidden mixin can be used to hide content off the screen without resorting to `display:none` which would hide the content from screen readers.

```
.my-class {
	@inlcude visually-hidden;
}
```

#### _word-wrap.scss
The word-wrap silent class should be extended to provide word-wrapping for elements which overflow their containing boxes (usually links).

```
.my-class {
	@extend %word-wrap;
}
```

#### TL;DR:
The tools layer contains a number of mixins and other tools to help with a multitude of CSS requirements on any given project.


---


### 03-generic
The generic layer of the framework contains a CSS reset used to normalise the default CSS in all browsers. The Better Boilerplate uses `sanitize.css` (https://jonathantneal.github.io/sanitize.css/) for this reset layer.

#### TL;DR
This is the reset layer.


---


### 04-base
The base layer of the framework is for the styling of common elements without the use of classnames, these are very generic and far reaching styles affecting all instances of any given element. The files contained in `src/styles/04-base` can be added to and should be edited to fit the styles of the project at hand.

#### _blockquote.scss
This file contains the basic styles for the `blockquote` element.

#### _definition-list.scss
This file contains the basic styles for the `dl`, `dt` and `dd` elements.

#### _fonts.scss
This file is empty by default but is where you would put any definitions for custom fonts used in the project.

#### _forms.scss
The forms file in the base layer contains styles to normalise form styling across the project, these can be edited as needed or added where needed.

#### _global.scss
The global file contains the styling of basic elements and also sets the `box-sizing` for the entire document (setting the padding and border to the inside of the box model). The fonts and text settings from the settings layer are applied to the document here.

#### _headings.scss
This file contains the styles and font-sizes to be applied to the heading elements. The default settings use the modular scale mixin combined with the fluid type mixin to generate the font-sizes automatically. These should be updated or changes to fit each project.

#### _horizontal-rule.scss
This file contains the default styles for the horizontal rule element, applying the variable `$color-border` as the colour of the rule.

#### _images.scss
This file contains styles for making images fluid and responsive by default unless an inline width or height attribute is specified on the image inline.

#### _rhythm.scss
The rhythm file includes styles to ensure a vertical rhythm between all elements, ensuring the hierarchy of the data is visually clear.

#### _tables.scss
This file contains some default styles to add bordered and padding to all tables in the project.

#### TL;DR
* The base layer contains the styles for all of your elements in their unclassed state.
* Additional unclassed elements should be added to this layer.


---


### 05-objects
The objects layer of the framework contains a number of classed elements. Along with the components layer most of your time will be spent here. This is where you will add new files for the objects in your project. The files included are as follows;

#### _breakpoint-identifier.scss
The styles required for the breakpoint identifier are contained in this file behind the boolean variable sound in the settings file.

#### _buttons.scss
The buttons file is empty by default but should be used to create the styles needed for buttons.

#### _colour-classes.scss
This file contains a SASS list containing names and a colour references, this list is used to output both a colour and a background colour class. To generate additional classes you can simply add to the list;

```
$color-list: (
	...
	prince #4B384C
);
```

This will output two classes;

```
.color--prince {
	color: #4B384C;
}

.background--prince {
	background-color: #4B384C;
}
```

You can also use colours set previously as variables in the settings directory.

#### _containers.scss
The containers file provides a number of classes to provide centred content given a maximum width. The default values use the modular scale and base-font-size variables to generate the widths using the modular scale mixin. The container sizes are;

```
$base-font-size * $modular-scale ^ $exponent = $container-width

16 * 1.618 ^ 10 = 1967.456574432px
16 * 1.618 ^ 9 = 1215.980577523px
16 * 1.618 ^ 8 = 751.533113426px
16 * 1.618 ^ 7 = 464.482764787px
16 * 1.618 ^ 6 = 287.072166123px
```

The corresponding classes are;

```
.content-container--largest
.content-container--large
.content-container
.content-container--small
..content-container--smallest
```

#### _flex-vertical.scss
The flex vertical object is used with items aligned horizontally in a row. Flexbox by default will match the heights of items on the same row so using this we can push the footer's of the content to the bottom matching their vertical positions when the content lengths are uneven.

```
<div class="flex-vertical">

	<div class="flex-vertical__content">
		...
	</div>

  <div class="flex-vertical__footer">
		...
	</div>

</div>
```

#### _generic.scss
The generic file of the objects layer is for creating simple styles to be reused throughout the project. The one class inside the folder is used to apply a border using the colour variable set earlier to any object. This style can be removed and others added where needed.

#### _horizontal-rule.scss
The horizontal rule file in the objects layer is a classed version of the `<hr>`. Allowing you to set maximum widths or different colours. The defaults include using the alpha colour from the settings for the colour of the rule as well as setting maximum widths for 40% and 80% and the ability to centre the element.

```
.hr--alpha
.hr--40
.hr--80
.hr--center
```

#### _images.scss
This file contains basic classes for image positioning, appearance and size. All of the classes are prefixed with the `.image` class with a modifier class and are fairly self explanatory;

```
.image--right
.image--left
.image--center
.image--circular
.image--250
```

#### _media.scss
This file contains the media object which is turned on and off using the `$use-media-object` variable from the setting layer.

```
<div class="media">

	<div class="media__img">
		...
	</div>

	<div calss="media__body">
		...
	</div>

</div>
```

#### _menu-icon.scss
The menu icon file contains the code needed to create an animated hamburger icon. This file requires the `$use-animated-menu-icon` be set to true in the settings layer. The file contains a number of variables for controlling the size and colours of the icon.

```
$menu-icon-width: 2em;
$menu-icon-height: $menu-icon-width * 0.75;
$menu-icon-color: $color-border;
$menu-icon-color--active: $color-alpha;
```

The markup required and accompanying javascript can be found in the pattern library.

#### _responsive-map.scss
This file contains the styles required to create a responsive map. The `padding-bottom` value should be changed to fit the aspect ratio needed for the project at hand. The file requires the `$use-responsive-maps` variable to be set to true from the settings layer.

```
<div class="map-container">
	<iframe ...></iframe>
</div>
```

#### _responsive-video.scss
The responsive video file contains the code need to  create a responsive iframe at a ratio of 16:9. The file requires the `$use-responsive-video` variable to be set to true from the settings layer.

```
<div class="video-container">
	<iframe ...></iframe>
</div>
```

#### _svg.scss
This file contains the basic styles for svgs. All of the classes are prefixed with the `.svg` class with a modifier class. The built in styles add colours to the social icons included in the `src/svgs` directory.

#### _tables.scss
The tables file contains a basic style for table headers and contains two variables for controlling the colours used. It requires the use of the class `table`. New tables styles can be added to this file to further style tables to the projects requirements.

#### _text.scss
The text file contains a class for word wrapping as well as some classes for font-sizes. You can add additional styles as needed.

```
.word-wrap
.text--16
.text--20
```

#### TL;DR
The objects layer contains a number of pre-defined objects which can be turned on and off from the settings layer. You will write the majority of your code into this and the components layer.


---


### 06-components
The components layer of the framework includes a number of pre-built components ready to use, these styles should be changed for each project but provide a good base. In this layer you will create new files for the components required for your project and edit the included components to fit the project at hand.

#### _accordion.scss
The accordions file contains the styles for building a simple accordion. Accordions are commonly used for content such as FAQ's. In order to output the accordion code the `$use-accordions` variable from the settings layer must be set to true. The accompanying HTML and JS can be found in the pattern library.

#### _carousel.scss
This file contains styles for building a simple carousel. Carousels are commonly used for hero areas and other content. In order to output the carousel code the `$use-carousel` variable from the settings layer must be set to true. The accompanying HTML and JS can be found in the pattern library and the required `siema.min.js` can be found in the `optional-scripts/carousel` directory. The carousel has a few variations for maximum versatility.

#### _custom-radio-and-checkboxes.scss
The custom radio buttons and checkboxes file contains the styles required to re-style radio buttons and checkboxes. These styles require a specific markup in order to work properly, this is due to the CSS trick used to style them, this markup can be found in the pattern library. To use these styles the `$use-custom-radio-and-checkboxes` variable to be set to true from the settings layer. The file contains a few variables for making simple styling changes to the elements;

```
$input-color: $color-alpha;
$input-size: 1.5em;
$spacing-unit: 1rem;
```

#### _grid.scss
The grids file includes the markup used to produce a progressively enhanced grid the markup uses CSS `@supports` to detect support for the different `display` property values, starting with `inline-block` enhanced with `flex` and then finally `grid`. The widths included in the grid are halves, thirds and quarters. Any other widths required should be written yourself when needed. In order to output the code the for grid the `$use-base-grid` variable must be set to true from the settings layer. The file contains two variables for controlling the breakpoints for the grid.

```
$base-grid-breakpoint-one: $base-spacing-unit * 20;
$base-grid-breakpoint-two: $base-spacing-unit * 40;
```

The markup for the grid can be found in the pattern-library.

#### _notice.scss
This file contains the CSS required to style the notice component. This component can be used to provide notices to the user of JavaScript being turned off or the use of an outdated browser. Styles in this file could also be extended to create messages fixed to the browser. You could also add a close button and some JavaScript to hide the messages when clicked. The basic markup can be found in the pattern library.

#### _overlay.scss
The overlay file contains the code used to create the overlay object and position the close button. The file requires the `$use-overlay` variable to be set to true from the settings layer. The file contains two variables applying simple changes to the style.

```
$overlay-background-color: rgba($color-base-text, 0.9);
$overlay-is-animated: true;
```

The markup required and accompanying javascript can be found in the pattern library.

#### _page-layout.scss
The page layouts file has the styles required for simple two and three column layouts. The layouts are styled using flexbox but fallback to using inline-block where not supported. In order for the styles to be output the `$use-page-layout` variable must be set to true from the settings layer. The markup required for this component can be found in the pattern library.

#### TL;DR
* The components layer contains pre-built components which can be output using variables in the settings layer, any accompanying HTML and/or JS needed can found in the pattern library or the optional scripts directory.
* Additional components should be built into this layer.


---


### 07-widgets
The widgets layer of the framework carries styles from external sources usually to support a plugin of some kind.

#### _featherlight.scss
Featherlight is jQuery lightbox, the plugin requires a style sheet which has been included in this layer. In order to output the code the `$use-featherlight` variable from the settings layer must be set to true. The markup required and addition JS files can be found in the pattern library and optional scrips directories. For more information about featherlight see the documentation here; https://github.com/noelboss/featherlight/#useage

#### _featherlight-gallery.scss
In order to use the gallery extension for featherlight an additional script and stylesheet is required. The gallery has it's own variable - `$use-featherlight-gallery` in the settings layer.

#### _nice-select.scss
Nice select is a jQuery plugin which can be used to provide cross browser and nicer styling for select menus. The file contains a number of variables for applying quick changes to the design. In order to output the CSS required for this plugin the `$use-nice-select` variable need to be set to true in the settings layer. More information about nice select can be found here; https://github.com/hernansartorio/jquery-nice-select#usage

#### TL;DR
The widgets layer contains styles for external plugins.


---


### 08-overrides
The overrides layer of the framework contains the helper classes broken down into multiple files for different property types and the shame file used for quick and dirty fixes.

#### _helper-margin.scss
The margin help classes utilise the `$base-spacing-unit` to generate classes used to add margins to elements. These styles are outputted using the `$use-helper-margin-styles` variable from the settings layer. There are three variations of the margin classes; none, normal and double all with modifier classes for; top, right bottom left, sides and ends.

```
.no-margin
.no-margin--top
.no-margin--right
.no-margin--bottom
.no-margin--left
.no-margin--sides
.no-margin--ends

.margin
.margin--top
.margin--right
.margin--bottom
.margin--left
.margin--sides
.margin--ends

.margin-double
.margin-double--top
.margin-double--right
.margin-double--bottom
.margin-double--left
.margin-double--sides
.margin-double--ends
```

#### _helper-padding.scss
The padding help classes utilise the `$base-spacing-unit` to generate classes used to add padding to elements. These styles are outputted using the `$use-helper-padding-styles` variable from the settings layer. There are three variations of the margin classes the same as the margin.

```
.no-padding
.no-padding--top
.no-padding--right
.no-padding--bottom
.no-padding--left
.no-padding--sides
.no-padding--ends

.padding
.padding--top
.padding--right
.padding--bottom
.padding--left
.padding--sides
.padding--ends

.padding-double
.padding-double--top
.padding-double--right
.padding-double--bottom
.padding-double--left
.padding-double--sides
.padding-double--ends
```

#### _helper-position.scss
The position classes are output using the `$use-helper-position-styles` variable. The available classes are;

```
.position--relative
.position--absolute
.position--static
.position--fixed
```

#### _helper-text.scss
The text classes are output using the `$use-helper-text-styles` variable there are classes for text alignment, transformations and weight.

```
.text--left
.text--center
.text--right
.text--capitalized
.text--small-caps
.text--uppercase
.text--regular
.text--semi-bold
.text--bold
```

#### _helper-visibility.scss
The visibility classes are output using the `$use-helper-visibility-styles` variable from the settings layer. These classes can be used to show and hide elements and can be toggled with Javascript if needed.

```
.is-hidden
.is-visible
.is-visuallyhidden
```

#### _shame.scss
The shame file should be used for quick and dirty fixes that should be fixed later given more time on the project. You are essentially admitting this is bad code but it works and it will do for now. More information about this can be found here; https://csswizardry.com/2013/04/shame-css/

#### TL;DR
The overrides layer contains helper classes and the shame file.


---


### 09-animations
The animations layer of the framework is used to hold any CSS animations used in the project.

#### _background-gradient.scss
There is one file included which is used by the animated-background-gradient mixin.

#### TL;DR
The animations layer of the framework.


---


### 10-wordpress
The WordPress layer of the framework is used for housing the WordPress specific styles for the project, since we often use a parent theme for WordPress the only styles that change from project to project is the login screen.

#### _wordpress-login.scss
This file requires the `$use-wordpress-login-styles` variable to be set to true in the settings layer. The file includes a number of variables for quickly styling the login screen to match the clients branding.

#### TL;DR
Contains styles for the WordPress login screen


---


### main.scss
The main.scss file is where the entire project is stitched together. Consisting only of `@import` rules it is responsible for the order in which the code is output into the single main stylesheet when compiled.


---


### File Sizes
The file size of the CSS framework when compiled, minified and gzipped is ~`3kb` with none of the settings turned on and only ~`7kb` with them all turned on.


---


## Browser Polyfills
The Better Boilerplate makes use of HTML5 elements and some of the newer CSS3 elements available to designers and developers, to offer the best support we can for older browsers. The following files are included in the `src/scripts/single-scripts/` directory and will need including in the header of your website.

### html5-shiv
The html5 shiv allows older versions of IE to support html5 elements (`<article>`, `<nav>`, `<header>` etc.). As these are only not supported by IE8 and earlier the following code is required to only use the polyfill when needed.

```
<!--[if lte IE 8]>
    <script src="/dist/js/html5-shiv.js"></script>
<![endif]-->
```

### media-polyfill
The media-polyfill is used to allow older browsers (IE8 and earlier) to have support for media queries, this is particularly useful when you need to support older browsers since we are building in a mobile first manner.

```
<!--[if lte IE 8]>
    <script src="/dist/js/media-polyfill.js"></script>
<![endif]-->
```

### placeholder-polyfill
The placeholder-polyfill will be used to add support for placeholders in IE9 and before;

```
<!--[if lte IE 9]>
    <script src="/dist/js/placeholder-polyfill.js"></script>
<![endif]-->
```