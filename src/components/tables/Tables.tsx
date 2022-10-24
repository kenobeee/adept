import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Companies, Employees} from './parts';

import {getAvailableTools, separateCompaniesToTableArrays} from 'utils';

import {selectCompanies, selectLimit} from 'store/selectors';
import {addNewRow, deleteRow, editRow} from 'store/utils';

import {tables} from 'types/common';
import {CommonProps, SelectAllRowsT} from 'types/components';
import {GetAvailableToolsCBT} from 'types/utils';
import {AddNewRowCBT, DeleteRowCBT, EditRowCBT} from 'types/redux';

export const Tables = () => {
    const companies = useSelector(selectCompanies);
    const viewRowsLimit = useSelector(selectLimit);
    const dispatch = useDispatch();

    const [editingTable, setEditingTable] = useState<tables | null>(null);
    const [selectedCompanies, setSelectedCompanies] = useState<Array<number>>([]);
    const [selectedEmployees, setSelectedEmployees] = useState<Array<number>>([]);

    const {companiesArray, employeesArray} = separateCompaniesToTableArrays(companies, selectedCompanies);

    const addNewRowCB:AddNewRowCBT = (tableType) =>
        addNewRow({
            dispatch,
            tableType,
            companies,
            selectedCompanyId: selectedCompanies[0],
            currentEmployeesQty: employeesArray.length
        });

    const deleteRowCB:DeleteRowCBT = (tableType) =>
        deleteRow({
            dispatch,
            tableType,
            setSelectedCompanies,
            setSelectedEmployees,
            selectedCompanyId: selectedCompanies,
            selectedEmployeeId: selectedEmployees
        });

    const editRowCB:EditRowCBT = (updatedFields) =>
        editRow({
            dispatch,
            updatedFields,
            setEditingTable,
            tableType: editingTable,
            selectedCompanyId: selectedCompanies[0],
            selectedEmployeeId: selectedEmployees[0]
        });

    const getAvailableToolsCB:GetAvailableToolsCBT = (tableType) =>
        getAvailableTools((tableType === tables.employees ? selectedEmployees : selectedCompanies).length);

    const selectAllRows:SelectAllRowsT = (tableType) => {
        if (tableType === tables.employees) {
            const fullSelected = employeesArray.map(employee => employee.id);

            setSelectedEmployees(fullSelected.length === selectedEmployees.length ? [] : fullSelected);
        }

        if (tableType === tables.companies) {
            const fullSelected = companiesArray.map(company => company.id);

            setSelectedCompanies(fullSelected.length === selectedCompanies.length ? [] : fullSelected);
        }
    };

    const commonProps:CommonProps = {
        editRowCB,
        addNewRowCB,
        deleteRowCB,
        editingTable,
        viewRowsLimit,
        selectAllRows,
        setEditingTable,
        getAvailableToolsCB,
        setSelectedEmployees
    };
    
    return (
        <>
            <Companies
                {...commonProps}
                companies={companiesArray}
                selectedCompanies={selectedCompanies}
                setSelectedCompanies={setSelectedCompanies}/>
            <Employees
                {...commonProps}
                employees={employeesArray}
                selectedEmployees={selectedEmployees}/>
        </>
    );
};