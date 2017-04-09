export function LeftSideClinicalInfoDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/leftSideClinicalInfo/leftSideClinicalInfo.html',
        scope: {
            patient: '='
        }
    };

    return directive;
}
