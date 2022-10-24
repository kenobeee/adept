import React from 'react';
import {Provider} from 'react-redux';

import {Tables} from 'components/tables';
import {Main, Container, Wrapper} from 'components/common/layout';

import {store} from 'store';

export const App = () => (
    <Provider store={store}>
        <Main>
            <Container>
                <Wrapper>
                    <Tables/>
                </Wrapper>
            </Container>
        </Main>
    </Provider>
);