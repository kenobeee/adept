import {GenerateCompanyT} from 'types/utils';

export const generateCompany:GenerateCompanyT = (id, employees) => ({
    id,
    name: `Компания №${id}`,
    employeesQty: employees.length,
    address: `Адрес №${id}`,
    employees
});