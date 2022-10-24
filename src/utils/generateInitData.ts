import {CompaniesT, EmployeesT} from 'types/redux';
import {generateCompany} from 'utils/generateCompany';
import {generateEmployee} from 'utils/generateEmployee';
import {GenerateInitDataT} from 'types/utils';

// todo допилить
export const generateInitData:GenerateInitDataT = (companiesQty, employeesQty) => {
    const companies:CompaniesT = [];

    for (let i = 1, counter = 0, limit = 10000; i <= companiesQty; i++) {
        const employees:EmployeesT = [];

        for (let k = 1; k <= employeesQty; k++) employees.push(generateEmployee(k));

        companies.push(generateCompany(i, employees));
        counter = counter + 1;

        if (counter === limit) setTimeout(() => {
            console.log('сброс');
            counter = 0;
        }, 0);
    }

    return companies;
};