/////
//
// BETTER BOILERPLATE V2
// GULP FILE
// Author - Steven Roberts
//
/////

    // Require all plugins and dependencies
        const
            gulp           =    require('gulp'),
            sass           =    require('gulp-sass'),               // Compiles Sass
            postcss        =    require('gulp-postcss'),            // Use PostCSS Plugins
            notify         =    require('gulp-notify'),             // Notifier
            plumber        =    require('gulp-plumber'),            // Required for Notifications
            path           =    require('path'),                    // Required for Notifications
            sourcemaps     =    require('gulp-sourcemaps'),         // Generate Sourcemaps
            cleanCSS       =    require('gulp-clean-css'),          // Minify CSS
            rename         =    require("gulp-rename"),             // Rename Files
            autoprefixer   =    require('autoprefixer'),            // Autoprefixer
            purify         =    require('gulp-purifycss'),          // Purify CSS
            clean          =    require('gulp-clean'),              // Clean Directories
            gulpIgnore     =    require('gulp-ignore'),             // Ignore Files and Folders
            newer          =    require('gulp-newer'),              // Check to see if file has changed
            imagemin       =    require('gulp-imagemin'),           // Image Minification
            uglify         =    require('gulp-uglify-es').default,  // Minify JS
            svgmin         =    require('gulp-svgmin'),             // Minify SVG
            svgstore       =    require('gulp-svgstore'),           // SVG Sprite
            concat         =    require('gulp-concat'),             // Concatenate files
            jshint         =    require('gulp-jshint'),             // Javascript linter
            babel          =    require('gulp-babel')               // Include bable to compile ES6
        ;

    // Get project name from folder for notifications
        var projectName = /([^/]+$)/.exec(process.cwd())[0].toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        }).replace(/-/g, ' ');

/////
//
// CSS TASKS
//
/////

    // Define Post CSS Plugins
        var post_css_plugins = [
            autoprefixer({browsers: 'last 2 versions', supports: false})
        ];

    // Compile Styles Task
        gulp.task('styles', function(done) {

            gulp.src('src/styles/main.scss', {
                sourcemap: true
            }) // Read from this directory

            .pipe(plumber({errorHandler: function(err){ // Pipe in error messages
                notify.onError({
                    title:    projectName,
                    subtitle: "Styles Failed",
                    message:  "Error: <%= error.message %>",
                    "icon": path.join(__dirname + "/gulp-images/sass--failed.png")
                })(err);
                notify.emit('end');
            }}))

            .pipe(sass().on('error', sass.logError))

            .pipe(sourcemaps.init()) // Init Sourcemaps

            .pipe(postcss(post_css_plugins)) // Run Post CSS Plugins

            .pipe(sourcemaps.write('maps', { // Create Sourcemaps
                includeContent: false,
                sourceRoot: 'source'
            }))

            .pipe(gulp.dest('../dist/css')) // Spit out in '../dist/css'

            .pipe(notify({ // Pipe in success messages
                "title": projectName,
                "subtitle": "Styles Passed",
                "icon": path.join(__dirname + "/gulp-images/sass.png")
            }));

            done();

        });

    // Minify Styles
        gulp.task('minifyStyles', function(done) {
            gulp.src('src/styles/main.scss', {
                sourcemap: true
            }) // Read from this directory

            .pipe(plumber({errorHandler: function(err){ // Pipe in error messages
                notify.onError({
                    title:    projectName,
                    subtitle: "Styles Failed",
                    message:  "Error: <%= error.message %>",
                    "icon": path.join(__dirname + "/gulp-images/sass--failed.png")
                })(err);
                notify.emit('end');
            }}))

            .pipe(sass().on('error', sass.logError))

            .pipe(sourcemaps.init()) // Init Sourcemaps

            .pipe(postcss(post_css_plugins)) // Run Post CSS Plugins

            .pipe(cleanCSS()) // Minify CSS

            .pipe(rename('main.min.css')) // Rename to '.min.css'

            .pipe(sourcemaps.write('maps', { // Create Sourcemaps
                includeContent: false,
                sourceRoot: 'source'
            }))

            .pipe(gulp.dest('../dist/css')) // Spit out in '../dist/css'

            .pipe(notify({ // Pipe in success messages
                "title": projectName,
                "subtitle": "Styles Passed",
                "icon": path.join(__dirname + "/gulp-images/sass.png")
            }));

            done();

        });

    // Purify CSS ---EXPERIMENTAL---
        gulp.task('purifyStyles', function(done) {
            gulp.src('../dist/css/main.min.css') // Read from this file

            .pipe(plumber({errorHandler: function(err){ // Pipe in error messages
                notify.onError({
                    title:    projectName,
                    subtitle: "Purify Failed",
                    message:  "Error: <%= error.message %>",
                    "icon": path.join(__dirname + "/gulp-images/sass--failed.png")
                })(err);
                notify.emit('end');
            }}))

            .pipe(purify(['../dist/**/*.js', '../dist/**/*.html', '../dist/**/*.php', '*.php'])) // Read from these files and folders and remove unused CSS

            .pipe(cleanCSS()) // Minify CSS

            .pipe(rename('main.purified.css')) // Rename to '.purified.css'

            .pipe(gulp.dest('../dist/css')) // Spit out in '../dist/css'

            .pipe(notify({ // Pipe in success messages
                "title": projectName,
                "subtitle": "Purify Passed",
                "icon": path.join(__dirname + "/gulp-images/sass.png")
            }));

            done();

        });

