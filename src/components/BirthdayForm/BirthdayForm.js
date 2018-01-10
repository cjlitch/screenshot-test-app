import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BirthdaySelect from '../BirthdaySelect/BirthdaySelect';
import './BirthdayForm.css';

class BirthdayForm extends Component {
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
            <div className="container birthday-container">
                <h2 className="form-title">Get your Cowboy Horoscope now</h2>
                <p className="form-subtitle">Enter the month and day of your birthday</p>
                
                <BirthdaySelect
                    label={"Month"}
                    options={this.props.months}
                    onChange={(selected) => this.props.setMonth(selected)} />

                <BirthdaySelect
                    label={"Day"}
                    options={this.props.days}
                    onChange={(selected) => this.props.setDay(selected)} />

                <div
                    className="birthday-form-button"
                    onClick={this.props.revealHoroscope}
                    data-test="reveal-horoscope">
                    Reveal your Cowboy Horoscope
                </div>

                <h1 className="horoscope" data-test="horoscope">{this.props.horoscope}</h1>
            </div>
        );
    }
}

export default BirthdayForm;
