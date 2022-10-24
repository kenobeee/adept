import {store} from 'store';
import {AnyAction, PayloadAction} from '@reduxjs/toolkit';

import React, {Dispatch} from 'react';

import {tables} from './common';

// state

export type CompaniesT = Array<ICompany>;
export type EmployeesT = Array<IEmployee>;

export interface ICompany {
    id:number,
    name:string,
    employeesQty:number,
    address:string,
    employees:EmployeesT
}

export interface IEmployee {
    id:number,
    lastName:string,
    firstName:string,
    position:string
}

export type RootState = ReturnType<typeof store.getState>;

// actions

export type AddNewCompanyAction = PayloadAction<ICompany>;
export type AddNewEmployeeAction = PayloadAction<{
    companyId:number,
    employee:IEmployee
}>;

export type DeleteCompanyAction = PayloadAction<Array<ICompany['id']>>;
export type DeleteEmployeeAction = PayloadAction<{
    employeeId:Array<IEmployee['id']>,
    companyId:ICompany['id']
}>;

export type EditCompanyAction = PayloadAction<{
    companyId:ICompany['id'],
    updatedFields:{[key:string]:string | number}
}>;
export type EditEmployeeAction = PayloadAction<{
    companyId:ICompany['id'],
    employeeId:IEmployee['id'],
    updatedFields:{[key:string]:string | number}
}>;

export type IncreaseViewRowsLimitAction = PayloadAction<number>;

// utils

export type AddNewRowT = (
    props:{
        tableType:tables,
        companies:CompaniesT,
        selectedCompanyId:number,
        currentEmployeesQty:number,
        dispatch:Dispatch<AnyAction>
    }
) => void;
export type AddNewRowCBT = (tableType:tables) => ReturnType<AddNewRowT>;

export type DeleteRowT = (
    props:{
        tableType:tables,
        dispatch:Dispatch<AnyAction>,
        selectedCompanyId:Array<number>,
        selectedEmployeeId:Array<number>,
        setSelectedCompanies:Dispatch<React.SetStateAction<number[]>>,
        setSelectedEmployees:Dispatch<React.SetStateAction<number[]>>
    }
) => void;
export type DeleteRowCBT = (tableType:tables) => ReturnType<DeleteRowT>;

export type EditRowT = (
    props:{
        tableType:tables | null,
        selectedCompanyId:number,
        selectedEmployeeId:number,
        dispatch:Dispatch<AnyAction>,
        updatedFields:{[key:string]:string | number},
        setEditingTable:Dispatch<React.SetStateAction<tables | null>>
    }
) => void;
export type EditRowCBT = (updatedFields:{[key:string]:string | number}) => ReturnType<EditRowT>;