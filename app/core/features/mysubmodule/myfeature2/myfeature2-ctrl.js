'use strict';

/*
    Controller for the feature myfeature2
*/
jd.factory.newController('app.core.mysubmodule.myfeature2.Myfeature2Ctrl', ['jedi.dialogs.AlertHelper', function (alertHelper) {

    //#region Service initialize
    var service;// = ... e.g: restangular instance
    //#endregion

    //#region View/Model initialize
    var vm = this;
    vm.myfeature2Model = {};
    //#endregion

    //#region Events binds
    vm.method1 = method1;
    vm.method2 = method2;
    //#endregion

    //#region Load controller
    method2();
    //#endregion

    //#region Events definitions
    function method1() {
        alertHelper.addInfo('Method1 called');
    }

    function method2() {
        Materialize.toast('Method2 called', 4000);
    }
    //#endregion

}]);