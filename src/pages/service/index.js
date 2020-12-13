import React from 'react';

// component
import { ServiceContainer } from '@/pages/service/service.styled';
import { InnerContainer } from '@/components/container';
import { LinkTextButton } from '@/components/button';

class ServicePage extends React.PureComponent {
    onRoute = path => {
        this.props.history.push(`${path}`);
    };

    render() {
        return (
            <ServiceContainer>
                <InnerContainer>
                    <h2>Service</h2>
                    <LinkTextButton
                        onClick={() => {
                            this.onRoute('/');
                        }}
                    >
                        Go back...
                    </LinkTextButton>

                    <h1>Find our service...</h1>
                    <LinkTextButton
                        onClick={() => {
                            this.onRoute('/service/use');
                        }}
                    >
                        use
                    </LinkTextButton>
                    <LinkTextButton
                        onClick={() => {
                            this.onRoute('/service/introduce');
                        }}
                    >
                        introduce
                    </LinkTextButton>
                </InnerContainer>
            </ServiceContainer>
        );
    }
}

export default ServicePage;
