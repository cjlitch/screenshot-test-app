import { types } from './actions';
import { Months, CowboyHoroscopes } from './config';
import moment from 'moment';

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

const initialState = {
    selectedMonth: null,
    selectedDay: null,
    months: monthOptions,
    days: dayOptions,
}
  
export function cowboyHoroscopeReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch(action.type) {
        case types.SET_MONTH:
            return {
                ...state,
                selectedMonth: action.month
            };

        case types.SET_DAY:
            return {
                ...state,
                selectedDay: action.day
            };
        
        case types.REVEAL_HOROSCOPE:
            return {
                ...state,
                horoscope: getHoroscope(state.selectedMonth, state.selectedDay)
            };
    }
    
    return state;
}

const getHoroscope = (month, day) => {
    if (!month || !day) {
        return null;
    }

    const year = new moment().year();
    const birthday = new moment(`${year}-${month.value}-${day.value}`);

    const index = (Math.abs(birthday.dayOfYear() - new moment().dayOfYear())) % CowboyHoroscopes.length;
    const horoscrope = CowboyHoroscopes[index];

    return horoscrope;
}