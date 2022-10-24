import {deleteCompany, deleteEmployee} from 'store/tables/slice';

import {tables} from 'types/common';
import {DeleteRowT} from 'types/redux';

export const deleteRow:DeleteRowT = (props) => {
    const {dispatch, selectedEmployeeId, selectedCompanyId, tableType, setSelectedCompanies, setSelectedEmployees} = props;

    if (tableType === tables.companies) {
        setSelectedCompanies([]);
        dispatch(deleteCompany(selectedCompanyId));
    } else {
        setSelectedEmployees([]);
        dispatch(deleteEmployee({employeeId: selectedEmployeeId, companyId: selectedCompanyId[0]}));
    }
};