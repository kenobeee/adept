import {editCompany, editEmployee} from 'store/tables/slice';

import {tables} from 'types/common';
import {EditRowT} from 'types/redux';

export const editRow:EditRowT = (props) => {
    const {updatedFields, tableType, setEditingTable, dispatch, selectedCompanyId, selectedEmployeeId} = props;

    if (tableType === tables.companies)
        dispatch(editCompany({
            updatedFields,
            companyId: selectedCompanyId
        }));

    if (tableType === tables.employees)
        dispatch(editEmployee({
            updatedFields,
            companyId: selectedCompanyId,
            employeeId: selectedEmployeeId
        }));

    setEditingTable(null);
};