/////
//
// JAVASCRIPT TASKS
//
/////

    // Lint Javascript
        gulp.task('scriptsLinter', function(done) {
            gulp.src('src/scripts/*.js') // Read from this directory
            .pipe(jshint()) // Lint JS
            .pipe(jshint.reporter('default'));

            done();
        });

    // Compile and Concatenate All Scripts into dist Directory
        gulp.task('scripts', function(done) {
            gulp.src(['src/scripts/bundled-scripts/*', 'src/scripts/*']) // Read from these directories

            .pipe(plumber({errorHandler: function(err){ // Pipe in error messages
                notify.onError({
                    title:    projectName,
                    subtitle: "Scripts Failed",
                    message:  "Error: <%= error.message %>",
                    "icon": path.join(__dirname + "/gulp-images/js--failed.png")
                })(err);
                notify.emit('end');
            }}))

            .pipe(babel({
                presets: ['env'],
                ignore: ['siema.min.js', 'svg4everybody.min.js']
            }))

            .pipe(concat('main.js')) // Concatenate JS files

            .pipe(gulp.dest('../dist/js')) // Spit out in '../dist/js'

            .pipe(notify({ // Pipe in success messages
                "title": projectName,
                "subtitle": "Scripts passed",
                "icon": path.join(__dirname + "/gulp-images/js.png")
            }));

            done();

        });

    // Compile and Concatenate All Scripts into dist Directory
        gulp.task('minifyScripts', function(done) {

            gulp.src(['src/scripts/bundled-scripts/*', 'src/scripts/*']) // Read from these directories

            .pipe(plumber({errorHandler: function(err){ // Pipe in error messages
                notify.onError({
                    title:    projectName,
                    subtitle: "Scripts Failed",
                    message:  "Error: <%= error.message %>",
                    "icon": path.join(__dirname + "/gulp-images/js--failed.png")
                })(err);
                notify.emit('end');
            }}))

            .pipe(babel({
                presets: ['env'],
                ignore: ['siema.min.js', 'svg4everybody.min.js']
            }))

            .pipe(concat('main.js')) // Concatenate JS files

            .pipe(rename({ suffix: '.min' })) // Rename to add '.min'
            .pipe(uglify()) // Minify JS

            .pipe(gulp.dest('../dist/js')) // Spit out in '../dist/js'

            .pipe(notify({ // Pipe in success messages
                "title": projectName,
                "subtitle": "Scripts passed",
                "icon": path.join(__dirname + "/gulp-images/js.png")
            }));

            done();

        });

    // Move and Minify Other Scripts
        gulp.task('singleScripts', function(done) {
            gulp.src(['src/scripts/single-scripts/*']) // Read from this directory
            .pipe(uglify()) // Minify JS
            .pipe(gulp.dest('../dist/js')) // Spit out in '../dist/js'

            done();
        });

