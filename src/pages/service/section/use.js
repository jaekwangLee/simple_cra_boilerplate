import React from 'react';

// component
import { UseContainer } from '@/pages/service/service.styled';
import { InnerContainer } from '@/components/container';
import { LinkTextButton } from '@/components/button';

class UseSectionPage extends React.PureComponent {
    render() {
        return (
            <UseContainer>
                <InnerContainer>
                    <h2>Service > use</h2>
                    <h3>Use our item...</h3>
                    <LinkTextButton
                        onClick={() => {
                            this.props.history.goBack();
                        }}
                    >
                        Go back
                    </LinkTextButton>
                </InnerContainer>
            </UseContainer>
        );
    }
}

export default UseSectionPage;
