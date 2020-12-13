import { hot } from 'react-hot-loader/root';
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

// route
import Route from '@/route';

import './index.css';

class App extends React.PureComponent {
    render() {
        return (
            <AppContainer>
                <Route />
            </AppContainer>
        );
    }
}

const AppContainer = styled.div``;

export default hot(withRouter(App));
