export class AddDiagnoseController {

    constructor($scope, $localStorage, $stateParams) {
        'ngInject';
        
        this.$scope = $scope;
        this.$scope.$storage = $localStorage;
        if (!!$stateParams.id ) {
            this.currentDiagnose = $localStorage.current_diagnoses.find((val, key) => {
                if (val.id == $stateParams.id) this.currentDiagnoseKey = key;
                return val.id == $stateParams.id;
            });
        }
        this.diagnose = !!$stateParams.id ? angular.copy(this.currentDiagnose) : {};
    }

    addDiagnose() {
        if (!!this.currentDiagnoseKey) {
            this.$scope.$storage.current_diagnoses[this.currentDiagnoseKey] = this.diagnose;
        } else {
            this.$scope.$storage.current_diagnoses.push(this.diagnose);
        }
    }

}

