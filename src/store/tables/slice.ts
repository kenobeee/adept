import {createSlice} from '@reduxjs/toolkit';

import {initialState} from './state';

import {
    EditCompanyAction,
    EditEmployeeAction,
    AddNewCompanyAction,
    DeleteCompanyAction,
    AddNewEmployeeAction,
    DeleteEmployeeAction, IncreaseViewRowsLimitAction,
} from 'types/redux';

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addNewCompany: (state, action:AddNewCompanyAction) => {
            state.companies = [...state.companies, action.payload];
        },
        addNewEmployee: (state, action:AddNewEmployeeAction) => {
            state.companies = state.companies.map(company =>
                company.id === action.payload.companyId
                    ? {
                        ...company,
                        employeesQty: company.employeesQty + 1,
                        employees: [...company.employees, action.payload.employee]
                    }
                    : company
            );
        },
        deleteCompany: (state, action:DeleteCompanyAction) => {
            state.companies = state.companies.filter(company => !action.payload.includes(company.id));
        },
        deleteEmployee: (state, action:DeleteEmployeeAction) => {
            state.companies = state.companies.map(company =>
                company.id === action.payload.companyId
                    ? {
                        ...company,
                        employeesQty: company.employeesQty - action.payload.employeeId.length,
                        employees: company.employees.filter(employee => !action.payload.employeeId.includes(employee.id))
                    }
                    : company
            );
        },
        editCompany: (state, action:EditCompanyAction) => {
            state.companies = state.companies.
                map(company => company.id === action.payload.companyId
                    ? {...company, ...action.payload.updatedFields}
                    : company
                );
        },
        editEmployee: (state, action:EditEmployeeAction) => {
            state.companies = state.companies.map(company =>
                company.id === action.payload.companyId
                    ? {
                        ...company,
                        employees: company.employees.
                            map(employee => employee.id === action.payload.employeeId
                                ? {...employee, ...action.payload.updatedFields}
                                : employee
                            )
                    }
                    : company
            );
        },
        increaseViewRowsLimit: (state, action:IncreaseViewRowsLimitAction) => {
            state.viewRowsLimit = state.viewRowsLimit + action.payload;
        }
    }
});

export const {
    addNewCompany,
    addNewEmployee,
    deleteCompany,
    deleteEmployee,
    editCompany,
    editEmployee,
    increaseViewRowsLimit
} = dataSlice.actions;