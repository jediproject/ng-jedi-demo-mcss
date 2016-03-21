'use strict';

/*
    Controller and modal for the feature Modalexample
*/
jd.factory.newModal('appCoreModalexample', 'app/core/features/modalexample/modalexample.html', 'app.core.modalexample.ModalexampleCtrl', ['jedi.dialogs.AlertHelper', ['param'], function (alertHelper, _param) {

    //#region Service initialize
    var service;// = ... e.g: restangular instance
    //#endregion

    //#region View/Model initialize
    var vm = this;
    vm.modalexampleModel = {param: _param};
    //#endregion

    //#region Events binds
    vm.method1 = method1;
    vm.method2 = method2;
    //#endregion

    //#region Load controller
    //method2();
    //#endregion

    //#region Events definitions
    function method1() {
        alertHelper.addInfo('Method1 chamado');
    }

    function method2() {
        Materialize.toast('Method2 chamado', 3000);
    }
    //#endregion

}]);