"use strict";

define(['ng-currency-mask',
        'angular-ngMask',
        'angular-file-upload',
        'app-common-components',
        'angular-materialize',
        'ng-jedi-i18n',
        'ng-jedi-dialogs',
        'ng-jedi-factory',
        'ng-jedi-loading',
        'ng-jedi-table',
        'ng-jedi-breadcrumb',
        'ng-jedi-layout',
        'ng-jedi-security',
        'ng-jedi-activities'], function () {

    angular.module("app.external.components", [ 'ngCurrencyMask',
                                                'ngMask',
                                                'angularFileUpload',
                                                'ui.materialize',
                                                'jedi.i18n',
                                                'jedi.dialogs',
                                                'jedi.factory',
                                                'jedi.loading',
                                                'jedi.table',
                                                'jedi.breadcrumb',
                                                'jedi.layout',
                                                'jedi.security',
                                                'jedi.activities' ]);

    angular.module("app.common", ['app.external.components', 'app.common.components']);

});