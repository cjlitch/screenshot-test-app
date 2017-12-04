import React, { Component } from 'react';
import BirthdaySelect from '../BirthdaySelect/BirthdaySelect';
import './BirthdayForm.css';
import { CowboyHoroscopes, Months } from '../../config';

class BirthdayForm extends Component {
    state = {
        horoscrope: ''
    }

    constructor(props) {
        super(props);

        this.renderHoroscope.bind(this);
    }

    renderHoroscope() {
        const randomIndex = Math.floor(Math.random() * CowboyHoroscopes.length);
        const horoscrope = CowboyHoroscopes[randomIndex];

        this.setState({
            horoscrope
        });
    }

    render() {
        const dayOptions = [];

        for(var i = 1; i <= 31; i++) {
            dayOptions[i-1] = {
                value: i.toString(),
                label: i.toString()
            };
        }

        const monthOptions = [];

        for(var j = 0; j < Months.length; j++) {
            monthOptions[j] = {
                value: Months[j],
                label: Months[j]
            };
        }

        return (
            <div className="container birthday-container">
                <h2 className="form-title">Get your Cowboy Horoscope now</h2>
                <p className="form-subtitle">Enter the month and day of your birthday</p>
                
                <BirthdaySelect
                    label={"Month"}
                    options={monthOptions} />

                <BirthdaySelect
                    label={"Day"}
                    options={dayOptions} />

                <button
                    className="birthday-form-button"
                    onClick={() => this.renderHoroscope()}>
                    Reveal your Cowboy Horoscope
                </button>

                <h1 className="horoscope">{this.state.horoscrope}</h1>
            </div>
        );
    }
}

export default BirthdayForm;
