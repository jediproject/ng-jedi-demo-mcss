"use strict";

// added to avoid concat app for all paths started with app
require.jsExtRegExp = /^app\/|^\/|:|\?|\.js$/;

require.config({
    waitSeconds: 15,

    baseUrl: "",

    paths: {
        // ## base
        'app': 'app/app',
        'version': 'version.json',

        // ## ng-jedi components
        'ng-jedi-utilities': 'assets/libs/ng-jedi-utilities/utilities',
        'ng-jedi-i18n': 'assets/libs/ng-jedi-i18n/i18n',
        'ng-jedi-dialogs': 'assets/libs/ng-jedi-dialogs/dialogs',
        'ng-jedi-factory': 'assets/libs/ng-jedi-factory/factory',
        'jdver': 'assets/libs/ng-jedi-factory/version',
        'ng-jedi-loading': 'assets/libs/ng-jedi-loading/loading',
        'ng-jedi-layout': 'assets/libs/ng-jedi-layout/layout',
        'ng-jedi-layout-impl': 'assets/libs/ng-jedi-layout/layout-impl-mcss',
        'ng-jedi-table': 'assets/libs/ng-jedi-table/table',
        'ng-jedi-activities': 'assets/libs/ng-jedi-activities/activities',
        'ng-jedi-security': 'assets/libs/ng-jedi-security/security',
        'ng-jedi-breadcrumb': 'assets/libs/ng-jedi-breadcrumb/breadcrumb',

        // ## common components
        'app-common': 'app/common/common-app',
        'app-common-env': 'app/common/env/common-env.json',
        'app-common-components': 'app/common/components/components',
        'app-common-components-exceptions': 'app/common/components/exceptions/exceptions',

        //## 3rd party angular scripts
        'angular': 'assets/libs/angular/angular',
        'angular-animate': 'assets/libs/angular-animate/angular-animate',
        'cryptojslib': 'assets/libs/cryptojslib/md5',
        'angular-cookie': 'assets/libs/angular-cookie/angular-cookie',
        'angular-file-upload': 'assets/libs/angular-file-upload-interceptor/angular-file-upload-interceptor',
        'angular-dynamic-locale': 'assets/libs/angular-dynamic-locale/tmhDynamicLocale',
        'angular-loading-bar': 'assets/libs/angular-loading-bar/loading-bar',
        'angular-ngMask': 'assets/libs/angular-ngMask-alias/ngMask',
        'angular-route': 'assets/libs/angular-route/angular-route',
        'angularAMD': 'assets/libs/angularAMD/angularAMD',
        'ng-currency-mask': 'assets/libs/ng-currency-mask/ng-currency-mask',
        'restangular': 'assets/libs/restangular/restangular',
        'angular-indexed-db': 'assets/libs/angular-indexed-db/angular-indexed-db',
        'angular-materialize': 'assets/libs/angular-materialize/angular-materialize',

        //## 3rd party non angular scripts
        'materialize': 'assets/libs/Materialize/materialize',
        'hammerjs': 'assets/libs/hammerjs/hammer',
        'file-saver-saveas-js': 'assets/libs/file-saver-saveas-js/FileSaver',
        'jquery': 'assets/libs/jquery/jquery',
        'lodash': 'assets/libs/lodash/lodash',
        'moment': 'assets/libs/moment/moment',
        'slimscroll': 'assets/libs/slimscroll/jquery.slimscroll',
        'json': 'assets/libs/requirejs-plugins/json',
        'text': 'assets/libs/requirejs-plugins/text'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        "moment-locale": ["moment"],
        "jquery": {
            exports: "$"
        },
        //"slimscroll": ["jquery"],
        "materialize": ["jquery", 'hammerjs'],
        "angular": {
            //deps: ["jquery"/*, 'materialize'*/],
            exports: "angular"
        },
        "angular-route": ["angular"],
        "angular-animate": ["angular"],
        "angular-i18n": ["angular"],
        "angularAMD": ["angular"],
        "ng-currency-mask": ["angular"],
        "angular-ngMask": ["angular"],
        "angular-file-upload": ["angular"],
        "restangular": ["lodash", "angular"],
        "angular-loading-bar": ["angular"],
        'angular-dynamic-locale': ["angular"],
        'angular-indexed-db': ['angular'],
        'angular-materialize': ['angular'/*, 'materialize'*/]
    },

    // kick start application
    deps: ["app"]
});