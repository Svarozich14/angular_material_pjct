export class DiagnosesController {
    constructor($scope, $localStorage) {
        'ngInject';
        this.$storage = $localStorage;
    }

    delDiagnose(index) {
        let day = '0' + new Date().getDate();
        let month = '0' + (new Date().getMonth()+1);
        let year =  new Date().getFullYear();
        this.$storage.current_diagnoses[index].removal_date = day.slice(-2) + '/' + month.slice(-2)+ '/' + year;
        this.$storage.history_diagnoses.push(this.$storage.current_diagnoses[index]);
        this.$storage.current_diagnoses.splice(index, 1);
    }

}

