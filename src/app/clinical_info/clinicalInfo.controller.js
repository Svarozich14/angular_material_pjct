export class ClinicalInfoController {

    constructor($localStorage) {
        'ngInject';

        this.$storage = $localStorage;
        this.clinicalInfoBreadcrumbs = {
            level1: {
                title: 'Patients',
                level2: {
                    title: 'Albert E Johnson'
                }
            }
        };

        $localStorage.$default({
            current_diagnoses: [
                {
                    id: 11,
                    diagnose_text: 'Asthma with some extreme allergic experience and another reason for Hospital. Here is some inaccessible notions of diagnosis',
                    code: '0456',
                    addition_date: '12/12/2015'
                },
                {
                    id: 12,
                    diagnose_text: 'Asthma',
                    code: '0456',
                    addition_date: '12/12/2015'
                }

            ],
            history_diagnoses: [
                {
                    id: 21,
                    diagnose_text: 'Branchitis',
                    code: '0456',
                    addition_date: '12/12/2015',
                    removal_date: '20/12/2015'
                },
                {
                    id: 22,
                    diagnose_text: 'Allergic Asthma',
                    code: '5779',
                    addition_date: '12/12/2015',
                    removal_date: '20/12/2015'
                },
                {
                    id: 23,
                    diagnose_text: 'Angina Symptoms',
                    code: '5779',
                    addition_date: '12/12/2015',
                    removal_date: '20/12/2015'
                }

            ],
            patient: {
                id: 55,
                name: 'Albert Johnson',
                address: '4 Newman Street, Metuchen, Middlesex, New Jersey, 08840',
                birthday: '1957-12-11T22:00:00.000Z'
            }
        });

    }

}

