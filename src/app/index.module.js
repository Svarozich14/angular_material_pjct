import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { ClinicalInfoController } from './clinical_info/clinicalInfo.controller';
import { DiagnosesController } from './clinical_info/diagnoses/diagnoses.controller';
import { EditPatientController } from './clinical_info/editPatient/editPatient.controller';
import { AddDiagnoseController } from './clinical_info/addDiagnose/addDiagnose.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { LeftSideClinicalInfoDirective } from '../app/components/leftSideClinicalInfo/leftSideClinicalInfo.directive';

angular.module('fountain', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'ngStorage'])
  .config(routerConfig)
  .controller('MainController', MainController)
  .controller('ClinicalInfoController', ClinicalInfoController)
  .controller('DiagnosesController', DiagnosesController)
  .controller('EditPatientController', EditPatientController)
  .controller('AddDiagnoseController', AddDiagnoseController)
  .directive('navbarDirective', NavbarDirective)
  .directive('leftSideClinicalInfoDirective', LeftSideClinicalInfoDirective);
