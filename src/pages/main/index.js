import React from 'react';

// component
import { MainContainer } from '@/pages/main/main.styled';
import { InnerContainer } from '@/components/container';
import { LinkTextButton } from '@/components/button';

class MainPage extends React.PureComponent {
    onRoute = path => {
        this.props.history.push(path);
    };

    render() {
        return (
            <MainContainer>
                <InnerContainer>
                    <h1>Welcome,</h1>
                    <h1>Hellow world!</h1>
                    <LinkTextButton
                        onClick={() => {
                            this.onRoute('/service');
                        }}
                    >
                        Service
                    </LinkTextButton>
                </InnerContainer>
            </MainContainer>
        );
    }
}

export default MainPage;
