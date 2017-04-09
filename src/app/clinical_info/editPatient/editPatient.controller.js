export class EditPatientController {
    constructor($localStorage) {
        'ngInject';
        this.$storage = $localStorage;
        this.patient = angular.copy(this.$storage.patient);
        this.patient.birthday = new Date(this.patient.birthday);
    }

    editPatientSubmit() {
        this.$storage.patient = angular.copy(this.patient);
    }
    
}

