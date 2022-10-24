import {SeparateCompaniesToTableArraysT} from 'types/utils';

export const separateCompaniesToTableArrays:SeparateCompaniesToTableArraysT = (companies, selectedCompanies) => {
    const companiesArray = [];
    const employeesArray = [];

    for (let i = 0; i < companies.length; i++) {
        const currentCompany = companies[i];
        const {employees, ...companyObjectWithoutEmployees} = currentCompany;

        if (selectedCompanies.includes(currentCompany.id) && selectedCompanies.length === 1)
            employeesArray.push(...employees);

        companiesArray.push(companyObjectWithoutEmployees);
    }

    return {companiesArray, employeesArray};
};