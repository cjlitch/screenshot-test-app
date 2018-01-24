import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BirthdaySelect from '../BirthdaySelect';
import Select from 'react-select';
import renderer from 'react-test-renderer';

const defaultProps = {
    options: [1, 2, 3],
    label: "test",
    onChange: () => {}
};

describe('BirthdaySelect', () => {
    it('has a select', () => {
        const wrapper = shallow(<BirthdaySelect {...defaultProps} />);
        expect(wrapper.find(Select)).toHaveLength(1);
    });

    it('matches snapshot', () => {
        const wrapper = renderer
            .create(<BirthdaySelect {...defaultProps} />)
            .toJSON();

        expect(wrapper).toMatchSnapshot();
    });
});