/////
//
// IMAGE TASKS
//
/////

    // Compress and move images
        gulp.task('images', function(done) {

            var imageThumbs = '**/images/**/Thumbs.db'; // Image thumbnails to be ignored
            var svgs = '**/*.svg'; // SVGs to be ignored (causes an error with imagemin)

            gulp.src('src/images/**/*') // Read from this directory

            // .pipe(plumber({errorHandler: function(err){ // Pipe in error message
            //     notify.onError({
            //         title:    projectName,
            //         subtitle: "Images Failed",
            //         message:  "Error: <%= error.message %>",
            //         "icon": path.join(__dirname + "/gulp-images/images--failed.png")
            //     })(err);
            //     notify.emit('end');
            // }}))

            .pipe(gulpIgnore.exclude([imageThumbs, svgs])) // Ignore image thumbs and svgs

            .pipe(newer('../dist/images')) // Check file is newer

            .pipe(imagemin([
                imagemin.gifsicle({
                    interlaced: true
                }),
                imagemin.jpegtran({
                    progressive: true
                }),
                imagemin.optipng({
                    optimizationLevel: 5
                }),
            ])) // Optimise images

            .pipe(gulp.dest('../dist/images')) // Spit out in '../dist/images'

            // .pipe(notify({ // Pipe in success messages
            //     "title": projectName,
            //     "subtitle": "Images passed",
            //     "icon": path.join(__dirname + "/gulp-images/images.png")
            // }));

            done();

        });

    // Move SVGs inside the images folder
        gulp.task('svgImages', function(done) {

            gulp.src('src/images/**/*.svg') // Read from this directory

            // .pipe(svgmin({ // Minify SVGs
            //     plugins: [{
            //         removeDoctype: true // Remove DocType
            //     }, {
            //         removeComments: true // Remove Comments
            //     }, {
            //         cleanupNumericValues: {
            //             floatPrecision: 2 // Reduces file size
            //         }
            //     }, {
            //         removeStyleElement: false // Removes inline styles from SVGs
            //     }]
            // }))

            .pipe(gulp.dest('../dist/images')); // Spit out in '../dist/images'

            done();

        });

/////
//
// SVG TASKS
//
/////

    // Create SVG Sprite
        gulp.task('svgSprite', function(done) {
            gulp.src('src/svgs/**/*') // Read from this directory

            .pipe(plumber({errorHandler: function(err){ // Pipe in error message
                notify.onError({
                    title:    projectName,
                    subtitle: "SVG Failed",
                    message:  "Error: <%= error.message %>",
                    "icon": path.join(__dirname + "/gulp-images/svg--failed.png")
                })(err);
                notify.emit('end');
            }}))

            //.pipe(rename({prefix: 'svg-'})) // Prefix all names with 'svg-'

            .pipe(svgmin({ // Minify SVGs
                plugins: [{
                    cleanupAttrs: true
                }, {
                    removeDoctype: true
                }, {
                    removeXMLProcInst: true
                }, {
                    removeComments: true
                }, {
                    removeMetadata: true
                }, {
                    removeTitle: false
                }, {
                    removeDesc: true
                }, {
                    removeUselessDefs: true
                }, {
                    removeXMLNS: false
                }, {
                    removeEditorsNSData: true
                }, {
                    removeEmptyAttrs: true
                }, {
                    removeHiddenElems: true
                }, {
                    removeEmptyText: true
                }, {
                    removeEmptyContainers: true
                }, {
                    removeViewBox: false
                }, {
                    cleanupEnableBackground: true
                }, {
                    minifyStyles: true
                }, {
                    convertStyleToAttrs: true
                }, {
                    convertPathData: true
                }, {
                    convertTransform: true
                }, {
                    removeUnknownsAndDefaults: true
                }, {
                    removeNonInheritableGroupAttrs: true
                }, {
                    removeUselessStrokeAndFill: true
                }, {
                    removeUnusedNS: true
                }, {
                    cleanupIDs: false
                }, {
                    cleanupNumericValues: {
                        floatPrecision: 2 // Reduces file size
                    }
                }, {
                    cleanupListOfValues: false
                }, {
                    moveElemsAttrsToGroup: false
                }, {
                    moveGroupAttrsToElems: true
                }, {
                    collapseGroups: true
                }, {
                    removeRasterImages: true
                }, {
                    mergePaths: true
                }, {
                    convertShapeToPath: true
                }, {
                    sortAttrs: true
                }, {
                    removeDimensions: true
                }, {
                    removeAttrs: false
                }, {
                    removeElementsByAttr: true
                }, {
                    removeStyleElement: true
                }, {
                    removeScriptElement: true
                }]
            }))

            .pipe(svgstore()) // Inline SVG into one file

            .pipe(rename('sprite.svg')) // Create 'sprite.svg' from files

            .pipe(gulp.dest('../dist/images')) // Spit out in '../dist/images'

            .pipe(notify({ // Pipe in success message
                "title": projectName,
                "subtitle": "SVGs passed",
                "icon": path.join(__dirname + "/gulp-images/svg.png")
            }));

            done();

        });

