import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BirthdaySelect from '../BirthdaySelect';
import Select from 'react-select';

describe('BirthdaySelect', () => {
    it('has a select', () => {
        const wrapper = shallow(
            <BirthdaySelect
                options={[1, 2, 3]}
                label="test"
                onChange={() => {}} />
            );
            
        expect(wrapper.find(Select)).toHaveLength(1);
    });
});


