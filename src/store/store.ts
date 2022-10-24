import {configureStore} from '@reduxjs/toolkit';

import {dataSlice} from './tables/slice';

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer
    }
});