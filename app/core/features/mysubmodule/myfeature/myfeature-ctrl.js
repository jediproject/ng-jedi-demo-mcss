'use strict';

/*
    Controller for the feature myfeature
*/
jd.factory.newController(['app/core/features/mysubmodule/modalexample/modalexample-ctrl.js'], 'app.core.mysubmodule.myfeature.MyfeatureCtrl', ['$log', 'jedi.dialogs.AlertHelper', 'jedi.dialogs.ModalHelper', function ($log, AlertHelper, ModalHelper) {

    //#region Service initialize
    var service;// = ... e.g: restangular instance
    //#endregion

    //#region View/Model initialize
    var vm = this;
    vm.myfeatureModel = {
        list: [{
              id: 1,
              value: 'value 1',
              date: new Date(),
              number: 111.11
            }, {
              id: 2,
              value: 'value 2',
              date: new Date(),
              number: 222.22
            }, {
              id: 3,
              value: 'value 3',
              date: new Date(),
              number: 333.33
            }
        ]
    };
    //#endregion

    //#region Events binds
    vm.method1 = method1;
    vm.method2 = method2;
    vm.method3 = method3;
    vm.method4 = method4;
    vm.method5 = method5;
    vm.method6 = method6;
    vm.method7 = method7;
    vm.method8 = method8;
    //#endregion

    //#region Load controller
    method1();
    //#endregion

    //#region Events definitions
    function method1() {
        $log.info(vm.myfeatureModel);
    }

    function method2() {
        $log.info(vm.myfeatureModel);
        vm.myfeatureModel.list.push({
            id: vm.myfeatureModel.list.length+1,
            value: 'value value value value value '+(vm.myfeatureModel.list.length+1),
            date: new Date(),
            number: vm.myfeatureModel.list.length+1
        });
    }

    function method3() {
        $log.info(vm.myfeatureModel);
        AlertHelper.addInfo('Sucesso');
    }

    function method4() {
        $log.info(vm.myfeatureModel);
        AlertHelper.addError('Erro');
    }

    function method5() {
        $log.info(vm.myfeatureModel);
        Materialize.toast('Sucesso', 3000);
    }

    function method6() {
        $log.info(vm.myfeatureModel);
        Materialize.toast('Erro', 3000);
    }

    function method7() {
        $log.info(vm.myfeatureModel);
        ModalHelper.open('internalModalExample.html', {param: vm.myfeatureModel.list});
    }

    function method8() {
        $log.info(vm.myfeatureModel);
        AlertHelper.confirm("Teste de confirmação?", function() {
           Materialize.toast('Sucesso', 3000);
        }, function() {
            Materialize.toast('Erro', 3000);
        });
    }
    //#endregion

}]);