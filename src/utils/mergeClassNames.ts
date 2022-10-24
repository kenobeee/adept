import {MergeClassNamesT} from 'types/utils';

export const mergeClassNames:MergeClassNamesT = (...args) => args.join(' ');