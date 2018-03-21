import React, { Component } from 'react';
import BirthdayForm from './components/BirthdayForm';
import styled from 'styled-components';
import boots from './images/cowboy-boots-melanie-mauer.jpg';
import { Container } from './components/Container/container';
import styleguide from './styleguide';

class App extends Component {

    render() {
        return (
            <div>
                <Hero>
                    <Container>
                        <HeroTitle>Cowboy Horoscope</HeroTitle>
                        <HeroSubtitle>
                            Unlock the wisdom of the Stars, Farmers, and the Great American West.
                        </HeroSubtitle>
                    </Container>
                </Hero>
                <BirthdayForm />
                <Footer id="footer">
                    <Container>
                        <p>Made with &hearts; in NY by Carly Litchfield</p>
                    </Container>
                </Footer>
            </div>
        );
    }
}

const Hero = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${boots});
    height: 400px;
    background-size: cover;
    background-position: bottom;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    box-shadow: 0 0 24px ${styleguide.colors.grayTundora};
`;

const HeroTitle = styled.h1`
    font-family: ${styleguide.fonts.spectral};
    font-weight: 200;
    font-size: 72px;
    margin-bottom: 0;
    text-shadow: 0 0 13px ${styleguide.colors.white};

    @media (max-width: 1280px) {
        font-size: 48px;
    }
`;

const HeroSubtitle = styled.p`
    font-family: ${styleguide.fonts.spectral};
    font-weight: 300;
    font-size: 24px;
    margin-top: 8px;
`;

const Footer = styled.div`
    border-top: 1px solid ${styleguide.colors.silver};
    margin-top: 100px;
    color: ${styleguide.colors.grayDusty};
    font-size: 13px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${styleguide.colors.grayAlto};
    font-family: ${styleguide.fonts.openSans};
`;

export default App;
