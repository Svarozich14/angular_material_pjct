export function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('main.home', {
            url: 'home',
            templateUrl: 'app/home/home.html'
        })
        .state('main.clinicalInfo', {
            url: 'clinicalInfo',
            templateUrl: 'app/clinical_info/clinicalInfo.html',
            controller: 'ClinicalInfoController',
            controllerAs: 'clinicalInfo'
        })
        .state('main.clinicalInfo.diagnoses', {
            url: '/diagnoses',
            templateUrl: 'app/clinical_info/diagnoses/diagnoses.html',
            controller: 'DiagnosesController',
            controllerAs: 'diagnoses'
        })
        .state('main.clinicalInfo.edit_patient', {
            url: '/edit_patient/:id',
            templateUrl: 'app/clinical_info/editPatient/editPatient.html',
            controller: 'EditPatientController',
            controllerAs: 'editPatient'
        })
        .state('main.clinicalInfo.add_diagnose', {
            url: '/add_diagnose/:id',
            templateUrl: 'app/clinical_info/addDiagnose/addDiagnose.html',
            controller: 'AddDiagnoseController',
            controllerAs: 'addDiagnose'
        });

    $urlRouterProvider
        .when('', '/home')
        .when('/', '/home')
        .when('/home/', '/home');

    $urlRouterProvider.otherwise('/home');
}
