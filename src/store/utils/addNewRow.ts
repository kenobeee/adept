import {generateCompany, generateEmployee} from 'utils';

import {addNewCompany, addNewEmployee} from 'store/tables/slice';

import {tables} from 'types/common';
import {AddNewRowT} from 'types/redux';

export const addNewRow:AddNewRowT = (props) => {
    const {dispatch, companies, tableType, selectedCompanyId, currentEmployeesQty} = props;

    tableType === tables.companies
        ? dispatch(addNewCompany(generateCompany(companies.length + 1, [])))
        : dispatch(addNewEmployee({
            companyId: selectedCompanyId,
            employee: generateEmployee(currentEmployeesQty + 1)
        }));
};