'use strict';

define([
    //## environment settings
    'json!app-common-env',

    //## Angular modules
    'angularAMD',
    'angular-route',

    //## Commons components
    'app-common'
], function (envSettings, angularAMD) {

    var $routeProviderReference;

    var app = angular.module("app", [
        //## Angular modules
        'ngRoute',

        //## Commons
        'app.common',
        'jedi.utilities'
    ]);

    // store envSettings as a constant
    app.constant('envSettings', envSettings);

    app.config(['$routeProvider', '$httpProvider', 'jedi.security.SecurityServiceProvider',
        'RestangularProvider', 'ngMaskConfig', 'jedi.utilities.UtilitiesProvider', 'jedi.i18n.LocalizeConfig', 'jedi.layout.LayoutConfig', function ($routeProvider, $httpProvider, authServiceProvider, RestangularProvider,  ngMaskConfig, Utilities, LocalizeConfig, LayoutConfig) {
        var $log = angular.injector(['ng']).get('$log');

        LayoutConfig.defaultUiImpl = 'materialize';

        // store local $routeProviderReference to be used during run, if it work with dynamic route mapping
        $routeProviderReference = $routeProvider;

        // configure default alias to the ngMask (cpf, cnpj, tel, etc)
        ngMaskConfig.alias = Utilities.ngMaskDefaultAlias;

        // configure default headers to work with CORS
        Utilities.enableCors($httpProvider);

        // configure Restangular
        Utilities.configureRestangular(RestangularProvider);

        // configure language
        LocalizeConfig.defaultLanguage = 'en';

        // configure authService
        authServiceProvider.config({
            authUrlBase: envSettings.authUrlBase,
            storageKey: 'authData',
            signInUrl: '/auth',
            signOutUrl: '/auth/signout',
            onCreateIdentity: function (response, identity) {
                // complements for a identify
                //identity.name = response.name;
                //identity.email = response.email;
                //identity.cpf = response.cpf;
                return identity;
            }
        });
    }]);

    app.run(['$http', '$route', '$rootScope', '$location', 'jedi.dialogs.AlertHelper', '$timeout', '$injector', '$log', 'jedi.i18n.Localize', '$templateCache', function ($http, $route, $rootScope, $location, alertHelper, $timeout, $injector, $log, localize, $templateCache) {
        $log.info('Configure i18n');
        localize.addResource('app/common/i18n/resources_{lang}.json');

        $log.info('Initializing app context.');

        // store envSettings on rootScope
        $rootScope.envSettings = envSettings;

        // create a app context
        $rootScope.appContext = {
            defaultPageSize: 10
        };

        ////-------

        $log.info('Registry security events');

        function loadUserProfile(ev, identity) {
            // user authenticated
            $rootScope.appContext.identity = identity;

            $log.info('Load modules');

            // load app modules (e.g.: core, billing)
            jd.factory.loadModules(['core'], function (module) {
                // adiciona path para i18n do sistema
                localize.addResource('app/' + module + '/i18n/resources_{lang}.json');
            }, function () {
                // after load all modules and its dependencies, it can load routes

                $log.info('Load routes');

                $routeProviderReference
                    //#hook.yeoman.route# do not remove this line
                    .when('/core/mysubmodule/myfeature1', angularAMD.route({
                        breadcrumb: ['Core', 'My Submodule', 'My Feature 1'],
                        templateUrl: jd.factory.getFileVersion('app/core/features/mysubmodule/myfeature1/myfeature1.html'),
                        controllerUrl: jd.factory.getFileVersion('app/core/features/mysubmodule/myfeature1/myfeature1-ctrl.js')
                    })).
                    when('/core/mysubmodule/myfeature2', angularAMD.route({
                        breadcrumb: ['Core', 'My Submodule', 'My Feature 2'],
                        templateUrl: jd.factory.getFileVersion('app/core/features/mysubmodule/myfeature2/myfeature2.html'),
                        controllerUrl: jd.factory.getFileVersion('app/core/features/mysubmodule/myfeature2/myfeature2-ctrl.js')
                    }));
                
                $route.reload();
            });

            if ($location.$$path === '/common/auth/signin' || $location.$$path === '/common/auth/signup') {
                $location.path("/");
            }
        }

        function resetUserProfile(ev, data, status, config, cause) {
            // user unauthenticated
            $routeProviderReference
                .when("/common/auth/signin", angularAMD.route({
                    templateUrl: 'app/common/features/auth/signin/signin.html',
                    controllerUrl: jd.factory.getFileVersion('app/common/features/auth/signin/signin-ctrl.js')
                }))
                .when("/common/auth/signup", angularAMD.route({
                    templateUrl: 'app/common/features/auth/signup/signup.html',
                    controllerUrl: jd.factory.getFileVersion('app/common/features/auth/signup/signup-ctrl.js')
                }));

            $route.reload();

            $location.path('/common/auth/signin');
        }

        // authenticate events
        $rootScope.$on('jedi.security:login-success', loadUserProfile);
        $rootScope.$on('jedi.security:validation-success', loadUserProfile);

        // unauthenticate events
        $rootScope.$on('jedi.security:login-error', resetUserProfile);
        $rootScope.$on('jedi.security:session-expired', resetUserProfile);
        $rootScope.$on('jedi.security:validation-error', resetUserProfile);
        $rootScope.$on('jedi.security:logout-success', resetUserProfile);
        $rootScope.$on('jedi.security:logout-error', resetUserProfile);
        $rootScope.$on('jedi.security:invalid', resetUserProfile);
        ////-------
    }]);

    // AppCtrl: possui controles gerais da aplicação, como a parte de locale e também de deslogar
    app.controller("app.common.AppCtrl", ["jedi.i18n.Localize", 'jedi.security.SecurityService', '$log', function (localize, authService,  $log) {
        $log.info('Iniciando AppCtrl');
        
        var vm = this;

        vm.setLanguage = function (language) {
            localize.setLanguage(language);
        };

        vm.getLanguage = function () {
            return localize.getLanguage();
        };

        vm.signout = function () {
            authService.signOut();
        };
    }]);

    return angularAMD.bootstrap(app);
});