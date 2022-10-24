import React, {Dispatch} from 'react';

import {tables} from './common';
import {EmployeesT, ICompany, AddNewRowCBT, DeleteRowCBT, EditRowCBT} from './redux';
import {GetAvailableToolsCBT} from './utils';

export type CommonProps = {
    editRowCB:EditRowCBT,
    addNewRowCB:AddNewRowCBT,
    deleteRowCB:DeleteRowCBT,

    viewRowsLimit:number,

    editingTable:tables | null,
    selectAllRows:SelectAllRowsT,
    setEditingTable:Dispatch<React.SetStateAction<tables | null>>,
    setSelectedEmployees:Dispatch<React.SetStateAction<number[]>>

    getAvailableToolsCB:GetAvailableToolsCBT
};

export type CompaniesP = {
    selectedCompanies:Array<number>,
    companies:Array<Omit<ICompany, 'employees'>>,
    setSelectedCompanies:Dispatch<React.SetStateAction<number[]>>,
} & CommonProps;

export type EmployeesP = {
    employees:EmployeesT,
    selectedEmployees:Array<number>
} & CommonProps;

export type TableP = {
    type:tables,
    isFullSelected:boolean,
    isHidden?:boolean,
    isEditing?:boolean,
} & Pick<CommonProps, 'addNewRowCB' | 'deleteRowCB' | 'setEditingTable' | 'getAvailableToolsCB' | 'selectAllRows'>;

export type CheckboxP = {
    handle:Function,
    isActive:boolean,
    label?:string,
    isDisabled?:boolean,
};

export type RowP = {
    isSelected:boolean
};

export type InputP = {
    name:string,
    value:string | number,
    onEnterDown:EditRowCBT,
    inputFields:{[key:string]:string | number},
    onChange:Dispatch<React.SetStateAction<{[key:string]:string | number}>>
    className?:string,
};

export type SelectAllRowsT = (tableType:tables) => void;