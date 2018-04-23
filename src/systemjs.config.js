/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        // 'app':                        'app', // 'dist',
        '@angular': 'node_modules/@angular',
        // 'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs',
        'tslib': 'node_modules/tslib'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'ts': {
            defaultExtension: 'js',
            meta: {
                './*.js': {
                    loader: 'systemjs-angular-loader.js'
                }
            }
        },
        'rxjs': {defaultExtension: 'js'},
        'tslib':                       { main: 'tslib.js', defaultExtension: 'js' },
        // 'tslib': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'}
    };
    var ngPackageNames = [
        'animations',
        'common',
        'common/http',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
        'material',
        'cdk',
        'cdk/bidi',
        'cdk/coercion',
        'cdk/platform',
        'cdk/keycodes',
        'cdk/a11y',
        'cdk/overlay',
        'cdk/portal',
        'cdk/collections',
        'cdk/observers',
        'cdk/accordion',
        'cdk/scrolling',
        'cdk/layout',
        'cdk/table',
        'cdk/stepper'


    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        var p = '';
        var pkgRes = pkgName;

        if (pkgName.indexOf('/') !== -1) {
            p = '../bundles/';
            pkgRes = pkgRes.replace(new RegExp(/\//g), "-");
        }
        else
            p = 'bundles/';

        packages['@angular/' + pkgName] = {main: p + pkgRes + '.umd.js', defaultExtension: 'js'};
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var ext = {
        // '@angular/animations': '@angular/animations/bundles/animations.umd.js',
        // '@angular/animations/browser': '@angular/animations/bundles/animations-browser.umd.js',
        // '@angular/platform-browser/animations': '@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        '@angular/animations': {main: 'bundles/animations.umd.js', defaultExtension: 'js'},
        '@angular/platform-browser/animations': {
            main: '../bundles/platform-browser-animations.umd.js',
            defaultExtension: 'js'
        },
        '@angular/animations/browser': {main: '../bundles/animations-browser.umd.js', defaultExtension: 'js'}
    };

    for (var attrname in ext) {
        packages[attrname] = ext[attrname];
    }

    // packages['@angular/platform-browser/animations'] = 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js';

    var config = {
        transpiler: false,
        map: map,
        packages: packages
    };
    System.config(config);
})(this);