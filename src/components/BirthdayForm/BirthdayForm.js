import React, { Component } from 'react';
import BirthdaySelect from '../BirthdaySelect/BirthdaySelect';
import './BirthdayForm.css';
import { CowboyHoroscopes, Months } from '../../config';
import moment from 'moment';

class BirthdayForm extends Component {
    state = {
        horoscrope: '',
        day: null,
        month: null,
    }

    constructor(props) {
        super(props);

        this.renderHoroscope.bind(this);
    }

    renderHoroscope() {
        const year = new moment().year();
        const birthday = new moment(`${year}-${this.state.month}-${this.state.day}`);

        const index = (Math.abs(birthday.dayOfYear() - new moment().dayOfYear())) % CowboyHoroscopes.length;
        const horoscrope = CowboyHoroscopes[index];

        this.setState({
            horoscrope
        });
    }

    setDay(selectedDay) {
        this.setState({
            day: selectedDay.value
        });
    }

    setMonth(selectedMonth) {
        this.setState({
            month: selectedMonth.value
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
                value: j + 1,
                label: Months[j]
            };
        }

        return (
            <div className="container birthday-container">
                <h2 className="form-title">Get your Cowboy Horoscope now</h2>
                <p className="form-subtitle">Enter the month and day of your birthday</p>
                
                <BirthdaySelect
                    label={"Month"}
                    options={monthOptions}
                    onChange={(selected) => this.setMonth(selected)} />

                <BirthdaySelect
                    label={"Day"}
                    options={dayOptions}
                    onChange={(selected) => this.setDay(selected)} />

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