/////
//
// FONTS AND FAVICONS TASKS
//
/////

    // Copy Fonts to Dist
        gulp.task('fonts', function(done) {

            gulp.src('src/fonts/**/*') // Read from this directory

            .pipe(plumber({errorHandler: function(err){ // Pipe in error message
                notify.onError({
                    title:    projectName,
                    subtitle: "Fonts Failed",
                    message:  "Error: <%= error.message %>",
                    "icon": path.join(__dirname + "/gulp-images/fonts--failed.png")
                })(err);
                notify.emit('end');
            }}))

            .pipe(gulp.dest('../dist/fonts')) // Spit out in '../dist/fonts'

            .pipe(notify({ // Pipe in success messages
                "title": projectName,
                "subtitle": "Fonts Passed",
                "icon": path.join(__dirname + "/gulp-images/fonts.png")
            }));

            done();

        });

    // Copy Favicons to Dist
        gulp.task('favicons', function(done) {

            gulp.src('src/favicons/**/*') // Read from this directory

            .pipe(gulp.dest('../dist/favicons')); // Spit out in '../dist/favicons'

            done();

        });

/////
//
// CLEAN TASKS
//
/////

    // Remove CSS and JS Directories
        gulp.task('cleanFiles', function(done) {
            gulp.src(['../dist/css', '../dist/js'], {read: false, allowEmpty: true}) // Find these folders
            .pipe(clean({force: true})); // Delete them
            done();
        });

    // Remove all Dist Directories
        gulp.task('cleanAllFiles', function(done){
            gulp.src(['../dist/css', '../dist/js', '../dist/images', '../dist/fonts', '../dist/favicons', '../dist/downloads'], {
                read: false,
                allowEmpty: true
            }) // Find these folders
            .pipe(clean({force: true})); // Delete them
            done();
        });

/////
//
// BUILD TASKS
//
/////

    // Watch Tasks
        function watchFiles() {

            // Watch .scss Files
            gulp.watch('src/styles/**/*', gulp.series('styles', 'minifyStyles'));

            // Watch .js Files
            gulp.watch('src/scripts/**/*', gulp.series('scriptsLinter', 'scripts', 'minifyScripts', 'singleScripts'));

            // Watch fonts
            gulp.watch('src/fonts/**/*', gulp.series('fonts'));

            // Watch favicons
            gulp.watch('src/favicons/**/*', gulp.series('favicons'));

            // Watch images
            gulp.watch('src/images/**/*', gulp.series('images', 'svgImages'));

            // Watch SVGs
            gulp.watch('src/svgs/**/*', gulp.series('svgSprite'));

        }

    // Create Default Task
        gulp.task('default', gulp.series('cleanFiles', gulp.parallel(
            'styles',
            'minifyStyles',
            'scriptsLinter',
            'scripts',
            'minifyScripts',
            'singleScripts',
            'fonts',
            'favicons',
            'images',
            'svgImages',
            'svgSprite'
        ), watchFiles));

    // Rebuild Task - Delete entire dist folder and rebuild
        gulp.task('rebuild', gulp.series('cleanAllFiles',
            gulp.parallel(
                'styles',
                'minifyStyles',
                'scriptsLinter',
                'scripts',
                'minifyScripts',
                'singleScripts',
                'fonts',
                'favicons',
                'images',
                'svgImages',
                'svgSprite'
            )
        ));