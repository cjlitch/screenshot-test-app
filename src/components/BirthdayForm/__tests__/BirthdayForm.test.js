import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BirthdayForm from '../BirthdayForm';
import BirthdaySelect from '../../BirthdaySelect/BirthdaySelect';
import renderer from 'react-test-renderer';

const defaultProps = {
    months: [1, 2, 3],
    days: [1, 2, 3],
    setMonth: () => {},
    setDay: () => {},
    revealHoroscope: () => {}
};

describe('BirthdayForm', () => {
    it('has two BirthdaySelects', () => {
        const wrapper = shallow(<BirthdayForm {...defaultProps} />);
        expect(wrapper.find(BirthdaySelect)).toHaveLength(2);
    });

    it('matches snapshot', () => {
        const wrapper = renderer
            .create(<BirthdayForm {...defaultProps} />)
            .toJSON();

        expect(wrapper).toMatchSnapshot();
    });
});


