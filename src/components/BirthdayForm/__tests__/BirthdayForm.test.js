import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BirthdayForm from '../BirthdayForm';
import BirthdaySelect from '../../BirthdaySelect/BirthdaySelect';

describe('BirthdayForm', () => {
    it('has two BirthdaySelects', () => {
        const wrapper = shallow(
            <BirthdayForm
                months={[1, 2, 3]}
                days={[1, 2, 3]}
                setMonth={() => {}}
                setDay={() => {}}
                revealHoroscope={() => {}} />
            );
        expect(wrapper.find(BirthdaySelect)).toHaveLength(2);
    });
});


