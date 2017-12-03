import React, { Component } from 'react';
import BirthdaySelect from './BirthdaySelect';

class BirthdayForm extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="form-title">Get your Cowboy Horoscope now</h2>
                <p className="form-subtitle">Enter the month and day of your birthday</p>
                <BirthdaySelect />
                <BirthdaySelect />
            </div>
        );
    }
}

export default BirthdayForm;
