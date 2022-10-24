import {AvailableTools, tables} from 'types/common';
import {CompaniesT, EmployeesT, ICompany, IEmployee} from 'types/redux';

export type GetAvailableToolsT = (selectedQty:number) => AvailableTools;
export type GetAvailableToolsCBT = (tableType:tables) => ReturnType<GetAvailableToolsT>;

export type SeparateCompaniesToTableArraysT = (companies:CompaniesT, selectedCompanies:Array<number>) => {
    companiesArray:Array<Omit<ICompany, 'employees'>>,
    employeesArray:EmployeesT
};

export type MergeClassNamesT = (...args:Array<string>) => string;

export type GenerateInitDataT = (companiesQty:number, employeesQty:number) => CompaniesT;
export type GenerateCompanyT = (id:number, employees:EmployeesT) => ICompany;
export type GenerateEmployeeT = (id:number) => IEmployee;