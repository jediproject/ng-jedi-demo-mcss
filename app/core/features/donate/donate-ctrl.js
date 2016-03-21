'use strict';

/*
    Controller for the feature Donate
*/
jd.factory.newController('app.core.animals.DonateCtrl', ['coreRestService', '$location', function (CoreRestService, $location) {

    //#region Service initialize
    var service = CoreRestService.all('animals');
    //#endregion

    //#region View/Model initialize
    var vm = this;
    vm.donateModel = service.copy({}); // adiciona métodos crud no objeto criado
    //#endregion

    //#region Events binds
    vm.save = save;
    //#endregion

    //#region Events definitions
    function save() {
        vm.donateModel.post().then(function () {
            Materialize.toast('Animal cadastrado com sucesso.', 3000);
            $location.path('/core/animals');
        });
    }
    //#endregion

}]);