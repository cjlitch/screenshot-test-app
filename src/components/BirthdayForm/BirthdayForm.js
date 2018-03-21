import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BirthdaySelect from '../BirthdaySelect/BirthdaySelect';
import { Container } from '../Container/container';
import styled from 'styled-components';
import constellation from '../../images/constellation.png';
import styleguide from '../../styleguide';

export default class BirthdayForm extends Component {
    static propTypes = {
        setMonth: PropTypes.func.isRequired,
        setDay: PropTypes.func.isRequired,
        months: PropTypes.array.isRequired,
        days: PropTypes.array.isRequired,
        revealHoroscope: PropTypes.func.isRequired,
        horoscope: PropTypes.string,
    }

    render() {
        return (
            <BirthdayContainer>
                <FormTitle>Get your Cowboy Horoscope now</FormTitle>
                <FormSubtitle>Enter the month and day of your birthday</FormSubtitle>
                
                <BirthdaySelect
                    label={"Month"}
                    options={this.props.months}
                    onChange={(selected) => this.props.setMonth(selected)} />

                <BirthdaySelect
                    label={"Day"}
                    options={this.props.days}
                    onChange={(selected) => this.props.setDay(selected)} />

                <Button
                    onClick={this.props.revealHoroscope}
                    onTouchStart={this.props.revealHoroscope}                    
                    data-test="reveal-horoscope"
                    href="#footer">
                    Reveal your Cowboy Horoscope
                </Button>

                <Horoscope data-test="horoscope">{this.props.horoscope}</Horoscope>
            </BirthdayContainer>
        );
    }
}

const BirthdayContainer = Container.extend`
    margin-top: 100px;
    background-image: url(${constellation});
    background-size: 600px;
    background-repeat: no-repeat;
    background-position: top right;
    min-height: 300px;
`;

const FormTitle = styled.h2`
    font-family: ${styleguide.fonts.spectral};
    font-weight: 300;
    font-size: 32px;
    color: ${styleguide.colors.grayTundora};
`;

const FormSubtitle = styled.p`
    font-family: ${styleguide.fonts.openSans};
    color: ${styleguide.colors.grayTundora};
`;

const Button = styled.a`
    padding: 20px;
    background-color: ${styleguide.colors.grayAlto};
    font-family: ${styleguide.fonts.spectral};
    font-weight: 400;
    font-size: 18px;
    margin-top: 60px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    border-bottom: 1px solid ${styleguide.colors.grayDark};
    border-top: 1px solid ${styleguide.colors.silver};  
    color: ${styleguide.colors.grayTundora};
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: ${styleguide.colors.grayDark};
        border-top: 1px solid ${styleguide.colors.grayDusty};
        cursor: pointer;
    }
`;

const Horoscope = styled.h1`
    text-align: center;
    font-family: ${styleguide.fonts.spectral};
    font-weight: 400;
    color: ${styleguide.colors.grayTundora};
    margin-top: 100px;
`;