import React from 'react';

// component
import { IntroduceContainer } from '@/pages/service/service.styled';
import { InnerContainer } from '@/components/container';
import { LinkTextButton } from '@/components/button';

class IntrdouceSectionPage extends React.PureComponent {
    render() {
        return (
            <IntroduceContainer>
                <InnerContainer>
                    <h2>Service > introduce</h2>
                    <h3>Our item is...</h3>
                    <LinkTextButton
                        onClick={() => {
                            this.props.history.goBack();
                        }}
                    >
                        Go back
                    </LinkTextButton>
                </InnerContainer>
            </IntroduceContainer>
        );
    }
}

export default IntrdouceSectionPage;
