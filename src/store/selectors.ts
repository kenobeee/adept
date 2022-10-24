import {RootState} from 'types/redux';

export const selectCompanies = (state:RootState) => state.data.companies;
export const selectLimit = (state:RootState) => state.data.viewRowsLimit;